<script setup lang="ts">
import { useRouter } from "vue-router";
import TheTitle from "../components/TheTitle.vue";
import CardItem from "../components/CardItem.vue";
import { documentMask, phoneMask } from "../utils/mask";

const router = useRouter();

function goCreate() {
  router.push({ path: "/clients/create" });
}

let clients = [
  {
    id: "0",
    name: "Yuji Itadori",
    document: "04527331205",
    email: "yuji@itadori.kaizen",
    phone: "2199999999",
    status: true,
  },
  {
    id: "1",
    name: "Kei Shirogane",
    document: "11368851290",
    email: "shiroe@loghorizon.com",
    phone: "22888888888",
    status: false,
  },
  {
    id: "2",
    name: "Saphira Eragon",
    document: "23060908826",
    email: "saphira@eragon.com",
    phone: "21990209302",
    status: true,
  },
];

if (localStorage.getItem("clients")) {
  clients = JSON.parse(localStorage.getItem("clients") as string);
} else {
  localStorage.setItem("clients", JSON.stringify(clients));
}
</script>

<template>
  <main class="about">
    <div class="about--header">
      <TheTitle text="Clientes" />
      <button type="button" @click="goCreate">Criar</button>
    </div>

    <div class="about--legends">
      <p><span class="about--legends--active"> </span>Ativo</p>
      <p><span class="about--legends--inactive"> </span>Inativo</p>
    </div>

    <div class="about--cards">
      <CardItem
        v-for="client in clients"
        :key="client.id"
        :name="client.name"
        :document="documentMask(client.document)"
        :email="client.email"
        :phone="phoneMask(client.phone)"
        :status="client.status"
        :to="{ path: '/clients/create', query: { clientID: client.id } }"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "src/assets/scss/clients/ClientsView.scss";
</style>
