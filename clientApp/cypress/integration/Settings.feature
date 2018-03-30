Feature: The Settings Page

  I want to interact with the settings page

  Scenario: Navigating to the settings page
    Given I have just logged in
    When I click on the "SETTINGS" tab in the "navbar"
    Then the URL is "/settings"
