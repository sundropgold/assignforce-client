Feature: The Overview Page

  Scenario: Navigating to the overview page
    Given I have just logged in
    When I click on the "BATCHES" tab in the "navbar"
    When I click on the "OVERVIEW" tab in the "navbar"
    Then the URL is "/overview"
