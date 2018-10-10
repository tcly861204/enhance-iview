<template>
  <div class="hello" style="width: 100%; padding:50px;">
    <en-form :formValidate="formValidate" :labelWidth="80">
      <Row>
        <Col span="12">
          <en-input label="用户名" :value="formValidate.name" />
        </Col>
        <Col span="12">
          <en-input label="邮箱" value="abwwe"></en-input>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <en-checkbox>
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </en-checkbox>
        </Col>
        <Col span="12">
          <en-input type="text" label="邮件" value="abwwe"></en-input>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <en-input type="textarea" :rows="4" label="备注" value="abwwe"></en-input>
        </Col>
      </Row>
    </en-form>
  </div>
</template>

<script>
import { Row, Col,Checkbox } from 'iview'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Row,
    Col,
    Checkbox
  },
  data() {
    return {
      formValidate: {
        name: ''
      },
    }
  }
}
</script>
