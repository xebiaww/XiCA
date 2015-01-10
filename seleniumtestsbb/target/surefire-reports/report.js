$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("User_SignIn.feature");
formatter.feature({
  "id": "signing-into-tbb-portal",
  "description": "",
  "name": "Signing into TBB portal",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "signing-into-tbb-portal;tbb-portal-sign-in",
  "tags": [
    {
      "name": "@run",
      "line": 3
    }
  ],
  "description": "",
  "name": "TBB Portal Sign In",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I want to open the browser to sign into TBB portal",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I visit the https://tbbqabeta.productpartners.com url for signin",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "I click on the Signin link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should move to Login Page",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "I provide userid credentails to do signin",
  "keyword": "And ",
  "line": 9
});
formatter.match({
  "location": "User_SignInSteps.i_want_to_open_the_browser_sign_into_TBB_portal()"
});
formatter.result({
  "duration": 3310606148,
  "status": "passed"
});
formatter.match({
  "location": "User_SignInSteps.i_visit_the_https_tbbqabeta_productpartners_com_url_for_signin()"
});
formatter.result({
  "duration": 20318209884,
  "status": "passed"
});
formatter.match({
  "location": "User_SignInSteps.i_click_on_the_Signin_link()"
});
formatter.result({
  "duration": 6245324946,
  "status": "passed"
});
formatter.match({
  "location": "User_SignInSteps.i_should_move_to_Login_Page()"
});
formatter.result({
  "duration": 3442248,
  "status": "passed"
});
formatter.match({
  "location": "User_SignInSteps.i_provide_userid_and_password()"
});
formatter.result({
  "duration": 10726717512,
  "status": "passed"
});
formatter.after({
  "duration": 2969987372,
  "status": "passed"
});
});