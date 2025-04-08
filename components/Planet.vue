<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const container = ref(null);
const dynamicButtons = ref([]);

const generateFibonacciSpherePoints = (items, sphereRadius) => {
  const count = items.length;
  const points = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * increment;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    const localPosition = new THREE.Vector3(
      x * sphereRadius,
      y * sphereRadius,
      z * sphereRadius
    );
    points.push({
      ...items[i],
      localPosition,
    });
  }
  return points;
};

onMounted(async () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  let zoomLevel = 10;
  camera.position.set(0, 0, zoomLevel);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.domElement.style.marginLeft = "10em";
  container.value.appendChild(renderer.domElement);

  // const gridHelper = new THREE.GridHelper(50, 50, 0xffffff, 0xffffff);
  // gridHelper.material.opacity = 0.2;
  // gridHelper.material.transparent = true;
  // gridHelper.position.y = -3.5;
  // scene.add(gridHelper);

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
  const gridMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true,
  });
  const wireframeMesh = new THREE.LineSegments(wireframe, gridMaterial);
  sphere.add(wireframeMesh);

  const navResponse = await $fetch("/api/navigation");
  dynamicButtons.value = generateFibonacciSpherePoints(
    navResponse,
    sphereRadius
  );

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI;

  window.addEventListener("wheel", (event) => {
    const zoomDelta = event.deltaY * 0.01;
    zoomLevel = THREE.MathUtils.clamp(zoomLevel + zoomDelta, 5, 20);
    gsap.to(camera.position, {
      duration: 0.5,
      z: zoomLevel,
      ease: "power2.out",
    });
  });

  const animate = () => {
    requestAnimationFrame(animate);

    sphere.rotation.y += 0.001;

    controls.update();

    dynamicButtons.value.forEach((button) => {
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
});
</script>
<template>
  <div class="relative w-full h-screen">
    <div ref="container" class="w-full h-full"></div>
    <NuxtLink
      v-for="button in dynamicButtons"
      :key="button.id"
      :to="button.link"
      class="absolute bg-[#66b5a1] text-white px-3 py-1 rounded shadow hover:bg-teal-600 transition text-sm"
      style="transform: translate(-50%, -50%)"
      :id="`button-${button.id}`"
    >
      {{ button.name }}
    </NuxtLink>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
