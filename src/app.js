import Vue from 'vue'
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data:{
      name: "ToDo",
      // with the array
      // todos: ["Fix the car", "Buy groceries", "Do homeworks!"]
      // newTodo = ""},
      // methods:{
      //   saveNewTodo: function() {
      //     this.todos.push(this.newTodo);
      //     this.newTodo= "";}

      todos: [
       {name: "Fix the Car", priority: "High"},
       {name: "Gardening", priority: "Low"},
       {name: "Do homeworks!", priority: "High"}

      ],
      newTodo:{
        name: "",
        priority: null
      }
    },
    methods:{
      saveNewTodo: function() {
        this.todos.push(this.newTodo);
        this.newTodo = {
          name: "",
          priority: null
        };
      }
    }

  })
});
