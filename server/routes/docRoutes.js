const express = require('express')
const multer = require("multer");
const { Accepted, Rejected } = require("../models/model");
const register = require("../models/registerModel")
const router = express.Router()
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.get("/api/collections", (req, res) => {
    register.find({})
        .then(collections => res.json(collections))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/api/submitAccepted", async (req, res) => {
    // console.log(req.body.aadhar.public_id)

    try {
        const document = new Accepted({
            name: req.body.name,
            aadhar: {
                public_id: req.body.aadhar.public_id,
                url: req.body.aadhar.url
            },
            allotment: {
                public_id: req.body.allotment.public_id,
                url: req.body.allotment.url
            },
            sundertaking: {
                public_id: req.body.sundertaking.public_id,
                url: req.body.sundertaking.public_id
            },
            pundertaking: {
                public_id: req.body.pundertaking.public_id,
                url: req.body.pundertaking.public_id
            },
        });
        console.log("Inside try")
        await document.save();
        res.send({ message: "Document accepted." });
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "An error occurred while submitting the document." });
    }
});

router.post("/api/submitRejected", upload.single("pdf"), async (req, res) => {

    try {
        const document = new Rejected({
            name: req.body.name,
            aadhar: {
                public_id: req.body.aadhar.public_id,
                url: req.body.aadhar.url
            },
            allotment: {
                public_id: req.body.allotment.public_id,
                url: req.body.allotment.url
            },
            sundertaking: {
                public_id: req.body.sundertaking.public_id,
                url: req.body.sundertaking.public_id
            },
            pundertaking: {
                public_id: req.body.pundertaking.public_id,
                url: req.body.pundertaking.public_id
            },
        });
        console.log("Inside try")
        await document.save();
        res.send({ message: "Document accepted." });
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "An error occurred while submitting the document." });
    }
});


module.exports = router 