const { Builder, By, Key, until } = require("selenium-webdriver");
const robot = require("@jitsi/robotjs");

async function fileUpload() {
  // Membuat instance WebDriver untuk browser Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Membuka tab pertama dan navigasi ke situs imacros
    // await driver.get("https://demo.imacros.net/Automate/FileUploadDemo");

    // Mengklik elemen pada halaman menggunakan XPath
    // await driver.findElement(By.xpath(`//*[@id="uploaded_file"]`)).sendKeys("C:\\Users\\acer\\Pictures\\regex.png");

    // Membuka tab pertama dan navigasi ke situs zippyshares
    await driver.get("https://zippyshares.net/");

    // Mengklik elemen pada halaman menggunakan XPath
    await driver.findElement(By.xpath(`//*[@class="alignnone wp-image-116 size-full"]`)).click();
    // Menggunakan robotjs untuk mengetikkan alamat file pada dialog unggah file
    await driver.sleep(1000);
    await robot.typeString("C:\\Users\\acer\\Pictures\\regex.png");
    await robot.keyTap("enter");
    await driver.sleep(1000);

    // Mengklik tombol unggah
    await driver.findElement(By.xpath(`//*[@class="upload-pic alignnone wp-image-130"]`)).click();

    // Menunggu hingga elemen yang diharapkan muncul menggunakan 'until'
    await driver.wait(until.elementsLocated(By.xpath(`//*[@id="urls"]/table/tbody/tr[1]/td[2]/input`)));

    // Mengambil nilai dari elemen yang berhasil diunggah
    let uploadedResults = await driver.findElement(By.xpath(`//*[@id="urls"]/table/tbody/tr[1]/td[2]/input`)).getAttribute("value");

    // Menampilkan hasil unggah
    console.log("Uploaded Result:", uploadedResults);

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

// Memanggil fungsi fileUpload untuk menjalankan script
fileUpload();
