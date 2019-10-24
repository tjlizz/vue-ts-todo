<template>
    <div>
        <div class="app">
            <input type="text" @keyup.enter="submit" v-model="todoText" class="todo-input"/>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class NewToDo extends Vue {
        todoText: String = "";

        submit() {
            this.$emit("addTodo", this.todoText);
            this.todoText = ''
        }
    }
</script>
<style lang="scss" scoped>
    .app {
        > .todo-input {
            padding: 5px;
            width: 200px;
            outline: none;
            border-radius: 4px;
        }
    }
</style>
