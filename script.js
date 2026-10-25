
const reservationForm = document.getElementById("reservation-form");
const formMessage = document.getElementById("form-message");

if (reservationForm && formMessage) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document
      .getElementById("guest-name")
      .value
      .trim();

    formMessage.textContent =
      `Thank you, ${guestName}! Your enquiry has been received.`;

    reservationForm.reset();
  });
}

