<script setup>
import { onMounted, ref, watch, computed } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { useRoute } from 'vue-router';
import NavBar from '../components/NavBar.vue';

const route = useRoute();
const container = ref(null);
const dynamicButtons = ref([]);
const selectedButton = ref(null);
const zoomLevel = ref(10);
const autoRotate = ref(true);
let sphere = null;

const homeContent = {
  Home: {
    heading: "Welcome to BrandPlanet",
    text: "We help Rwandan businesses stand out through bold branding, intuitive design, and premium print solutions."
  },
  "Who We Are": {
    heading: "Who We Are",
    text: "We are a creative studio blending design, technology, and branding into an immersive experience."
  },
  "What We Do": {
    heading: "What We Do",
    text: "We offer logo design, brand strategy, packaging, digital design, and top-tier print execution — all in one place."
  }
};

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
  if (sphere) {
    gsap.to(sphere.position, {
      x: 4,
      y: 5,
      duration: 1.5,
      ease: "power3.out"
    });
  }
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
  renderer.setClearColor(0x000000, 1);
  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const sphereRadius = 3;
  const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x1d3557 });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  const wireframe = new THREE.WireframeGeometry(sphereGeometry);
  const gridMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
  const wireframeMesh = new THREE.LineSegments(wireframe, gridMaterial);
  sphere.add(wireframeMesh);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.05;

  window.addEventListener("wheel", (e) => {
    zoomLevel.value = THREE.MathUtils.clamp(zoomLevel.value + e.deltaY * 0.01, 5, 20);
    gsap.to(camera.position, { duration: 0.5, z: zoomLevel.value, ease: "power2.out" });
  });

  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.001;
    sphere.rotation.x += 0.0002;
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
  <div class="relative w-full h-screen overflow-hidden bg-black">
    <div class="mt-14">
      <NavBar />
    </div>
    <div ref="container" class="absolute top-0 left-0 w-full h-full z-0"></div>
    <div v-for="button in dynamicButtons" :key="button.id" :id="`button-${button.id}`"
      class="absolute bg-[#66b5a1] text-white px-2 py-1 rounded shadow hover:bg-teal-600 transition text-sm cursor-pointer whitespace-nowrap z-10"
      style="transform: translate(-50%, -50%);" @click.prevent="openModal(button)">
      {{ button.name }}
    </div>
    <transition name="slide-fade">
      <div v-if="selectedButton"
        class="fixed top-8 left-8 ml-8 w-full max-w-md h-[80vh] overflow-y-auto bg-[var(--brandplanet)] text-white p-6 rounded-lg shadow-2xl z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">{{ homeContent[selectedButton.name]?.heading || selectedButton.name }}</h2>
          <button @click="() => { selectedButton = null; if (sphere) { gsap.to(sphere.position, { x: 0, y: 0, duration: 1.2, ease: 'power3.out' }); } }"
            class="text-white hover:text-gray-200 text-xl font-bold">&times;</button>
        </div>
        <div class="space-y-4">
          <p>{{ homeContent[selectedButton.name]?.text || 'This section is coming soon.' }}</p>
          <div class="bg-white bg-opacity-10 p-4 rounded">
            <h3 class="font-semibold mb-2">Highlights:</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Impactful Visuals</li>
              <li>Creative Process</li>
              <li>Collaborative Strategy</li>
            </ul>
          </div>
        </div>
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
  transform: translateY(20px);
}
</style>
