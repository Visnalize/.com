<template>
  <div class="wrapper">
    <div class="title">Our clients</div>
    <div class="marquee">
      <div ref="trackRef" class="marquee-track">
        <div v-for="client in clients" :key="client.name" class="client">
          <img
            :src="client.logo"
            :alt="client.name"
            :width="client.width"
            height="100"
            :class="client.isLight ? 'is-light' : 'is-dark'"
          />
        </div>
        <div v-for="client in clients" :key="client.name + '-dup'" class="client">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const trackRef = ref<HTMLElement>();

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

onMounted(() => {
  updateScrollDistance();
  resizeObserver = new ResizeObserver(updateScrollDistance);
  if (trackRef.value) resizeObserver.observe(trackRef.value);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
});

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
    width: 280,
    isLight: true,
  },
  {
    name: "SkyCoach",
    logo: "/assets/clients/skycoach.svg",
    width: 160,
    isLight: true,
  },
  {
    name: "PROXYS.IO",
    logo: "/assets/clients/proxys.io.png",
    width: 200,
    isLight: true,
  },
  {
    name: "surfshark",
    logo: "/assets/clients/surfshark.svg",
    width: 200,
  },
  {
    name: "murf.ai",
    logo: "/assets/clients/murfai.svg",
    width: 200,
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

.marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
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
