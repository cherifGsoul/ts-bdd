Feature: Cab fare estimation

	As a cab rider
	In order to know the price of my trip upfront
	I need to be able to request cab fare estimation

	Rules:
		- The requested estimation must be for addresses in served cities
		- The base fare $5
		- The fare per kilometer is $1

	Scenario: Fare estimation between 2 addresses in the same city
		Given "Montreal" is a served city
		And a route between "rue de contrecoeur" and "Montréal-Pierre Elliott Trudeau International Airport" in this city
		And the itinerary distance for this route is 20 KM
		When I request an estimation for a ride for this route
		Then the estimated price should be $25
