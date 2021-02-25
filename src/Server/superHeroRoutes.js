const Router = require('express')
const router = Router();
const Hero = require('../Models/superHero')

router.post('/add', async (req, res) => {
    try {
        const {realName, nickname, description, superPowers, catchPhrases, images} = req.body;
        const hero = new Hero({realName, nickname, description, superPowers, catchPhrases, images});

        await hero.save();

        res.status(201).json({message: 'Супергерой добавлен', hero})

    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})
router.post('/edit', async (req, res) => {
    try {
        const {realName, nickname, description, superPowers, catchPhrases, images} = req.body;
        const hero = await Hero.findOne({nickname});

        hero.realName = realName;
        hero.description = description;
        hero.superPowers = superPowers;
        hero.catchPhrases = catchPhrases;
        hero.images = images;

        await hero.save();

        res.status(201).json({message: 'Супергерой изменен', hero})

    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})
router.post('/delete', async (req, res) => {
    try {
        const {nickname} = req.body;
        await Hero.deleteOne({nickname});

        res.status(201).json({message: 'Супергерой удален'})

    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})
router.post('/get', async (req, res) => {
    try {
        const {page} = req.body;
        let heroes = await Hero.find({});
        const count = await Hero.countDocuments({});

        heroes = heroes.filter((_, index) => index < page * 5 && index >= (page - 1) * 5)

        res.status(201).json({message: 'Супергерои переданы', heroes, count})
    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})
router.post('/find', async (req, res) => {
    try {
        const hero = await Hero.findOne({_id: req.body.id});

        res.status(201).json({message: 'Супергерой передан', hero})
    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})
router.post('/photo/delete', async (req, res) => {
    try {
        const {id, index} = req.body;
        let hero = await Hero.findOne({_id: id});

        hero.images = hero.images.filter((img, ind) => index !== ind)

        await hero.save();

        res.status(201).json({message: 'Фото удалено'})
    } catch (e) {
        res.status(500).json({message: `Something went wrong': ${e}`})
    }
})

module.exports = router;