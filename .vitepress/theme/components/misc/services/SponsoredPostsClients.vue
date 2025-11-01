<template>
  <div class="wrapper">
    <div class="title">Our clients</div>
    <div class="list">
      <div v-for="client in clients" :key="client.name" class="client">
        <img
          :src="client.logo"
          :alt="client.name"
          :width="client.width"
          height="100"
          :class="client.isLight ? 'is-light' : 'is-dark'"
        />
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
  {
    name: "Proton",
    logo: "/assets/clients/proton.svg",
    width: 160,
  },
  {
    name: "HostZealot",
    logo: "/assets/clients/hostzealot.svg",
    width: 300,
    isLight: true,
  },
  {
    name: "Opsio",
    logo: "/assets/clients/opsio.svg",
    width: 160,
    isLight: true,
  },
  {
    name: "SkyCoach",
    logo: "/assets/clients/skycoach.svg",
    width: 160,
    isLight: true,
  },
];
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.client {
  display: flex;
  align-items: center;
  justify-content: center;
}

.client img {
  filter: drop-shadow(1px 0 var(--shadow)) drop-shadow(0 1px var(--shadow))
    drop-shadow(0 -1px var(--shadow));
}

.client .is-light {
  --shadow: #000;
}

.client .is-dark {
  --shadow: #fff;
}
</style>
