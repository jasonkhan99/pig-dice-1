# _Pig Dice_

#### _Try your hand at a game of Pig Dice!, 06/17/2020_

#### By _**Jason Khan and Brittany Lindgren**_

## Description

_This is a dice game translated to a webpage. Roll a dice and you get that many points. Roll as many times as you'd like and add the points up. If you roll a 1 you lose all your points from that turn and give the dice to the next player. At any point before rolling a 1 you may choose to hold, add the points to your total and give the dice to the next player. 1st to 100 points wins_

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/LINDGRENBA/pig-dice.git`
2. Navigate into the `/pig-dice/` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

#### To see my live website go to {GH_PAGES_LINK_HERE}!

## Project Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| The Program allows user1 to roll a dice numbered 1 through 6 | Click "roll dice" | 4 |
| The Program allows user2 to roll a dice numbered 1 through 6 | Click "roll dice" | 3 |
| The Program will create a Total score and turn score for each user. Each  will begin at 0 | no input | user1 total Score = 0, Turn Score = 0 & user2 Total Score = 0, Turn Score = 0 |
| If user rolls a 1, turn score resets to 0 and turn changes to next user | 1 | Turn Score = 0 |
| If user holds, add turn score to total score for that user and turn changes to next user | click "hold" | turn score + total score |
| If user1 or user2 total score is >= 100, game over, user with high score wins | user1 total score = 103 | "User 1 Wins!!!", game ends - show option to play new game |

## Known Bugs

_No known bugs_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Jason Khan and Brittany Lindgren_**
