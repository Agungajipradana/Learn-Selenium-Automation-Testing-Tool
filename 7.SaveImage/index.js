const download = require("image-downloader");
const { Builder, By, Key, until } = require("selenium-webdriver");

// const options = {
//   url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
//   dest: "D:\\Learn-Selenium\\7.SaveImage\\download\\google.jpg", // will be saved to /path/to/dest/image.jpg
// };

// download
//   .image(options)
//   .then(({ filename }) => {
//     console.log("Saved to", filename); // saved to /path/to/dest/image.jpg
//   })
//   .catch((err) => console.error(err));

async function saveImage() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs tokopedia
    await driver.get("https://www.tokopedia.com/search?st=&q=monitor&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=");

    // Menggunakan JavaScript untuk menghitung total elemen yang memiliki class "css-105v0tq"
    let getNode = await driver.executeScript(`return document.querySelectorAll('div[data-testid="master-product-card"]').length`);
    console.log("Total Data:", getNode);

    // Mengambil judul produk dari setiap elemen menggunakan XPath dan loop
    for (let i = 1; i <= getNode; i++) {
      let imageUrl = await driver.findElement(By.xpath(`(//div[@data-testid="master-product-card"])[${i}]/div/div/div/a/div/img`)).getAttribute("src");

      // Menggunakan library 'image-downloader' untuk menyimpan gambar ke lokasi yang ditentukan
      download.image({
        url: `${imageUrl}`,
        dest: `D:\\Learn-Selenium\\7.SaveImage\\download\\${i}.jpg`,
      });
    }

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

// Memanggil fungsi saveImage untuk menjalankan script
saveImage();
