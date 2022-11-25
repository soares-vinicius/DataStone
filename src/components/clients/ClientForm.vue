<script setup lang="ts">
import TheLoading from "../TheLoading.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      form: { name: "", document: "", email: "", phone: "", status: false },
      error: new Object() as any,
      submitted: false,
      isSubmitting: false,
    };
  },

  methods: {
    validate({ name, document, email, phone }: any) {
      this.error = new Object() as any;
      let invalid = false;

      if (!name) {
        invalid = true;
        this.error.name = "Insira um nome!";
      }
      if (!document) {
        invalid = true;
        this.error.document = "Insira um documento!";
      }
      if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        invalid = true;
        this.error.email = "Insira um e-mail válido!";
      }
      if (!phone) {
        invalid = true;
        this.error.phone = "Insira um número de telefone válido!";
      }

      return invalid;
    },

    dealey(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    checkForm(e: any) {
      e.preventDefault();
      this.isSubmitting = true;

      const sendObject = {
        name: this.form.name,
        document: this.form.document,
        phone: this.form.phone,
        status: this.form.status,
        email: this.form.email,
        id: (this.clients.length + 1).toString(),
      };

      if (this.validate(this.form)) {
        this.isSubmitting = false;
        return;
      }

      this.dealey(2000).then(() => {
        if (this.clientID) {
          sendObject.id = this.clientID;
          const newclients = this.clients.map((item: any) =>
            item.id !== this.clientID ? item : sendObject
          );

          localStorage.setItem("clients", JSON.stringify(newclients));
          this.$router.push("/clients");
        } else {
          const newclients = [...this.clients, sendObject];
          localStorage.setItem("clients", JSON.stringify(newclients));
          this.isSubmitting = false;
          this.submitted = true;
          this.$router.push("/clients");
        }
      });
    },
  },

  mounted() {
    if (this.clientID) {
      const client = this.clients.find(
        (item: any) => item.id === this.clientID
      );

      this.form = {
        name: client.name,
        document: client.document,
        phone: client.phone,
        status: client.status,
        email: client.email,
      };
    }
  },

  computed: {
    clientID() {
      if (this.$route.query.clientID) {
        return this.$route.query.clientID;
      }
      return null;
    },

    clients() {
      return JSON.parse(localStorage.getItem("clients") as string);
    },
  },
};
</script>

<template>
  <form @submit="checkForm">
    <div class="input-container">
      <label for="name">Nome*</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="form.name"
        placeholder="Insira o nome do client"
        required
      />
      <span v-if="error.name" class="error">{{ error.name }}</span>
    </div>

    <div class="input-container">
      <label for="document">CPF*</label>
      <input
        type="text"
        id="document"
        name="document"
        v-model="form.document"
        placeholder="Insira o CPF do client"
        required
      />
      <span v-if="error.document" class="error">{{ error.document }}</span>
    </div>

    <div class="input-container">
      <label for="email">E-mail*</label>
      <input
        type="text"
        id="email"
        name="email"
        v-model="form.email"
        placeholder="E-mail"
        required
      />
      <span v-if="error.email" class="error">{{ error.email }}</span>
    </div>

    <div class="input-container">
      <label for="phone">Telefone*</label>
      <input
        type="text"
        id="phone"
        name="phone"
        v-model="form.phone"
        placeholder="Telefone"
        required
      />
      <span v-if="error.phone" class="error">{{ error.phone }}</span>
    </div>

    <div class="input-container">
      <label for="status">Status</label>
      <div class="input-container-status">
        <input
          type="checkbox"
          id="status"
          name="status"
          v-model="form.status"
        />
        <span>{{ form.status ? "Ativo" : "Inativo" }}</span>
      </div>
    </div>

    <button type="submit" :disabled="isSubmitting">
      <span v-if="!isSubmitting">{{ clientID ? "Editar" : "Criar" }}</span>
      <TheLoading v-if="isSubmitting" />
    </button>
  </form>
</template>

<style scoped lang="scss">
@import "src/assets/scss/clients/ClientCreate.scss";
</style>
