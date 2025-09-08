const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    hrrpOnly: true,
  },
};

app.get("/", (req, res) => {
  res.send("working");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // console.log(res.locals.success);
  next();
});

// app.get("/testlisting", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "calangute, Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sucessful testing");
// });

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// app.all("/{*any}", (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });

app.use((req, res, next) => {
  res.status(404).send("page not found ");
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
  //   res.send("something went wrong");
});

app.listen("8080", () => {
  console.log("Server is listning to 8080");
});
