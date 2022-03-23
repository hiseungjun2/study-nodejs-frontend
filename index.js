const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.tistory.com/category/life').then((response) => {
    const htmlString = response.data
    console.log(htmlString)
    // const $ = cheerio.load(htmlString)

    // const h1 = $('h1').text()
    // const href = $('a').attr('href')

    // console.log(h1)
    // console.log(href)
})