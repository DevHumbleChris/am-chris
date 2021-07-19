<template>
  <footer class="bg-white mt-8 p-4 font-extrabold">
    <div class="justify-center items-center flex">
      &copy; Christopher Odhiambo {{ copyRight }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    copyRight () {
      const copyDate = new Date()
      const copyRightYear = copyDate.getFullYear()
      return copyRightYear
    }
  }
}
</script>
