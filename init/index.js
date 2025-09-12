const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("error occured : ", err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68c30d4671d676a91347b36e",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialize");
};

initDB();
