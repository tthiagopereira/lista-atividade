<template>
  <div class="footer">
    <p>{{autor}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: '',
      autor: 'Thiago Pereira dos Santos'
    }
  }
}
</script>

<style>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #777777;
    color: whitesmoke;
    text-align: center;
  }
</style>
