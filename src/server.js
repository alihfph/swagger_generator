const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Strive Room Reservation',
      version: '1.0.0',
    },
  },
  apis: ["src/server.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

/**
 * @swagger
 * /rooms:
 *   get:
 *     description: Available room
 *     responses:
 *       200:
 *         description: available for booking
 * 
 */
app.get('/rooms', (req, res) => {
  res.status(200).send(50, "rooms are avaiable");
});

/**
 * @swagger
 * /rooms:
 *   post:
 *     description: reserv a room
 *     responses:
 *       200:
 *         description: reserved Successfully
 * 
 */

app.post('/rooms', (req, res) => {
  res.status(201).send(50, "rooms are avaiable");
});

/**
 * @swagger
 * /rooms:
 *   delete:
 *     description: Delete reservation
 *     responses:
 *       200:
 *         description: Deleted
 * 
 */

app.delete('/rooms', (req, res) => {
  res.status(201).send("room reservation has been cancelled");
});
/**
 * @swagger
 * /rooms:
 *   put:
 *     description: Get your booking
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.put('/rooms', (req, res) => {
  res.status(201).send("you have successfully update the informatinon");
});

app.listen(3000, () => console.log("listening on 3000"));