<template>
  <div v-if="!fetchError" class="wrapper">
    <div class="title">Our clients</div>
    <div class="marquee">
      <div ref="trackRef" class="marquee-track">
        <div v-for="client in clients" :key="client.name" class="client">
          <img :src="client.logo" :alt="client.name" :width="client.width" height="100"
            :class="{ 'is-light': client.isLight, 'is-dark': client.isDark }" />
          <span v-if="client.showName">{{ client.name }}</span>
        </div>
        <div v-for="client in clients" :key="client.name + '-dup'" class="client">
          <img :src="client.logo" :alt="client.name" :width="client.width" height="100"
            :class="{ 'is-light': client.isLight, 'is-dark': client.isDark }" />
          <span v-if="client.showName">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from "vue";

interface Client {
  name: string;
  logo: string;
  width: number;
  showName?: boolean;
  isLight?: boolean;
  isDark?: boolean;
}

const trackRef = ref<HTMLElement>();
const clients = ref<Client[]>([]);
const fetchError = ref(false);

async function fetchList() {
  try {
    const res = await fetch("/assets/clients/list.json");
    clients.value = await res.json();
  } catch (e) {
    fetchError.value = true;
  }
}

function updateScrollDistance() {
  const track = trackRef.value;
  if (!track) return;
  const children = track.children;
  const half = children.length / 2;
  let width = 0;
  for (let i = 0; i < half; i++) {
    width += (children[i] as HTMLElement).offsetWidth;
  }
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  width += gap * half; // half items + 1 gap to the duplicate
  track.style.setProperty("--scroll-distance", `-${width}px`);
}

let resizeObserver: ResizeObserver | undefined;

onMounted(async () => {
  await fetchList();
  await nextTick();
  updateScrollDistance();
  resizeObserver = new ResizeObserver(updateScrollDistance);
  if (trackRef.value) resizeObserver.observe(trackRef.value);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
});
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

.marquee {
  width: 100%;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      transparent,
      black 10%,
      black 90%,
      transparent);
}

.marquee-track {
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.client {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.5rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(var(--scroll-distance));
  }
}

.client img {
  filter: drop-shadow(1px 0 var(--shadow)) drop-shadow(0 1px var(--shadow)) drop-shadow(0 -1px var(--shadow)) drop-shadow(-1px 0 var(--shadow));
}

.client span {
  font-size: 1.5rem;
  font-weight: 600;
}

.client .is-light {
  --shadow: #0009;
}

.client .is-dark {
  --shadow: #fff9;
}
</style>
