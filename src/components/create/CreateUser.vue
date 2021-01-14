<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <form @submit.prevent="store()">
            <div>
              <div>
                <label for="Login" v-if="id"> Atualizar</label>
                <label for="Login" v-else> {{ titulo }}</label>
              </div>
              <div>
                <label for="email">Nome completo</label>
              </div>
              <div>
                <input type="text" id="name" name="name" placeholder="Name" v-model="user.name">
              </div>

              <div>
                <label for="email">E-mail</label>
              </div>
              <div>
                <input type="email" id="email" name="email" placeholder="E-mail" v-model="user.email">
              </div>
            </div>
            <div>
              <div>
                <label for="password">Senha</label>
              </div>
              <div>
                <input type="password" id="password" name="password" placeholder="Informe sua senha" v-model="user.password">
              </div>
            </div>
            <div class="centro">
              <input type="submit" value="Salvar">
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
import Tarefa from "../../domain/Tarefa";
export default {
  components: {
  },
  data() {
    return {
      user: new User(),
      mensagem: '',
      titulo: 'Criar novo Usuário',
      id: this.$route.params.id,
    }
  },

  methods: {
    store() {
        if(this.id) {
          axios.put(`http://localhost:8000/api/users/${this.id}`, this.user,
            { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(() => {
              this.user = new User(), err => console.log(err)
              this.$router.push('/tarefas')
            })

        }else{
          this.$http.post('http://localhost:8000/api/users', this.user)
            .then(() => {
              this.user = new User(), err => console.log(err)
              this.$router.push('/')
            })
        }
    },
    show() {
      if(this.id) {
        axios.get(`http://localhost:8000/api/users/${this.id}`,
          { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .then(resp => {
            // console.log(resp.data)
            this.user = resp.data
          })
      }
    }
  },
  created() {
    this.show()
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
