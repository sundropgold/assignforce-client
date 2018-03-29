Feature: Settings

  I want to interact with the settings page

  Scenario: Navigating to the settings page
    Given I have just logged in
    When I click on the "SETTINGS" tab with id of "#mat-tab-label-0-7"
    Then the URL is "/settings"
