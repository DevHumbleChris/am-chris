<template>
  <section id="skills" class="Skills p-4 my-2">
    <div class="sectionHead my-4 relative">
      <span class="font-semibold text-sm">
        CHECKOUT MY
      </span>
      <h2 class="font-extrabold text-2xl my-4">
        SKILLS
      </h2>
    </div>
    <article class="skillsContainer flex flex-wrap flex-shrink-0">
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 my-3">
        <div class="secretColor font-extrabold">
          Frontend Technologies.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'html5']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              HTML5
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'js-square']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              JavaScript + ES6
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'css3-alt']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              CSS3
            </div>
          </div>
        </div>
      </div>
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 ml-4 my-3">
        <div class="secretColor font-extrabold">
          Frontend Frameworks.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'vuejs']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              VueJS + NuxtJS
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'react']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              ReactJS
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'bootstrap']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Bootstrap
            </div>
          </div>
        </div>
      </div>
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 ml-4 my-3">
        <div class="secretColor font-extrabold">
          Operating Systems.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'linux']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Linux
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'windows']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Windows
            </div>
          </div>
        </div>
      </div>
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 ml-4 my-3">
        <div class="secretColor font-extrabold">
          Version Control.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'git-alt']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Git
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'github']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              GitHub
            </div>
          </div>
        </div>
      </div>
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 ml-4 my-3">
        <div class="secretColor font-extrabold">
          Package Managers.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'npm']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Npm
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'yarn']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Yarn
            </div>
          </div>
        </div>
      </div>
      <div class="skillsInfo bg-white rounded shadow max-w-xs p-4 ml-4 my-3">
        <div class="secretColor font-extrabold">
          Backend And APIS.
        </div>
        <div class="p-3">
          <div class="flex my-2">
            <font-awesome-icon :icon="['fab', 'node']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              NodeJS
            </div>
          </div>
          <div class="flex my-2">
            <font-awesome-icon :icon="['fas', 'server']" class="skillIcon" />
            <div class="font-extrabold mx-4">
              Restful APIS
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style>
.Skills {
  margin: auto;
  width: 1350px;
}
.skillIcon {
  font-size: 30px;
}

@media screen and (max-width: 640px) {
  .Skills {
    width: 22.5rem;
  }
  .skillsInfo {
    margin-left: 0px;
    width: 21.5rem;
  }
}
</style>
