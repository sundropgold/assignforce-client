Feature: The Batches Page

  Scenario: Navigating to the batches page
    Given I have just logged in
    When I click on the "BATCHES" tab in the "navbar"
    Then the URL is "/batches"

  Scenario: Accordian tabs should appear
    Given I am on the batches page
    Then I should see the All Batches tab
    And I should see the Batch Timeline tab

  Scenario: Check if all batches mat-toolbar works

  Scenario: Check if all batches show up

  Scenario: Check if each filter within the page works

  Scenario: Check drop down menu works as it should

  Scenario: Check start date and stop date are correct

  Scenario: Check start date and stop date matches the span

  Scenario: Check the name is generated

  Scenario: The generated named can be changed after it's generated

  Scenario: Trainers dropout only shows trainers that have the skill and is available

  Scenario: Location works and the Building and Room are free and not being used

  Scenario: Check if Edit button and the edit itself works

  Scenario: Check if the clone works

  Scenario: Check if a test batch is deleted
