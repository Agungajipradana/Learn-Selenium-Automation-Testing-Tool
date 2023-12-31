const { Builder, By, Key } = require("selenium-webdriver");

async function start() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.tokopedia.com");
    // use By.id
    // await driver.findElement(By.id("header-main-wrapper")).sendKeys("Monitor", Key.RETURN);
    // use By.name
    // await driver.findElement(By.name("q")).sendKeys("Monitor", Key.RETURN);
    // use By.xpath
    // await driver.findElement(By.xpath(`//input[@data-unify="Search"]`)).sendKeys("Monitor", Key.RETURN);
    // use By.css
    await driver.findElement(By.css(".css-3017qm.exxxdg63")).sendKeys("Monitor", Key.RETURN);
    // use By.className
    // await driver.findElement(By.className("css-3017qm exxxdg63")).sendKeys("Monitor", Key.RETURN);

    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
}

start();
