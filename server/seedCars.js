var mongoose = require("mongoose");

var MONGO_URL = "mongodb://127.0.0.1:27017/car-rental";

var carsSchema = new mongoose.Schema({
  name: String,
  type: String,
  passengers: Number,
  price: Number,
  luggage: Number,
  isAuto: Boolean,
  ACsup: Boolean,
  pickupLoc: String,
  insurance: Number,
  imageName: String,
  isavailable: Boolean
});

var Cars = mongoose.model("Cars", carsSchema);

var cars = [
  {
    name: "Toyota Corolla",
    type: "Sedan",
    passengers: 5,
    price: 120,
    luggage: 3,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Dallas Love Field",
    insurance: 20,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    name: "Honda Civic",
    type: "Sedan",
    passengers: 5,
    price: 110,
    luggage: 3,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Dallas Love Field",
    insurance: 18,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    name: "Chevrolet Tahoe",
    type: "SUV",
    passengers: 7,
    price: 180,
    luggage: 5,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Dallas Love Field",
    insurance: 30,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    name: "Ford Mustang",
    type: "Sport",
    passengers: 4,
    price: 250,
    luggage: 2,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Dallas Love Field",
    insurance: 40,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: true
  },
  {
    name: "Jeep Wrangler",
    type: "SUV",
    passengers: 5,
    price: 200,
    luggage: 4,
    isAuto: true,
    ACsup: true,
    pickupLoc: "Austin Airport",
    insurance: 35,
    imageName: "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg",
    isavailable: false
  }
];

mongoose.connect(MONGO_URL);

mongoose.connection.once("open", function () {
  console.log("MongoDB connected");

  Cars.deleteMany({})
    .then(function () {
      return Cars.insertMany(cars);
    })
    .then(function () {
      console.log("Cars inserted successfully");
      console.log(cars.length + " cars added");
      mongoose.connection.close();
    })
    .catch(function (err) {
      console.log("Error inserting cars");
      console.log(err);
      mongoose.connection.close();
    });
});