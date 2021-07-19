<template>
  <section id="contact" class="Contact p-4 my-2 mb-20">
    <div class="sectionHead my-4 relative">
      <span class="font-semibold text-sm">
        SAY HELLO
      </span>
      <h2 class="font-extrabold text-2xl my-4">
        CONTACT
      </h2>
    </div>
    <article class="bg-white p-4 rounded">
      <div class="text-xl text-semibold my-3">
        Contact Form
        <font-awesome-icon :icon="['fab', 'mailchimp']" />
      </div>
      <form class="p-4 my-2 text-semibold shadow">
        <div class="flex">
          <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded items-center justify-center w-8 pl-3 py-3">
              <font-awesome-icon :icon="['fas', 'user']" />
            </span>
            <input type="text" placeholder="Your Name*" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" required>
          </div>
          <div class="relative flex w-full flex-wrap items-stretch mb-3 ml-4">
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded items-center justify-center w-8 pl-3 py-3">
              <font-awesome-icon :icon="['fas', 'at']" />
            </span>
            <input type="email" placeholder="Your Email*" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" required>
          </div>
        </div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3 my-5">
          <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded items-center justify-center w-8 pl-3 py-3">
            <font-awesome-icon :icon="['fas', 'info-circle']" />
          </span>
          <input type="text" placeholder="Your Subject*" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" required>
        </div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <textarea placeholder="Your Message*" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pl-4" />
        </div>
        <div class="justify-center items-center flex">
          <button class="text-base bg-pink-700 text-white hover:text-white hover:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
            Send
          </button>
        </div>
      </form>
    </article>
  </section>
</template>

<style>
.Contact {
  margin: auto;
  width: 1000px;
}
.Contact article {
  box-shadow: 0px 3px 6px #777;
}
@media screen and (max-width: 640px) {
  .Contact {
    width: 22.5rem;
    font-size: 13px;
  }
  .Contact article:hover {
    box-shadow: 0px 6px 12px #777;
  }
}
</style>
