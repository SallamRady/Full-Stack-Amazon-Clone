const Owner = require("../../models/Owner.model");
const deleteFile = require("../../utils/image.cleaner");
const path = require("path");
const validationResult = require("express-validator").validationResult;

/**
 * title:createOwner
 * description:[C]RUD-Create Owner
 * Method:POST
 */
module.exports.createOwner = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    //data is valid.
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    if (req.file) owner.photo = req.file.path;

    owner
      .save()
      .then((_owner) => {
        let response = {
          status: "Success",
          msg: "new Owner created successfully.",
          owner: _owner,
        };
        res.status(201).json(response);
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        res.status(500).json(response);
      });
  }
};

/**
 * title:getOwners
 * description:C[R]UD-fetch Owners
 * Method:GET
 */
module.exports.getOwners = (req, res, next) => {
  Owner.find()
    .then((owners) => {
      let response = {
        status: "Success",
        msg: "Owners fetched successfully.",
        owners: owners,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};

/**
 * title:editOwner
 * description:CR[U]D-Edit Owner
 * Method:PUT
 */
module.exports.updateOwner = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    //data is valid.
    let { id } = req.body;
    Owner.findById(id)
      .then((owner) => {
        owner.name = req.body.name;
        owner.about = req.body.about;

        if (req.file) {
          if (owner.photo) {
            deleteFile(path.join(__dirname, "..", "..", owner.photo));
          }
          owner.photo = req.file.path;
        }

        owner.save().then((_owner) => {
          let response = {
            status: "Success",
            msg: "Owner updated successfully.",
            owner: _owner,
          };
          res.status(201).json(response);
        });
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        res.status(500).json(response);
      });
  }
};

/**
 * title:deleteOwner
 * description:CRU[D]-Delete Owner
 * Method:DELETE
 */
module.exports.deleteOwner = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    //data is valid.
    let { id } = req.body;
    Owner.findByIdAndRemove(id)
      .then((_owner) => {
        let response = {
          status: "Success",
          msg: "Owner deleted successfully.",
          owner: _owner,
        };
        res.status(200).json(response);
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        res.status(500).json(response);
      });
  }
};
