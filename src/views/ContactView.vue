<template>
  <div class="contact">
    <h1 class="text-2xl font-bold mb-4">Contact Us</h1>
    <div class="contact-container">
      <div class="contact-info">
        <h2 class="text-lg font-bold mb-4">Get in Touch</h2>
        <div class="info-item">
          <p>
            Hi, we are researchers from
            <a href="https://hailab.io/" target="_blank">Northeastern University HAI Lab</a>.
            <br />
            <br />
            Have questions or bug reports? We'd love to hear from you! We normally respond within 24
            hours.
          </p>
          <br />
          <strong>Email:</strong>
          <a href="mailto:l5sun@ucsd.edu" class="email-link">
            <i class="fas fa-envelope"></i>l5sun@ucsd.edu
          </a>
        </div>
        <div class="info-item">
          <strong>Address: 440 Huntington Avenue, 310C West Village H, Boston, MA 02115</strong>
        </div>
      </div>

      <!-- <form class="contact-form">
        <h2>Send a Message</h2>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message"></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form> -->
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.contact-container {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  gap: 2rem;
  align-items: center;
  flex-direction: column;
}

.contact-info,
.contact-form {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #85afc4;
  margin-bottom: 1rem;
}

.info-item {
  margin-bottom: 1rem;
}

.email-link {
  color: #85afc4;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;
  word-break: break-all;
  display: inline-block;
}

.email-link:hover {
  color: #334753;
  background-color: #f0f0f0;
  text-decoration: underline;
}

.fa-envelope {
  margin-right: 5px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.submit-button {
  background-color: #4361ee;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #3a56d4;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form {
    order: 1;
  }
}
a {
  color: #85afc4;
  text-decoration: none;
  padding: 3px;
  transition: 0.3s;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
  color: #648da2;
  background-color: transparent;
}
</style>
