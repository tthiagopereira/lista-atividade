<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <form @submit.prevent="store()">
            <div>
              <div>
                <label for="Login" v-if=" id "> Atualizar tarefa {{ id }}</label>
                <label for="Login" v-else > {{ titulo }}</label>
              </div>
              <div>
                <label for="email">Nome</label>
              </div>
              <div>
                <input type="text" id="name" name="name" placeholder="Name" v-model="tarefa.nome">
              </div>

              <div>
                <label for="data">data</label>
              </div>
              <div>
                <input type="date" id="data_conclusao" name="data_conclusao" v-model="tarefa.data_conclusao">
              </div>
            </div>
            <div>
              <div>
                <label for="status">Status</label>
              </div>
              <div>
                <select id="status" name="status" required v-model="tarefa.status">
                  <option value="">Escolha uma opção</option>
                  <option value="Ativo" >Ativo</option>
                  <option value="Processando" >Processando</option>
                  <option value="Concluido">Concluido</option>
                </select>
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
import Tarefa from "../../domain/Tarefa";
import axios from "axios";
export default {
  components: {
  },
  data() {
    return {
      tarefa: new Tarefa(),
      mensagem: '',
      titulo: 'Criar nova tarefa',
      id: this.$route.params.id,
    }
  },

  methods: {
    store() {
      this.tarefa.user_id = localStorage.getItem('user_id')
      if(this.id) {
        axios.put(`http://localhost:8000/api/tarefas/${this.id}`, this.tarefa,
          { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .then(() => {
            console.log('entrei aqui')
            this.tarefa = new Tarefa(), err => console.log(err)
            this.$router.push('/tarefas')
          })
      }else {
        axios.post('http://localhost:8000/api/tarefas', this.tarefa, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .then(() => {
            this.tarefa = new Tarefa(), err => console.log(err)
            this.$router.push('/tarefas')
          })
      }


    },
    show() {
      if(this.id) {
        axios.get(`http://localhost:8000/api/tarefas/${this.id}`,
          { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .then(resp => {
            // console.log(resp.data)
            this.tarefa = resp.data
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
