<script setup>
import { onMounted, ref, watch, computed } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { useRoute } from 'vue-router';

const route = useRoute();
const container = ref(null);
const dynamicButtons = ref([]);
const selectedButton = ref(null);
const zoomLevel = ref(10);
const autoRotate = ref(true);

const menus = {
  '/': [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "Who We Are", link: "/#who-we-are" },
    { id: "3", name: "What We Do", link: "/#what-we-do" }
  ],
  '/work': [
    { id: "4", name: "Visual Project", link: "/work#visual-project" },
    { id: "5", name: "Branding", link: "/work#branding" },
    { id: "6", name: "Printed Sheet", link: "/work#printed-sheet" }
  ],
  '/about': [
    { id: "7", name: "Our Value", link: "/about#our-value" },
    { id: "8", name: "Our Mission", link: "/about#our-mission" },
    { id: "9", name: "Our Uniqueness", link: "/about#our-uniqueness" }
  ],
  '/order': [
    { id: "10", name: "Subscribe Newsletter", link: "/order#newsletter" }
  ]
};

const currentMenu = computed(() => menus[route.path] || menus['/']);

const generateFibonacciSpherePoints = (items, radius) => {
  const count = items.length;
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  return items.map((item, i) => {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * increment;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    return { ...item, localPosition: new THREE.Vector3(x * radius, y * radius, z * radius) };
  });
};

const openModal = (button) => {
  selectedButton.value = button;
};

watch(() => route.path, () => {
  dynamicButtons.value = generateFibonacciSpherePoints(currentMenu.value, 3);
});

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, zoomLevel.value);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const sphereRadius = 3;
  const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x1d3557 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  const wireframe = new THREE.WireframeGeometry(sphereGeometry);
  const gridMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
  const wireframeMesh = new THREE.LineSegments(wireframe, gridMaterial);
  sphere.add(wireframeMesh);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  window.addEventListener("wheel", (e) => {
    zoomLevel.value = THREE.MathUtils.clamp(zoomLevel.value + e.deltaY * 0.01, 5, 20);
    gsap.to(camera.position, { duration: 0.5, z: zoomLevel.value, ease: "power2.out" });
  });

  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.002;
    controls.update();
    dynamicButtons.value.forEach(button => {
      const pos = button.localPosition.clone();
      sphere.localToWorld(pos);
      pos.project(camera);
      const x = ((pos.x + 1) / 2) * window.innerWidth;
      const y = ((-pos.y + 1) / 2) * window.innerHeight;
      const el = document.getElementById(`button-${button.id}`);
      if (el) {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      }
    });
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  dynamicButtons.value = generateFibonacciSpherePoints(currentMenu.value, 3);
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <div ref="container" class="w-full h-full"></div>
    <div v-for="button in dynamicButtons" :key="button.id" :id="`button-${button.id}`"
      class="absolute bg-[#66b5a1] text-white px-3 py-1 rounded shadow hover:bg-teal-600 transition text-sm cursor-pointer whitespace-nowrap"
      style="transform: translate(-50%, -50%);" @click.prevent="openModal(button)">
      {{ button.name }}
    </div>
    <transition name="slide-fade">
      <div v-if="selectedButton"
        class="fixed bottom-4 right-4 bg-white text-black p-6 rounded shadow-lg z-50">
        <h2 class="text-xl font-bold mb-2">{{ selectedButton.name }}</h2>
        <p>Details for {{ selectedButton.name }} go here.</p>
        <button @click="selectedButton = null"
          class="mt-4 bg-[#66b5a1] text-white px-4 py-2 rounded hover:bg-teal-600 transition">
          Close
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translate(100%, 100%);
}
</style>
