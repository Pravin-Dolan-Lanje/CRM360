const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "uploads/profiles");

    },

    filename: function (req, file, cb) {

        cb(
            null,
            Date.now() +
            path.extname(file.originalname)
        );

    }

});

const upload = multer({

    storage,

    fileFilter: (req, file, cb) => {

        const types = /jpeg|jpg|png/;

        const ext = types.test(
            path.extname(file.originalname).toLowerCase()
        );

        const mime = types.test(file.mimetype);

        if (ext && mime) {

            cb(null, true);

        } else {

            cb(new Error("Only JPG and PNG images are allowed"));

        }

    }

});

module.exports = upload;