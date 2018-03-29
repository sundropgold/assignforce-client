Feature: The Navigation Page

  I want to view the batches page

  Scenario: Navigating to the batches page
    Given I have just logged in
    When I click on the "BATCHES" tab with id of "#mat-tab-label-0-1"
    Then the URL is "/batches"
      And I can see "Create New Batch"

