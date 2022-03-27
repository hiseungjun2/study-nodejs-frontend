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
    const html = await page.content();
    const $ = cheerio.load(html);

    let hrefArray = [];
    $('ul.list_tistory > li > a').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).find('.inner_desc_tit').text();
        hrefArray.push({
            href,
            title
        });
    })

    console.log(hrefArray);

    // await page.screenshot({ path : 'example.png'});

    await browser.close();
})();
