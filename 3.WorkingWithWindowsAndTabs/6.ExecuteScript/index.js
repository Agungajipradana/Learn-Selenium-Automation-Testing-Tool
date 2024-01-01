const { Builder, By } = require("selenium-webdriver");

async function executeScriptExample() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");

    // Eksekusi script JavaScript langsung pada halaman web untuk mendapatkan judul
    // const title = await driver.executeScript("return document.title");
    // console.log("Judul Halaman:", title);

    // Mencari elemen header menggunakan selector className
    let header = await driver.findElement(By.className("LX3sZb"));
    console.log("Elemen Header:", header);

    // Eksekusi script JavaScript untuk mendapatkan teks innerText dari elemen header
    let text = await driver.executeScript("return arguments[0].innerText", header);
    console.log("Teks Header:", text);

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

// Memanggil fungsi executeScriptExample untuk menjalankan script
executeScriptExample();
