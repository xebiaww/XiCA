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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.seleniumtests.utility.HighLight;
import com.seleniumtests.utility.Log;

public class UserDashboardPage{

	private WebDriver driver;
	
	public UserDashboardPage(WebDriver driver) {
		this.driver = driver;
	}
	@CacheLookup
	@FindBy(xpath = "//a[contains(text(), 'My Dashboard')]")
	WebElement dashboard;
	
	@CacheLookup
	@FindBy(linkText = "Sign Out")
	WebElement signOut;

	private TimeUnit SECONDS;
/*	
	public void verify() {
		WebDriverWait wait = new WebDriverWait(driver, 300);
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(), 'My Dashboard')]")));
		Assert.assertNotNull(element);
	}
*/	
	public Home ClickSignout() {
		try {
			HighLight.highlightElement(signOut, driver);
		} catch (Exception e) {
			e.printStackTrace();
		}
		signOut.click();
		return PageFactory.initElements(driver, Home.class);
	}

}
