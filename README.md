# _Dominion_

#### _A recreation of the card game Dominion, originally created by Donald X. Vaccarino, July 2017_

#### By _**Trevor Gill**_

## Description

_This is a recreation of the card game Dominion, written in HTML and Javascript. The cards included in this version of the game are the "basic set" including the following action cards: cellar, moat, village, workshop, woodcutter, smithy, remodel , militia, market, mine_

## Link

[Dominion](http://wedaft.github.io/dominion)

## Specs ##

* _It should create all money, action, and victory point cards needed to play a game_
  * _Input: []_
  * _Output: [ [coppers],[silvers],[golds],[estates],[ducheys],[provinces],[allactions] ]_
* _It should create 2 players_
  * _Input: new Game_
  * _Output: game.player1, game.player2_
* _It should create a starting deck of cards (7 copper, 3 estates) for 2 players_
  * _Input: player1.shufflePile = []_
  * _Output: player1.shufflePile = [copper,copper,copper,copper,copper,copper,copper,estate,estate,estate]_
* _It should shuffle a player's deck before their first turn_
  * _Input: player1.shufflePile = [copper,copper,copper,copper,copper,copper,copper,estate,estate,estate]_
  * _Output: player1.deck = [copper,copper,estate,copper,estate,copper,copper,estate,copper,copper]_
* _It should deal a player a hand of 5 cards from their deck_
  * _Input: player1.hand = []_
  * _Output: player1.hand = [copper,copper,estate,copper,estate]_
* _It should create a discard pile to hold the card's from a player's hand after they finish their turn_
  * _Input: player1_
  * _Output: player1.shufflePile = []_
* _It should be able to shuffle a player's discard pile once their deck is empty and put cards into player's deck_
  * _Input: player1.shufflePile = [copper,copper,estate,estate,copper]_
  * _Output: player1.deck = [estate,estate,copper,copper,copper]_
* _If a player's deck runs out of cards while they are drawing their hand or during their turn, the discard pile should be shuffled and moved into the deck, and then the player should be dealt the remainder of their cards to complete their hand_
  * _Input: player1.hand = [copper,copper], player1.deck = []_
  * _Output: _player1.hand = [copper,copper,estate,copper,estate]_
* _At the start of a turn, the amount of money in a player's hand shall be calculated_
  * _Input: player1.hand = [copper,copper,estate,copper,estate]_
  * _Output: player1.moneyInHand = 3_
* _At the start of a turn, a player shall be given 1 action_
  * _Input: player1.actionCount = 0_
  * _Output: player1.actionCount = 1_
* _At the start of a turn, a player shall be given 1 buy_
  * _Input: player1.buyCount = 0_
  * _Output: player1.buyCount = 0_
* _It should allow a player to buy a card (to the discard pile) if they have sufficient money in their hand and at least 1 buy for the turn_
  * _Input: player1.buyCount = 1, player1.shufflePile = []_
  * _Output: player1.buyCount = 0, player1.shufflePile = [copper]_
* _After any card purchases, the amount of money a player has to spend should decrement by the cost of the card purchased_
  * _Input: player1.moneyInHand = 3 (buys Silver)_
  * _Output: player1.moneyInHand = 0_
* _After any card purchases the number of buys a player has should decrement by one_
  * _Input: player1.buyCount = 1 (buys Silver)_
  * _Output: player1.buyCount = 0_
* _After playing a Market action card, a player should receive +1 money, +1 action, +1 buy, +1 card for that turn_
  * _Input: player1.buyCount = 1, player1.actionCount = 1, player1.moneyInHand = 4, player1.hand.length = 5_
  * _Output: player1.buyCount = 2, player1.actionCount = 2, player1.moneyInHand = 5, player1.hand.length = 6_
* _After playing a Woodcutter action card, a player should receive +2 money, +1 buy for that turn_
  * _Input: player1.buyCount = 1, player1.moneyInHand = 3_
  * _Output: player1.buyCount = 2, player1.moneyInHand = 5_
* _After playing a Smithy action card, a player should receive +3 cards from the top of their deck_
  * _Input: player1.hand.length = 5_
  * _Output: player1.hand.length = 8_
* _Once all 12 province cards have been purchased, victory points should be added up for both players and a winner declared_
  * _Input: provinceCount = 0_
  * _Output: "Player 1 has won the game with 72 victory points!"_
* _After any card purchases the number of buys a player has should decrement by one_
  * _Input: player1.buyCount = 1 (buys Silver)_
  * _Output: player1.buyCount = 0_


## Known Bugs

* _Most action cards in the base set are not yet supported. Currently only woodcutter, smithy, and market are supported. Support for the remaining action cards from the Dominion base set will be added in the near future_

## Support and contact details

_Please reach out to Trevor Gill at trevor.a.gill@gmail.com with any questions or comments._

## Technologies Used

_HTML/CSS, Javascript, jQuery, Bootstrap_

### License

*Licensed under MIT, the original game concept and all images are owned by Donald X. Vaccarino and Rio Grande games and are not covered under MIT license.*

Copyright (c) 2017 **_Trevor Gill_**
