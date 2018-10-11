<template>
  <FormItem :label="label" class="en-ivu-form-item">
    <Input :type="type" v-if="type==='textarea'" :rows="rows" placeholder="Enter something..." />
    <Input :type="type" v-else placeholder="Enter something..." />
  </FormItem>
</template>
<script>
import { FormItem, Input } from 'iview'
export default {
  name: 'en-input',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 2
    },
    value: {
      type: String
    }
  },
  components: {
    FormItem,
    Input
  }
}
</script>
