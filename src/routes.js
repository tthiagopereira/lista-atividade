import Home from "./components/home/Home";
import CreateUser from "./components/create/CreateUser"
import Tarefas from "./components/show/Tarefas";
import CreateTarefa from "./components/create/CreateTarefa";

export const routes = [
  {path: '', component: Home},
  {path: '/create/user', component: CreateUser},
  {path: '/update/user/:id', component: CreateUser},
  {path: '/tarefas', component: Tarefas},
  {path: '/create/tarefa', component: CreateTarefa},
  {path: '/update/tarefa/:id', component: CreateTarefa},

]
