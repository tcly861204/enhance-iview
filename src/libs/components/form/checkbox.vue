
<template>
 <FormItem label="label" class="en-ivu-form-item">
    <CheckboxGroup>
      <slot></slot>
    </CheckboxGroup>
  </FormItem>
</template>
<script>
import { FormItem, CheckboxGroup, Checkbox } from 'iview'
export default {
  name: 'en-checkbox',
  props: {
    label: String,
    default: ''
  },
  components: {
    FormItem,
    CheckboxGroup,
    Checkbox
  }
}
</script>
