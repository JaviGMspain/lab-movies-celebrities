const router = require("express").Router();
const Celebrity = require("../models/celebritie.model");

router.get("/", (req, res) => {
    Celebrity.find().then((data) => {
        res.render("celebrities", {celebryties: data});
    });
});

router.get(`/create`, (req, res) => {
    res.render(`celebrities/new-celebrity`);
});

router.post(`create`, (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect(`/celebrities`))
});



module.exports = router;
