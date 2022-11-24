<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <section class="menu">
      <img
        alt="Vue logo"
        class="menu--logo"
        src="@/assets/logo.svg"
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
header {
  background-color: var(--color-light);

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1080px;
    max-height: 70px;
    margin: 0 auto;

    &--logo {
      width: 50px;
    }

    nav {
      font-size: 1rem;
      text-align: center;

      a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-gray);

        &:first-of-type {
          border: 0;
        }

        &.router-link-exact-active {
          color: var(--color-green-vue);

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
