const fan = JSON.parse(localStorage.getItem("fan"));

if (!fan) {
  window.location.href = "index.html";
}

// Basic header
document.getElementById("welcomeMsg").textContent = `Welcome queen, ${fan.displayName} 💛`;
document.getElementById("cardTitle").textContent = `${fan.displayName} • Official Fan Card`;

// Membership badge
const badge = document.getElementById("membershipBadge");
badge.classList.add("membership-" + fan.membershipLevel);
badge.textContent =
  fan.membershipLevel === "gold"
    ? "Gold Member • VIP Queen ✨"
    : fan.membershipLevel === "silver"
    ? "Silver Member • Special Access ⭐"
    : "Bronze Member • Loyal Fan 🧡";

// Card image
const cardImage = document.getElementById("cardImage");
cardImage.src = fan.image;
cardImage.alt = `${fan.displayName} Fan Card`;

// Animate
setTimeout(() => document.querySelector(".animated-card").classList.add("show"), 10);

// Status elements
const statusSection = document.getElementById("statusSection");
const statusTitle = document.getElementById("statusTitle");
const statusMessage = document.getElementById("statusMessage");
const priceList = document.getElementById("priceList");
const actionButton = document.getElementById("actionButton");
const actionHint = document.getElementById("actionHint");

// Popup elements
const popup = document.getElementById("paymentPopup");
const popupMessage = document.getElementById("popupMessage");

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "flex";
}
function closePopup() {
  popup.style.display = "none";
}

// Make closePopup available to HTML
window.closePopup = closePopup;

// Default hide
statusSection.style.display = "none";

// CINDY — subscription
if (fan.id === "cindy") {
  statusSection.style.display = "block";
  statusTitle.textContent = "✓ Activation completed";
  statusTitle.classList.add("status-success");

  statusMessage.textContent =
    "Cindy, you haven't subscribed your fan card yet. Choose a subscription level below:";

  priceList.innerHTML = `
    <ul>
      <li><span>Diamond 🔹 subscription</span><span class="tier-price">$7,000</span></li>
      <li><span>Gold 🥇 subscription</span><span class="tier-price">$6,500</span></li>
      <li><span>Silver subscription</span><span class="tier-price">$5,500</span></li>
      <li><span>Bronze 🥉 subscription</span><span class="tier-price">$4,500</span></li>
    </ul>
  `;

  actionButton.textContent = "Subscribe Now";
  actionButton.href = "#";
  actionButton.onclick = (e) => {
    e.preventDefault();
    showPopup("Please complete your payment of $2,000 to activate your subscription and enjoy full VIP benefits 💳✨");
  };

  actionHint.textContent = "After payment, your subscription will be confirmed by management.";

// BARB — activation
} else if (fan.id === "barb") {
  statusSection.style.display = "block";
  statusTitle.textContent = "Barb, your fan card is not yet Activated";
  statusTitle.classList.add("status-warning");

  statusMessage.textContent =
    "Complete your activation by choosing one of the options below:";

  priceList.innerHTML = `
    <ul>
      <li><span>Diamond 🔹 activation</span><span class="tier-price">$5,000</span></li>
      <li><span>Gold 🥇 activation</span><span class="tier-price">$4,500</span></li>
      <li><span>Silver activation</span><span class="tier-price">$3,500</span></li>
      <li><span>Bronze 🥉 activation</span><span class="tier-price">$2,500</span></li>
    </ul>
  `;

  actionButton.textContent = "Activate Now";
  actionButton.href = "#";
  actionButton.onclick = (e) => {
    e.preventDefault();
    showPopup("You are not done with your payment yet to activate your fan card 💳. Please complete your payment to proceed.");
  };

  actionHint.textContent = "After payment, your activation will be confirmed by management.";
} else {
  // Sandy and others
  statusSection.style.display = "none";
}

// Logout
function goBack() {
  localStorage.removeItem("fan");
  window.location.href = "index.html";
}
window.goBack = goBack;
