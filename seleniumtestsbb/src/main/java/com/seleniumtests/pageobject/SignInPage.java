package com.seleniumtests.pageobject;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.seleniumtests.core.CustomVerification;
import com.seleniumtests.utility.HighLight;
import com.seleniumtests.utility.Log;

public class SignInPage {

	private WebDriver driver;
	
	public SignInPage(WebDriver driver) {
		this.driver = driver;
	}
	@CacheLookup
	@FindBy(name = "username")
	WebElement userId;

	@CacheLookup
	@FindBy(name= "password")
	WebElement password;
	
	@CacheLookup
	@FindBy(css = "input[value='Sign In']")
	WebElement signiinbutton;

	private TimeUnit SECONDS;
	
	public void verify() {
	CustomVerification customVerification = new CustomVerification();
	Assert.assertNotNull(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[value='Sign In']")));
	}
	
	public UserDashboardPage credentials() {
		
		userId.sendKeys("rj050115_8@mailinator.com");
		password.sendKeys("11111");

		signiinbutton.click();
		Log.info("Free SignUp found");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return PageFactory.initElements(driver, UserDashboardPage.class);
	}
	
}
