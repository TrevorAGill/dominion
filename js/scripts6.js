//Frontend

$(document).ready(function() {
  var allCards = createCards();
  var game = new Game(allCards);
  game.player1.shuffler();
  game.player2.shuffler();

//Add player's names and reveal game board
  $("#name-submit").click(function(event) {
    game.player1.playerName = $("#PlayerOneName").val();
    game.player2.playerName = $("#PlayerTwoName").val();
    $("#playerOneNameDisplay").append(game.player1.playerName);
    $("#playerTwoNameDisplay").append(game.player2.playerName);
    $("#screen2").show();
    $("#screen1").addClass("hide");
    document.getElementById("end-turn2").disabled = true;
    document.getElementById("draw-hand2").disabled = true;
    document.getElementById("buy-phase2").disabled = true;
  });

//Draw hand
  $("#draw-hand1").on('click', function(event) {
    event.preventDefault();
    debugger;
    game.player1.draw();
    game.player1.revealCards();
    game.player1.calculateResources();
    debugger;
    $("#resources-remaining1").show();
    $("#money-counter1").text(game.player1.moneyInHand);
    $("#action-counter1").text(game.player1.actionCount);
    $("#buy-counter1").text(game.player1.buyCount);
    $("#deck-counter").text(game.player1.deck.length);
    $("#discard-counter").text(game.player1.shufflePile.length);
  });

  $("#draw-hand2").on('click', function(event) {
    event.preventDefault();
    debugger;
    game.player2.draw();
    game.player2.revealCards();
    game.player2.calculateResources();
    debugger;
    $("#resources-remaining2").show();
    $("#money-counter2").text(game.player2.moneyInHand);
    $("#action-counter2").text(game.player2.actionCount);
    $("#buy-counter2").text(game.player2.buyCount);
    $("#deck-counter").text(game.player2.deck.length);
    $("#discard-counter").text(game.player2.shufflePile.length);
  });

//End turn and discard
  $("#end-turn1").click(function() {
    debugger;
    game.player1.discard();
    $("#resources-remaining1").hide();
    $(".buy-zone").hide();
    $(".hand").html("");
    document.getElementById("end-turn1").disabled = true;
    document.getElementById("draw-hand1").disabled = true;
    document.getElementById("buy-phase1").disabled = true;
    document.getElementById("end-turn2").disabled = false;
    document.getElementById("draw-hand2").disabled = false;
    document.getElementById("buy-phase2").disabled = false;
  });

  $("#end-turn2").click(function() {
    debugger;
    game.player2.discard();
    $("#resources-remaining2").hide();
    $(".buy-zone").hide();
    $(".hand").html("");
    game.turn = 1;
    document.getElementById("end-turn2").disabled = true;
    document.getElementById("draw-hand2").disabled = true;
    document.getElementById("buy-phase2").disabled = true;
    document.getElementById("end-turn1").disabled = false;
    document.getElementById("draw-hand1").disabled = false;
    document.getElementById("buy-phase1").disabled = false;
  });

//Buy Cards from Buy Zone

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

  $("#buy-phase2").click(function() {
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
    if(game.player1.turn === 1) {
      game.player1.buyCopper(allCards);
      $("#count-copper").text(countCopper);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.buyCopper(allCards);
      $("#count-copper").text(countCopper);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-silver").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buySilver(allCards);
      $("#count-silver").text(countSilver);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.buySilver(allCards);
      $("#count-silver").text(countSilver);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-gold").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buyGold(allCards);
      $("#count-gold").text(countGold);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.buyGold(allCards);
      $("#count-gold").text(countGold);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-estate").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buyEstate(allCards);
      $("#count-estate").text(countEstate);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.buyEstate(allCards);
      $("#count-estate").text(countEstate);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-duchey").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buyDuchey(allCards);
      $("#count-duchey").text(countDuchey);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.buyDuchey(allCards);
      $("#count-duchey").text(countDuchey);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-province").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buyProvince(allCards);
      $("#count-province").text(countProvince);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
      if(countProvince === 9) {
        var player1VPs = game.player1.vpTotal;
        var player2VPs = game.player2.vpTotal;
        var player1Name = game.player1.playerName;
        var player2Name = game.player2.playerName;
        findWinner(player1VPs,player2VPs,player1Name,player2Name);
      }
    } else if (game.player2.turn === 1) {
      game.player2.buyProvince(allCards);
      $("#count-province").text(countProvince);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
      if(countProvince === 9) {
        var player1VPs = game.player1.vpTotal;
        var player2VPs = game.player2.vpTotal;
        var player1Name = game.player1.playerName;
        var player2Name = game.player2.playerName;
        findWinner(player1VPs,player2VPs,player1Name,player2Name);
      }
    }
  });

  $("#buy-market").click(function() {
    if(game.player1.turn === 1) {
      game.player1.buyMarket(allCards);
      $("#count-market").text(countMarket);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if(game.player2.turn === 1) {
      game.player2.buyMarket(allCards);
      $("#count-market").text(countMarket);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-woodcutter").click(function() {
    debugger;
    if(game.player1.turn === 1) {
      game.player1.buyWoodcutter(allCards);
      $("#count-woodcutter").text(countWoodcutter);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if(game.player2.turn === 1) {
      game.player2.buyWoodcutter(allCards);
      $("#count-woodcutter").text(countWoodcutter);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $("#buy-smithy").click(function() {
    debugger;
    if(game.player1.turn === 1) {
      game.player1.buySmithy(allCards);
      $("#count-smithy").text(countSmithy);
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if(game.player2.turn === 1) {
      game.player2.buySmithy(allCards);
      $("#count-smithy").text(countSmithy);
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#buy-counter2").text(game.player2.buyCount);
    }
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

  $("#buy-mine").click(function() {
    var buysLeft= buyMine(moneyInHand,allCards,player1Discard,buyCount);
    if(buysLeft < buyCount){
    moneyInHand -= 5;
    buyCount -= 1;
    $("#money-counter").text(moneyInHand);
    $("#buy-counter").text(buyCount);}
  });

//Play Action Cards

  $(document).on('click','#play-market',function() {
    if(game.player1.turn === 1) {
      game.player1.playMarket();
      document.getElementById("play-market").disabled = true;
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#action-counter1").text(game.player1.actionCount);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.playMarket();
      document.getElementById("play-market").disabled = true;
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#action-counter2").text(game.player2.actionCount);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $(document).on('click','#play-woodcutter',function() {
    if(game.player1.turn === 1) {
      game.player1.playWoodcutter();
      document.getElementById("play-woodcutter").disabled = true;
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#action-counter1").text(game.player1.actionCount);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.playWoodcutter();
      document.getElementById("play-woodcutter").disabled = true;
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#action-counter2").text(game.player2.actionCount);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

  $(document).on('click','#play-smithy',function() {
    if(game.player1.turn === 1) {
      game.player1.playSmithy();
      document.getElementById("play-smithy").disabled = true;
      $("#money-counter1").text(game.player1.moneyInHand);
      $("#action-counter1").text(game.player1.actionCount);
      $("#buy-counter1").text(game.player1.buyCount);
    } else if (game.player2.turn === 1) {
      game.player2.playSmithy();
      document.getElementById("play-smithy").disabled = true;
      $("#money-counter2").text(game.player2.moneyInHand);
      $("#action-counter2").text(game.player2.actionCount);
      $("#buy-counter2").text(game.player2.buyCount);
    }
  });

});

//Backend

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

//Prototypes and Functions

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
  this.turn = 1;
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
  this.turn = 0;
}

Player.prototype.revealCards = function() {
  debugger;
  for (i=0 ; i<this.hand.length ; i++) {
    if(this.hand[i].name === "Copper") {
      $(".hand").append("<input type='image' src='img/copper.jpg' name='play-copper' id='play-copper'>")
    } else if(this.hand[i].name === "Silver") {
      $(".hand").append("<input type='image' src='img/silver.jpg' name='play-silver' id='play-silver'>")
    } else if(this.hand[i].name === "Gold") {
      $(".hand").append("<input type='image' src='img/gold.jpg' name='play-gold' id='play-gold'>")
    } else if(this.hand[i].name === "Estate") {
      $(".hand").append("<input type='image' src='img/estate.jpg' name='play-estate' id='play-estate'>")
    } else if(this.hand[i].name === "Duchey") {
      $(".hand").append("<input type='image' src='img/duchey.jpg' name='play-duchey' id='play-duchey'>")
    } else if(this.hand[i].name === "Province") {
      $(".hand").append("<input type='image' src='img/province.jpg' name='play-province' id='play-province'>")
    } else if(this.hand[i].name === "Workshop") {
      $(".hand").append("<input type='image' src='img/workshop.jpg' name='play-workshop' id='play-workshop'>")
    } else if(this.hand[i].name === "Woodcutter") {
      $(".hand").append("<input type='image' src='img/woodcutter.jpg' name='play-woodcutter' id='play-woodcutter'>")
    } else if(this.hand[i].name === "Market") {
      $(".hand").append("<input type='image' src='img/market.jpg' name='play-market' id='play-market'>")
    } else if(this.hand[i].name === "Smithy") {
      $(".hand").append("<input type='image' src='img/smithy.jpg' name='play-smithy' id='play-smithy'>")
    }
  }
}

Player.prototype.revealCardsFromAction = function(startingIndex) {
  debugger;
  for (i=startingIndex ; i<this.hand.length ; i++) {
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
    } else if(this.hand[i].name === "Smithy") {
      $(".hand").append("<input type='image' src='img/smithy.jpg' name='play-smithy' id='play-smithy'>")
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
    this.vpTotal += 1
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
    this.vpTotal += 3
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
  if(countProvince > 0 && this.moneyInHand >= 1 && this.buyCount > 0) {
    countProvince -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 8;
    this.shufflePile = this.shufflePile.concat(allCards[5].splice(0, 1));
    this.vpTotal += 6
  } else if (this.moneyInHand < 8) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

//Market prototypes
Player.prototype.buyMarket = function(allCards) {
  if(countMarket > 0 && this.moneyInHand >= 5 && this.buyCount > 0) {
    countMarket -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 5;
    this.shufflePile = this.shufflePile.concat(allCards[14].splice(0, 1));
  } else if (countMarket === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 5) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.playMarket = function() {
  var startingIndex = this.hand.length
  this.hand = this.hand.concat(this.deck.splice(0,1));
  this.buyCount += 1;
  this.actionAcount += 1;
  this.moneyInHand += 1;
  if(this.hand[(this.hand.length - 1)].type="money") {
    this.moneyInHand += this.hand[(this.hand.length - 1)].value;
  }
  this.revealCardsFromAction(startingIndex);
}

//Woodcutter prototypes
Player.prototype.buyWoodcutter = function(allCards) {
  debugger;
  if(countWoodcutter > 0 && this.moneyInHand >= 3 && this.buyCount > 0) {
    countWoodcutter -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 3;
    this.shufflePile = this.shufflePile.concat(allCards[10].splice(0, 1));
  } else if (countWoodcutter === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 3) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.playWoodcutter = function() {
  debugger;
  this.buyCount += 1;
  this.moneyInHand += 2;
}

//Smithy prototypes
Player.prototype.buySmithy = function(allCards) {
  if(countSmithy > 0 && this.moneyInHand >= 4 && this.buyCount > 0) {
    countSmithy -= 1;
    this.buyCount -= 1;
    this.moneyInHand -= 4;
    this.shufflePile = this.shufflePile.concat(allCards[11].splice(0, 1));
  } else if (countSmithy === 0) {
    alert("This card has been bought out.");
  } else if (this.moneyInHand < 4) {
    alert("You don't have enough money in your hand to buy this card.");
  } else if (this.buyCount === 0) {
    alert("You don't have any buys remaining this turn");
  }
}

Player.prototype.playSmithy = function() {
  var startingIndex = this.hand.length
  this.hand = this.hand.concat(this.deck.splice(0,3));
  if(this.hand[(this.hand.length - 1)].type="money") {
    this.moneyInHand += this.hand[(this.hand.length - 1)].value;
  }
  if(this.hand[(this.hand.length - 2)].type="money") {
    this.moneyInHand += this.hand[(this.hand.length - 2)].value;
  }
  if(this.hand[(this.hand.length - 3)].type="money") {
    this.moneyInHand += this.hand[(this.hand.length - 3)].value;
  }
  this.revealCardsFromAction(startingIndex);
}


function findWinner(player1VPs,player2VPs,player1Name,player2Name) {
  if(player1VPs > player2VPs) {
    alert(player1Name + " is the winner with " + player1VPs + " victory points, over " + player2Name + "'s measly " + player2VPs + " victory points!");
  } else if (player1VPs < player2VPs) {
    alert(player2Name + " is the winner with " + player2VPs + " victory points, over " + player1Name + "'s measly " + player1VPs + " victory points!");
  } else if (player1VPs === player2VPs) {
    alert("Tie Game! Both players have " + player1VPs + " victory points!")
  }
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

function Player (playerName, deck, hand, shufflePile, vpTotal, turn, actionCount, buyCount, moneyInHand, turn) {
  this.playerName = playerName;
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
  this.player1 = new Player("King Arthur",[],[],allCards[3].splice(0,3).concat(allCards[0].splice(0,7)),0,1,0,0,0);
  this.player2 = new Player("Richard the Lionheart",[],[],allCards[3].splice(0,3).concat(allCards[0].splice(0,7)),0,0,0,0,0);
  this.player1VP = 0;
  this.player2VP = 0;
}
