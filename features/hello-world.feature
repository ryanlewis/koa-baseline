Feature: Hello World

The server should return a standard hello world response when making a request to /hello-world

  Scenario: Requesting /hello-world
    Given I am running the server
    When I GET /hello-world
    Then I should receive "hello world"
