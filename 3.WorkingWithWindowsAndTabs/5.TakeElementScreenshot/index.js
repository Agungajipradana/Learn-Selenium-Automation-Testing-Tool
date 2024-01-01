const { Builder, By } = require("selenium-webdriver");

async function takeElementScreenshotExample() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Example
    await driver.get("https://www.example.com");

    // Mencari elemen dengan selector CSS "h1"
    let ele = await driver.findElement(By.css("h1"));

    // Mengambil tangkapan layar dari elemen dan menyimpannya dalam variabel
    const elementScreenshot = await ele.takeScreenshot(true);

    // Menyimpan tangkapan layar elemen ke file (opsional)
    require("fs").writeFileSync("elementScreenshot.png", elementScreenshot, "base64");
    console.log("Tangkapan Layar Elemen telah disimpan sebagai elementScreenshot.png");

    // Menunggu selama 10 detik (hanya sebagai contoh)
    await driver.sleep(10000);
  } finally {
    // Menutup sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi takeElementScreenshotExample untuk menjalankan script
takeElementScreenshotExample();
