const mongoose = require("mongoose");
const { Schema } = mongoose;

const RejectedSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    aadhar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    allotment: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    sundertaking: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    pundertaking: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
});

const AcceptedSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        aadhar: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        allotment: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        sundertaking: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        pundertaking: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    }
)

const Accepted = mongoose.model("Accpeted", AcceptedSchema);
const Rejected = mongoose.model("Rejected", RejectedSchema)

module.exports = { Accepted, Rejected };
