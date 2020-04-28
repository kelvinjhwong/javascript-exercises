$(function () {
  function renderLanguages() {
    languages.forEach(function (language) {
      var $language = $(languageTemplate(language));
      var $description = $language.find('p');
      var $showMore = $language.find('a');
  
      if ($description.text().length > 120) {
        truncateDescription($description);
      } else {
        $showMore.css('display', 'none');
      }
  
      $languagesList.append($language);
    });
  }

  function toggleTruncation(e) {
    e.preventDefault();

    $description = $(this).prev('p');
    $name = $(this).prevAll('h2');

    if ($(this).text() === 'Show Less') {
      truncateDescription($description);
      $(this).text('Show More');
    } else {
      showFullDescription($description, $name);
      $(this).text('Show Less');
    }
  }

  function showFullDescription($description, $name) {
    $description.text(languages.find(function (language) {
      return language.name === $name.text();
    }).description);
  }

  function truncateDescription($p) {
    $p.text(function (_, text) {
      return text.substring(0, 120) + ' ...';
    });
  }

  var languages = [
    {
      name: 'Ruby',
      description: 'Ruby is a dynamic, reflective, object-oriented, ' +
      'general-purpose programming language. It was designed and developed in the mid-1990s ' +
      'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
      'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
      'including functional, object-oriented, and imperative. It also has a dynamic type ' +
      'system and automatic memory management.'
    },
  
    {
      name: 'JavaScript',
      description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
      'programming language. It has been standardized in the ECMAScript language ' +
      'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
      'technologies of World Wide Web content production; the majority of websites employ ' +
      'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
      'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
      'supporting object-oriented, imperative, and functional programming styles.'
    },
  
    {
      name: 'Lisp',
      description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
      'with a long history and a distinctive, fully parenthesized prefix notation. ' +
      'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
      'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
      'since its early days, and many dialects have existed over its history. Today, the best '+
      'known general-purpose Lisp dialects are Common Lisp and Scheme.'
    },

    {
      name: 'Python',
      description: 'Python is an interpreted, high-level, general-purpose programming language.',
    },
  ];

  var $languagesList = $('ul');
  var languageTemplate = Handlebars.compile($('script[type="text/x-handlebars-template"]').html());

  renderLanguages();

  $languagesList.on('click', 'a', toggleTruncation);
});
