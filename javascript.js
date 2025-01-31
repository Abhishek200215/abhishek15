// <!-- JavaScript for Modal and Menu Toggle -->

   // About modal
   const aboutBtn = document.getElementById('aboutBtn');
   const aboutModal = document.getElementById('aboutModal');
   const closeModal = document.getElementById('closeModal');
   
   aboutBtn.addEventListener('click', function() {
       aboutModal.style.display = 'flex';
   });
   
   closeModal.addEventListener('click', function() {
       aboutModal.style.display = 'none';
   });
   
   // Close modal when clicked outside
   window.addEventListener('click', function(e) {
       if (e.target === aboutModal) {
           aboutModal.style.display = 'none';
       }
   });
   
   // Toggle menu for mobile
   const menuToggle = document.getElementById('menuToggle');
   const navMenu = document.querySelector('header nav ul');
   
   menuToggle.addEventListener('click', function() {
       navMenu.classList.toggle('active');
   });
   
   // Infinite Typing Effect
   document.addEventListener('DOMContentLoaded', function() {
       const typingElement = document.getElementById('typing-effect');
       const phrases = ['Web Developer', 'Email Template Developer', 'Landing Page Developer']; 
       let phraseIndex = 0;
       let i = 0;
   
       // Function to type the text
       function typeText() {
           typingElement.textContent = ''; 
           let currentPhrase = phrases[phraseIndex];
           i = 0;
   
           function typing() {
               if (i < currentPhrase.length) {
                   typingElement.textContent += currentPhrase.charAt(i); 
                   i++;
                   setTimeout(typing, 80); 
               } else {
                   setTimeout(() => {
                       phraseIndex = (phraseIndex + 1) % phrases.length;
                       typeText(); 
                   }, 1000); 
               }
           }
   
           typing();
       }
   
       // Start the typing effect
       typeText();
   });
   
   // JavaScript for enhanced functionality
   const form = document.getElementById('contactForm');
   
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       const name = document.getElementById('name').value.trim();
       const email = document.getElementById('email').value.trim();
       const message = document.getElementById('message').value.trim();
   
       if (name && email && message) {
           alert(`Thank you, ${name}! Your message has been sent.`);
           form.reset();
       } else {
           alert('Please fill in all fields before submitting.');
       }
   });
    
      // JavaScript for Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show/Hide the button based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollToTopBtn.style.display = 'flex';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scroll effect
      });
  });

// <!--	for Dark mode-->

   const toggleButton = document.getElementById('toggleMode');
   const themeIcon = document.getElementById('toggleMode');
   
   toggleButton.addEventListener('click', () => {
       document.body.classList.toggle('dark-mode');
       if (document.body.classList.contains('dark-mode')) {
           themeIcon.classList.replace('fa-sun', 'fa-moon');
       } else {
           themeIcon.classList.replace('fa-moon', 'fa-sun');
       }
   });

   document.getElementById('downloadButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent immediate download to show custom action

    // Simulate loading animation or show confirmation
    this.innerHTML = "Preparing...";
    setTimeout(() => {
      window.location.href = this.href;  // After 2 seconds, proceed with the download
    }, 2000);  // Adjust the delay as needed for your desired functionality
  });


  window.onload = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
 
    progressBars.forEach(bar => {
       const width = bar.getAttribute('data-width');
       bar.style.width = width + '%';
    });
 };


 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from reloading

    var formData = new FormData(this);

    fetch("send-message.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMsg").innerText = data; // Show success/error message
    })
    .catch(error => console.error("Error:", error));
});
 
    
    
