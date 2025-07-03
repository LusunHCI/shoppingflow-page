<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToInstructions = () => {
  router.push('/instructions')
}

// Add function to navigate to Chrome Web Store
const navigateToWebStore = () => {
  window.open(
    'https://chromewebstore.google.com/detail/kakkajiejbidhldoklefcgjgjamidpcb?utm_source=item-share-cb',
  )
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="content-container">
        <div class="text-section">
          <h2 class="sub-title">Conversational Agent Evaluation</h2>
          <p class="description">
            Your task is to finish two shopping tasks and evaluate the conversational agent that you are interacting with.
          </p>
          <div class="button-container">
            <button class="cta-button" @click="navigateToInstructions">
              <svg
                class="get-started-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              &nbsp;Get Started&nbsp;
            </button>
            <!-- <button class="cta-button pulse-button" @click="navigateToWebStore">
              <img
                src="@/assets/Google_Chrome_Web_Store_icon_2022.svg"
                alt="Chrome store logo"
                class="chrome-store-logo"
              />
              Install Plugin
            </button> -->
          </div>
        </div>
        <div class="image-section">
          <img
            src="@/assets/EvalAgentlogo.png"
            alt="Shopping feedback popup"
            class="popup-image"
            @click="navigateToWebStore"
            style="cursor: pointer"
          />
        </div>
      </div>
    </section>

    <footer class="footer">
      <p class="footer-text">
        A research project by
        <a href="https://hailab.io/" target="_blank">Northeastern University HAI Lab</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  padding-top: 0;
  padding-bottom: 4rem;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  padding: 0 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-container {
  padding-top: 2rem;
  display: flex;
  align-items: stretch;
  gap: 2rem;
  min-height: 350px;
}

.text-section {
  flex: 1;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.sub-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  align-self: stretch;
  overflow: hidden;
}

.popup-image {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

.button-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #77a8f5;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  gap: 12px;
}

.cta-button:hover {
  background-color: #5f83d2;
}

.get-started-icon {
  width: 24px;
  height: 24px;
  stroke: white;
}

.chrome-store-logo {
  width: 24px;
  height: 24px;
}

.features {
  flex: 1;
  margin-top: 0;
  margin-bottom: 0;
  min-width: 0;
}

.features h2 {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
  }

  .text-section {
    padding-right: 0;
    text-align: center;
  }

  .button-container {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .features + .features {
    margin-top: 1rem;
  }
  .image-section {
    padding: 0.5rem;
  }
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.5px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-title {
  animation: fadeIn 0.8s ease-out forwards;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 1.5rem;
  }
  .description {
    font-size: 1rem;
  }
}

.cta-button,
.chrome-store-button {
  width: 200px;
  height: 50px;
}

.cta-button.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.highlight {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
}

.criteria-list {
  text-align: left;
  display: inline-block;
  max-width: fit-content;
  margin: 0 auto;
}

.description a {
  color: #333;
  font-weight: 600;
}

.description a:hover {
  background-color: transparent;
  text-decoration: underline;
}

.chrome-store-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #4285f4;
  border: 1px solid #4285f4;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  margin-top: 0.5rem;
  gap: 10px; /* Space between logo and text */
}

.chrome-store-button:hover {
  background-color: #3367d6; /* Darker Google blue on hover */
}

.chrome-store-logo {
  width: 24px;
  height: 24px;
  display: inline-block;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #f8f9fa;
  z-index: 100;
}

.footer-text {
  color: #666;
  font-size: 1rem;
}

.footer-text a {
  color: #333;
  font-weight: 600;
  text-decoration: none;
}

.footer-text a:hover {
  color: #424242;
  background-color: #f0f0f0;
  border-bottom: 2px solid #424242;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(119, 168, 245, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(119, 168, 245, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(119, 168, 245, 0);
  }
}

.pulse-button {
  animation: pulse 1s infinite;
  position: relative;
  overflow: visible;
}

.pulse-button:hover {
  animation: none;
}
</style>
