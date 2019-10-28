<template>
  <div class="app">
    <div class="todo-container add">
      <new-to-do @addTodo="addTodo"></new-to-do>
    </div>
    <div class="todo-container list">
      <to-do-list :todoList="todoList" @todoChange="todoChange"></to-do-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewToDo from "../../components/NewToDo.vue";
import ToDoList from "../../components/ToDoList.vue";
import ToDo from "../../model/ToDo";

@Component({
  components: {
    NewToDo,
    ToDoList
  },
  watch:{
    todoList(newValue:Array<ToDo>){
      localStorage.setItem('data',JSON.stringify(newValue))
    }
  }
})
export default class App extends Vue {


  todoList:Array<ToDo> =  localStorage.getItem("data")?JSON.parse(<string>localStorage.getItem("data")):[];


  addTodo(todoText: String) {
    let todo: ToDo = {
      name: todoText,
      status: "untodo",
      index:0
    };
    this.todoList.push(todo);
  }

  todoChange(todo:ToDo,status:Partial<ToDo>){
    let index:number=this.todoList.indexOf(todo);
    let  newTodo:ToDo=Object.assign({},todo,status);
    this.todoList.splice(index,1,newTodo);
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
