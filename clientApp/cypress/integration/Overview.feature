Feature: The Overview Page

  Scenario: Navigating to the overview page
    Given I have just logged in
    When I click on the "BATCHES" tab with id of "#mat-tab-label-0-1"
    When I click on the "OVERVIEW" tab with id of "#mat-tab-label-0-0"
    Then the URL is "/overview"
