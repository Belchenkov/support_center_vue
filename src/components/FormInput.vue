<template>
  <div class="row">
    <component
      :is="element"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      v-bind="$attrs"
      :value.prop="value"
      @input="update"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      },
      value: {
        required: true,
      },
      placeholder: {
        type: String,
      },
      invalid: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      inputClass () {
        return {
          'invalid': this.invalid,
        }
      },
      element () {
        return this.type === 'textarea' ? this.type : 'input'
      },
    },
    methods: {
      update (event) {
        this.$emit('input', event.currentTarget.value)
      },
    },
  }
</script>
