<template>
  <div class="Hero p-12 flex my-2">
    <div class="hero-img text-center">
      <img src="~assets/images/PicsArt_03-29-11.57.48.jpg" alt="My Pic" class="rounded-full object-cover">
    </div>
    <div class="heroDescription p-6 ml-10">
      <p class="greeting text-2xl my-2">
        HI THERE 👋, I AM
      </p>
      <h1 class="font-extrabold text-4xl my-2 author">
        <span class="text-emphasis">
          Christopher
        </span>
        Odhiambo
      </h1>
      <div class="smallBio text-semibold">
        A
        <span class="text-emphasis">
          Web Developer
        </span>
        based in
        <span class="text-emphasis">
          Mombasa, Kenya
        </span>
        with a focus on the
        <span class="text-pink-600">
          MEVN
        </span>
        <span class="text-green-700">
          (MongoDB, Express, VueJs And Node)
        </span>
        stack, but still exploring other technologies and frameworks that catch my interest!
        <div class="socialResume p-3 flex">
          <a class="text-base bg-pink-700 text-white hover:text-white hover:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="/files/resume.pdf">
            <font-awesome-icon :icon="['fas', 'download']" />
            Resume
          </a>
          <div class="resumeBtn p-2">
            <a class="w-10 bg-white btnIcon p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="https://www.facebook.com/profile.php?id=100011196098630" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </a>
            <a class="w-10 bg-white btnIcon p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="https://twitter.com/AmChrisKE" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>
            <a class="w-10 bg-white btnIcon p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="https://github.com/DevHumbleChris" target="_blank">
              <font-awesome-icon :icon="['fab', 'github-square']" />
            </a>
            <a class="w-10 bg-white btnIcon p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="https://www.linkedin.com/in/christopher-odhiambo-2870331aa/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a class="w-10 bg-white btnIcon p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href="https://wa.me/message/BSLLTZE6NKUIF1" target="_blank">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.Hero {
  margin: auto;
  width: 1200px;
}
.text-emphasis {
  color: #8444d8;
}
.hero-img {
  width: 18rem;
}
.hero-img img {
  box-shadow: 8px 0 #d9c8f1, 20px 0 #e2d6f3, 30px 0 #ece6f5;
}
.heroDescription {
  width: 35rem;
}
.btnIcon {
  color: #8444d8;
  font-size: 18px;
}

@media screen and (max-width: 600px) {
  .Hero {
    margin: auto;
    width: 22.5rem;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
  .heroDescription {
    width: 21.5rem;
  }
  .hero-img {
    width: 17rem;
  }
  .author {
    font-size: 22px;
  }
  .greeting {
    font-size: 20px;
  }
  .socialResume {
    flex-direction: column;
    align-items: center;
  }
}
</style>
