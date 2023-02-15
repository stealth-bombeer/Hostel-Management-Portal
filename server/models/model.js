const mongoose = require("mongoose");
const { Schema } = mongoose;

const RejectedSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    merit: {
        type: String,
        required: true,
    },
    academicYear_institute: {
        type: String,
        required: true,
    },

    academicYear_hostel: {
        type: String,
        required: true,
    },
    pname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    stu_Number: {
        type: String,
        required: true,
    },
    parent_Number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gname: {
        type: String,
        required: true,
    },
    gaurdian_address: {
        type: String,
        required: true,
    },
    gaurdian_Number: {
        type: String,
        required: true,
    },
    gender: {
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
    message: {
        type: String,
        required: true,
    },
});

const AcceptedSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        semester: {
            type: String,
            required: true,
        },
        merit: {
            type: String,
            required: true,
        },
        academicYear_institute: {
            type: String,
            required: true,
        },

        academicYear_hostel: {
            type: String,
            required: true,
        },
        pname: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        stu_Number: {
            type: String,
            required: true,
        },
        parent_Number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        gname: {
            type: String,
            required: true,
        },
        gaurdian_address: {
            type: String,
            required: true,
        },
        gaurdian_Number: {
            type: String,
            required: true,
        },
        gender: {
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
