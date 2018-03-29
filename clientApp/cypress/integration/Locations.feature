Feature: The Locations Page

  Scenario: Navigating to the locations page
    Given I have just logged in
    When I click on the "LOCATIONS" tab with id of "#mat-tab-content-0-2"
    Then the URL is "/locations"
