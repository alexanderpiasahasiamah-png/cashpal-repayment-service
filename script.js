document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const confirmPayment = confirm("Make payment of 100 cedis to Tap CashPal?");

    if (confirmPayment) {
        alert("Payment Approved! Sent to Tap CashPal.");
        window.location.href = "success.html";
    } else {
        alert("Payment Cancelled.");
        window.location.href = "failure.html";
    }
});
