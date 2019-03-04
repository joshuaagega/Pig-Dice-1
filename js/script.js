p1total = 0
score = 0
p2total = 0
score2 = 0

function Player(name) {
  this.name = name
}

function Turn2() {
  document.getElementById('player001s').disabled = true
  document.getElementById('player002').disabled = false
  p1total = 0

}

function Turn1() {
  document.getElementById('player002').disabled = true
  document.getElementById('player001s').disabled = false

  p2total = 0

}
$(document).ready(function() {
  $("#button00").click(function() {
    var player1 = new Player(this.name = $("input.gamername1").val())
    alert(player1.name)
    $("span#player01").text(player1.name)
    var player2 = new Player(this.name = $("input.gamername2").val())
    $("span#player02").text(player2.name)
  })
  $("#player001s").click(function() {
    var rolled = Math.floor((Math.random() * 6) + 1)
    $("#rolls001").text(rolled);
    if (rolled == 1) {
      alert("Sorry You rolled a 1")

      Turn2()
    } else {
      p1total += rolled;

    }

    $("#total001").text(p1total);

    $("#player011").click(function(event) {

      score += p1total;
      alert(score)
      if (score < 100) {
        Turn2()
      } else {
        alert("You won")
      }
    });

  });

  $("#player002").click(function() {
    var rolled = Math.floor((Math.random() * 6) + 1)
    $("#rolls002").text(rolled);
    if (rolled == 1) {
      alert("Sorry You rolled a 1")
      p2total = 0
      Turn1()

    } else {
      p2total += rolled;
    }

    $("#total002").text(p2total);
    $("#player022").click(function(event) {
      event.preventDefault();

      score2 += p2total
      alert(score2)
      if (score2 < 100) {
        Turn1()
      } else {
        alert("You won")
      }
    });
  });
})
