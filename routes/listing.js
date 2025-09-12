const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router
  .route("/")
  //index route
  .get(wrapAsync(listingController.index))

  //create route
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
  );

//New route
router.get("/new", isLoggedIn, listingController.renderNewform);

router
  .route("/:id")
  // show route
  .get(wrapAsync(listingController.showListing))
  // update Route
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  //Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.rendereditform)
);

module.exports = router;
