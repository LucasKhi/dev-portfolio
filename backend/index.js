const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const USERNAME = process.env.MAILTRAP_USER;
const TOKEN = process.env.MAILTRAP_PASS;


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: USERNAME,
        pass: TOKEN,
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contato de ${name} <${email}>`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Erro ao enviar e-mail:", error);
            return res.status(500).json({ success: false, message: "Erro ao enviar email" });
        } else {
            console.log('Email enviado:', info.response);
            res.status(200).send({ success: true, message: 'Email enviado com sucesso' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});