const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Membuat objek ChromeOptions untuk mengelola profil
var options = new chrome.Options();

// Menambahkan argumen untuk menunjukkan direktori data pengguna Chrome
options.addArguments("user-data-dir=C:\\Users\\admin\\AppData\\Local\\Google\\Chrome\\User Data");

// Menambahkan argumen untuk menunjukkan profil pengguna yang akan digunakan
options.addArguments("profile-directory=Profile 1");

async function controlProfile() {
  // Membuat instance WebDriver untuk browser Chrome tidak menggunakan profile
  //   let driver = await new Builder().forBrowser("chrome").build();

  // Membuat instance WebDriver untuk browser Chrome menggunakan profile
  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  try {
    // Menavigasi ke situs web yang dituju (YouTube Studio dalam contoh ini)
    await driver.get("https://studio.youtube.com");

    // Menunggu selama 10 detik
    await driver.sleep(10000);

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

// Memanggil fungsi controlProfile untuk menjalankan script
controlProfile();
