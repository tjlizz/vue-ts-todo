<template>
<div> 
  <ol class="todoList"> 
      <li v-for="item in todoList" :key="item.Id" class="todo">
       <input type="checkbox" class="check">    {{item.name}}
      </li>
  </ol>
</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    todoList: Array
  }
})
export default class ToDoList extends Vue {
 
}
</script>
<style lang="scss" scoped>
.todoList{
    > .todo{
        background: #ffffff;
        padding: 5px 10px;
        border-radius: 4px; 
        min-width: 150px;
        margin: 5px;
        > .check{
            padding: 10px;
               width: 20px;
        }
    }
}

</style>