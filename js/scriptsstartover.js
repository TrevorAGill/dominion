$(document).ready(function() {
  var game = new Game();
  Game.allCards();
  debugger;
});

function Player (name, deck, hand, discard, vpTotal, turn) {
  this.name = name;
  this.deck = deck;
  this.hand = hand;
  this.discard = discard;
  this.vpTotal = vpTotal;
  this.turn = turn;
}

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

function Game (allCards) {
  this.players = 2;
  this.turn = 1;
  this.player1 = new Player("King Arthur",[],[],[],0,1);
  this.player2 = new Player("Richard the Lionheart",[],[],[],0,0);
}

  Game.allCards = function() {
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
