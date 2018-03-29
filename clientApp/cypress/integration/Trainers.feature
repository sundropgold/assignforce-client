Feature: The Trainers Page

  Scenario: Navigating to the trainers page
    Given I have just logged in
    When I click on the "TRAINERS" tab with id of "#mat-tab-content-0-4"
    Then the URL is "/trainers"
