const { Builder, By, Key } = require("selenium-webdriver");

async function start() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs Google
    await driver.get("https://www.google.com");
    // Mendapatkan ID handle/tab dari tab pertama
    const tab1 = await driver.getWindowHandle();

    // Membuka tab baru dan beralih ke tab baru tersebut
    await driver.switchTo().newWindow("tab");
    // Navigasi ke situs Facebook di tab baru
    await driver.get("https://www.facebook.com");
    // Mendapatkan ID handle/tab dari tab kedua
    const tab2 = await driver.getWindowHandle();

    // Beralih kembali ke tab pertama
    await driver.switchTo().window(tab1);

    // Melakukan pencarian di Google menggunakan field dengan nama "q"
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

    // Beralih ke tab kedua
    await driver.switchTo().window(tab2);

    // Menutup tab kedua
    await driver.close();

    // Menunggu selama 10 detik (hanya sebagai contoh)
    await driver.sleep(10000);
  } finally {
    // Menutup semua tab dan keluar dari sesi browser
    await driver.quit();
  }
}

// Memanggil fungsi start untuk menjalankan script
start();

// Menggunakan arrow function
// const start = async () => {
// //   // Membuat instance WebDriver untuk browser Chrome
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     // Membuka tab pertama dan navigasi ke situs Google
//     await driver.get("https://www.google.com");
//     // Mendapatkan ID handle/tab dari tab pertama
//     const tab1 = await driver.getWindowHandle();

//     // Membuka tab baru dan beralih ke tab baru tersebut
//     await driver.switchTo().newWindow("tab");
//     // Navigasi ke situs Facebook di tab baru
//     await driver.get("https://www.facebook.com");
//     // Mendapatkan ID handle/tab dari tab kedua
//     const tab2 = await driver.getWindowHandle();

//     // Beralih kembali ke tab pertama
//     await driver.switchTo().window(tab1);

//     // Melakukan pencarian di Google menggunakan field dengan nama "q"
//     await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

//     // Beralih ke tab kedua
//     await driver.switchTo().window(tab2);

//     // Menutup tab kedua
//     await driver.close();

//     // Menunggu selama 10 detik (hanya sebagai contoh)
//     await driver.sleep(10000);
//   } finally {
//     // Menutup semua tab dan keluar dari sesi browser
//     await driver.quit();
//   }
// };

// // Memanggil fungsi start untuk menjalankan script
// start();
