<!--
 * @Autor: zhao
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: zhao
 * @LastEditTime: 2023-02-19 00:15:51
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <div ref="container" class="w_100 h_100">
        <el-button type="primary" @click="testClick">test</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { testApi } from "/@/api/login";
import { useMessage } from '/@/hooks/common/useMessage';
const { success } = useMessage();
const testClick = async () => {
  const result = await testApi();
  success(result);

};
// import * as THREE from "three";
// import { AnimationMixer } from "three";
//
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";

// const mixer = ref<AnimationMixer | null>(null);
//
// const clock = new THREE.Clock();
// const container = ref<Element | null>(null);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
//
// const { camera, controls } = initCammer(renderer);
//
// const scene = new THREE.Scene();
//
// onMounted(() => {
//   initRender();
//   loadData();
// });
//
// function initRender() {
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.outputEncoding = THREE.sRGBEncoding;
//   container.value!.appendChild(renderer.domElement);
//   const pmremGenerator = new THREE.PMREMGenerator(renderer);
//   scene.background = new THREE.Color(0xbfe3dd);
//   scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
// }
//
// function initCammer(renderer: any) {
//   const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
//   camera.position.set(5, 2, 8);
//
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.target.set(0, 0.5, 0);
//   controls.update();
//   controls.enablePan = false;
//   controls.enableDamping = true;
//   return { camera, controls };
// }
//
// function loadData() {
//   const dracoLoader = new DRACOLoader();
//   dracoLoader.setDecoderPath("http://127.0.0.1:9595/file/three/gltf/");
//   const loader = new GLTFLoader();
//   loader.setDRACOLoader(dracoLoader);
//   loader.load(
//     "http://127.0.0.1:9595/file/three/LittlestTokyo.glb",
//     function (gltf) {
//       const model = gltf.scene;
//       model.position.set(1, 1, 0);
//       model.scale.set(0.01, 0.01, 0.01);
//       scene.add(model);
//
//       mixer.value = new THREE.AnimationMixer(model);
//       mixer.value!.clipAction(gltf.animations[0]).play();
//
//       animate();
//     },
//     undefined,
//     function (e) {
//       console.error(e);
//     }
//   );
// }

// function animate() {
//   requestAnimationFrame(animate);
//
//   const delta = clock.getDelta();
//
//   mixer.value!.update(delta);
//
//   controls.update();
//
//   renderer.render(scene, camera);
// }
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
