Feature: The Profile Page

  Scenario: Navigating to the profile page
    Given I have just logged in
    When I click on the "PROFILE" tab in the "navbar"
    Then the URL is "/profile"
