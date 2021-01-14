<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="cabecalho">
      <div class="logo">
        <router-link to="/">
          <b-img src="https://www.startupchile.org/wp-content/uploads/2016/10/logotipo_tarefa.png"></b-img>
        </router-link>
      </div>
      <button class="menu-toggle">
        <i class="fa fa-lg fa-bars"></i>
      </button>

      <aside class="autenticacao botao">
        <router-link v-if="user_id" :to="`/update/user/${user_id}`" class="destaque">Atualizar conta</router-link>
        <router-link v-else to="/create/user" class="destaque">Criar Conta {{ user_id}}</router-link>
      </aside>
    </header>
  </div>
</template>

<script>

export default {
  props: ['logo'],
  data() {
    return {
      imagem: {
        url: 'http://localhost:8000/img/logotipo_tarefa.png',
        titulo: 'Logo do sistema',
      },
      user_id: localStorage.getItem('user_id')
    }
  },
  created() {
    // this.$http.get('lista/carrinho')
    //   .then(resp => {
    //     this.carrinhoQuantidade = resp.data
    //   })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: lightgray;
}
.cabecalho {
  background: whitesmoke;
  border-bottom: solid 5px #777777;
  height: 80px;
  box-sizing: content-box;
}

.logo {
  display: inline-block;
  height: 80px;
  padding: 15px;
}

.logo img {
  height: 100%;
}
.menu-toggle {
  float: right;
  color: white;
  background-color: #555;
  border: solid 1px #777;
  border-radius: 5px;
  height: 40px;
  padding: 10px 20px;
  margin: 20px 15px;
}

.autenticacao {
  float: right;
  height: 80px;
  padding: 25px;
}

.autenticacao a {
  text-decoration: none;
  font-size: 1.3em;
  padding: 15px;
}

.botao a:hover {
  background-color: #777777;
  color: whitesmoke;
  border-radius: 40px;
}

.destaque {
  background-color: darkmagenta;
  color: whitesmoke;
  border-radius: 40px;
  padding: 10px 25px;
  margin: 10px;
}

@media(min-width: 679px) {
  .menu-toggle {
    display: none;
  }
}

@media(max-width: 680px) {
  .autenticacao {
    display: none;
  }
}

</style>
