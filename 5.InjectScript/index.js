const { Builder, By, Key } = require("selenium-webdriver");

async function injectScript() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Tokopedia
    await driver.get("https://www.tokopedia.com");

    // Menggunakan XPath untuk menemukan elemen input dan melakukan pencarian dengan kata kunci "Monitor"
    await driver.findElement(By.xpath(`//input[@data-unify="Search"]`)).sendKeys("Monitor", Key.RETURN);

    // Menunggu selama 3 detik untuk memastikan hasil pencarian telah dimuat
    await driver.sleep(3000);

    // Menggunakan JavaScript untuk menghitung total elemen yang memiliki class "css-105v0tq"
    let getVolume = await driver.executeScript(`return document.querySelectorAll('div[class="css-105v0tq"]').length`);
    console.log("Total Data:", getVolume);

    // Array untuk menyimpan judul produk
    let products = [];

    // Mengambil judul produk dari setiap elemen menggunakan XPath dan loop
    for (let i = 1; i <= getVolume; i++) {
      let titleProductName = await driver.findElement(By.xpath(`(//div[@data-testid="master-product-card"])[${i}]/div/div/div[2]/a`)).getAttribute("title");
      products.push(titleProductName);
    }

    // Menampilkan judul produk di konsol
    console.log("Title Product:", products);

    // Menunggu selama 5 detik
    await driver.sleep(5000);
  } catch (error) {
    // Menangkap kesalahan dan menampilkan pesan kesalahan
    console.error("Error:", error.message);
  } finally {
    // Menutup sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi injectScript untuk menjalankan script
injectScript();
