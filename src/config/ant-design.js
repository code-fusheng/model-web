import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import { message } from 'ant-design-vue'

Vue.use(Antd)

message.config({
  top: `20px`,
  duration: 2,
  maxCount: 3
})
