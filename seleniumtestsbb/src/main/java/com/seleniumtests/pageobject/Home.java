package com.seleniumtests.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByLinkText;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Reporter;

import com.seleniumtests.utility.HighLight;


public class Home {

	private WebDriver driver;

	public Home(WebDriver driver) {
		this.driver = driver;
	}

	@CacheLookup
	@FindBy(linkText = "Not a Member?")
	WebElement notAMember;
	
	@CacheLookup
	@FindBy(linkText = "Sign In")
	WebElement Signin;
	
	public SignUp clickNotAMember() {
		try {
			HighLight.highlightElement(notAMember, driver);
		} catch (Exception e) {
			e.printStackTrace();
		}
		notAMember.click();
		return PageFactory.initElements(driver, SignUp.class);
	}
	
	public SignInPage clickSignIn() {
		try {
			HighLight.highlightElement(Signin, driver);
		} catch (Exception e) {
			e.printStackTrace();
		}
		Signin.click();
		return PageFactory.initElements(driver, SignInPage.class);
	}
	
	public void verify() {
	Assert.assertNotNull(ExpectedConditions.visibilityOfElementLocated(By.linkText("Sign In")));
	}
}
