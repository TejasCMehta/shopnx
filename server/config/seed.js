/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Setting = require('../api/setting/setting.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');

Setting.find(function (err, data) {
  if(data.length < 1){
    Setting.create({
      paypal : '2lessons@gmail.com'
    });
  }
});

Thing.find(function (err, data) {
  if(data.length < 1){
    Thing.create({
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
  }
});

User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
        console.log('finished populating users');
    });
  }
});

Product.find(function (err, data) {
  if(data.length < 1){
    Product.create({
    "_id" : "5607a6af0dc20f1b0366522a",
    "name" : "ArrowGrey Slim Fit Formal Trouser",
    "info" : "Complete your formal attire by wearing these grey coloured formal trousers from Arrow. Made from poly viscose, these trousers can be worn with complete ease and comfort. Featuring a smooth finish and flat front, these trousers with cross pockets at the sides can be clubbed with a modish formal shirt for a perfect look. ",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "alleviater",
        "info" : "Alleviater",
        "name" : "Alleviater",
        "_id" : "5607c5c1dddfb6780c5bddf8"
    },
    "nameLower" : "arrowgrey slim fit formal trouser",
    "active" : true,
    "sku" : 5,
    "type" : "Men",
    "slug" : "arrowgrey-slim-fit-formal-trouser",
    "variants" : [
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "30",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "32",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "34",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "36",
            "image" : "handsome-916499_640.jpg"
        },
        {
            "mrp" : 1699.0000000000000000,
            "price" : 1699.0000000000000000,
            "size" : "38",
            "image" : "handsome-916499_640.jpg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Fabric",
            "val" : "Blended"
        },
        {
            "key" : "Fit",
            "val" : "Slim"
        },
        {
            "key" : "Color",
            "val" : "Grey"
        },
        {
            "key" : "Style",
            "val" : "Solid"
        },
        {
            "key" : "Model Stats",
            "val" : "This model has height 6'4\",Chest 38\",Waist 31\"and is Wearing Size 32."
        }
    ],
    "category" : {
        "active" : true,
        "slug" : "casual-trousers",
        "__v" : 0,
        "parentCategory" : 1,
        "category" : 100,
        "name" : "Casual Trousers",
        "_id" : "560774dad4124c770bfc4b68"
    },
    "__v" : 0
}, function() {
        console.log('finished populating products');
    });
  }
});

Category.find(function (err, data) {
  if(data.length < 1){
    Category.create({
    "_id" : "560773abd4124c770bfc4b57",
    "name" : "Men",
    "category" : 2,
    "parentCategory" : 0,
    "active" : true,
    "__v" : 0,
    "slug" : "men"
  },{
      "_id" : "560773b6d4124c770bfc4b58",
      "name" : "Women",
      "category" : 1,
      "parentCategory" : 0,
      "active" : true,
      "__v" : 0,
      "slug" : "women"
  },{
      "_id" : "560773d2d4124c770bfc4b59",
      "name" : "Dresses",
      "category" : 100,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "dresses"
  },{
      "_id" : "560774dad4124c770bfc4b68",
      "name" : "Casual Trousers",
      "category" : 209,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "casual-trousers"
  }, function() {
        console.log('finished populating categories');
    });
  }
});

Brand.find(function (err, data) {
  if(data.length < 1){
    Brand.create({
    "_id" : "5607c58bdddfb6780c5bddf3",
    "name" : "Estelle",
    "info" : "Estelle",
    "slug" : "estelle",
    "active" : true,
    "__v" : 0
}, {
    "_id" : "5607c599dddfb6780c5bddf4",
    "name" : "FREECULTR",
    "info" : "FREECULTR",
    "slug" : "freecultr",
    "active" : true,
    "__v" : 0
},{
    "active" : true,
    "__v" : 0,
    "slug" : "alleviater",
    "info" : "Alleviater",
    "name" : "Alleviater",
    "_id" : "5607c5c1dddfb6780c5bddf8"
}, function() {
        console.log('finished populating brands');
    });
  }
});
