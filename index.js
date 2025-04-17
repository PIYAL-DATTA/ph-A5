// Current date & day
const date = new Date();
//   Date
const formattedDate = date
  .toLocaleDateString("en-US", {
    month: "short", // Abbreviated month (Jul)
    day: "2-digit", // Two-digit day (28)
    year: "numeric", // Full year (2025)
  })
  .replace(",", ""); // Remove comma
document.getElementById("date").innerText = formattedDate;

// Day
const dayName = date.toLocaleDateString("en-US", {
  weekday: "short", // Abbreviated day name (e.g., "Wed")
});
document.getElementById("day").innerText = dayName + " ,";
// ===========================================================================>

function completedTask() {
  let val = document.getElementById("task").innerText;
  val = parseInt(val) - 1;
  if (val === 0) {
    alert("Congrates!!! you have completed all the current task");
  }
  val = "0" + val;
  document.getElementById("task").innerText = val;

  let temp = document.getElementById("done").innerText;
  temp = parseInt(temp) + 1;
  temp = temp;
  document.getElementById("done").innerText = temp;
}

function activity(title) {
  // Time
  const date = new Date(); // Current time, or pass a specific time like new Date('2025-07-28T12:48:15')
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit", // Two-digit hour (12)
    minute: "2-digit", // Two-digit minute (48)
    second: "2-digit", // Two-digit second (15)
    hour12: true, // Use 12-hour format with AM/PM
  });
  const newElement = document.createElement("p");
  let val = document.getElementById(title).innerText;
  newElement.innerText =
    "You have Complete The Task " + val + " at " + formattedTime;
  newElement.className =
    "bg-[#F4F7FF] p-3 poppins text-base font-normal rounded-lg mb-6";
  const parent = document.getElementById("Activity");
  parent.append(newElement);
}

// ShopEase
document.getElementById("ShopEase_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "ShopEase";
  activity(title);
});
// CloudSync
document.getElementById("CloudSync_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "CloudSync";
  activity(title);
});
// SwiftPay
document.getElementById("SwiftPay_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "SwiftPay";
  activity(title);
});
// Meta
document.getElementById("Meta_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "Meta";
  activity(title);
});
// Google LLC
document.getElementById("GLC_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "Google";
  activity(title);
});
// Glassdoar
document.getElementById("Gd_btn").addEventListener("click", function () {
  alert("Board updated Successfully");
  this.disabled = true;
  this.style.opacity = "0.2";
  completedTask();
  let title = "Glassdoar";
  activity(title);
});

// History
document.getElementById("History_btn").addEventListener("click", function () {
  document.getElementById("Activity").innerHTML = "";
});

// Multicolor Background
document.getElementById("theme").addEventListener("click", function () {
  let bg = document.getElementById("body");
  let randomInt = Math.floor(Math.random() * 0x1000000); // 0 to 16777215 (FFFFFF in decimal)
  let hex = randomInt.toString(16).padStart(6, "0");
  bg.className = "bg-[#" + hex + "] poppins mb-6";
});
