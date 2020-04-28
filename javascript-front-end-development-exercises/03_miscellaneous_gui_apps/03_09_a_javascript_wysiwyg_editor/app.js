$(function () {
  var App = {
    formattingOptions: [
      { 'option-name': 'bold', 'option-class': 'font', 'formatting-selector': 'b' },
      { 'option-name': 'italic', 'option-class': 'font', 'formatting-selector': 'i' },
      { 'option-name': 'underline', 'option-class': 'font', 'formatting-selector': 'u' },
      { 'option-name': 'strikeThrough', 'option-class': 'font', 'formatting-selector': 'strike' },
      { 'option-name': 'createLink', 'option-class': 'link', 'formatting-selector': 'a' },
      { 'option-name': 'unlink', 'option-class': 'link', 'formatting-selector': '' },
      { 'option-name': 'insertOrderedList', 'option-class': 'list', 'formatting-selector': 'ol' },
      { 'option-name': 'insertUnorderedList', 'option-class': 'list', 'formatting-selector': 'ul' },
      { 'option-name': 'justifyLeft', 'option-class': 'alignment', 'formatting-selector': '' },
      { 'option-name': 'justifyRight', 'option-class': 'alignment', 'formatting-selector': '' },
      { 'option-name': 'justifyCenter', 'option-class': 'alignment', 'formatting-selector': '' },
      { 'option-name': 'justifyFull', 'option-class': 'alignment', 'formatting-selector': '' },
    ],

    $formattingOptionsList: $('#formatting-options ul'),
    formattingOptionTemplate: Handlebars.compile($('#formatting-option').html()),
    
    init: function () {
      this.renderFormattingOptions();
      this.bindFormattingOptions();
      this.bindTextSelectionChange();
      this.initializeAlignment();
      this.focusOnEditor();
    },

    renderFormattingOptions: function () {
      this.formattingOptions.forEach(function (option) {
        this.$formattingOptionsList.append(this.formattingOptionTemplate(option));
      }, this);
    },

    bindFormattingOptions: function () {
      this.$formattingOptionsList.on('click', 'button', function (e) {
        var $thisOption = $(e.target);

        Object.keys(this.formattingOptionClassHandlers()).forEach(function (className) {
          if ($thisOption.hasClass(className)) {
            this.formattingOptionClassHandlers()[className].call(this, $thisOption);
          }
        }, this);

        this.focusOnEditor();
      }.bind(this));
    },

    formattingOptionClassHandlers: function () {
      return {
        font: this.updateFont,
        link: this.updateLink,
        list: this.updateList,
        alignment: this.updateAlignment,
      };
    },

    updateFont: function ($fontOption) {
      $fontOption.toggleClass('active');

      document.execCommand($fontOption.attr('id'));
    },

    updateLink: function ($linkOption) {
      var href;
      var $selectionContainer;

      switch ($linkOption.attr('id')) {
        case 'createLink':
          if (getSelection().toString().length > 0) {
            href = prompt('Enter the URL to link to');
            document.execCommand('createLink', true, href);
          }

          break;
        case 'unlink':
          $selectionContainer = this.$getSelectionContainer();
          $selectionContainer.closest('a').replaceWith($selectionContainer.text());
          break;
      }

      $(document).trigger('selectionchange');
    },

    updateList: function ($listOption) {
      $listOption.toggleClass('active');

      if ($listOption.hasClass('active')) {
        $relatedOptions = $listOption.closest('ul').find('.list').not($listOption);
        $relatedOptions.removeClass('active');
      }

      document.execCommand($listOption.attr('id'));
    },

    updateAlignment: function ($alignmentOption) {
      if (!$alignmentOption.hasClass('active')) {
        $alignmentOption.toggleClass('active');

        $relatedOptions = $alignmentOption.closest('ul').find('.alignment').not($alignmentOption);
        $relatedOptions.toggleClass('active', !$alignmentOption.hasClass('active'));
      }

      document.execCommand($alignmentOption.attr('id'));
    },

    focusOnEditor: function () {
      $('#editor').trigger('focus');
    },

    bindTextSelectionChange: function () {
      $(document).on('selectionchange', function () {
        var $selectionContainer = this.$getSelectionContainer();

        this.updateActiveFontLinkListOptions($selectionContainer);
        this.updateActiveAlignmentOptions($selectionContainer);
      }.bind(this));
    },
    
    $getSelectionContainer: function () {
      return $(getSelection().getRangeAt(0).commonAncestorContainer);
    },

    updateActiveFontLinkListOptions: function ($selectionContainer) {
      var $closestElement = $selectionContainer.closest('*');
      var $ancestorElements = $closestElement.add($closestElement.parentsUntil('#editor'));
      var isInAnchor;
      var $createLinkOption = this.$formattingOptionsList.find('#createLink');
      var $unlinkOption = this.$formattingOptionsList.find('#unlink');

      this.formattingElementSelectors().forEach(function (selector) {
        var $formattingOption = this.$findFormattingOption(selector);
        var isActiveFormatInSelection = $ancestorElements.is(selector);

        $formattingOption.toggleClass('active', isActiveFormatInSelection);
      }, this);

      isInAnchor = $createLinkOption.hasClass('active');

      $createLinkOption.attr('disabled', isInAnchor);
      $unlinkOption.toggle(isInAnchor);
    },

    formattingElementSelectors: function () {
      return this.formattingOptions.map(function (option) {
        return option['formatting-selector'];
      }).filter(function (selector) {
        return selector.length > 0;
      });
    },

    $findFormattingOption: function (selector) {
      return this.$formattingOptionsList.find(`[data-formatting-selector="${selector}"]`);
    },

    updateActiveAlignmentOptions: function ($selectionContainer) {
      var $alignmentOptions = this.$formattingOptionsList.find('button.alignment');
      var textAlignValue = $selectionContainer.closest('*').css('text-align');

      $alignmentOptions.each(function (_, option) {
        var $option = $(option);

        if (new RegExp(`${textAlignValue}$`, 'i').test($option.attr('id'))) {
          $option.addClass('active');
        } else if (textAlignValue === 'justify' && $option.attr('id') === 'justifyFull') {
          $option.addClass('active');
        } else {
          $option.removeClass('active');
        }
      });
    },

    initializeAlignment: function () {
      this.$formattingOptionsList.find('#justifyLeft').trigger('click');
    },
  };

  App.init();
});
