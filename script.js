// Scroll to Subscription Form
function scrollToForm() {
    document.getElementById("subscribe").scrollIntoView({ behavior: "smooth" });
  }
  
  // Subscription Form
  function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");
  
    // Simple email validation
    if (email.includes("@")) {
      message.textContent = "¡Gracias por suscribirte!";
      message.style.color = "lightgreen";
    } else {
      message.textContent = "Por favor, ingresa un correo válido.";
      message.style.color = "red";
    }
  
    document.getElementById("subscriptionForm").reset();
  }
  