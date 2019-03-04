var player01 = "";
var player02 = "";

var playing = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function gamer(turn) {
  this.play = 0;
  this.finalscore = 0;
  this.total = 0;
  this.playerIdentity;
}

gamer.prototype.roll = function() {
  if (this.play === 1) {
    this.finalscore = 0;
    alert("TRY AGAIN" + this.playerIdentity);
  } else {
    this.total += this.play;

  }
}

gamer.prototype.pause = function() {
  this.total += this.finalscore;
  this.tempscore = 0;
  alert(this.playerIdentity + "NEXT PLAYER");
}
gamer.prototype.number1Confirm = function() {
  if (this.total >= 100) {
    alert(this.playerIdentity + "YOU WON");
  }
}

gamer.prototype.freshGame = function() {
  this.play = 0;
  this.finalscore = 0;
  this.total = 0;
  this.playerIdentity = "";
}

var renew = function() {
  $("gamername1").val("");
  $("gamername2").val("");
}

$(document).ready(function() {

  $("button#button00").click(function(event) {
    gamer00 = new gamer(true);
    gamer01 = new gamer(false);
    $(".back-page").show();
    $(".front-page").hide();

    var gamername1 = $(".gamername1").val();
    $("#gamername1").text(gamername1);

    var gamername2 = $(".gamername2").val();
    $("#gamername2").text(gamername2);

    gamer00.gamername = gamername1;
    gamer01.gamername = gamername2;

  });
  $("button#button1").click(function(event) {
    $(".back-page").hide();
    clearValues();
    gamer00.freshGame();
    gamer01.freshGame();
    $("#round00").empty();
    $("#total001").empty();
    $("#rolls001").empty();
    $("#round001").empty();
    $("#total002").empty();
    $("#rolls002").empty();

    $(".front-page").show();
  });

  $("button#player001").click(function(event) {
    gamer00.play = playing();
    $("#rolls001").text(gamer1.play);
    gamer00.rollone();
    $("#round00").text(gamer1.finalscore);
  });

  $("button#player002").click(function(event) {
    gamer01.play = playing();
    $("#rolls002").text(gamer2.play);
    gamer01.rollone();
    $("#round001").text(gamer2.finalscore);
  });

  $("button#player011").click(function(event) {
    gamer00.hold();
    $("#total001").text(gamer1.total);
    $("#round00").empty();
    $("#rolls001").empty();
    gamer00.number1Confirm();
  });

  $("button#player022").click(function(event) {
    gamer01.pause();
    $("#total002").text(gamer2.total);
    $("#round001").empty();
    $("#rolls002").empty();
    gamer01.number1Confirm();
  });

});
