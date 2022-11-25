<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  name: string;
  document: string;
  email: string;
  phone: string;
  status: boolean;
  to: any;
}>();
</script>

<template>
  <RouterLink :to="to" :class="status ? 'card' : 'card red'">
    <div class="card--details">
      <div class="card--details--information">
        <h3>
          {{ name }}
        </h3>
        <p>{{ document }}</p>
      </div>

      <div class="card--details--contact">
        <p>
          {{ email }}
        </p>
        <p>{{ phone }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;
  position: relative;
  display: flex;
  width: 100%;
  background-color: var(--color-light);
  border-radius: 10px;
  padding: 15px 35px 15px 25px;
  margin: 5px 0;

  &.red::after {
    background-color: var(--color-red);
  }

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 20px;
    background-color: var(--color-green-vue);
    right: 0;
    top: 0;
    border-radius: 0 10px 10px 0;
  }

  &:hover {
    transform: translateX(20px);
  }

  h3 {
    font-weight: bold;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }

  &--details {
    display: flex;
    align-items: center;
    width: 100%;

    &--information {
      flex: 1;
    }
  }
}
</style>
