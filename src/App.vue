<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header className="bg-light header">
    <b-nav>
      <b-nav-item>
        <RouterLink to="/">User</RouterLink>
      </b-nav-item>
      <b-nav-item>
        <RouterLink to="/invoice">Invoice</RouterLink>
      </b-nav-item>
    </b-nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  border-radius: 0.5px;
}


.nav a.router-link-exact-active {
  color: var(--color-text);
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: flex;
  padding: 0 1rem;
}

.nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flow;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
