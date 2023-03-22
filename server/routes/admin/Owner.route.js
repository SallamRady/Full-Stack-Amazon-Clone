const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const ownerController = require("../../controllers/admin/Owner.controller");

// route : /admin/create/owner - create new Owner
router.post(
  "/create/owner",
  /* validate incomming data */
  check("name").notEmpty().withMessage("Name is required!"),
  check("about").notEmpty().withMessage("About is required!"),
  /*    handle request method   */
  ownerController.createOwner
);

// route : /admin/owners -  fetch Owners
router.get("/owners", ownerController.getOwners);

// route : /admin/edit/owner - edit existting Owner
router.put(
  "/edit/owner",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("id is required!"),
  check("name").notEmpty().withMessage("Name is required!"),
  check("about").notEmpty().withMessage("About is required!"),
  /*    handle request method   */
  ownerController.updateOwner
);

// route : /admin/delete/owner - delete Owner
router.delete(
  "/delete/owner",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("id is required!"),
  /*    handle request method   */
  ownerController.deleteOwner
);

module.exports = router;
