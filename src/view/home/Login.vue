<template>
    <div class="container">
        <div class="loginform">
            <h2>系统登陆</h2>

            <el-form ref="ruleForm" :model="ruleForm">
                <el-form-item prop="loginName"   :rules="{
      required: true, message: '请输入正确的用户名', trigger: 'blur'
    }">
                    <el-input autocomplete="off" v-model="ruleForm.loginName"></el-input>
                </el-form-item>
                <el-form-item prop="pwd"   :rules="{
      required: true, message: '密码不能为空', trigger: 'change'
    }">
                    <el-input type="password" autocomplete="off" v-model="ruleForm.pwd"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LoginUser from "@/model/LoginUser";
    import {Form} from "element-ui";

    @Component
    export default class App extends Vue {
        public $refs!: {
            ruleForm: Form
        }
        ruleForm: LoginUser = {
            loginName: '',
            pwd: ''
        }

        rules: {
            loginName: [{
                required: true,
                message: '22222', trigger: 'blur'

            }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }];

        } | undefined

        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm)

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
</script>

<style scoped lang="scss">
    .container {
        border: 1px solid red;
        height: 100vh;
        text-align: center;

        > .loginform {
            width: 350px;
            display: inline-block;
            padding: 15px;
            margin-top: 200px;
            text-align: center;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

            > h2 {
                margin-bottom: 20px;
            }
        }
    }

    .el-form-item__content {
        border: 1px solid gray;

    }

</style>
