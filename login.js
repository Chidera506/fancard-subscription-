const fanCards = {
  cindy: {
    id: "cindy",
    displayName: "Cindy Lea Lauer",
    password: "TRUSTQFG533H",
    membershipLevel: "gold",
    image: "cards/cindy-card.jpg"
  },
  barb: {
    id: "barb",
    displayName: "Barb Hill",
    password: "BARB2025",
    membershipLevel: "gold",
    image: "cards/barb-card.jpg"
  },
  sandy: {
    id: "sandy",
    displayName: "Sandy",
    password: "SANDYLOVESJORDAN",
    membershipLevel: "silver",
    image: "cards/sandy-card.jpg"
  }
};

const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fanName").value.trim().toLowerCase();
  const pass = document.getElementById("fanPassword").value.trim();

  const fan = fanCards[name];

  if (!fan) {
    errorMessage.textContent = "Name not found";
    return;
  }

  if (fan.password !== pass) {
    errorMessage.textContent = "Incorrect password";
    return;
  }

  errorMessage.textContent = "";
  localStorage.setItem("fan", JSON.stringify(fan));
  window.location.href = "fan-card.html";
});
