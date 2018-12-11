const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`)
        .then(resp => {
            res.send(resp.data.data);

        }).catch(err => {
            console.log(err);
            res.sendStatus(500);

        })
})

module.exports = router;