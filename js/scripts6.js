//Frontend
$(document).ready(function(){

  $("#newGame").click(function(event) {
    var allCards = createCards();
    var player1 = new Player ("Harold",[],[],[],0);
    var player2 = new Player ("Kumar",[],[],[],0);
    var playerTurn = 1;


    var player1Cards = player1.createDeck(allCards);
    var player1Deck = player1Cards[0];
    var player1Hand = player1Cards[1];
    var player1Discard = player1Cards[2];
    var player2Cards = player2.createDeck(allCards);
    var player2Deck = player2Cards[0];
    var player2Hand = player2Cards[1];
    var player2Discard = player2Cards[2];


    var currentDeck = [];
    var currentHand = [];
    var currentDiscard = [];
    if(playerTurn = 1) {
      currentDeck = player1Deck;
      currentHand = player1Hand;
      currentDiscard = player1Discard;
    } else {
      currentDeck = player2Deck;
      currentHand = player2Hand;
      currentDiscard = player2Discard;
    }



    // $("#draw-hand2").click(function(event) {
    //   document.getElementById("draw-hand2").disabled = true;
    //   revealCardsInHand(player2Hand);
    // });

    function revealCardsInHand(player1Hand) {
      debugger;
      for (i=0 ; i<player1Hand.length ; i++) {
        if(player1Hand[i].name === "Copper") {
          $(".hand").append("<img src='img/copper.jpg'>")
        } else if(player1Hand[i].name === "Silver") {
          $(".hand").append("<img src='img/silver.jpg'>")
        } else if(player1Hand[i].name === "Gold") {
          $(".hand").append("<img src='img/gold.jpg'>")
        } else if(player1Hand[i].name === "Estate") {
          $(".hand").append("<img src='img/estate.jpg'>")
        } else if(player1Hand[i].name === "Duchey") {
          $(".hand").append("<img src='img/duchey.jpg'>")
        } else if(player1Hand[i].name === "Province") {
          $(".hand").append("<img src='img/province.jpg'>")
        } else if(player1Hand[i].name === "Workshop") {
          $(".hand").append("<input type='image' src='img/workshop.jpg' name='play-workshop' id='play-workshop'>")
        } else if(player1Hand[i].name === "Woodcutter") {
          $(".hand").append("<input type='image' src='img/woodcutter.jpg' name='play-woodcutter' id='play-woodcutter'>")
          // } else if(player1Hand[i].name === "Moat") {
          //   $(".hand").append("<input type='image' src='img/cellar.jpg' name='play-cellar' id='play-cellar'/>")
        }
      }
    }
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
    $(".btn-danger").show();



    $("#draw-hand1").click(function(event) {
      // document.getElementById("draw-hand1").disabled = true;
      debugger;
      revealCardsInHand(player1Hand);
      $("#resources-remaining").show();
      var actionCount = 1;
      var buyCount = 1;
      var moneyInHand = countHandMoney(player1Hand);
      $("#money-counter").text(moneyInHand);
      $("#action-counter").text(actionCount);
      $("#buy-counter").text(buyCount);
      $("#deck-counter").text(player1Deck.length);
      $("#discard-counter").text(player1Discard.length);

      $("#play-workshop").click(function() {
        actionWorkshop();
        $(".buy-zone").show();
      });

      $("#play-woodcutter").click(function() {
        buyCount = actionWoodcutter(buyCount,moneyInHand);
      });

    });


      $("#buy-phase1").click(function() {
        $(".buy-zone").show();
        buyCount = 1;
        moneyInHand = countHandMoney(player1Hand);
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

        $("#buy-copper").click(function() {
          var buysLeft= buyCopper(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 0;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });

        $("#buy-silver").unbind('click').click(function() {
          debugger;
          postBuyParameters = buySilver(moneyInHand,allCards,player1Discard,buyCount);
          player1Discard = postBuyParameters[2];
          $("#money-counter").text(postBuyParameters[0]);
          $("#buy-counter").text(postBuyParameters[1]);
        });

        $("#buy-gold").click(function() {
          var buysLeft= buyGold(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 6;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });

        $("#buy-estate").click(function() {
          var buysLeft= buyEstate(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 2;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });

        $("#buy-duchey").click(function() {
          var buysLeft= buyDuchey(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 5;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });

        $("#buy-province").click(function() {
          var buysLeft= buyProvince(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 8;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
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
          $("#money-counter").text(postBuyParameters[1]);
          $("#buy-counter").text(postBuyParameters[0]);
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
          var buysLeft= buyMarket(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 5;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });

        $("#buy-mine").click(function() {
          var buysLeft= buyMine(moneyInHand,allCards,player1Discard,buyCount);
          if(buysLeft < buyCount){
          moneyInHand -= 5;
          buyCount -= 1;
          $("#money-counter").text(moneyInHand);
          $("#buy-counter").text(buyCount);}
        });
      });

    $("#end-turn1").click(function() {
      debugger;
      redraw(player1Deck,player1Discard,player1Hand);
      $(".buy-zone").hide();
      $(".hand").html("");

    });

  });
});


//Backend
function redraw(player1Deck,player1Discard,player1Hand) {
  var cardsInDeck = player1Deck.length;
  player1Discard = player1Discard.concat(player1Hand);
  if(cardsInDeck >= 5) {
    debugger;
    player1Hand = player1Deck.splice(0,5);
  } else if (cardsInDeck < 5) {
    debugger
    player1Hand = player1Deck.splice(0,cardsInDeck);
    player1Deck = player1Shuffler(player1Discard);
    player1Discard = [];
    player1Hand = player1Hand.concat(player1Deck.splice(0,(5-cardsInDeck)))
  }
}

function countHandMoney(player1Hand) {
  var moneyInHand = 0;
  debugger;
  for(i=0 ; i<player1Hand.length ; i++) {
    if(player1Hand[i].name === "Copper" || player1Hand[i].name === "Silver" || player1Hand[i].name === "Gold") {
    moneyInHand += player1Hand[i].value;
    }
  }
  debugger;
  return moneyInHand;
}

function player1Shuffler(player1Discard) {
debugger;
var j, x, i;
  for (i = player1Discard.length; i; i--) {
     j = Math.floor(Math.random() * i);
     x = player1Discard[i - 1];
     player1Discard[i - 1] = player1Discard[j];
     player1Discard[j] = x;
     player1Deck = player1Discard;
     player1Discard = [];
     debugger;
     return player1Deck;
  }
}

Player.prototype.createDeck = function(allCards) {
  debugger;
  var playerCards = [];
  var playerOneMoney = allCards[0].splice(0, 7);
  var shufflePile = playerOneMoney.concat(allCards[3].splice(0, 3));
  var j, x, i;
    for (i = shufflePile.length; i; i--) {
       j = Math.floor(Math.random() * i);
       x = shufflePile[i - 1];
       shufflePile[i - 1] = shufflePile[j];
       shufflePile[j] = x;
    }
    this.deck = shufflePile;
    this.shufflePile = [];
    this.hand = this.deck.splice(0,5);
    playerCards[0] = this.deck;
    playerCards[1] = this.hand;
    playerCards[2] = this.shufflePile;
    debugger;
    return playerCards;
}

debugger;
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

function buyCopper(moneyInHand,allCards,player1Discard,buyCount) {
  if(countCopper > 0 && moneyInHand >= 0 && buyCount > 0) {
    countCopper -= 1;
    buyCount -= 1;
    player1Discard = player1Discard.concat(allCards[0].splice(0, 1));
    moneyInHand -= 0;
  } else if (countCopper === 0) {
    alert("This card has been bought out.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-copper").text(countCopper);
  return buyCount;
}
function buySilver(moneyInHand,allCards,player1Discard,buyCount) {
  debugger;
  if(countSilver > 0 && moneyInHand >= 3 && buyCount > 0) {
    countSilver -= 1;
    buyCount -= 1;
    moneyInHand -= 3;
    player1Discard = player1Discard.concat(allCards[1].splice(0, 1));
    debugger;
  } else if (countSilver === 0) {
    alert("This card has been bought out.");
  } else if (moneyInHand < 3) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-silver").text(countSilver);
  postBuyParameters = []
  postBuyParameters[0] = moneyInHand;
  postBuyParameters[1] = buyCount;
  postBuyParameters[2] = player1Discard;
  return postBuyParameters;
}
function buyWoodcutter(moneyInHand,allCards,player1Discard,buyCount) {
  debugger;
  if(countWoodcutter > 0 && moneyInHand >= 3 && buyCount > 0) {
    countWoodcutter -= 1;
    buyCount -= 1;
    moneyInHand -= 3;
    player1Discard = player1Discard.concat(allCards[10].splice(0, 1));
    debugger;
  } else if (countWoodcutter === 0) {
    alert("This card has been bought out.");
  } else if (moneyInHand < 3) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-woodcutter").text(countWoodcutter);
  postBuyParameters = []
  postBuyParameters[0] = moneyInHand;
  postBuyParameters[1] = buyCount;
  postBuyParameters[2] = player1Discard;
  return postBuyParameters;
}
function buyWorkshop(moneyInHand,allCards,player1Discard,buyCount) {
  debugger;
  if(countWorkshop > 0 && moneyInHand >= 3 && buyCount > 0) {
    countWorkshop -= 1;
    buyCount -= 1;
    moneyInHand -= 3;
    player1Discard = player1Discard.concat(allCards[9].splice(0, 1));
    debugger;
  } else if (countWorkshop === 0) {
    alert("This card has been bought out.");
  } else if (moneyInHand < 3) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-workshop").text(countWorkshop);
  postBuyParameters = []
  postBuyParameters[0] = moneyInHand;
  postBuyParameters[1] = buyCount;
  postBuyParameters[2] = player1Discard;
  return postBuyParameters;
}
function buyGold(moneyInHand,allCards,shufflePile,buyCount) {
  if(countGold > 0 && moneyInHand >= 6 && buyCount > 0) {
    countGold -= 1;
    buyCount -= 1;
    shufflePile = shufflePile.concat(allCards[2].splice(0, 1));
    moneyInHand -= 6;
  } else if (countGold === 0) {
    alert("This card has been bought out.");
  } else if (moneyInHand < 5) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-Gold").text(countGold);
  return buyCount;
}
function buyMarket(moneyInHand,allCards,shufflePile,buyCount) {
  if(countMarket > 0 && moneyInHand >= 5 && buyCount > 0) {
    countMarket -= 1;
    buyCount -= 1;
    shufflePile = shufflePile.concat(allCards[14].splice(0, 1));
    moneyInHand -= 5;
  } else if (countMarket === 0) {
    alert("This card has been bought out.");
  } else if (moneyInHand < 5) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
  $("#count-market").text(countMarket);
  return buyCount;
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
    var postBuyParameters = [];
    postBuyParameters[0] = buyCount += 1;
    postBuyParameters[1] = moneyInHand +=2;
    debugger;
    return postBuyParameters;
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

function Player (name, deck, hand, shufflePile, vpTotal) {
  this.name = name;
  this.deck = deck;
  this.hand = hand;
  this.shufflePile = shufflePile;
  this.vpTotal = vpTotal;
}

function Deck (cards) {
  this.cards = cards;
}

// function Turn (moneyInHand, actions, buys) {
//   this moneyInHand = moneyInHand;
//   this actions = actions;
//   this buys = buys;
// }

function Game(player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
}
