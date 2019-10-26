<template>
    <div class="container">
        <div class="main">
            <img src="../../assets/login_center_bg.png" style="width: 100%">
        </div>

    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class App extends Vue {

    }
</script>

<style scoped lang="scss">

    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        overflow: hidden;
        > .main {
            background: #409EFF;

        }

    }

</style><style lang="scss"  >
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
