const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl =
  "mongodb+srv://borde_prashant:test1234@cluster0.hj4bqle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
main()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("error occured : ", err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68cb619cea073e9556dbf671",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialize");
};

initDB();
