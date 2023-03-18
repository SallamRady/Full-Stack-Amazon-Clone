const express = require("express");
const router = express.Router();
const ownerController = require("../../controllers/admin/Owner.controller");

// route : /admin/create/owner - create new Owner
router.post("/create/owner", ownerController.createOwner);

// route : /admin/owners -  fetch Owners
router.get("/owners", ownerController.getOwners);

// route : /admin/edit/owner - edit existting Owner
router.put("/edit/owner", ownerController.updateOwner);

// route : /admin/delete/owner - delete Owner
router.delete("/delete/owner", ownerController.deleteOwner);

module.exports = router;
