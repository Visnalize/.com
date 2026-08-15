{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
packages:
  - '.'
export type ProjectType = 'win7' | 'brick' | null

export interface DeviceInfo {
  type: 'mobile' | 'desktop'
  screenWidth: number
  performance: 'high' | 'medium' | 'low'
}

export interface NokiaState {
  displayText: string
  inputBuffer: string
  currentApp: 'home' | 'snake' | 'calc' | 'msg'
}
<script setup lang="ts">
import { ref } from 'vue'

const isBooting = ref(true)
const bootProgress = ref(0)
const showDesktop = ref(false)
const activeWindow = ref<string | null>(null)

// Boot sequence
setInterval(() => {
  bootProgress.value += 5
  if (bootProgress.value >= 100) {
    isBooting.value = false
    setTimeout(() => showDesktop.value = true, 500)
  }
}, 120)

function openWindow(name: string) {
  activeWindow.value = name
  if (window.navigator.vibrate) window.navigator.vibrate(25)
}
</script>

<template>
  <div class="win7-simulator simulator-container">
    <!-- Boot Screen -->
    <div v-if="isBooting" class="boot-screen">
      <div class="windows-logo"></div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: bootProgress + '%' }"></div>
      </div>
      <p class="boot-text">Starting Windows...</p>
    </div>

    <!-- Desktop -->
    <div v-else-if="showDesktop" class="desktop">
      <!-- Taskbar -->
      <div class="taskbar">
        <button class="start-btn">🪟 Start</button>
        <div class="taskbar-spacer"></div>
        <div class="system-tray">
          <span>🔊</span><span>📶</span><span>🔋</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.win7-simulator { background: #0080ff; aspect-ratio: 16/10; overflow: hidden; }
.boot-screen { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(180deg, #0055aa, #0077dd); }
.windows-logo { width: 120px; height: 120px; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="white" d="M20,20 L45,15 L50,40 L25,45 Z"/><path fill="white" d="M50,15 L75,20 L70,45 L45,40 Z"/><path fill="white" d="M25,50 L50,45 L55,70 L30,75 Z"/><path fill="white" d="M55,45 L80,50 L75,75 L50,70 Z"/></svg>') center/contain no-repeat; margin-bottom: 40px; }
.progress-bar { width: 70%; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px; overflow: hidden; }
.progress { height: 100%; background: linear-gradient(90deg, #4af, #4fa); transition: width 0.15s ease-out; }
.boot-text { color: #fff; margin-top: 16px; font-size: 14px; opacity: 0.8 }
.desktop { height: 100%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><defs><linearGradient id="bg" x1="0%25" y1="0%25" x2="0%25" y2="100%25"><stop offset="0%25" stop-color="%236cf"/><stop offset="100%25" stop-color="%2328b"/></linearGradient></defs><rect fill="url(%23bg)" width="400" height="300"/></svg>'); }
.taskbar { position: absolute; bottom: 0; left: 0; right: 0; height: 44px; background: linear-gradient(180deg, rgba(60,120,180,0.9), rgba(30,70,120,0.95)); display: flex; align-items: center; padding: 0 8px; backdrop-filter: blur(10px); border-top: 1px solid rgba(255,255,255,0.2); }
.start-btn { background: linear-gradient(180deg, #4a4, #282); border: none; color: white; padding: 6px 14px; border-radius: 16px; font-weight: bold; box-shadow: 0 0 4px rgba(0,0,0,0.3); }
.system-tray { display: flex; gap: 10px; padding: 0 12px; color: white; font-size: 14px; }
</style>
# 1️⃣ ตรวจสอบ pnpm เวอร์ชัน
pnpm --version
# ถ้าไม่มี: npm install -g pnpm@latest

# 2️⃣ ติดตั้งทุกไลบรารีตามเวอร์ชันล่าสุด
pnpm install
# ✅ จะสร้าง: node_modules/, pnpm-lock.yaml

# 3️⃣ ตรวจสอบ TypeScript ไม่มีข้อผิดพลาด
pnpm typecheck

# 4️⃣ ทดสอบรันเซิร์ฟเวอร์
pnpm dev
# 📱 เปิดเบราว์เซอร์มือถือเข้า: http://localhost:5173

# 5️⃣ สร้างไฟล์เผยแพร่
pnpm build
# ✅ โฟลเดอร์ dist/ — พร้อมอัปโหลด 100%

# 6️⃣ ทดสอบไฟล์ที่สร้างเสร็จ
pnpm preview
1. อัปโหลดโฟลเดอร์ทั้งหมดขึ้น GitHub → repo ชื่อ: Visnalize/visnalize-next
2. เข้า Cloudflare Pages → Create → Connect Git
   ✅ Build command:    pnpm build
   ✅ Publish directory: dist
   ✅ Framework preset: Vite
3. กด Save & Deploy — รอประมาณ 1 นาที
4. 🎉 ได้ที่อยู่: visnalize-next.pages.dev
