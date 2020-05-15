<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            
               
               
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <v-text-field v-model="form.email" label="Email"></v-text-field>
                        </div>
                        <div class="form-group row">
                             
                              <v-text-field
                               v-model="form.password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                label="Password"
                                @click:append="show1 = !show1"
                              ></v-text-field>
                        </div>
                        <div class="form-group row">
                             <v-btn small color="primary" type="submit">Login</v-btn>
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{ authError }}
                            </p>
                        </div>
                    </form>
               
            
        </div>
    </div>
</template>

<script>
    import {login} from '../helpers/auth';

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null,
                show1: false,
                password: 'Password'
            };
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/dashboard'});
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>

