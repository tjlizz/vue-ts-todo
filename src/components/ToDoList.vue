<template>
    <div>
        <ol class="todoList">
            <li v-for="item in todoData()" :key="item.Id" class="todo">
                <input type="checkbox" class="check" :checked="item.status === 'todo'"
                       @change="todoChange(item,$event)">{{item.name}}
            </li>
        </ol>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Todo from "../model/ToDo";

    @Component({
        props: {
            todoList: Array
        },
    })
    export default class ToDoList extends Vue {
        todoData() {
            return this.$props.todoList.filter((item: Todo) => {
                return item.index == 0;
            })
        }

        todoChange(item: Todo, event: Event) {
            let checkd = (<HTMLInputElement>event.target).checked;
            this.$emit('todoChange', item, {status: checkd ? 'todo' : 'untodo', index: checkd ? 1 : 0})

        }

    }
</script>
<style lang="scss" scoped>
    .todoList {
        > .todo {
            background: #ffffff;
            padding: 5px 10px;
            border-radius: 4px;
            min-width: 150px;
            margin: 5px;

            > .check {
                padding: 10px;
                width: 20px;
            }
        }
    }

</style>