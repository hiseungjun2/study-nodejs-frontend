const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless : false
  });
  const page = await browser.newPage();

  await page.setViewport({
      width : 1440,
      height : 900,
  });

  // 파라미터가 제대로 동작하지 않음
  await page.goto('https://brunch.co.kr/search?q=IT&type=article');
  
  // 페이지에서 Input 박스를 찾아서 클릭한 후
  await page.click("input.txt_search")
  // String 입력 뒤
  await page.keyboard.type('Hello World');
  // Enter 클릭하여 검색 실행
  await page.keyboard.press('Enter')
  // 페이지 기다림
  await page.waitForNavigation();

  // 1초마다 스크롤 진행
  let infiniteScrollInterval = setInterval(async () => {
    // 페이지 안에 접근하여 그 안에서 수행
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    })      
  }, 1000)

  // 10초 뒤 종료
  setTimeout(async () => {
      clearInterval(infiniteScrollInterval);
      console.log('Done!');
      await browser.close()
  }, 1000 * 10)

  // 검색 완료
  // 마우스 스크롤을 해서 밑으로 내린다.
  // 키보드 화살표 아래를 눌러서 화면을 아래로 내린다.
  // -> 무한 스크롤 게시글 데이터가 들어오지 않을까?

  // await page.screenshot({ path: 'brunch.png' });
  // await browser.close();
})();