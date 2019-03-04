var player01 = "";
var player02 = "";

var playing = function(){
  returnMath.floor(6 * Math.random()) + 1;
}

function gamer (turn) {
 this.play = 0;
 this.finalscore = 0;
 this.total = 0;
 this.next = next;
 this.playerIdentity;
}

gamer.prototype.roll = function(){
 if(this.play ===1 ) {
  this.finalscore = 0;
  alert ("TRY AGAIN" + this.playerIdentity);
}
 else {
 this.finalscore +=;

}
}

gamer.prototype.pause = function(){
 this.total += this.finalscore;
 this.tempscore = 0;
 alert(this.playerIdentity + "NEXT PLAYER");
}
gamer.prototype.number1Confirm = function () {
 if (this.total >= 100) {
 alert(this.playerIdentity + "YOU WON");
}
}

gamer.prototype.freshGame = function () {
  this.play = 0;
  this.finalscore = 0;
  this.total = 0;
  this.playerIdentity = "" ;
 }

var renew = function () {
 $("")
}


}
