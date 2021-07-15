<template>
  <section id="projects" class="Projects p-4 my-2">
    <div class="sectionHead my-4 relative">
      <span class="font-semibold text-sm">
        TAKE A LOOK AT MY
      </span>
      <h2 class="font-extrabold text-2xl my-4">
        PROJECTS
      </h2>
    </div>
    <article class="my-4 bg-white p-10 rounded shadow">
      <div v-for="(project, index) in myProjects" :key="index" class="projectContainer border p-8 rounded flex my-3">
        <div class="projectImg">
          <img :src="require(`~/assets/images/${project.imgPath}`)" alt="projectImg" class="rounded object-cover">
        </div>
        <div class="mx-8 p-2 max-w-2xl flex-shrink-0">
          <div class="projectName font-extrabold text-2xl">
            {{ project.name }}
          </div>
          <div class="projectDescription italic my-2 text-base">
            {{ project.description }}
          </div>
          <div class="my-2 font-semibold">
            Technologies Used:
            <span v-for="(techUsed, count) in project.technologiesUsed" :key="count" class="secretColor">
              {{ techUsed }}
              <span v-if="count < project.technologiesUsed.length - 1">
                ,
              </span>
            </span>
            .
          </div>
          <ul class="list-disc p-3">
            <li v-for="(info, x) in project.projectInfo" :key="x">
              {{ info }}
            </li>
          </ul>
          <div class="btnGroup socialResume p-3">
            <a class="text-base bg-pink-700 text-white hover:text-white hover:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" :href="project.webLink">
              <font-awesome-icon :icon="['fab', 'firefox-browser']" />
              Live
            </a>
            <a class="text-base bg-pink-700 text-white hover:text-white hover:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" :href="project.githubLink">
              <font-awesome-icon :icon="['fab', 'github']" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'Projects'
    ]),
    myProjects () {
      const works = this.Projects
      return works
    }
  }
}
</script>

<style>
.Projects {
  margin: auto;
  width: 1200px;
}
.projectImg {
  width: 18rem;
}
.projectContainer{
  box-shadow: 0px 3px 8px #777;
}
.projectContainer:hover {
  box-shadow: 0px 6px 12px #777;
}

@media screen and (max-width: 640px) {
  .Projects {
    width: 23rem;
    padding: 4px;
  }
  .Projects article {
    padding: 10px;
  }
  .projectBody {
    padding: 5px;
  }
  .projectContainer {
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }
  .projectImg {
    width: 13rem;
  }
  .projectDescription {
    font-size: 16px;
  }
  .projectName {
    text-align: center;
    font-size: 25px;
  }
  .btnGroup a {
    padding: 10px;
  }
}
</style>
