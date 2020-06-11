<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <FormInput
        name="username"
        v-model="username"
        placeholder="Username"
        @input="val => username = val"
      />
    </form>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
      }
    },
  }
</script>
