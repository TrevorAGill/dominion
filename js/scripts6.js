//Frontend
turn = 1
$(document).ready(function() {
  var allCards = createCards();
  var game = new Game(allCards);
  game.player1.shuffler();
  game.player2.shuffler();

  $("#draw-hand1").on('click', function(event) {
    event.preventDefault();
    debugger;
    game.player1.draw();
    game.player1.revealCards();
    game.player1.calculateResources();
    debugger;
    $("#resources-remaining").show();
    $("#money-counter").text(game.player1.moneyInHand);
    $("#action-counter").text(game.player1.actionCount);
    $("#buy-counter").text(game.player1.buyCount);
    $("#deck-counter").text(game.player1.deck.length);
    $("#discard-counter").text(game.player1.shufflePile.length);
  });

  $("#end-turn1").click(function() {
    debugger;
    game.player1.discard();
    $(".buy-zone").hide();
    $(".hand").html("");
  });

  $(document).on('click','#play-market',function() {
    game.player1.playMarket();
    $("#money-counter").text(game.player1.moneyInHand);
    $("#action-counter").text(game.player1.actionCount);
    $("#action-counter").text(game.player1.actionCount);
  });

  $("#play-woodcutter").click(function() {
    buyCount = actionWoodcutter(buyCount,moneyInHand);
  });

  $("#buy-phase1").click(function() {
    $(".buy-zone").show();
    $("#count-copper").text(countCopper);
    $("#count-silver").text(countSilver);
    $("#count-gold").text(countGold);
    $("#count-estate").text(countEstate);
    $("#count-duchey").text(countDuchey);
    $("#count-province").text(countProvince);
    $("#count-cellar").text(countCellar);
    $("#count-moat").text(countMoat);
    $("#count-village").text(countVillage);
    $("#count-workshop").text(countWorkshop);
    $("#count-woodcutter").text(countWoodcutter);
    $("#count-smithy").text(countSmithy);
    $("#count-remodel").text(countRemodel);
    $("#count-militia").text(countMilitia);
    $("#count-market").text(countMarket);
    $("#count-mine").text(countMine);
  });

  $("#buy-copper").click(function() {
    game.player1.buyCopper(allCards);
    $("#count-copper").text(countCopper);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-silver").click(function() {
    game.player1.buySilver(allCards);
    $("#count-silver").text(countSilver);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-gold").click(function() {
    game.player1.buyGold(allCards);
    $("#count-gold").text(countGold);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-estate").click(function() {
    game.player1.buyEstate(allCards);
    $("#count-estate").text(countEstate);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-duchey").click(function() {
    game.player1.buyDuchey(allCards);
    $("#count-duchey").text(countDuchey);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-province").click(function() {
    game.player1.buyProvince(allCards);
    $("#count-province").text(countProvince);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-cellar").click(function() {
    var buysLeft= buyCellar(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 2;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-moat").click(function() {
    var buysLeft= buyMoat(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 2;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-village").click(function() {
    var buysLeft= buyVillage(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 3;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-woodcutter").unbind('click').click(function() {
    debugger;
    postBuyParameters = buyWoodcutter(moneyInHand,allCards,player1Discard,buyCount);
    player1Discard = postBuyParameters[2];
    $("#money-counter").text(postBuyParameters[0]);
    $("#buy-counter").text(postBuyParameters[1]);
  });

  $("#buy-workshop").unbind('click').click(function() {
    debugger;
    postBuyParameters = buyWorkshop(moneyInHand,allCards,player1Discard,buyCount);
    player1Discard = postBuyParameters[2];
    $("#money-counter").text(postBuyParameters[0]);
    $("#buy-counter").text(postBuyParameters[1]);
  });

  $("#buy-militia").click(function() {
    var buysLeft= buyMilitia(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 4;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-remodel").click(function() {
    var buysLeft= buyRemodel(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 4;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-smithy").click(function() {
    var buysLeft= buySmithy(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 4;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

  $("#buy-market").click(function() {
    game.player1.buyMarket(allCards);
    $("#count-market").text(countMarket);
    $("#money-counter").text(game.player1.moneyInHand);
    $("#buy-counter").text(game.player1.buyCount);
  });

  $("#buy-mine").click(function() {
    var buysLeft= buyMine(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 5;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });






    // $("#draw-hand2").click(function(event) {
    //   document.getElementById("draw-hand2").disabled = true;
    //   revealCardsInHand(player2Hand);
    // });


    // function revealCardsInHand(player2Hand) {
    //   for (i=0 ; i<player2Hand.length ; i++) {
    //     if(player2Hand[i].name === "Copper") {
    //       $(".hand").append("<img src='img/copper.jpg'>")
    //     } else if(player2Hand[i].name === "Silver") {
    //       $(".hand").append("<img src='img/silver.jpg'>")
    //     } else if(player2Hand[i].name === "Gold") {
    //       $(".hand").append("<img src='img/gold.jpg'>")
    //     } else if(player2Hand[i].name === "Estate") {
    //       $(".hand").append("<img src='img/estate.jpg'>")
    //     } else if(player2Hand[i].name === "Duchey") {
    //       $(".hand").append("<img src='img/duchey.jpg'>")
    //     } else if(player2Hand[i].name === "Province") {
    //       $(".hand").append("<img src='img/province.jpg'>")
    //     } else if(player2Hand[i].name === "Moat") {
    //       $(".hand").append("<input type='image' src='img/cellar.jpg' name='play-cellar' id='play-cellar'/>")
    //     }
    //   }
    // }





      // $("#play-workshop").click(function() {
      //   actionWorkshop();
      //   $(".buy-zone").show();
      // });
      //
      // $("#play-woodcutter").click(function() {
      //   buyCount = actionWoodcutter(buyCount,moneyInHand);
      // });

});


//Backend

// function asd(game){
//   if(game.turn = 1){
//     currentPlayer = game.player1;
//   } else if(game.turn = 2){
//     currentPlayer = game.player2;
//   }
//   return currentPlayer;
// }

// Game.prototype.deckToggle = function(player) {
//   alert(player);
// }
var countCopper = 60
var countSilver = 40;
var countGold = 30;
var countEstate = 24;
var countDuchey = 12;
var countProvince = 12;
var countCellar = 10;
var countMoat = 10;
var countVillage = 10;
var countWoodcutter = 10;
var countWorkshop = 10;
var countMilitia = 10;
var countRemodel = 10;
var countSmithy = 10;
var countMarket = 10;
var countMine = 10;

Player.prototype.shuffler = function() {
debugger;
var j, x, i;
  for (i = this.shufflePile.length; i; i--) {
     j = Math.floor(Math.random() * i);
     x = this.shufflePile[i - 1];
     this.shufflePile[i - 1] = this.shufflePile[j];
     this.shufflePile[j] = x;
     debugger;
   }
     this.deck = this.shufflePile;
     this.shufflePile = [];
     return this.deck;
}

Player.prototype.draw = function() {
  debugger;
  var cardsInDeck = this.deck.length;
  if(this.deck.length >= 5) {
    debugger;
    this.hand = this.deck.splice(0,5);
  } else if (this.deck.length < 5) {
    debugger;
    this.hand = this.deck.splice(0,cardsInDeck);
    this.deck = this.shuffler();
    this.shufflePile = [];
    this.hand = this.hand.concat(this.deck.splice(0,(5-cardsInDeck)))
    debugger;
  }
}

Player.prototype.discard = function() {
  this.shufflePile = this.shufflePile.concat(this.hand);
  this.hand = [];
  this.buyCount = 0;
  this.actionCount = 0;
  this.moneyInHand = 0;

}

Player.prototype.revealCards = function() {
  debugger;
  for (i=0 ; i<this.hand.length ; i++) {
    if(this.hand[i].name === "Copper") {
      $(".hand").append("<img src='img/copper.jpg'>")
    } else if(this.hand[i].name === "Silver") {
      $(".hand").append("<img src='img/silver.jpg'>")
    } else if(this.hand[i].name === "Gold") {
      $(".hand").append("<img src='img/gold.jpg'>")
    } else if(this.hand[i].name === "Estate") {
      $(".hand").append("<img src='img/estate.jpg'>")
    } else if(this.hand[i].name === "Duchey") {
      $(".hand").append("<img src='img/duchey.jpg'>")
    } else if(this.hand[i].name === "Province") {
      $(".hand").append("<img src='img/province.jpg'>")
    } else if(this.hand[i].name === "Workshop") {
      $(".hand").append("<input type='image' src='img/workshop.jpg' name='play-workshop' id='play-workshop'>")
    } else if(this.hand[i].name === "Woodcutter") {
      $(".hand").append("<input type='image' src='img/woodcutter.jpg' name='play-woodcutter' id='play-woodcutter'>")
    } else if(this.hand[i].name === "Market") {
      $(".hand").append("<input type='image' src='img/market.jpg' name='play-market' id='play-market'>")
    }
  }
}

Player.prototype.calculateResources = function() {
  debugger;
  this.buyCount = 1;
  this.actionCount = 1;
  for(i=0 ; i<this.hand.length ; i++) {
    debugger;
    if(this.hand[i].type === "money") {
    this.moneyInHand += this.hand[i].value;
    }
  }
}

Player.prototype.buyCopper = function(allCards) {
  if(countCopper > 0 && this.moneyInHand >= 3 && this.buyCount > 0) {
    countCopper -= 1;
    this.buyCount -= 1;
    this.moneyInHand = this.moneyInHand;
    this.shufflePile = this.shufflePile.concat(allCards[0].splice(0, 1));
    debugger;
  } else if (countCopper === 0) {
    alert("This card has been bought out.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buySilver = function(allCards) {
  if(countSilver > 0 && this.moneyInHand >= 3 && this.buyCount > 0) {
    countSilver -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 3;
    this.shufflePile = this.shufflePile.concat(allCards[1].splice(0, 1));
    debugger;
  } else if (countSilver === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 3) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buyGold = function(allCards) {
  if(countGold > 0 && this.moneyInHand >= 6 && this.buyCount > 0) {
    countGold -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 6;
    this.shufflePile = this.shufflePile.concat(allCards[2].splice(0, 1));
    debugger;
  } else if (countGold === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 6) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buyEstate = function(allCards) {
  if(countEstate > 0 && this.moneyInHand >= 2 && this.buyCount > 0) {
    countEstate -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 2;
    this.shufflePile = this.shufflePile.concat(allCards[3].splice(0, 1));
    debugger;
  } else if (countEstate === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 2) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buyDuchey = function(allCards) {
  if(countDuchey > 0 && this.moneyInHand >= 5 && this.buyCount > 0) {
    countDuchey -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 5;
    this.shufflePile = this.shufflePile.concat(allCards[4].splice(0, 1));
    debugger;
  } else if (countDuchey === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 5) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buyProvince = function(allCards) {
  if(countProvince > 0 && this.moneyInHand >= 8 && this.buyCount > 0) {
    countProvince -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 8;
    this.shufflePile = this.shufflePile.concat(allCards[5].splice(0, 1));
    debugger;
  } else if (countProvince === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 8) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.buyMarket = function(allCards) {
  if(countMarket > 0 && this.moneyInHand >= 5 && this.buyCount > 0) {
    countMarket -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 5;
    this.shufflePile = this.shufflePile.concat(allCards[14].splice(0, 1));
    debugger;
  } else if (countMarket === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 5) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.playMarket = function() {
  debugger;
  this.hand = this.hand.concat(this.deck.splice(0,1));
  this.buyCount += 1;
  this.actionAcount += 1;
  this.moneyInHand += 1;
  debugger;
  this.revealCards();
  debugger;
}

function createCards() {
  var allCards = [];
  var shufflePile = [];
  var coppers = [];
  var silvers = [];
  var golds = [];
  var estates = [];
  var ducheys = [];
  var provinces = [];
  var cellars = [];
  var moats = [];
  var villages = [];
  var woodcutters = [];
  var workshops = [];
  var militias = [];
  var remodels = [];
  var smithys = [];
  var markets = [];
  var mines = [];

  for(i=0; i<60; i++) {
   var copper = new Money("Copper",1,0,"money");
   coppers.push(copper);
  }

  for(i=0; i<40; i++) {
   var silver = new Money("Silver",2,3,"money");
   silvers.push(silver);
  }

  for(i=0; i<30; i++) {
   var gold = new Money("Gold",3,6,"money");
   golds.push(gold);
  }

  for(i=0; i<24; i++) {
   var estate = new VictoryPoint("Estate",1,2,"vp");
   estates.push(estate);
  }

  for(i=0; i<12; i++) {
   var duchey = new VictoryPoint("Duchey",3,5,"vp");
   ducheys.push(duchey);
  }

  for(i=0; i<12; i++) {
   var province = new VictoryPoint("Province",6,8,"vp");
   provinces.push(province);
  }

  for(i=0; i<10; i++) {
   var cellar = new Action("Cellar", 1, 1, 1, 1, 2, "action");
   cellars.push(cellar);
  }

  for(i=0; i<10; i++) {
   var moat = new Action("Moat", 1, 1, 1, 1, 2, "action");
   moats.push(moat);
  }

  for(i=0; i<10; i++) {
   var village = new Action("Village", 1, 1, 1, 1, 3, "action");
   villages.push(village);
  }

  for(i=0; i<10; i++) {
   var woodcutter = new Action("Woodcutter", 1, 1, 1, 1, 3, "action");
   woodcutters.push(woodcutter);
  }

  for(i=0; i<10; i++) {
   var workshop = new Action("Workshop", 1, 1, 1, 1, 3, "action");
   workshops.push(workshop);
  }

  for(i=0; i<10; i++) {
   var militia = new Action("Militia", 1, 1, 1, 1, 4, "action");
   militias.push(militia);
  }

  for(i=0; i<10; i++) {
   var remodel = new Action("Remodel", 1, 1, 1, 1, 4, "action");
   remodels.push(remodel);
  }

  for(i=0; i<10; i++) {
   var smithy = new Action("Smithy", 1, 1, 1, 1, 4, "action");
   smithys.push(smithy);
  }

  for(i=0; i<10; i++) {
   var market = new Action("Market", 1, 1, 1, 1, 5, "action");
   markets.push(market);
  }

  for(i=0; i<10; i++) {
   var mine = new Action("Mine", 1, 1, 1, 1, 5, "action");
   mines.push(mine);
  }

  allCards = [coppers,silvers,golds,estates,ducheys,provinces,cellars,moats,villages,workshops,woodcutters,smithys,remodels,militias,markets,mines];
  return allCards;
}

//   function actionOrBuy() {
//     var actionCardCount = 0;
//     for(i=0 ; i<playerHand.length ; i++) {
//       if(playerHand[i].type === "action") {
//         actionCardCount += 1;
//       } else {
//         actionCardCount = actionCardCount;
//       }
//     }
//     if(actionCardCount === 0) {
//       alert("Buy");
//       $(".buyZone").show();
//       return allCards;
//       // return buyMarket(shufflePile,playerHand,deck,allCards);
//     } else {
//       alert("Action");
//     }
//   }
//   return actionOrBuy();
// }
//

//
//   function actionSmithy() {
//     playerHand = playerHand.concat(deck.splice(0,3));
//     actions -= 1;
//   }
  function actionMarket(player1Hand,deck) {
    player1Hand = player1Hand.concat(deck.splice(0,1));
    buys += 1;
    moneyInHand += 1;
    debugger
    revealCardsInHand(player1Hand)
  }
  function actionCellar(player1Hand,deck) {
    player1Hand = player1Hand.concat(deck.splice(0,1));
    buys += 1;
    moneyInHand += 1;
    debugger
    revealCardsInHand(player1Hand)
  }
  function actionWorkshop() {
    debugger;
    alert("Draw a card costing up to 4 money.")

  }

  function actionWoodcutter(buyCount,moneyInHand) {
    debugger;
    alert("+1 Buy, +2 Money")
    buyCount += 1;
    moneyInHand +=2;
    debugger;
    return buyCount;
  }

  function actionMarket(player1Hand,deck) {
    player1Hand = player1Hand.concat(deck.splice(0,1));
    buys += 1;
    moneyInHand += 1;
    debugger
    revealCardsInHand(player1Hand)
  }

//Constructors

function Money (name, value, cost, type) {
  this.name = name;
  this.value = value;
  this.cost = cost;
  this.type = type;
}

function VictoryPoint (name, value, cost, type) {
  this.name = name;
  this.value = value;
  this.cost = cost;
  this.type = type;
}

function Action (name, actionsGranted, cardsGranted, buysGranted, moneyGranted, cost, type) {
  this.name = name;
  this.actionsGranted = actionsGranted;
  this.cardsGranted = cardsGranted;
  this.buysGranted = buysGranted;
  this.moneyGranted = moneyGranted;
  this.cost = cost;
  this.type = type;
}

function Pile (name) {
  this.name = name;
}

function Player (name, deck, hand, shufflePile, vpTotal, turn, actionCount, buyCount, moneyInHand) {
  this.name = name;
  this.deck = deck;
  this.hand = hand;
  this.shufflePile = shufflePile;
  this.vpTotal = vpTotal;
  this.turn = turn;
  this.actionCount = actionCount;
  this.buyCount = buyCount;
  this.moneyInHand = moneyInHand
}

function Deck (cards) {
  this.cards = cards;
}

function Game (allCards) {
  this.players = 2;
  this.turn = 1
  this.player1 = new Player("King Arthur",[],[],allCards[3].splice(0,3).concat(allCards[0].splice(0,7)),0,1,0,0,0);
  this.player2 = new Player("Richard the Lionheart",[],[],allCards[3].splice(0,3).concat(allCards[0].splice(0,7)),0,0,0,0,0);
}
