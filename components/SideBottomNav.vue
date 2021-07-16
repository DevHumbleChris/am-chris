<template>
  <div class="sideBottomNav fixed">
    <NuxtLink to="#" class="bottomNav">
      <font-awesome-icon :icon="['far', 'newspaper']" />
      <div>
        Blog
      </div>
    </NuxtLink>
    <NuxtLink to="#" class="bottomNav">
      <font-awesome-icon :icon="['fas', 'user-astronaut']" />
      <div>
        Portfolio
      </div>
    </NuxtLink>
    <div class="bottomNav">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
      <div>
        WhatsApp
      </div>
    </div>
    <NuxtLink to="#" class="bottomNav">
      <font-awesome-icon :icon="['fas', 'heartbeat']" />
      <div>
        Support Me
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'SideBottomNav',
  data () {
    return {
    }
  },
  mounted () {
    this.scroll()
  },
  methods: {
    scroll () {
      let bottomOfWindow
      window.onscroll = () => {
        bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
      }
      if (bottomOfWindow) {
        alert('Am At The Bottom!')
      }
    }
  }
}
</script>

<style>
@media screen and (max-width: 640px) {
  .sideBottomNav {
    background: #f7f7f7;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    justify-content: center;
  }
  .bottomNav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    margin-left: 15px;
    color: #8444d8;
  }
}
</style>
