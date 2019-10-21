<template>
  <div class="app">
    <div class="todo-container add">
      <new-to-do @addTodo="addTodo"></new-to-do>
    </div>
    <div class="todo-container list">
      <to-do-list :todoList="todoList"></to-do-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import NewToDo from "./components/NewToDo.vue";
import ToDoList from "./components/ToDoList.vue";

interface ToDo {
  name: String;
  status: "todo" | "untodo" | "delete";
}
@Component({
  components: {
    NewToDo,
    ToDoList
  }
})
export default class App extends Vue {
  todoList: Array<ToDo> = [
    {
      name: "aaa",
      status: "untodo"
    }
  ];

  addTodo(todoText: String) {
    let todo: ToDo = {
      name: todoText,
      status: "untodo"
    };
    this.todoList.push(todo);
  }
}
</script>

<style lang="scss">
.app {
  > .todo-container {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &.add {
      background: #323232;
      > .text {
        align-self: flex-start;
      }
    }
    &.list{
      background: #CDCDCD;
    }
  }
}
</style>
<style lang="scss"  >
ul,
ol {
  list-style: none;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
