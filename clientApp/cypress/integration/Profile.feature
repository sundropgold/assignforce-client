Feature: The Profile Page

  Scenario: Navigating to the profile page
    Given I have just logged in
    When I click on the "PROFILE" tab with id of "#mat-tab-content-0-5"
    Then the URL is "/profile"
