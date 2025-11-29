// =============================
// CRA INTEREST CALCULATOR (Daily Compound)
// Auto-Quarterly Rates – Prismledger
// =============================

// CRA quarterly interest rates (debt owed to CRA)
// SOURCE: CRA prescribed interest rates by quarter
// Format: "YYYY-Q#" : interest rate %
const craRates = {
  "2024-Q1": 10.0,
  "2024-Q2": 10.0,
  "2024-Q3": 10.0,
  "2024-Q4": 10.0,
  "2025-Q1": 10.0, 
  "2025-Q2": 10.0  
};

// Get CRA rate for any date
function getQuarterRate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    let quarter = Math.ceil(month / 3);
    return craRates[`${year}-Q${quarter}`] || 10.0;
}

// Calculate daily compounded interest
function calculateCRAInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid amount owing.");
        return;
    }

    if (startDate >= endDate) {
        alert("End date must be after start date.");
        return;
    }

    let currentDate = new Date(startDate);
    let finalAmount = principal;
    
    while (currentDate < endDate) {
        const rate = getQuarterRate(currentDate);
        const dailyRate = (rate / 100) / 365;
        finalAmount *= (1 + dailyRate);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const interest = finalAmount - principal;

    document.getElementById("result").innerHTML = `
        <p><strong>Interest Charged:</strong> $${interest.toFixed(2)}</p>
        <p><strong>Total Amount Owing:</strong> $${finalAmount.toFixed(2)}</p>
    `;
}
