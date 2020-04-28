$(function () {
  function compileTemplates() {
    $('[type="text/x-handlebars-template"]').each(function (_, templateScript) {
      var $templateScript = $(templateScript);
      templates[$templateScript.attr('id')] = Handlebars.compile($templateScript.html());
    });
  }

  function renderTodoItems() {
    $todosList.children().remove();

    todo_items.forEach(function (todo) {
      $todosList.append(templates['todo-item'](todo));
    });
  }

  function renderContextMenu() {
    contextMenuOptions.forEach(function (option) {
      var $option = $(templates['context-menu-option'](option));
      $option.on('click', option.handler);
      $contextMenu.append($option);
    });
  }

  function showContextMenu(e) {
    e.preventDefault();

    $contextMenu.hide();

    $contextMenu.css({
      left: e.clientX,
      top: e.clientY,
    });

    $contextMenu.attr('data-todo-id', $(e.target).data('id'));

    $(document).on('click.contextmenu', hideContextMenu);

    $contextMenu.fadeIn(300);
  }

  function hideContextMenu() {
    $contextMenu.fadeOut(300);
    $(document).off('click.contextmenu');
  }

  function promptDelete(e) {
    e.preventDefault();

    hideContextMenu();

    $('div').show();

    $('div#modal').attr('data-todo-id', $(e.target).parent('ul#context-menu').attr('data-todo-id'));
  }

  function doNothing(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function closeModals(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    $('div').hide();
  }

  function deleteTodo(e) {
    e.preventDefault();

    var todoId = Number($(e.target).closest('div#modal').attr('data-todo-id'));

    $todosList.find(`li[data-id="${todoId}"]`).remove();

    todo_items = todo_items.filter(function (todo) {
      return todo.id !== todoId;
    });

    closeModals();
    // renderTodoItems();
  }

  var templates = {};

  var todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  var $todosList = $('ul#todos-list');

  var contextMenuOptions = [
    {
      'option-id': 'edit-todo',
      'option-text': 'Edit Todo',
      'handler': doNothing,
    },

    {
      'option-id': 'show-details',
      'option-text': 'Show Details',
      'handler': doNothing,
    },

    {
      'option-id': 'delete-todo',
      'option-text': 'Delete',
      'handler': promptDelete,
    },
  ];

  var $contextMenu = $('ul#context-menu');
  
  compileTemplates();

  renderTodoItems();
  renderContextMenu();

  $todosList.on('contextmenu', 'li', showContextMenu);
  
  $('button#confirm-delete').on('click', deleteTodo);

  $('div#modal-background').on('click', closeModals);
  $('button#cancel-delete').on('click', closeModals);
});
