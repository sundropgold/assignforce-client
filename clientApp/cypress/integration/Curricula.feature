Feature: The Curricula Page

  Scenario: Navigating to the curricula page
    Given I have just logged in
    When I click on the "CURRICULA" tab in the "navbar"
    Then the URL is "/curricula"
