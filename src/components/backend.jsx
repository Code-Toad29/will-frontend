// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// app.use(express.json());

// app.post('/api/contact', (req, res) => {
//     const { name, email, message, agentId } = req.body;

//     // Set up nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail', // Example with Gmail
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-email-password',
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: 'agent@example.com', // You might want to find the agent's email by agentId
//         subject: `New message from ${name}`,
//         text: message,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Message sent');
//     });
// });

// app.listen(3000, () => console.log('Server is running on port 3000'));