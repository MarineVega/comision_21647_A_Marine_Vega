//falta gitignore???
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const postModelo = require('./postModelo.js')
const helmet =require('helmet');
const { DATE } = require('sequelize');

const app = express();

//Middlewares
app.use(helmet({ contentSecurityPolicy: false }))
// Para usar el servido con express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//uso la variable entorno puerto (definida en el archivo .env)
const puerto = process.env.puerto;

// Configuro EJS como motor de plantilla
app.set('view engine','ejs');

//Middlewares
//Morgan -> registra las requests (HTTP) junto con otra información
app.use(morgan('combined'));

app.use(cors());

app.get('/', async function(req, res){              // '/' -> ruta principal del proyecto
    //Uso la vista ejs
    const posts = await postModelo.findAll();

    res.render('inicio', {posts: posts})
});

app.get('/agregar', async function(req, res){
    res.render('agregar')
});


app.post('/agregar', async function (req, res) {
    const { titulo, post, link } = req.body

    try {
        const nuevoPost = await postModelo.create({
            sTitulo: titulo,
            sPost: post,            
            sLink: link
        });

        if (nuevoPost) {
            res.redirect('/');
        } else {
            res.send('No se pudo guardar el postep')
        }
    } catch (err) {
        res.send('Se produjo un errror al cargar el posteo: ' + err)
    }
})

app.get('/modificar/:id', async function (req, res) {
    const { id } = req.params;

    try {
        const post = await postModelo.findOne({
            where: {
                id: id
            }
        })

        if (post) {
            res.render('modificar', { post: post });
        } else {
            res.send('No se pudo encontrar el posteo')
        }
    } catch (err) {
        res.send('Hubo un error al buscar el posteo: ' + err)
    }
})

app.post('/modificar/:id', async function (req, res) {
    const { id } = req.params;
    const { titulo, post, link} = req.body

    try {
        const modifPost = await postModelo.update(
            {
                sTitulo: titulo,
                sPost: post,
                sLink: link                
            }, {
                where: {
                    id: id
                }
            }
        )

        if (modifPost) {
            res.redirect('/');
        } else {
            res.send('No se pudo modificar el posteo')
        }
    } catch (err) {
        res.send('Hubo un error al modificar el posteo: ' + err)
    }
})

app.get('/eliminar/:id', async function (req, res) {
    const { id } = req.params;

    try {
        const borrarPost = await postModelo.destroy({
            where: {
                id: id
            }
        })

        if (borrarPost) {
            res.redirect('/');
        } else {
            res.send('No se pudo borrar el posteo')
        }
    } catch (err) {
        res.send('Hubo un error al borrar el posteo: ' + err)
    }
})

//Levanto el servidor
app.listen(puerto,() => {
    console.log('Servidor corriendo en el puerto ' + puerto)
});