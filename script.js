document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const time = document.getElementById("time");
    const destination = document.getElementById("destination");
    const tickets = document.getElementById("tickets");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const timeError = document.getElementById("timeError");
    const destinationError = document.getElementById("destinationError");
    const ticketsError = document.getElementById("ticketsError");

    [nameError, emailError, timeError, destinationError, ticketsError].forEach(
      (e) => (e.textContent = "")
    );
    [name, email, time, destination, tickets].forEach((e) =>
      e.classList.remove("invalid")
    );

    if (!name.value.trim()) {
      nameError.textContent = "Nama pelanggan wajib diisi.";
      name.classList.add("invalid");
      isValid = false;
    } else if (name.value.length > 30) {
      nameError.textContent = "Nama pelanggan maksimal 30 karakter.";
      name.classList.add("invalid");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      emailError.textContent = "Email wajib diisi.";
      email.classList.add("invalid");
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = "Format email tidak valid.";
      email.classList.add("invalid");
      isValid = false;
    }

    const timePattern = /^([01]?\d|2[0-3])\.([0-5]\d)$/;
    if (!time.value.trim()) {
      timeError.textContent = "Jam keberangkatan wajib diisi.";
      time.classList.add("invalid");
      isValid = false;
    } else if (!timePattern.test(time.value)) {
      timeError.textContent = "Format jam tidak valid (hh.mm).";
      time.classList.add("invalid");
      isValid = false;
    }

    if (!destination.value.trim()) {
      destinationError.textContent = "Tujuan keberangkatan wajib diisi.";
      destination.classList.add("invalid");
      isValid = false;
    }

    const ticketValue = parseInt(tickets.value, 10);
    if (!tickets.value.trim()) {
      ticketsError.textContent = "Jumlah tiket wajib diisi.";
      tickets.classList.add("invalid");
      isValid = false;
    } else if (isNaN(ticketValue) || ticketValue < 1 || ticketValue > 10) {
      ticketsError.textContent = "Jumlah tiket harus antara 1-10.";
      tickets.classList.add("invalid");
      isValid = false;
    }

    if (isValid) {
      const output = document.getElementById("output");
      output.innerHTML = `
                    <h2>Data Valid</h2>
                    <p><strong>Nama Pelanggan:</strong> ${name.value}</p>
                    <p><strong>Email:</strong> ${email.value}</p>
                    <p><strong>Jam Keberangkatan:</strong> ${time.value}</p>
                    <p><strong>Tujuan Keberangkatan:</strong> ${destination.value}</p>
                    <p><strong>Jumlah Tiket:</strong> ${tickets.value}</p>
                `;
    }
  });
