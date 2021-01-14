<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Não Autorizado
          </b-alert>


          <form @submit.prevent="login()">
            <div>
              <div>
                <label for="Login"> {{ titulo }}</label>
              </div>
              <div>
                <label for="email">E-mail</label>
              </div>
              <div>
                <input type="email" id="email" name="email" placeholder="E-mail" v-model="user.email" required>
              </div>
            </div>
            <div>
              <div>
                <label for="password">Senha</label>
              </div>
              <div>
                <input type="password" id="password" name="password" placeholder="Informe sua senha" v-model="user.password" required>
              </div>
            </div>
            <div class="centro">
              <input type="submit" value="Entrar">
            </div>
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import User from "../../domain/User";
import axios from "axios";
export default {
  components: {
  },
  data() {
    return {
      user: new User(),
      mensagem: '',
      titulo: 'Login',
      message: '',
      showDismissibleAlert: false
    }
  },

  methods: {
    login() {
      axios.post('http://localhost:8000/api/login', this.user)
        .then( response => {
          console.log(response)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user_id', response.data.user.id)
          this.$router.push('/tarefas')
        })
        .catch( () => {
          this.showDismissibleAlert = true
        })
    }
  },
  countDownChanged(dismissCountDown) {
    this.dismissCountDown = dismissCountDown
  },
  showAlert() {
    this.dismissCountDown = this.dismissSecs
  },
  created() {

  }
}

</script>

<style>

* {
  box-sizing: border-box;
}

label {
  font-size: 20px;

}

input[type=text], input[type=email], input[type=password]{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: center;
  margin: 10px;
}


</style>
