const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 587,
    auth: {
        user: "phpitladiplomado@gmail.com", //dejé las credenciales que ví de usted por default, para que usted ponga la cuenta personalizable a su favor.
        pass: "nvgjfkufzmzwxfzr",
    },
    tls: {
        rejectUnauthorized: false,
    }
});

module.exports = transporter;