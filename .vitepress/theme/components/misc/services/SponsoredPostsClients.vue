<template>
  <div class="wrapper">
    <div class="title">Our clients</div>
    <div class="list">
      <div v-for="client in clients" :key="client.name" class="client">
        <img :src="client.logo" :alt="client.name" :width="client.width" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const clients = [
  {
    name: "ROIHIGH",
    logo: "/assets/clients/roihigh.webp",
    width: 160,
  },
  {
    name: "Mellow Promo",
    logo: "/assets/clients/mellowpromo.webp",
    width: 100,
  },
  {
    name: "JetBase",
    logo: "/assets/clients/jetbase.svg",
    width: 160,
  },
];
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.client {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
