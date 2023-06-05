const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "goudanikunal3@gmail.com", // generated ethereal user
    pass: "mhetxyhenmiyqvdz", // generated ethereal password
  },
});

let sendEmail = (emailTemplate) => {
  transporter.sendMail(emailTemplate, (err, info) => {
    if (err) {
      console.log(err);
      console.log("Error occured: ", err.message);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

module.exports = { sendEmail };
