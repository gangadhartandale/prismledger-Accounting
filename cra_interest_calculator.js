// ============================
// CRA INTEREST CALCULATOR
// Automatic Quarterly CRA Rates
// Daily Compounding
// ============================

// Quarterly CRA interest rates (you can update as CRA changes)
const craRates = [
  { start: "2024-01-01", end: "2024-03-31", rate: 10 },
  { start: "2024-04-01", end: "2024-06-30", rate: 10 },
  { start: "2024-07-01", end: "2024-09-30", rate: 10 },
  { start: "2024-10-01", end: "2024-12-31", rate: 10 }
];

// Convert date to YYYY-MM-DD for comparison
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

// Get CRA rate based on date
function getCRARate(dateStr) {
  for (let q of craRates) {
    if (dateStr >= q.start && dateStr <= q.end) {
      return q.rate;
    }
  }
  return craRates[craRates.length - 1].rate; // default last rate
}

// Main calculator
function calculateCRAInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

  if (!principal || !startDate || !endDate) {
    alert("Please fill all fields.");
    return;
  }

  let start = new Date(startDate);
  let end = new Date(endDate);

  if (end <= start) {
    alert("End date must be after start date.");
    return;
  }

  // Number of days between dates
  let days = Math.floor((end - start) / (1000 * 60 * 60 * 24));

  // Get CRA rate for the start date
  let rate = getCRARate(startDate);

  // Daily compounding
  let dailyRate = (rate / 100) / 365;
  let finalAmount = principal * Math.pow((1 + dailyRate), days);
  let interest = finalAmount - principal;

  // Output to UI
  document.getElementById("interest-output").innerText =
    "$" + interest.toFixed(2);

  document.getElementById("total-output").innerText =
    "$" + finalAmount.toFixed(2);

  document.getElementById("rate-output").innerText =
    rate + "% (automatic)";
}
