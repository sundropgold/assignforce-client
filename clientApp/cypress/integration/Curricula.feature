Feature: The Curricula Page

  Scenario: Navigating to the curricula page
    Given I have just logged in
    When I click on the "CURRICULA" tab with id of "#mat-tab-content-0-3"
    Then the URL is "/curricula"
