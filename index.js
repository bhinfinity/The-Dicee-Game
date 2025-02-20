function saveNames() {
    var player1 = document.getElementById("player1Input").value || "Player 1";
    var player2 = document.getElementById("player2Input").value || "Player 2";
  
    sessionStorage.setItem("player1", player1);
    sessionStorage.setItem("player2", player2);
    sessionStorage.setItem("refreshed", true);
  
    document.getElementById("namePopup").style.display = "none"; // Hide name input
    document.getElementById("refreshPopup").style.display = "flex"; // Show roll button
    location.reload(); // Reload to start the game
  }
  
  // Check if names exist in sessionStorage
  if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2")) {
    document.getElementById("namePopup").style.display = "none";
    document.getElementById("refreshPopup").style.display = "flex";
  
    var player1 = sessionStorage.getItem("player1");
    var player2 = sessionStorage.getItem("player2");
  
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    document.querySelectorAll("div p")[0].innerHTML = player1;
    document.querySelectorAll("div p")[1].innerHTML = player2;
  
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  
    var heading = document.querySelector(".container h1");
    heading.innerHTML = randomNumber1 === randomNumber2 ? "Draw!" 
      : (randomNumber1 > randomNumber2 ? `🚩 ${player1} Wins!` : `${player2} Wins! 🚩`);
  }
  