<template>
  <div class="sideBottomNav fixed">
    <div class="bottomNav">
      <font-awesome-icon :icon="['far', 'newspaper']" />
      <div>
        Blog
      </div>
    </div>
    <div class="bottomNav">
      <font-awesome-icon :icon="['fas', 'user-astronaut']" />
      <div>
        Portfolio
      </div>
    </div>
    <div class="bottomNav">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
      <div>
        WhatsApp
      </div>
    </div>
  </div>
</template>

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
