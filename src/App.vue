<template>
  <div>
    <NavBar></NavBar>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from "./components/shared/layout/NavBar";
import Footer from "./components/shared/layout/Footer";
export default {

  components: {NavBar, Footer}

}

</script>

<style>
  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s;
  }
</style>
