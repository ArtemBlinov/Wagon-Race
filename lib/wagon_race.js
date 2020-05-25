// TODO: write your code here
const player1 = document.querySelectorAll("#player1_race td");
const player2 = document.querySelectorAll("#player2_race td");

let x = 0;
let y = 0;

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName === 'w') {
    if (player1[x].className == "active") {
       player1[x].classList.remove("active");
       player1[x + 1].classList.add("active");
       x++;
    }
  }

  if (keyName === 'e') {
    if (player2[y].className == "active") {
       player2[y].classList.remove("active");
       player2[y + 1].classList.add("active");
       y++;
    }
  }

  if (x == 28 && x > y) {
    alert("Player 1 won! 🤙");
    location.reload();
  }

  if (y == 28 && y > x) {
    alert("Player 2 won! 🤙");
    location.reload();
  }
});
