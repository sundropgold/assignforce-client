Feature: The Trainers Page

  Scenario: Navigating to the trainers page
    Given I have just logged in
    When I click on the "TRAINERS" tab in the "navbar"
    Then the URL is "/trainers"
