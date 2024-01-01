const { Builder } = require("selenium-webdriver");

async function printPageExample() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");

    // Eksekusi script JavaScript untuk memicu pencetakan halaman
    await driver.executeScript("window.print();");

    // Menunggu selama 5 detik (hanya sebagai contoh)
    await driver.sleep(5000);
  } finally {
    // Menutup sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi printPageExample untuk menjalankan script
printPageExample();
