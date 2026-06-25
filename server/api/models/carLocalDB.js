var fs = require("fs");
var path = require("path");

var DB_FILE = path.join(__dirname, "cars.database.json");

var initialCars = [
  {
    _id: "1",
    name: "Toyota Corolla",
    type: "Sedan",
    passengers: 5,
    price: 120,
    luggage: 3,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Brasil",
    insurance: 20,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    _id: "2",
    name: "Honda Civic",
    type: "Sedan",
    passengers: 5,
    price: 110,
    luggage: 3,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Brasil",
    insurance: 18,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    _id: "3",
    name: "Chevrolet Tahoe",
    type: "SUV",
    passengers: 7,
    price: 180,
    luggage: 5,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Brasil",
    insurance: 30,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    _id: "4",
    name: "Jeep Wrangler",
    type: "SUV",
    passengers: 5,
    price: 200,
    luggage: 4,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Brasil",
    insurance: 35,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    _id: "5",
    name: "Ford Mustang",
    type: "Sport",
    passengers: 4,
    price: 250,
    luggage: 2,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Brasil",
    insurance: 40,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  }
];
function createDatabaseIfNotExists() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(initialCars, null, 2));
  }
}

function readCars() {
  createDatabaseIfNotExists();

  var data = fs.readFileSync(DB_FILE, "utf8");
  return JSON.parse(data);
}

function saveCars(cars) {
  fs.writeFileSync(DB_FILE, JSON.stringify(cars, null, 2));
}

function generateId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

function matchQuery(car, query) {
  if (!query) {
    return true;
  }

  var keys = Object.keys(query);

  if (keys.length === 0) {
    return true;
  }

  return keys.every(function (key) {
    return car[key] == query[key];
  });
}

function runCallback(promise, callback) {
  if (typeof callback === "function") {
    promise
      .then(function (result) {
        callback(null, result);
      })
      .catch(function (error) {
        callback(error);
      });
  }

  return promise;
}

var Cars = {};

Cars.find = function (query, callback) {
  if (typeof query === "function") {
    callback = query;
    query = {};
  }

  var promise = new Promise(function (resolve) {
    var cars = readCars();
    var result = cars.filter(function (car) {
      return matchQuery(car, query);
    });

    resolve(result);
  });

  return runCallback(promise, callback);
};

Cars.findById = function (id, callback) {
  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var car = cars.find(function (item) {
      return item._id == id;
    });

    resolve(car || null);
  });

  return runCallback(promise, callback);
};

Cars.findOne = function (query, callback) {
  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var car = cars.find(function (item) {
      return matchQuery(item, query);
    });

    resolve(car || null);
  });

  return runCallback(promise, callback);
};

Cars.create = function (data, callback) {
  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var newCar = {
      _id: generateId(),
      name: data.name,
      type: data.type,
      passengers: data.passengers,
      price: data.price,
      luggage: data.luggage,
      isAuto: data.isAuto,
      ACsup: data.ACsup,
      pickupLoc: data.pickupLoc,
      insurance: data.insurance,
      imageName: data.imageName,
      isavailable: data.isavailable
    };

    cars.push(newCar);
    saveCars(cars);

    resolve(newCar);
  });

  return runCallback(promise, callback);
};

Cars.findByIdAndUpdate = function (id, data, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }

  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var index = cars.findIndex(function (item) {
      return item._id == id;
    });

    if (index === -1) {
      resolve(null);
      return;
    }

    cars[index] = Object.assign({}, cars[index], data);
    cars[index]._id = id;

    saveCars(cars);

    resolve(cars[index]);
  });

  return runCallback(promise, callback);
};

Cars.findByIdAndRemove = function (id, callback) {
  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var car = cars.find(function (item) {
      return item._id == id;
    });

    var newCars = cars.filter(function (item) {
      return item._id != id;
    });

    saveCars(newCars);

    resolve(car || null);
  });

  return runCallback(promise, callback);
};

Cars.remove = function (query, callback) {
  var promise = new Promise(function (resolve) {
    var cars = readCars();

    var newCars = cars.filter(function (car) {
      return !matchQuery(car, query);
    });

    saveCars(newCars);

    resolve({
      deletedCount: cars.length - newCars.length
    });
  });

  return runCallback(promise, callback);
};

module.exports = Cars;