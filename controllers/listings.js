const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index = async (req, res) => {
//   let allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// };

module.exports.index = async (req, res) => {
  const category = req.query.category;
  let query = {};

  if (category) {
    query.category = category;
  }

  const allListings = await Listing.find(query);

  if (req.xhr) {
    // AJAX request → render only the partial
    return res.render("listings/_listingsPartial", { allListings });
  }

  // Normal request → render full page
  res.render("listings/index", { allListings });
};

module.exports.renderNewform = (req, res) => {
  console.log(req.user);
  res.render("listings/new");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you reqested for does not exist!");
    return res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;
  console.log(newListing);

  let SavedListing = await newListing.save();
  console.log(SavedListing);
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.rendereditform = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you reqested for does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  console.log(originalImageUrl);
  res.render("listings/edit", { listing, originalImageUrl });
};

// module.exports.updateListing = async (req, res) => {
//   let { id } = req.params;
//   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

//   if (typeof req.file !== "undefined") {
//     let url = req.file.path;
//     let filename = req.file.filename;
//     listing.image = { url, filename };
//     listing.geometry = response.body.features[0].geometry;

//     await listing.save();
//   }

//   req.flash("success", "Listing Updated");
//   res.redirect(`/listings/${id}`);
// };

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // Check if location changed BEFORE updating fields
  if (
    req.body.listing.location &&
    req.body.listing.location !== listing.location
  ) {
    const response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();
    listing.geometry = response.body.features[0].geometry;
  }

  // Now safely update the fields
  Object.assign(listing, req.body.listing);

  // Update image if uploaded
  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  // Save the updated listing
  await listing.save();

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
