Feature: Navigation

  I want to view the batches page

  Scenario: Navigating to the batches page
    Given I am on the home page
    When I click on the "BATCHES" tab
    Then The URL is "/batches"
      And I can see "Create New Batch"
