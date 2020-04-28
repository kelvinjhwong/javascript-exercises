document.addEventListener('DOMContentLoaded', function () {
  var classification = document.querySelector('#animal-classifications');
  var classificationOptions =
    Array.prototype.slice.call(classification.options);
  var [_classifications, vertebrate, warmBlooded, coldBlooded, mammal, bird] =
    classificationOptions;

  var animal = document.querySelector('#animals');
  var animalOptions = Array.prototype.slice.call(animal.options);
  var [_animals, bear, turtle, whale, salmon, ostrich] = animalOptions;

  var clear = document.querySelector('#clear');

  var classificationsAnimals = [
    [vertebrate, bear],
    [vertebrate, turtle],
    [vertebrate, whale],
    [vertebrate, salmon],
    [vertebrate, ostrich],
    [warmBlooded, bear],
    [warmBlooded, whale],
    [warmBlooded, ostrich],
    [coldBlooded, salmon],
    [coldBlooded, turtle],
    [mammal, bear],
    [mammal, whale],
    [bird, ostrich],
  ];

  classification.addEventListener('change', function () {
    var selectedClassification = classification.selectedOptions[0];
    animalOptions.forEach(function (animalOption) {
      if (classificationsAnimals.some(function (pair) {
        return pair[0] === selectedClassification
               && pair[1] === animalOption;
      })) {
        animalOption.style.display = 'block';
      } else {
        animalOption.style.display = 'none';
      }
    });
  });

  animal.addEventListener('change', function () {
    var selectedAnimal = animal.selectedOptions[0];
    classificationOptions.forEach(function (classificationOption) {
      if (classificationsAnimals.some(function (pair) {
        return pair[0] === classificationOption
               && pair[1] === selectedAnimal;
      })) {
        classificationOption.style.display = 'block';
      } else {
        classificationOption.style.display = 'none';
      }
    });
  });

  clear.addEventListener('click', function (e) {
    e.preventDefault();
    classification.selectedIndex = 0;
    animal.selectedIndex = 0;
    
    classificationOptions.forEach(function (classificationOption) {
      classificationOption.style.display = 'block';
    });

    animalOptions.forEach(function (animalOption) {
      animalOption.style.display = 'block';
    });
  });
});
