const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "jiyembayeeev@gmail.com",
        pass: "cqaujmajzbvsvdfb"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "jiyembayeeev@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

app.post("/quiz", (req, res) => {
    const { favoriteLanguage, experience, workingStyle } = req.body;

    const mail = {
        from: "Quiz App <your-email@gmail.com>",
        to: "jiyembayeeev@gmail.com",
        subject: "New Quiz Submission",
        html: `
      <h3>New Quiz Submission</h3>
      <p><strong>Favorite Language:</strong> ${favoriteLanguage}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Working Style:</strong> ${workingStyle}</p>
    `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ message: "Error sending email", error });
        } else {
            res.status(200).json({ message: "Quiz submitted successfully" });
        }
    });
});

app.listen(5001, () => console.log("Server Running"));