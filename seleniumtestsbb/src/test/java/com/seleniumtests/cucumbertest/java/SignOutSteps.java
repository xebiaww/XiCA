package com.seleniumtests.cucumbertest.java;

import org.openqa.selenium.support.PageFactory;

import com.seleniumtests.core.CustomVerification;
import com.seleniumtests.pageobject.Home;
import com.seleniumtests.pageobject.SignInPage;
import com.seleniumtests.pageobject.SignUp;
import com.seleniumtests.pageobject.UserDashboardPage;
import com.seleniumtests.pageobject.Welcome;
import com.seleniumtests.utility.Log;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignOutSteps {
	
	RunCukeBase df= new RunCukeBase();
 	Home newHome;
 	SignUp newSignUp;
 	SignInPage signin;
 	UserDashboardPage dashboard;
 	Welcome welcome;
  	CustomVerification customVerification = new CustomVerification();
	
	@Given("^I have signedin to the TBB portal$")
	public void i_have_signedin_to_the_TBB_portal() throws Throwable {
		df.createDriver();
	    df.OpenURL("http://wave1tbbdevint2.beachbody.local/");
		if(df.driver.getTitle().contains("certificate") || df.driver.getTitle().contains("Certificate"))
		df.driver.navigate().to("javascript:document.getElementById('overridelink').click()") ;
		Log.info("URL accessed");
		newHome = PageFactory.initElements(df.driver,
				Home.class);
		signin = newHome.clickSignIn();
		//signin.verify();
		dashboard = signin.credentials();
		
	}

	@When("^I click on Sign out button$")
	public void i_click_on_Sign_out_button() throws Throwable {
		df.createDriver();
	    df.OpenURL("http://wave1tbbdevint2.beachbody.local/");
		if(df.driver.getTitle().contains("certificate") || df.driver.getTitle().contains("Certificate"))
		df.driver.navigate().to("javascript:document.getElementById('overridelink').click()") ;
		Log.info("URL accessed");
		newHome = PageFactory.initElements(df.driver,
				Home.class);
		signin = newHome.clickSignIn();
		//signin.verify();
		dashboard = signin.credentials();
		newHome = dashboard.ClickSignout();
	}

	@Then("^I should be logged out from the portal$")
	public void i_should_be_logged_out_from_the_portal() throws Throwable {
		newHome.verify();
	}

}
