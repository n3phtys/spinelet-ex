

# Planning of spinelet-EX

## Use cases:

Given empty library
    - User adds a new agent to the library
        - An agent is either a Battlegroup, Weak, Strong, or Special
        - An agent also contains an avatar image url
        - A list of agents can be exported
    - User edits an existing agent
    - User removes and existing agent from the library

Given non-empty library
- Test
- OtherTest



    - The player creates a Battle
        - A Battle is a collection of Agents (instances of that template)
        - It also contains a simple initiative tracker
        - A list of battles can be exported
    - A Battle can be permanently deleted if it is open or if it is closed
    - An open Battle has options to interact:
        - can add statuses to agent instances (like damage, or wound penalties, or KNOCKED_OUT, or OUT_OF_COMBAT, or on-the-fly custom ones) or remove existing ones
        - can add new agents (requires at least a set of new initiative to start with)
        - has a button to start next round (asks if one agent has not yet moved)
        - always sorts people by initiative
        - greys out everyone who has taken an action (via button)
    - shows per agent instance:
        - Evasion / Parry DV (can be reduced)
        - Soak
        - Health Track (including wound penalties and different damage types, can be changed)
        - Initiative
        - Might + Size + Drill
        - Magnitude
        - Has commited to an action this round or not
        - Is deactivated or not



Given start
    - There is an internal list of Battles
    - The list can be reordered
    - With one click, the application can switch to another Battle
    - The application starts either with the head of the list selected
        - if list is empty, show create battle dialogue instead




## External Accesses
LocalStorage for storing Templates + Battles


## External Dependencies
N/A

## Deployment
using Firebase Hosting


## Services


## Components structure

