Feature: The Locations Page

  Scenario: Navigating to the locations page
    Given I have just logged in
    When I click on the "LOCATIONS" tab in the "navbar"
    Then the URL is "/locations"
