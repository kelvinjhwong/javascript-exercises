$(function () {
  function compileTemplates() {
    var $templateScripts = $('[type="text/x-handlebars-template"]');

    $templateScripts.each(function (_, templateScript) {
      var $templateScript = $(templateScript);
      templates[$templateScript.attr('id')] =
        Handlebars.compile($templateScript.html());
    });
  }

  function renderCars(cars) {
    $cars.children().remove();

    cars.forEach(function (car) {
      $cars.append(templates['car'](car));
    });
  }

  function updateFilters(filteredCars) {
    filteredCars.forEach(function (car) {
      Object.keys(car).forEach(function (propertyName) {
        var propertyFilter = filters[propertyName];
        var propertyValue = car[propertyName];

        if (propertyName !== 'image') {
          if (propertyFilter.find(function (filterOption) {
            return filterOption.value === propertyValue;
          }) === undefined) {
            propertyFilter.push({
              text: propertyValue,
              value: propertyValue,
            });
          }
        }
      });
    });
  }

  function renderFilters() {
    Object.keys(filters).forEach(function (propertyName) {
      var $filterSelect = $(`#${propertyName}-options`);

      filters[propertyName].forEach(function (filterOption) {
        $filterSelect.append(templates['filter-option'](filterOption));
      });
    });
  }

  function filterCars(e) {
    e.preventDefault();

    var $form = $(e.target.closest('form'));
    var selectedFilters = {};
    
    $form.serializeArray().forEach(function (pair) {
      var [propertyName, propertyValue] = [pair.name, pair.value];

      if (propertyValue === '') {
        return;
      } else if (propertyName === 'price' || propertyName === 'year') {
        selectedFilters[propertyName] = Number(propertyValue);
      } else {
        selectedFilters[propertyName] = propertyValue;
      }
    });

    filteredCars = allCars.filter(function (car) {
      return Object.keys(selectedFilters).every(function (propertyName) {
        return selectedFilters[propertyName] === car[propertyName];
      });
    });

    renderCars(filteredCars);
  }

  var allCars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  var filteredCars;

  var templates = {};

  var $cars = $('#cars');

  var filters = {
    make: [ { text: 'All', value: '' } ],
    model: [ { text: 'All', value: '' } ],
    year: [ { text: 'Any', value: '' } ],
    price: [ { text: 'Any', value: '' } ],
  };

  compileTemplates();
  
  renderCars(allCars);

  updateFilters(allCars);
  renderFilters();

  $('input[type="submit"]').on('click', filterCars);
});
