<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="home">
    <header>
      <div class="left-section">
        <RouterLink to="/" class="logo-container">
          <img
            alt="ShoppingFlow logo"
            class="logo"
            src="@/assets/fancier_icon128.png"
            width="60"
            height="60"
          />
          <h1 class="project-title"></h1>
        </RouterLink>
      </div>

      <div class="right-section">
        <nav>
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <RouterLink to="/instructions">Instructions</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.n-layout {
  min-height: 100vh;
}

.home {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* 防止水平滚动条 */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  margin: 0;
  left: 0;
  right: 0;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.logo-container:hover {
  color: #424242;
  background-color: #f0f0f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo-container:hover .project-title {
  color: #424242;
}

.logo-container:hover .logo {
  transform: scale(1.05);
}

.logo {
  margin: 0;
}

.project-title {
  margin: 0 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
}

.right-section {
  display: flex;
  font-size: 1rem;
}

nav {
  display: flex;
  margin: 0;
  text-align: right;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-left: none;
  transition: all 0.3s;
  font-family: 'Roboto Mono', monospace;
}

nav a:hover {
  color: #424242;
  background-color: #f0f0f0;
  border-bottom: 2px solid #424242;
}

nav a.router-link-exact-active {
  color: #424242;
  font-weight: 600;
  border-bottom: 2px solid #424242;
}

main {
  padding: 0;
  margin: 0 auto;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 1rem;
    position: sticky;
    top: 0;
    width: 100%;
  }
  .project-title {
    font-size: 1.2rem;
  }
  .left-section {
    margin-bottom: 1rem;
  }

  nav {
    margin-top: 0.5rem;
  }
}
</style>
