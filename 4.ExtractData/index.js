const { Builder, By, Key } = require("selenium-webdriver");

async function extractData() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs tokopedia
    await driver.get("https://www.tokopedia.com");

    // Menggunakan XPath untuk menemukan elemen input dan melakukan pencarian
    await driver.findElement(By.xpath(`//input[@data-unify="Search"]`)).sendKeys("Monitor", Key.RETURN);

    // getText()
    // await driver.sleep(2000);
    // let productName = await driver.findElement(By.xpath(`(//div[@data-testid="divProductWrapper"])[1]`)).getText();
    // console.log("Data:", productName);

    // getAttribute()
    // await driver.sleep(3000);
    // let titleProductName = await driver.findElement(By.xpath(`(//div[@data-testid="master-product-card"])[1]/div/div/div[2]/a`)).getAttribute("title");
    // console.log("Title:", titleProductName);
    // let imageProduct = await driver.findElement(By.xpath(`(//div[@data-testid="master-product-card"])[1]/div/div/div[1]/a/div/img`)).getAttribute("src");
    // console.log("Image:", imageProduct);

    // getCssValue()
    await driver.sleep(3000);
    let titleProductNameElement = await driver.findElement(By.xpath(`(//div[@data-testid="master-product-card"])[1]/div/div/div[2]/a`));
    let titleProductName = await titleProductNameElement.getAttribute("title");
    console.log("Title:", titleProductName);

    let fontSize = await titleProductNameElement.getCssValue("font-size");
    console.log("Font Size:", fontSize);

    // Menunggu selama 5 detik (hanya sebagai contoh)
    await driver.sleep(5000);
  } catch (error) {
    // Menangkap kesalahan dan menampilkan pesan kesalahan
    console.error("Error:", error.message);
  } finally {
    // Menutup sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi extractData untuk menjalankan script
extractData();
