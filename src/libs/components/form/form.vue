<template>
  <Form :model="formValidate" :label-width="labelWidth">
    <slot></slot>
  </Form>
</template>
<script>
import { Form } from 'iview'
export default {
  name: 'en-form',
  props: {
    formValidate: {
      type: Object
    },
    labelWidth: {
      type: Number,
      default: 80
    }
  },
  components: {
    Form
  }
}
</script>
