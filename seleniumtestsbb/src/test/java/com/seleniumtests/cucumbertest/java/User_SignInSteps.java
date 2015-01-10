package com.seleniumtests.cucumbertest.java;

import org.openqa.selenium.support.PageFactory;

import com.seleniumtests.core.CustomVerification;
import com.seleniumtests.pageobject.FreeSignupPage;
import com.seleniumtests.pageobject.Home;
import com.seleniumtests.pageobject.SignInPage;
import com.seleniumtests.pageobject.SignUp;
import com.seleniumtests.pageobject.UserDashboardPage;
import com.seleniumtests.pageobject.Welcome;
import com.seleniumtests.utility.Log;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class User_SignInSteps {

	RunCukeBase df= new RunCukeBase();
 	Home newHome;
 	SignUp newSignUp;
 	SignInPage signin;
 	UserDashboardPage dashboard;
 	Welcome welcome;
  	CustomVerification customVerification = new CustomVerification();
  	
  	@Given("^I want to open the browser to sign into TBB portal$")
  	 	public void i_want_to_open_the_browser_sign_into_TBB_portal() throws Throwable {
  	 		df.createDriver();
  	}

  	@And("^I visit the https://tbbqabeta\\.productpartners\\.com url for signin$")
  	public void i_visit_the_https_tbbqabeta_productpartners_com_url_for_signin() throws Throwable {
 	    df.OpenURL("http://wave1tbbdevint2.beachbody.local/");
		if(df.driver.getTitle().contains("certificate") || df.driver.getTitle().contains("Certificate"))
		df.driver.navigate().to("javascript:document.getElementById('overridelink').click()") ;
		Log.info("URL accessed");
		newHome = PageFactory.initElements(df.driver,
				Home.class);
  	}

  	@And("^I click on the Signin link$")
  	public void i_click_on_the_Signin_link() throws Throwable {
  		signin = newHome.clickSignIn();
  	}

  	@Then("^I should move to Login Page$")
  	public void i_should_move_to_Login_Page() throws Throwable {
  		signin.verify();
  	}

  	@And("^I provide userid credentails to do signin$")
  	public void i_provide_userid_and_password() throws Throwable {
  		dashboard = signin.credentials();
  	}

}
