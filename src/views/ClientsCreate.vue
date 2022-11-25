<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import TheTitle from "../components/TheTitle.vue";
import ClientForm from "../components/clients/ClientForm.vue";

const route = useRoute();

const clientID = route.query.clientID;
</script>

<template>
  <main>
    <TheTitle :text="clientID ? 'Editar Cliente' : 'Criação de Cliente'" />
    <RouterLink to="/clients">Voltar</RouterLink>
    <ClientForm />
  </main>
</template>
