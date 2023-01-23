GET: /players
Lists all registered players


POST: /players
Body: { "name": "John", "rank": "GM", "points": 2600 }
Adds a new player to the list

GET: /players/ranks
Lists all ranks and how many players there are in each

PATCH: /players/:id
Body: { "points": 2640 }
Changes the current points a player has.

DELETE: /players/:id
Deletes a player from the list
