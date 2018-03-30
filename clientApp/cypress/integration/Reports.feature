Feature: The Reports Page

  Scenario: Navigating to the reports page
    Given I have just logged in
    When I click on the "REPORTS" tab in the "navbar"
    Then the URL is "/reports"
