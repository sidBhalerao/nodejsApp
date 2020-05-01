const router = require("express").Router();

const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  findAllUser,
  renderUserDetails
} = require("../controllers/users.controller");

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

router.post("/users/allUsers", findAllUser);

router.get("/users/:id", renderUserDetails);

module.exports = router;
