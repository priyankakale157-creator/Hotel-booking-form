document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);
    const message = document.getElementById("message");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Validation: No past dates
    if (checkin < today) {
      message.style.color = "red";
      message.textContent = "Check-in date cannot be in the past!";
      return;
    }

    // Validation: Checkout after checkin
    if (checkout <= checkin) {
      message.style.color = "red";
      message.textContent = "Check-out date must be after check-in date!";
      return;
    }

    // Success Message
    message.style.color = "green";
    message.textContent = "Booking Successful!";
  });
