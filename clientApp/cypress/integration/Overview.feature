Feature: The Overview Page

  Scenario: Navigating to the overview page
    Given I have just logged in
    When I click on the "OVERVIEW" tab with id of "#mat-tab-content-0-0"
    Then the URL is "/overview"
