Feature: The Reports Page

  Scenario: Navigating to the reports page
    Given I have just logged in
    When I click on the "REPORTS" tab with id of "#mat-tab-label-0-6"
    Then the URL is "/reports"
