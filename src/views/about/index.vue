<template>
  <div>
    <div class="about-container">
      <div class="about-me-page">
        <div class="blockquote">
          <span class="strong">About Me 关于我</span>
        </div>
        <div class="my-details">
          <div>
            <span class="label">姓名:</span>
            <span class="value" style="fontSize: 24px">张浩</span>
          </div>
          <div>
            <span class="label">生日:</span>
            <span class="value">1998年12月18日</span>
          </div>
          <div>
            <span class="label">电话:</span>
            <span class="value">15115726712</span>
          </div>
          <div>
            <span class="label">邮箱:</span>
            <span class="value">2561035977@qq.com</span>
          </div>
        </div>
        <hr />
        <div class="blockquote">
          <span class="strong">Personal Honor 个人荣誉</span>
        </div>
        <div class="personal-honer">
          <!-- 时间线 -->
          <div>
            <a-timeline mode="alternate">
              <a-timeline-item v-for="record in personalHoners" :key="record.sort">
                <span class="time">{{ record.time }}</span>
                <span>{{ record.honer }}</span>
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
        <hr />
        <div class="blockquote">
          <span class="strong">Skill Stack 技术栈</span>
        </div>
        <div class="skill-stack">
          <ul v-for="record in skillStacks" :key="record.sort">
            <li>
              <span class="normal-text">{{ record.level }}</span>
              <span class="normal-text">{{ record.skill }}</span>
              <span class="normal-text">: {{ record.desc }}</span>
            </li>
          </ul>
        </div>
        <hr />
        <div class="blockquote">
          <span class="strong">Edu Experience 教育经历</span>
        </div>
        <div class="edu-experience">
          <div class="edu-exp-item" v-for="record in eduExperiences" :key="record.sort">
            <span class="normal-text">{{ record.date }}</span>
            <span class="normal-text">{{ record.school }}</span>
            <span class="normal-text">{{ record.class }}</span>
            <span class="normal-text">{{ record.software }}</span>
          </div>
        </div>
        <br />
        <div class="blockquote">
          <span class="strong">Work Experience 工作经历</span>
        </div>
        <br />
        <div class="blockquote">
          <span class="strong">Project Experience 项目经历</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockCircleOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    ClockCircleOutlined
  },
  data() {
    return {
      personalHoners: [
        { sort: 1, time: '2017年', honer: '新生军训“优秀学员”称号' },
        { sort: 2, time: '2017年', honer: '湖南百公里“百里毅行”证书' },
        { sort: 3, time: '2018年', honer: '长沙望城国际铁人三项赛志愿者证书' },
        { sort: 4, time: '2018年', honer: '桃源招生团队“优秀个人”称号' },
        { sort: 5, time: '2019年', honer: '全国计算机水平等级考试二级合格证' },
        { sort: 6, time: '2020年', honer: '软考中级“软件设计师“资格证' },
        { sort: 7, time: '2020年', honer: '软件卓越人才班“优秀学员”称号' },
        { sort: 8, time: '2021年', honer: '湖南信息学院“优秀毕业生”称号' }
      ],
      skillStacks: [
        { sort: 1, level: '擅长', skill: ' Java ', desc: '5年 Java 编程开发经验' },
        { sort: 2, level: '擅长', skill: ' Java ', desc: '5年 Java 编程开发经验' },
        { sort: 3, level: '擅长', skill: ' Java ', desc: '5年 Java 编程开发经验' }
      ],
      eduExperiences: [{ sort: 1, date: '2017.09 --- 2021.07', school: '湖南信息学院', class: '计算机科学与工程学院', software: '软件工程' }]
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/markdown.css';
.about-container {
  min-height: 108em;
  margin: auto;
  width: 100%;
  color: rgb(2, 2, 2);
  background-color: rgb(196, 196, 201);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-me-page {
  /* border: 1px solid black; */
  width: 50%;
  margin: 1em;
  height: 158em;
  background-color: #e4e3c8;
  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 1em;
}
.my-details {
  line-height: 2em;
  margin: 1em 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.personal-honer {
  margin: 2em 0 0 0;
  display: flex;
  width: 100%;
  justify-content: center;
}
.ant-timeline-item {
  padding: 0 0 5px;
}
.ant-timeline {
  font-size: 10px;
  width: 80em;
}
.edu-experience {
  padding: 2em;
  display: flex;
  flex-direction: column;
}
.edu-exp-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
