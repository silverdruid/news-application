const express = require('express')
const axios = require('axios')
const newsRouter = express.Router()
const moment = require('moment')
const math = require('math')


newsRouter.get('/', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey={fb1415f3376b4c0d883f7170ec42ec45}';

        const news_get = await axios.get(url)
        res.render('news', { articles: news_get.data.articles })




    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

newsRouter.post('/search', async (req, res) => {
    const search = req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey={fb1415f3376b4c0d883f7170ec42ec45}`

        const news_get = await axios.get(url)
        res.render('news', { articles: news_get.data.articles })


    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})


module.exports = newsRouter
