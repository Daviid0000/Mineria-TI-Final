// const nodemailer = require('nodemailer');
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;

//     // Configuración del transportador de Nodemailer
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'tuemail@gmail.com',
//             pass: 'tucontraseña'
//         }
//     });

//     // Configuración del correo electrónico
//     let mailOptions = {
//         from: 'tuemail@gmail.com',
//         to: 'info@comidasaludable.com',
//         subject: 'Nuevo mensaje de contacto',
//         text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
//     };

//     // Enviar el correo
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email enviado: ' + info.response);
//     });
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos estáticos desde la carpeta 'public'

app.post('/track-time', (req, res) => {
    const { timeSpent, articleId } = req.body;
    console.log(`El usuario pasó ${timeSpent} segundos en el artículo ${articleId}`);
    
    // Aquí puedes almacenar el tiempo en una base de datos o procesarlo según tus necesidades
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
