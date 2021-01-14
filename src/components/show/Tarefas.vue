<template>
  <div>
    <br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">
          <div>
            <b-button variant="success">
              <router-link to="/create/tarefa" class="link">Criar Conta</router-link>
            </b-button>
          </div>
        </b-col>
        <b-col>
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
          >
            <p>Excluido com sucesso {{ dismissCountDown }} seconds...</p>
            <b-progress
              variant="warning"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
            ></b-progress>
          </b-alert>

          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Data Conclusão</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tarefa, id) in tarefas" :key="tarefa.id">
              <th scope="row"> {{ tarefa.id}}</th>
              <td>{{ tarefa.nome }}</td>
              <td> {{ tarefa.data_conclusao }}</td>
              <td> {{ tarefa.status }}</td>
              <td>
                <button class="btn btn-danger white" @click="destroy(tarefa.id)">Delete</button>
                <router-link class="btn btn-info" :to="`/update/tarefa/${tarefa.id}`">Alterar</router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="2">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tarefas: [],
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      user: localStorage.getItem('user_id')
    }
  },
  methods: {
    index() {
      axios.get(`http://localhost:8000/api/tarefa/user/${this.user}`,
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(resp => {
          this.tarefas = resp.data
        })
    },
    destroy(id) {
      axios.delete(`http://localhost:8000/api/tarefas/${id}`,
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(() => {this.index(), this.showAlert()})
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  created() {
    this.index()
  },
}
</script>

<style>
  .link {
    text-decoration: none;
    color: white;
  }
</style>
