package com.seleniumtests.pageobject;

//import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.seleniumtests.utility.HighLight;

public class Welcome {
	private WebDriver driver;
	
	public Welcome(WebDriver driver) {
		this.driver = driver;
	}
	
	@CacheLookup
	@FindBy(className = "title")
	WebElement Title;
	
	@CacheLookup
	@FindBy(className = "portlet-msg-error")
	WebElement errors;
	
	@CacheLookup
	@FindBy(linkText = "Sign Out")
	WebElement signOut;


	public boolean WelcomeFree() {
		boolean b1 = Title.getText().contains("Welcome Free Member!");
		return b1;
	}
	
	public boolean WelcomeClub() {
		boolean b2 = Title.getText().contains("You are a Club Member!");
		return b2;	
	}
	
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
