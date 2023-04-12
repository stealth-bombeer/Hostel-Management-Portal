const express = require('express')
const multer = require("multer");
const { Accepted, Rejected } = require("../models/model");
const register = require("../models/registerModel")
const router = express.Router()
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
const upload = require("../models/feesAllotmentModel")


router.get("/collections", (req, res) => {
    register.find({})
        .then(collections => res.json(collections))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get("/get-pdfs", (req, res) => {
    upload.find({})
        .then(collections => res.json(collections))
        .catch(err => res.status(400).json("Error: " + err));
})

router.get("/collections/:id", (req, res) => {
    console.log(`id: ${req.body}`)
    register.find({})
        .then(collections => res.json(collections))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/submitAccepted", async (req, res) => {
    console.log(`body: ${req.body}`)

    try {
        const document = new Accepted({
            name: req.body.name,
            course: req.body.course,
            category: req.body.category,
            semester: req.body.semester,
            merit: req.body.merit,
            academicYear_institute: req.body.academicYear_institute,
            academicYear_hostel: req.body.academicYear_hostel,
            pname: req.body.pname,
            address: req.body.address,
            stu_Number: req.body.stu_Number,
            parent_Number: req.body.parent_Number,
            email: req.body.email,
            gname: req.body.gname,
            gaurdian_address: req.body.gaurdian_address,
            gaurdian_Number: req.body.gaurdian_Number,
            gender: req.body.gender,
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


router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedDoc = await register.findByIdAndDelete(req.params.id);
        if (!deletedDoc) {
            return res.status(404).json({ error: 'Document not found' });
        }
        res.status(200).json({ message: 'Document deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the document' });
    }
});


router.post("/submitRejected", async (req, res) => {

    try {
        const document = new Rejected({
            name: req.body.name,
            course: req.body.course,
            category: req.body.category,
            semester: req.body.semester,
            merit: req.body.merit,
            academicYear_institute: req.body.academicYear_institute,
            academicYear_hostel: req.body.academicYear_hostel,
            pname: req.body.pname,
            address: req.body.address,
            stu_Number: req.body.stu_Number,
            parent_Number: req.body.parent_Number,
            email: req.body.email,
            gname: req.body.gname,
            gaurdian_address: req.body.gaurdian_address,
            gaurdian_Number: req.body.gaurdian_Number,
            gender: req.body.gender,
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
            message: req.body.message
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