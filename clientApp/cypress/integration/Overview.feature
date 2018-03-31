Feature: The Overview Page

  Scenario: Navigating to the overview page
    Given I have just logged in
    When I click on the "BATCHES" tab in the "navbar"
    When I click on the "OVERVIEW" tab in the "navbar"
    Then the URL is "/overview"

  Scenario: All batches button works

  Scenario: Check if all batches show up

  Scenario: Check if each filter within the page works

  Scenario: Check if export works

  Scenario: Check if export contains all information
