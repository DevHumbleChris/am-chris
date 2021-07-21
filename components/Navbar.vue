<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 Navbar mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
          🐼 AM CHRIS
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
              <font-awesome-icon :icon="['fas', 'user-astronaut']" class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">About Me</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#skills">
              <font-awesome-icon :icon="['fas', 'brain']" class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Skills</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#projects">
              <font-awesome-icon :icon="['fas', 'laptop-code']" class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Projects</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#contact">
              <font-awesome-icon :icon="['fas', 'address-card']" class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Contacts</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showMenu: false
    }
  },
  mounted () {
    this.$forceUpdate()
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>
.Navbar {
  background: #281d4e;
}
</style>
