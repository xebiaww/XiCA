$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClubRegNew.feature");
formatter.feature({
  "id": "clubregistration",
  "description": "",
  "name": "ClubRegistration",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "SignUp",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I want to open the browser",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I visit the https://tbbqabeta.productpartners.com url",
  "keyword": "And ",
  "line": 4
});
formatter.step({
  "name": "I visit to the Signup Page",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I click on the club signup",
  "keyword": "When ",
  "line": 6
});
formatter.match({
  "location": "ClubRegSteps.i_want_to_open_the_browser()"
});
formatter.result({
  "duration": 3201116791,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_visit_the_https_tbbqabeta_productpartners_com_url()"
});
formatter.result({
  "duration": 14728433093,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_visit_to_the_Signup_Page()"
});
formatter.result({
  "duration": 2900745841,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_click_on_the_club_signup()"
});
formatter.result({
  "duration": 7603067110,
  "status": "passed"
});
formatter.scenario({
  "id": "clubregistration;dataentryvalid",
  "tags": [
    {
      "name": "@run",
      "line": 8
    }
  ],
  "description": "",
  "name": "DataEntryValid",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "i submit form with valid data and get welcome page",
  "keyword": "Then ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "confirmEmail",
        "password",
        "confirmPassword",
        "screenName",
        "dateOfBirth",
        "phoneTextbox",
        "shippingCountry",
        "shippingStreet1",
        "shippingStreet2",
        "shippingCity",
        "shippingState",
        "shippingZip",
        "ccFirstName",
        "ccLastName",
        "ccType",
        "ccNumber",
        "ccExp",
        "ccCvv",
        "billingCB",
        "coachReferral",
        "COACHID",
        "tnC",
        "CASL",
        "captchaText"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "ClubRegSteps.i_submit_form_with_valid_data_and_get_welcome_page(DataTable)"
});
formatter.result({
  "duration": 1110469,
  "status": "passed"
});
formatter.after({
  "duration": 3260284050,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "SignUp",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I want to open the browser",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I visit the https://tbbqabeta.productpartners.com url",
  "keyword": "And ",
  "line": 4
});
formatter.step({
  "name": "I visit to the Signup Page",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I click on the club signup",
  "keyword": "When ",
  "line": 6
});
formatter.match({
  "location": "ClubRegSteps.i_want_to_open_the_browser()"
});
formatter.result({
  "duration": 2481469744,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_visit_the_https_tbbqabeta_productpartners_com_url()"
});
formatter.result({
  "duration": 13387969496,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_visit_to_the_Signup_Page()"
});
formatter.result({
  "duration": 2784435209,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_click_on_the_club_signup()"
});
formatter.result({
  "duration": 7085404703,
  "status": "passed"
});
formatter.scenario({
  "id": "clubregistration;dataentryinvalid",
  "tags": [
    {
      "name": "@run",
      "line": 18
    }
  ],
  "description": "",
  "name": "DataEntryInValid",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario",
  "comments": [
    {
      "value": "#| Dec1215 | c1 | Dec1215Club1@mailinator.com | Dec1215Club1@mailinator.com | 11111 | 11111 | Dec1215C1 | 1978 | 1111111111 | Canada | DecC | club1 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4153456798632146 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 5971 |",
      "line": 12
    },
    {
      "value": "#| Dec1215 | c2 | Dec1215Club2@mailinator.com | Dec1215Club2@mailinator.com | 11111 | 11111 | Dec1215C2 | 1978 | 1111111111 | Canada | DecC | club2 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4222222222222 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 1111 |",
      "line": 13
    },
    {
      "value": "#| Dec1215 | c3 | Dec1215Club3@mailinator.com | Dec1215Club3@mailinator.com | 11111 | 11111 | Dec1215C3 | 1978 | 1111111111 | Canada | DecC | club3 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4222222222222 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 1111 |",
      "line": 14
    },
    {
      "value": "#| Dec1215 | c4 | Dec1215Club4@mailinator.com | Dec1215Club4@mailinator.com | 11111 | 11111 | Dec1215C4 | 1978 | 1111111111 | Canada | DecC | club4 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4222222222222 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 1111 |",
      "line": 15
    },
    {
      "value": "#| Dec1215 | c5 | Dec1215Club5@mailinator.com | Dec1215Club5@mailinator.com | 11111 | 11111 | Dec1215C5 | 1978 | 1111111111 | Canada | DecC | club5 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4222222222222 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 1111 |",
      "line": 16
    }
  ]
});
formatter.step({
  "name": "i submit form with Invalid data and get error page",
  "keyword": "Then ",
  "line": 20,
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "confirmEmail",
        "password",
        "confirmPassword",
        "screenName",
        "dateOfBirth",
        "phoneTextbox",
        "shippingCountry",
        "shippingStreet1",
        "shippingStreet2",
        "shippingCity",
        "shippingState",
        "shippingZip",
        "ccFirstName",
        "ccLastName",
        "ccType",
        "ccNumber",
        "ccExp",
        "ccCvv",
        "billingCB",
        "coachReferral",
        "COACHID",
        "tnC",
        "CASL",
        "captchaText"
      ],
      "line": 21
    },
    {
      "cells": [
        "Demo12",
        "cl",
        "Demo12Club1@mailinator.com",
        "Demo12Club1@mailinator.com",
        "11111",
        "11111",
        "Demo12Club1",
        "1978",
        "1111111111",
        "Canada",
        "OctC",
        "club7",
        "montreal",
        "Quebec",
        "h3b5l1",
        "abc",
        "xyz",
        "Visa",
        "4222222222222",
        "2021",
        "123",
        "TRUE",
        "TRUE",
        "994",
        "TRUE",
        "TRUE",
        "1111"
      ],
      "line": 22
    }
  ]
});
formatter.match({
  "location": "ClubRegSteps.i_submit_form_with_Invalid_data_and_get_error_page(DataTable)"
});
formatter.result({
  "duration": 9422619819,
  "status": "passed"
});
formatter.after({
  "duration": 3155809661,
  "status": "passed"
});
formatter.uri("FreeSignup_ATG_Redirection.feature");
formatter.feature({
  "id": "atg-redirection-for-free-signup",
  "description": "",
  "name": "ATG Redirection for Free Signup",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "atg-redirection-for-free-signup;check-atg-redirection",
  "tags": [
    {
      "name": "@run",
      "line": 3
    }
  ],
  "description": "",
  "name": "Check ATG redirection",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I want to open the browser for free signup",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I visit the https://tbbqabeta.productpartners.com url for free signup",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "I visit to the Signup Page for free signup",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I click on the free signup",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "i should redirect to ATG page",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "FreeSignup_ATG_Redirection.i_want_to_open_the_browser_for_free_signup()"
});
formatter.result({
  "duration": 2469250481,
  "status": "passed"
});
formatter.match({
  "location": "FreeSignup_ATG_Redirection.i_visit_the_https_tbbqabeta_productpartners_com_url_for_free_signup()"
});
formatter.result({
  "duration": 5961196810,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d39.0.2171.95)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027RJINDAL\u0027, ip: \u002710.1.6.137\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\nSession ID: a09adf690816aa75d2cf74222a54a673\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\Ravi\\AppData\\Local\\Temp\\scoped_dir9168_20093}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d39.0.2171.95, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:313)\r\n\tat com.seleniumtests.cucumbertest.java.FreeSignup_ATG_Redirection.i_visit_the_https_tbbqabeta_productpartners_com_url_for_free_signup(FreeSignup_ATG_Redirection.java:43)\r\n\tat ✽.And I visit the https://tbbqabeta.productpartners.com url for free signup(FreeSignup_ATG_Redirection.feature:6)\r\n"
});
formatter.match({
  "location": "FreeSignup_ATG_Redirection.i_visit_to_the_Signup_Page_for_free_signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeSignup_ATG_Redirection.i_click_on_the_free_signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 9586569,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d39.0.2171.95)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027RJINDAL\u0027, ip: \u002710.1.6.137\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\nSession ID: a09adf690816aa75d2cf74222a54a673\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\Ravi\\AppData\\Local\\Temp\\scoped_dir9168_20093}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d39.0.2171.95, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:324)\r\n\tat com.seleniumtests.cucumbertest.java.RunCukeBase.tearDown(RunCukeBase.java:105)\r\n\tat com.seleniumtests.cucumbertest.java.Hooks.embedScreenshot(Hooks.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:221)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:209)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:203)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:119)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:107)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat cucumber.api.cli.Main.main(Main.java:18)\r\n"
});
formatter.uri("SignOut.feature");
formatter.feature({
  "id": "sign-out",
  "description": "",
  "name": "Sign Out",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "sign-out;tbb-portal-sign-oufter-signining-in",
  "tags": [
    {
      "name": "@run",
      "line": 3
    }
  ],
  "description": "",
  "name": "TBB Portal Sign oufter signining in",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I have signedin to the TBB portal",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I click on Sign out button",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be logged out from the portal",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SignOutSteps.i_have_signedin_to_the_TBB_portal()"
});
formatter.result({
  "duration": 7063112400,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d39.0.2171.95)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027RJINDAL\u0027, ip: \u002710.1.6.137\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\nSession ID: 21296372c1f98d1bfb2b0ed06ff7eeae\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\Ravi\\AppData\\Local\\Temp\\scoped_dir3796_29168}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d39.0.2171.95, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:313)\r\n\tat com.seleniumtests.cucumbertest.java.SignOutSteps.i_have_signedin_to_the_TBB_portal(SignOutSteps.java:31)\r\n\tat ✽.Given I have signedin to the TBB portal(SignOut.feature:5)\r\n"
});
formatter.match({
  "location": "SignOutSteps.i_click_on_Sign_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignOutSteps.i_should_be_logged_out_from_the_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5058894,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d39.0.2171.95)\n  (Driver info: chromedriver\u003d2.10.267521,platform\u003dWindows NT 6.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u00272.43.0\u0027, revision: \u0027accb3003b9fb8f7cae30f9669b4c594a065396a6\u0027, time: \u00272014-09-09 22:22:51\u0027\nSystem info: host: \u0027RJINDAL\u0027, ip: \u002710.1.6.137\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_67\u0027\nSession ID: 21296372c1f98d1bfb2b0ed06ff7eeae\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\Ravi\\AppData\\Local\\Temp\\scoped_dir3796_29168}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d39.0.2171.95, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:324)\r\n\tat com.seleniumtests.cucumbertest.java.RunCukeBase.tearDown(RunCukeBase.java:105)\r\n\tat com.seleniumtests.cucumbertest.java.Hooks.embedScreenshot(Hooks.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:221)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:209)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:203)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:116)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:119)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:107)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat cucumber.api.cli.Main.main(Main.java:18)\r\n"
});
});