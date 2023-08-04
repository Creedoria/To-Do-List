<template>
  <div class="todoDisplay">
    <p style="text-align: center; font-size: 20px">
      You have total of {{ toDoStoreInPinia.totalTodoItemsCount }} Tasks
    </p>
    <ul>
      <li v-for="(i, index) in toDoStoreInPinia.todos" :key="index">
        <div class="details">
          <h2>{{ i.todo }}</h2>
          <button id="editBut" @click="editTodo(index)">Edit</button>
          <button id="deleteBut" @click="deleteTodo(index)">Delete</button>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "inputsAcrossTodo",
  props: {
    toDoStoreInPinia: {
      type: Array,
    },
    editTodo : {
      type:Function
    },
    deleteTodo : {
      type:Function
    }
  },
}
</script>
<style>
.allTasks {
  margin: 0 25px;
  height: 2.2rem;
  font-size: 14px;
  width: 4.3rem;
  padding: 0 2px;
}
#favBut
{
  margin : 0.8rem 25px;
  height: 2.5rem;
  width: 4rem;
}
.favTasks {
  margin: 16px 20px;
  height: 2.2rem;
  font-size: 14px;
  width: 4.3rem;
  padding: 0 1.5px;
}
.details {
  display: flex;
  justify-content: center;
  margin-top: 4px;
}
#deleteBut {
  height: 2rem;
  font-size: 20px;
  width: 4.5rem;

  margin-left: 2rem;
  margin-top: 1rem;
  color: white;
  background-color: rgb(235, 77, 50);
}

#editBut {
  height: 2rem;
  font-size: 20px;
  width: 4rem;
  margin-left: 2rem;
  margin-top: 1rem;
  color: white;
  background-color: rgb(236, 199, 87);
}
</style>
