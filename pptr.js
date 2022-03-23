const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

// 즉시 실행 함수 IIFE
(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.setViewport({
        width : 1440,
        height : 1080
    })

    await page.goto('https://www.tistory.com/category/life');
    const html = await page.content()
    const $ = cheerio.load(html)

    const article = $('ul.list_tistory > li > a').each()

    console.log(article)

    // await page.screenshot({ path : 'example.png'});

    // await browser.close();
})();
