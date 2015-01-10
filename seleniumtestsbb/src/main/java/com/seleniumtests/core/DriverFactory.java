package com.seleniumtests.core;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Listeners;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import com.seleniumtests.utility.Log;

public class DriverFactory {
	
	protected WebDriver driver;
	protected String appURL;
	
	//protected static final Logger log = Logger.getLogger(Log4JSettings.class);
	
	@BeforeMethod()
	@Parameters("appURL")
	public void setEnv(@Optional("https://tbbqabeta.productpartners.com") String appURL) {
		//Log.info("********************TEST CASE STARTED*******************");
		this.appURL = appURL;
	}

	@BeforeMethod()
	@Parameters({"browser","port"})
	public void launchBrowser(@Optional("FF") String browser,@Optional("4444") String port) throws MalformedURLException{
			if (browser.equalsIgnoreCase("Chrome")) {
				final File file = new File("src/test/resources/drivers/chromeDriver/chromedriver.exe");
				System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
				
				DesiredCapabilities chcapabilities = new DesiredCapabilities();
				chcapabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
				ChromeOptions options = new ChromeOptions();
				options.addArguments("-test-type");
				chcapabilities.setCapability(ChromeOptions.CAPABILITY, options);

			driver = new ChromeDriver(chcapabilities);
			driver.manage().window().maximize();

		}else if (browser.equalsIgnoreCase("FF")) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();

		}else if (browser.equalsIgnoreCase("IE")) {
			final File file = new File("src/test/resources/drivers/ieDriver/IEDriverServer.exe");
			System.setProperty("webdriver.ie.driver", file.getAbsolutePath());
			DesiredCapabilities iecapabilities = DesiredCapabilities.internetExplorer();
			iecapabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			iecapabilities.setJavascriptEnabled(true);
			
			driver = new InternetExplorerDriver(iecapabilities);
			driver.manage().window().maximize();

		}
	}	

	@AfterMethod
	public void closeBrowser(ITestResult result) throws IOException {

		if (!result.isSuccess()) {
			try{
			Log.info("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX --FAILED-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

				File imageFile = ((TakesScreenshot)driver)
						.getScreenshotAs(OutputType.FILE);

			String failureImageFileName = imageFile.getName() + result.getMethod().getMethodName() + new SimpleDateFormat("MM-dd-yyyy_HH-ss").format(new GregorianCalendar().getTime())
					+ ".png";
			File failureImageFile = new File("C:\\D\\WalthroughWorkspace\\seleniumtestsbb\\screenshots\\"+failureImageFileName);
			FileUtils.copyFile(imageFile, failureImageFile);
			}finally {
				driver.close();
				driver.quit();
				Log.endTestCase(result.getMethod().getMethodName());
				}
		}
		else if (result.isSuccess()){
			Log.info("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX --PASSED-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			driver.close();
			driver.quit();
			Log.endTestCase(result.getMethod().getMethodName());
		}
	}
}
