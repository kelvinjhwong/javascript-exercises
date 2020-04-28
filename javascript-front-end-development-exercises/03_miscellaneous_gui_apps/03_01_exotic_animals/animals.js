$(function () {
  var animals = [
    {
      imageSrc: 'https://animalfactguide.com/wp-content/uploads/2013/08/quokka1.jpg',
      description: 'Quokka',
      caption: 'The quokka (Setonix brachyurus), the only member of the genus Setonix, is a small macropod about the size of a domestic cat. Like other marsupials in the macropod family (such as kangaroos and wallabies), the quokka is herbivorous and mainly nocturnal.',
    },

    {
      imageSrc: 'https://s3.amazonaws.com/petfinder-us-east-1-petimages-prod/organization-photos/34027/34027-1.jpg?bust=2017-06-14+19%3A07%3A31',
      description: 'Rabbit',
      caption: "Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit.",
    },

    {
      imageSrc: 'https://i.pinimg.com/736x/8b/91/5b/8b915b06d3319f5c38656ded5e7bb355--cute-baby-owl-baby-owls.jpg',
      description: 'Owl',
      caption: 'Owls are birds from the order Strigiformes, which includes about 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.',
    },

    {
      imageSrc: 'https://i2-prod.mirror.co.uk/incoming/article20090951.ece/ALTERNATES/s1200/0_I190918_132310_1594565oTextTRMRMMGLPICT000192907268o.jpg',
      description: 'Hedgehog',
      caption: 'A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, in the eulipotyphlan family Erinaceidae. There are seventeen species of hedgehog in five genera found through parts of Europe, Asia, and Africa, and in New Zealand by introduction.',
    },

    {
      imageSrc: 'https://thousandislands.co.uk/wp-content/uploads/2017/02/Manx-Shearwater-chick-on-Ramsey-Island-1.jpg',
      description: 'Manx Shearwater',
      caption: 'The Manx shearwater (Puffinus puffinus) is a medium-sized shearwater in the seabird family Procellariidae. The scientific name of this species records a name shift: Manx shearwaters were called Manks puffins in the 17th century.',
    },

    {
      imageSrc: 'https://www.chillavalleyalpacas.co.uk/wp-content/uploads/2018/12/Alpaca.jpg',
      description: 'Alpacas',
      caption: 'The alpaca (Vicugna pacos) is a species of South American camelid. It is similar to, and often confused with, the llama. However, alpacas are often noticeably smaller than llamas. The two animals are closely related and can successfully cross-breed.',
    },

    {
      imageSrc: 'https://i.dailymail.co.uk/1s/2019/10/31/16/20434226-7635765-Cutie_A_foster_kitten_called_Blossom_won_over_cat_lovers_on_the_-m-186_1572538112369.jpg',
      description: 'Cat',
      caption: 'The cat (Felis catus) is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat or a farm cat, which are pets, or a feral cat, which ranges freely and avoids human contact.',
    },
    
    {
      imageSrc: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
      description: 'Dog',
      caption: 'The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species) is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.',
    },
  ];

  var $ul = $('ul');
  var animalTemplate = Handlebars.compile($('#animal').html());

  animals.forEach(function (animal) {
    $ul.append(animalTemplate(animal));
  });

  $ul.on('mouseenter', 'img', function (e) {
    $(this).next('figcaption').delay(2000).fadeIn();
  }).on('mouseleave', 'img', function (e) {
    var $figcaption = $(this).next('figcaption');

    if ($figcaption.css('display') === 'none') {
      $figcaption.clearQueue();
    } else {
      $figcaption.fadeOut();
    }
  });
});
