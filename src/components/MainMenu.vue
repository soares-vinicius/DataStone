<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <section class="menu">
      <img
        alt="Vue logo"
        class="menu--logo"
        src="@/assets/images/logo.svg"
        width="125"
        height="125"
      />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/clients">Clientes</RouterLink>
      </nav>
    </section>
  </header>
</template>

<style scoped lang="scss">
@import "src/assets/scss/menu/MainMenu.scss";
</style>
