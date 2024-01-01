const { Builder, By, Key } = require("selenium-webdriver");

async function start() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");

    // Get window size
    // Mendapatkan ukuran jendela dan menyimpannya dalam variabel
    const { width, height } = await driver.manage().window().getRect();
    console.log("Ukuran Jendela Awal:", { width, height });

    // Set window size
    // Mengatur ukuran jendela menjadi 390x844
    await driver.manage().window().setRect({ width: 390, height: 844 });
    console.log("Ukuran Jendela Setelah Diatur:", { width: 390, height: 844 });

    // Get window position
    // Mendapatkan posisi jendela dan menyimpannya dalam variabel
    const { x, y } = await driver.manage().window().getRect();
    console.log("Posisi Jendela Awal:", { x, y });

    // Set window position
    // Memindahkan jendela ke pojok kiri atas monitor utama
    await driver.manage().window().setRect({ x: 0, y: 0 });
    console.log("Posisi Jendela Setelah Diatur:", { x: 0, y: 0 });

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
