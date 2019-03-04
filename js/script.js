var player01 = "";
var player02 = "";

var playing = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function gamer() {
  this.play = 0;
  this.finalscore = 0;
  this.total = 0;
  this.turn;
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
  this.finalscore = 0;
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
  $(".gamername1").val("");
  $(".gamername2").val("");
}

$(document).ready(function() {

  $("button#button00").click(function(event) {
    player01 = new gamer(true);
    player02 = new gamer(false);
    $("").show();
    $("").hide();

    var gamername1 = $(".gamername1").val();
    $("#gamername1").text(gamername1);

    var gamername2 = $(".gamername2").val();
    $("#gamername2").text(gamername2);

    player01.gamername = gamername1;
    player02.gamername = gamername2;

  });
  $("button#button1").click(function(event) {
    $("").hide();
    clearValues();
    player01.freshGame();
    player02.freshGame();
    $("#round00").empty();
    $("#total001").empty();
    $("#rolls001").empty();
    $("#round001").empty();
    $("#total002").empty();
    $("#rolls002").empty();

    $("").show();
  });

  $("button#player001").click(function(event) {
    player01.play = playing();
    $("#rolls001").text(player01.play);
    player02.rollone();
    $("#round00").text(player01.finalscore);
  });

  $("button#player002").click(function(event) {
    player02.play = playing();
    $("#rolls002").text(player02.play);
    player02.rollone();
    $("#round001").text(player02.finalscore);
  });

  $("button#player011").click(function(event) {
    player01.pause();
    $("#total001").text(player01.total);
    $("#round00").empty();
    $("#rolls001").empty();
    player01.number1Confirm();
  });

  $("button#player022").click(function(event) {
    player02.pause();
    $("#total002").text(player02.total);
    $("#round001").empty();
    $("#rolls002").empty();
    player02.number1Confirm();
  });

});
