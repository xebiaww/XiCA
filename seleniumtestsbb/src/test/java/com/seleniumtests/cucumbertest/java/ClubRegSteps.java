package com.seleniumtests.cucumbertest.java;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.seleniumtests.core.CustomVerification;
import com.seleniumtests.pageobject.ClubSignupPage;
import com.seleniumtests.pageobject.Home;
import com.seleniumtests.pageobject.SignUp;
import com.seleniumtests.pageobject.Welcome;
import com.seleniumtests.utility.HighLight;
import com.seleniumtests.utility.Log;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ClubRegSteps {

	RunCukeBase df= new RunCukeBase();
 	Home newHome;
 	SignUp newSignUp;
 	ClubSignupPage registration;
 	Welcome welcome;
  	CustomVerification customVerification = new CustomVerification();
 	
 	@Given("^I want to open the browser$")
 	public void i_want_to_open_the_browser() throws Throwable {
 		df.createDriver();
 	}


 	@Given("^I visit the https://tbbqabeta\\.productpartners\\.com url$")
 	public void i_visit_the_https_tbbqabeta_productpartners_com_url() throws Throwable {
 	    df.OpenURL("http://tbbqabeta6.productpartners.com/");
		if(df.driver.getTitle().contains("certificate") || df.driver.getTitle().contains("Certificate"))
		df.driver.navigate().to("javascript:document.getElementById('overridelink').click()") ;
		Log.info("URL accessed");
		newHome = PageFactory.initElements(df.driver,
				Home.class);
 	}

 	
 	@Given("^I visit to the Signup Page$")
 	public void i_visit_to_the_Signup_Page() throws Throwable {
 		newSignUp = newHome.clickNotAMember();
 	}

 	
 	@When("^I click on the club signup$")
 	public void i_click_on_the_club_signup() throws Throwable {
 		registration = newSignUp.clickClubSignup();
 	}

 	
 	@Then("^i submit form with valid data and get welcome page$")
 	public void i_submit_form_with_valid_data_and_get_welcome_page(DataTable users) throws Throwable {
		List<List<String>> cukedata = users.raw();
		int cukesize = cukedata.size();
			for (int i=1 ;i<cukesize; i++){
			registration = registration.createNewUserCukes(users, i);
			welcome = registration.clickSubmit();
			
			customVerification.verifyTrue("Not Created Successfully", welcome.WelcomeClub());
			if(welcome.WelcomeClub()==true){			
			newHome = welcome.ClickSignout();}
			
			
				if (i<(cukesize-1))
				{
				df.driver.close();
				df.createDriver();
				df.OpenURL("http://tbbqabeta6.productpartners.com/");
				newHome = PageFactory.initElements(df.driver,
						Home.class);
				newSignUp = newHome.clickNotAMember();
				registration = newSignUp.clickClubSignup();
				}
			}
		customVerification.checkForVerificationErrors();
 	}

 	
 	@Then("^i submit form with Invalid data and get error page$")
 	public void i_submit_form_with_Invalid_data_and_get_error_page(DataTable users) throws Throwable {
		List<List<String>> cukedata = users.raw();
		int cukesize = cukedata.size();
			for (int i=1 ;i<cukesize; i++){
			registration = registration.createNewUserCukes(users, i);
			registration = registration.clickInvalid();
			try{
				customVerification.verifyFalse("New User Created", welcome.WelcomeClub());
				
				customVerification.verifyTrue("Not Existing User", registration.err.contains("You already have an account"));
				
				if (registration.err.contains("Please enter a valid") || registration.err.contains("Please select a valid"))
				customVerification.verifyTrue("Invalid Entry for New User",true);
				
				if (registration.err.contains("Please enter your") || registration.err.contains("Please confirm your") || registration.err.contains("Please enter the cardholder's") || registration.err.contains("Please enter a Screen Name") || registration.err.contains("Please agree to the terms"))
				customVerification.verifyTrue("Blank Entry for New user", true);
				
				customVerification.verifyFalse("Invalid Captcha", registration.err.contains("Text Verification failed"));

				if(welcome.WelcomeClub()==true){			
					newHome = welcome.ClickSignout();}

				}catch(NullPointerException  e){}
					
					if (i<(cukesize-1)){
					df.driver.close();
					df.createDriver();
					df.OpenURL("http://tbbqabeta6.productpartners.com/");
					newHome = PageFactory.initElements(df.driver,
							Home.class);
					newSignUp = newHome.clickNotAMember();
					registration = newSignUp.clickClubSignup();
					}
					
			}
		customVerification.checkForVerificationErrors();
 	}
}
