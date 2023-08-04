<template>
  <div id="app">
    <div id="Heading-box">
      <h1 id="heading">{{ toDoStoreInPinia.name }}</h1>
        <p>{{toDoStoreInPinia.x}}</p>
      <div id="main-container">
        <div id="Input">
          <input
            type="text"
            placeholder="   Enter To-do here"
            v-model="storingTodo"
            id="text-field"
          />
          <button id="addBut" @click="addTodo()">Add</button>
          <button @click="toDoStoreInPinia.multiply()">click me</button>
        </div>
        <div id="Displaying">
      <inputs-across-todo :storingTodo="storingTodo" :toDoStoreInPinia="toDoStoreInPinia" :editTodo="editTodo" :deleteTodo="deleteTodo"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodosStore } from "./stores/TodosStore";
import InputsAcrossTodo from "./components/inputsAcrossTodo.vue";
export default {
  components: {
    'inputs-across-todo': InputsAcrossTodo,
  },
  setup() {
    const toDoStoreInPinia = useTodosStore();
    // const  = ref(Function);
    return {
      toDoStoreInPinia,
      // editTodo
    };
  },
  data: function () {
    return {
      todoEntries: [],
      editedTodo: null,
      storingTodo:''
    };
  },
  methods:{
       addTodo() {
      if (this.storingTodo.length === 0) return;
      if (this.editedTodo === null) {
        this.toDoStoreInPinia.todos.push({
          todo: this.storingTodo
        });
        
      } else {
        this.toDoStoreInPinia.todos[this.editedTodo].todo = this.storingTodo;
        this.storingTodo = null;
      }
      this.editedTodo = null;
      this.storingTodo = "";
    },
     editTodo(index) {
      console.log(index);
      this.storingTodo = this.toDoStoreInPinia.todos[index].todo;
      this.editedTodo = index;
    },
     deleteTodo(index) {
      this.toDoStoreInPinia.todos.splice(index, 1);
    },
    },
}
</script>

<style >
#heading {
  font-size: 5rem;
  text-align: center;
}
.Select {
  display: flex;
  align-items: center;
}
#Heading-box {
  background-color: antiquewhite;
  border: 2px solid black;
}
#addBut {
  height: 2.2rem;
  font-size: 24px;
  width: 4.3rem;
  margin-left: 2rem;
  margin-top: 1rem;
  color: white;
  background-color: rgb(104, 244, 244);
}
#Input {
  margin-top: 4rem;
  text-align: center;
}
#addBut:hover {
  color: rgb(116, 227, 227);
  background-color: white;
}
#text-field {
  width: 600px;
  height: 40px;
  font-size: 25px;
}
</style>
