import { defineStore } from 'pinia'

export  const useTodosStore =defineStore('todoStore', {
    state: () => ({
        todos: [
            { todo: "I am gone a become full stack", isFav: true },
            { todo:"I am gone work as Front end", isFav: false}
        ],
        name: "To-do-App",
        x:1
    }),
    getters: {
        favorites() {
            return this.todos.filter(todo => todo.isFav)
        },
        totalTodoItemsCount: (state) => {
            return state.todos.length
        },
         favouriteTodoCount()
        {
            return this.todos.reduce((p, c) => {
                return c.isFav ? p + 1 : p;
            },0)
        },
    },
    actions: {
        multiply: (state) => {
            state.x *2;
        },
    }
})