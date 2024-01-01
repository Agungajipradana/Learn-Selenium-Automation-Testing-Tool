const { Builder, By } = require("selenium-webdriver");

async function takeScreenshotExample() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");

    // Mengambil tangkapan layar dan menyimpannya dalam variabel
    const screenshot = await driver.takeScreenshot();

    // Menyimpan tangkapan layar ke file (opsional)
    require("fs").writeFileSync("screenshot.png", screenshot, "base64");
    console.log("Tangkapan Layar telah disimpan sebagai screenshot.png");

    // Menunggu selama 10 detik (hanya sebagai contoh)
    await driver.sleep(10000);
  } finally {
    // Menutup sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi takeScreenshotExample untuk menjalankan script
takeScreenshotExample();
