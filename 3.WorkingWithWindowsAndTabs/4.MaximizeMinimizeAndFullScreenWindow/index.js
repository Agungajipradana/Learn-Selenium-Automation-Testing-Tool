const { Builder, By, Key } = require("selenium-webdriver");

async function start() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");

    // Maximize window
    // Memaksimalkan ukuran jendela browser untuk tampilan optimal
    await driver.manage().window().maximize();

    // Minimize window
    // Mereduksi ukuran jendela browser ke ukuran minimum
    // await driver.manage().window().minimize();

    // Fullscreen window
    // Mengubah jendela browser menjadi mode layar penuh
    // Catatan: Fungsi ini mungkin tidak didukung oleh semua browser
    // await driver.manage().window().fullscreen();

    // Melakukan pencarian di Google menggunakan field dengan nama "q"
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

    // Menunggu selama 10 detik (hanya sebagai contoh)
    await driver.sleep(10000);
  } finally {
    // Menutup semua tab dan keluar dari sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi start untuk menjalankan script
start();
