<template>
  <div class="flex" style="font-family: Arial" x-data="{ open: true }">
    <div class="sidebar h-screen" style="width: 260px" x-show="open">
      <div>
        <div class="text-purple-200 bg-purple-700 h-14 mx-auto block px-4 py-5">
          WELCOME, ADMIN
        </div>
        <div class="h-screen bg-purple-700">
          <div class="" style="font-size: 14px">
            <router-link
              to="/admin/"
              class="h-12 px-4 py-3 text-purple-800 tracking-wider block bg-white font-medium border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
              >Dashboard</router-link
            >
            <router-link
              to="/admin/books"
              class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
              >Books</router-link
            >
            <a
              href=""
              class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
              >Users</a
            >
            <a
              href=""
              class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
              >Orders</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full z-10">
      <div
        class="sticky top-0 bg-purple-600 header h-14 px-10 py-4 border-b-4 border-purple-900 flex items-center justify-between"
      >
        <div class="flex items-center space-x-12 text-sm">
          <i
            class="hover:text-purple text-xl fas fa-bars font-thin cursor-pointer text-white"
            @click="open = !open"
          ></i>
          <a
            href=""
            class="hover:text-purple-400 text-white tracking-wider font-thin"
            ><span>Dashboard</span></a
          >
          <a
            href=""
            class="hover:text-purple-400 text-white tracking-wider font-thin"
            >User</a
          >
          <a
            href=""
            class="hover:text-purple-400 text-white tracking-wider font-thin"
            >Settings</a
          >
        </div>
        <div
          class="flex items-center space-x-8 text-gray-400 text-base px-4 py-2"
        >
          <span class="relative inline-block cursor-pointer">
            <i class="fas fa-bell font-thin"></i>
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
              >99</span
            >
          </span>
          <span class="relative inline-block cursor-pointer">
            <i class="fas fa-list font-thin"></i>
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full"
              >99</span
            >
          </span>
          <span class="relative inline-block cursor-pointer">
            <i class="fas fa-envelope font-thin"></i>
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full"
              >9</span
            >
          </span>
          <i class="fas fa-user-circle fa-lg font-thin cursor-pointer"></i>
          <i
            class="fas fa-cog fa-2x font-thin text-white cursor-pointer animate animate-spin hover:text-green-500"
            style="animation-duration: 7000ms"
          ></i>
        </div>
      </div>

      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default { components: { router } };
</script>
<style scoped>
/* Estilos para el señalador de posición (border-left) */
.sidebar li:hover a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, #00ffff, #008080); /* Gradiente cyan */
}

/* Estilos para cambiar el color del ícono y el texto a blanco al pasar el cursor */
.sidebar li:hover a i,
.sidebar li:hover a span {
  color: white;
}
</style>
