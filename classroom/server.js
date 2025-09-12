const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(cookieParser("sercretCode"));

// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("made-in", "India", { signed: true });
//   res.send("signed cookie send");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi ${name}`);
// });

// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("hi i am root");
// });

// app.use("/users", users);
// app.use("/posts", posts);

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  res.locals.messages = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  // console.log(req.session.name);
  if (name === "anonymous") {
    req.flash("error", "error occured while registering user");
  } else {
    req.flash("success", "user registered Sucessfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.send(`hello ${req.session.name}`);
  // console.log(req.flash("success"));
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/test", (req, res) => {
//   res.send("test Successful!");
// });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

app.listen(3000, () => {
  console.log("Server is listening to 3000");
});
