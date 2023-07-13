const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'mail.google.com',
    port: 465,
    auth: {
        user: "email@example.com",
        pass: "YOUR_SECURE_PASSWORD"
    }
})

message = {
    from: "email@example.com",
    to: "reciever@example.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}

transporter.sendMail(message, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
})
