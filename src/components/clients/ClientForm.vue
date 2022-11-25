<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const clientID = route.query.clientID;

let client = { name: "", document: "", email: "", phone: "", status: false };

if (clientID && localStorage.getItem("clients")) {
  const clients = JSON.parse(localStorage.getItem("clients") as string);

  client = clients.find((item: any) => item.id === clientID);
}

const name = ref(client.name);
const document = ref(client.document);
const phone = ref(client.phone);
const email = ref(client.email);
const status = ref(client.status);

const send = () => {
  const clients = JSON.parse(localStorage.getItem("clients") as string);

  const sendObject = {
    name: name.value,
    document: document.value,
    phone: phone.value,
    status: status.value,
    email: email.value,
    id: (clients.length + 1).toString(),
  };

  if (clientID) {
    sendObject.id = clientID;
    const newclients = clients.map((item: any) =>
      item.id !== clientID ? item : sendObject
    );

    localStorage.setItem("clients", JSON.stringify(newclients));
    router.push("/clients");
  } else {
    const newclients = [...clients, sendObject];
    localStorage.setItem("clients", JSON.stringify(newclients));
    router.push("/clients");
  }
};
</script>

<template>
  <form>
    <div class="input-container">
      <label for="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="name"
        placeholder="Insira o nome do client"
      />
    </div>

    <div class="input-container">
      <label for="document">CPF</label>
      <input
        type="text"
        id="document"
        name="document"
        v-model="document"
        placeholder="Insira o CPF do client"
      />
    </div>

    <div class="input-container">
      <label for="email">E-mail</label>
      <input
        type="text"
        id="email"
        name="email"
        v-model="email"
        placeholder="E-mail"
      />
    </div>

    <div class="input-container">
      <label for="phone">Telefone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        v-model="phone"
        placeholder="Telefone"
      />
    </div>

    <div class="input-container">
      <label for="status">Status</label>
      <div class="input-container-status">
        <input type="checkbox" id="status" name="status" v-model="status" />
        <span>{{ status ? "Ativo" : "Inativo" }}</span>
      </div>
    </div>

    <button type="button" @click="send">
      {{ clientID ? "Editar" : "Criar" }}
    </button>
  </form>
</template>

<style scoped lang="scss">
@import "src/assets/scss/clients/ClientCreate.scss";
</style>
