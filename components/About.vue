<template>
  <section id="about" class="About p-4 my-2">
    <div class="sectionHead my-4 relative">
      <span class="font-semibold text-sm">
        SOME INFO
      </span>
      <h2 class="font-extrabold text-2xl my-4">
        ABOUT ME
      </h2>
    </div>
    <article class="articleContainer p-6 bg-white rounded shadow">
      <p class="p-2">
        I used to write poems but now I got focused into writing codes 😍. I am passionate about
        <span class="secretColor">JavaScript 💯</span>
        and its all related stacks. Recently I did finish my Diploma studies in
        <span class="secretColor">Information Communication Technology</span>
        at
        <span class="text-pink-700">Kenya Coast National Polytechnic</span>
        .
      </p>
      <p class="p-2">
        I love computers and everything it comes with, thus why I started teaching myself how to code through YouTube Videos, Googling results and
        <a href="https://www.w3schools.com" class="text-pink-600 font-semibold" target="_blank">w3schools</a>
        . Ever since I discovered the abilities one gets from coding 👨‍💻, I have never stopped to burn the midnight oil to have those superpowers 😊🤠.
      </p>
      <p class="p-2">
        I love solving problems through code, its keeps me alive 💯 and I will be so excited to get to work alongside other amazing programmers 😎 and learn so mush more!
      </p>
    </article>
  </section>
</template>

<style>
.About {
  margin: auto;
  width: 1200px;
  /* background: green; */
}
.sectionHead span{
  margin-left: 60px;
}
.sectionHead span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 13px;
  width: 50px;
  height: 1px;
  background-color: #000;
}
.secretColor {
  color: #8444d8;
}

@media screen and (max-width: 640px) {
  .About {
    width: 22.5rem;
  }
  .articleContainer {
    width: 21rem;
  }
}
</style>
