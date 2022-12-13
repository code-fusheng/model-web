<template>
  <div>
    <div class="about-container">
      <a-span :spinning="loading">
        <div class="about-me-page">
          <div class="blockquote">
            <span class="strong">About Me</span>
            <span>关于我</span>
          </div>
          <div class="user-detail">
            <div v-for="item in about.userDetails" :key="item.sort" class="user-detail-kv">
              <span class="label">{{ item.label }}</span>
              <span v-if="item.label == '电话: '" class="value"><a href="tel:15115726712">15115726712</a></span>
              <span v-if="item.label == '邮箱: '" class="value"><a href="mailto:2561035977@qq.com">2561035977@qq.com</a></span>
              <span v-if="item.label != '邮箱: ' && item.label != '电话: '" class="value" :style="item.style">{{ item.value }}</span>
            </div>
          </div>
          <hr class="one-hr" style="clear: both;" />
          <div class="blockquote">
            <span class="strong">Personal Honor</span>
            <span>个人荣誉</span>
          </div>
          <div class="personal-honer">
            <!-- 时间线 -->
            <div>
              <a-timeline mode="alternate">
                <a-timeline-item v-for="record in about.personalHoners" :key="record.sort">
                  <span class="time">{{ record.time }}</span>
                  <span>{{ record.honer }}</span>
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <hr class="one-hr" />
          <div class="blockquote">
            <span class="strong">Skill Stack</span>
            <span>技术栈</span>
          </div>
          <div class="skill-stack">
            <div v-for="record in about.skillStacks" :key="record.sort" class="">
              <span class="normal-text">{{ record.level }}</span>
              <span class="normal-text" style="color: #f40">{{ record.skill }}</span>
              <span class="normal-text">{{ record.desc }}</span>
            </div>
          </div>
          <hr class="one-hr" />
          <div class="blockquote">
            <span class="strong">Edu Experience</span>
            <span>教育经历</span>
          </div>
          <div class="edu-experience">
            <div v-for="record in about.eduExperiences" :key="record.sort" class="edu-exp-item">
              <span class="label date-text">{{ record.date }}</span>
              <span class="label">{{ record.school }}</span>
              <span class="label">{{ record.class }}</span>
              <span class="label">{{ record.software }}</span>
            </div>
          </div>
          <hr class="one-hr" />
          <div class="blockquote">
            <span class="strong">Work Experience</span>
            <span>工作经历</span>
          </div>
          <div class="work-experience">
            <div v-for="record in about.workExperiences" :key="record.sort">
              <div class="company-header">
                <span class="label strong">{{ record.company }}</span>
                <span class="label date-text">{{ record.date }}</span>
                <span class="label">{{ record.department }}</span>
                <span class="label">{{ record.job }}</span>
              </div>
              <div class="responsibility-desc">
                <span class="label ">岗位描述:</span>
                <span class="normal-text ">{{ record.responsibility }}</span>
                <ul>
                  <li v-for="(item, index) in record.details" :key="index">
                    <span class="normal-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="one-hr" />
          <div class="blockquote">
            <span class="strong">Project Experience</span>
            <span>项目经历</span>
          </div>
          <!-- 自定义折叠面板 -->
          <div class="project-experiences">
            <div v-for="record in about.projectExperiences" :key="record.sort" class="project-experiences-item">
              <div class="project-header">
                <span class="label strong">{{ record.name }}</span>
                <span class="label strong date-text">{{ record.date }}</span>
                <span class="label strong">{{ record.duty }}</span>
              </div>
              <div class="project-center">
                <span class="label ">项目描述:</span>
                <span class="normal-text">{{ record.desc }}</span>
                <ul>
                  <li v-for="(item, index) in record.details" :key="index">
                    <span class="normal-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div class="project-buttom ">
                <div v-for="(item, index) in record.refLinks" :key="index">
                  <div class="link-kv">
                    <span class="normal-text">{{ item.label }}</span>
                    <a :href="item.link" class="value">
                      <span>{{ item.link }}</span>
                    </a>
                  </div>
                </div>
              </div>
              <hr v-if="record.sort != about.projectExperiences.length" class="tow-hr" />
            </div>
          </div>
          <hr class="one-hr" />
          <div class="blockquote">
            <span class="strong">Personal Advantage</span>
            <span>个人优势</span>
          </div>
          <div class="normal-text" v-html="about.personalAdvantage"></div>
        </div>
      </a-span>
    </div>
  </div>
</template>

<script>
const defaultAbout = {
  userDetails: [
    {
      sort: 1,
      label: '姓名: ',
      value: '张浩'
    },
    {
      sort: 2,
      label: '生日: ',
      value: '1998-12-18'
    },
    {
      sort: 3,
      label: '籍贯: ',
      value: '湖南 长沙'
    },
    {
      sort: 4,
      label: '电话: ',
      value: '15115726712'
    },
    {
      sort: 5,
      label: '邮箱: ',
      value: '2561035977@qq.com'
    }
  ],
  personalHoners: [
    {
      sort: 1,
      time: '2017年',
      honer: '新生军训“优秀学员”称号'
    },
    {
      sort: 2,
      time: '2017年',
      honer: '湖南百公里“百里毅行”证书'
    },
    {
      sort: 3,
      time: '2018年',
      honer: '长沙望城国际铁人三项赛志愿者证书'
    },
    {
      sort: 4,
      time: '2018年',
      honer: '桃源招生团队“优秀个人”称号'
    },
    {
      sort: 5,
      time: '2019年',
      honer: '全国计算机水平等级考试二级合格证'
    },
    {
      sort: 6,
      time: '2020年',
      honer: '软考中级“软件设计师“资格证'
    },
    {
      sort: 7,
      time: '2020年',
      honer: '软件卓越人才班“优秀学员”称号'
    },
    {
      sort: 8,
      time: '2021年',
      honer: '湖南信息学院“优秀毕业生”称号'
    }
  ],
  skillStacks: [
    {
      sort: 1,
      level: '擅长',
      skill: ' Java ',
      desc: '、5年 Java 编程开发经验，熟练使用线程、并发、集合、反射以及各类工具；'
    },
    {
      sort: 2,
      level: '擅长',
      skill: ' Mysql ',
      desc: '、丰富的中小型项目需求分析、库表设计、SQL 优化实践经验；'
    },
    {
      sort: 3,
      level: '擅长',
      skill: ' Spring Cloud ',
      desc: '、丰富的项目开发实践经验，熟悉各类组件；'
    },
    {
      sort: 4,
      level: '擅长',
      skill: ' Elaticsearch ',
      desc: '、丰富的 ES 业务实践经验，熟悉原理与场景应用；'
    },
    {
      sort: 5,
      level: '熟悉',
      skill: ' MQ ',
      desc: '、具备 RocketMQ、RabbitMQ 消息中间件实践经验，做过技术调研，理解底层实现；'
    },
    {
      sort: 6,
      level: '熟悉',
      skill: ' Netty、WebSocket ',
      desc: '、具备开发案件协同编辑页的经验与能力；'
    },
    {
      sort: 7,
      level: '熟悉',
      skill: ' Redis、Redisson ',
      desc: '、丰富的缓存与分布式锁使用经验，尤其在支付场景使用颇多；'
    },
    {
      sort: 8,
      level: '熟悉',
      skill: ' Vue、React、Js、Nuxt、Node.js ',
      desc: '、扎实的前端基础、具备前端开发能力与一定的开发经验；'
    },
    {
      sort: 9,
      level: '熟悉',
      skill: ' Element、AntD、Echarts ',
      desc: '、对于前端 UI 框架有一定的使用经验；'
    },
    {
      sort: 10,
      level: '熟悉',
      skill: ' Linux ',
      desc: '、具备一定的 CentOS 系统开发、环境搭建、安全运维经验，熟悉常用脚本的编写使用；'
    },
    {
      sort: 11,
      level: '熟悉',
      skill: ' Docker、K8S ',
      desc: '、对云原生技术栈有一定的理解和实践经验；'
    },
    {
      sort: 12,
      level: '熟悉',
      skill: ' Jenkins、Gitlab、Nginx ',
      desc: '、有一定的搭建 CI/DC 自动化运维持续集成技术能力与经验；'
    },
    {
      sort: 13,
      level: '了解',
      skill: ' MongoDB、FreeMarker、Poi、Promethenus、NFS、Harbor、RPC、Drools、JMeter ...； '
    },
    {
      sort: 14,
      level: '了解',
      desc: ' 企服行业知识，包括但不限于：工商注册、知识产权、财务会计、资质政策，并熟悉相应业务系统开发；'
    },
    {
      sort: 15,
      level: '具备',
      desc: ' 市场调研、技术选型、需求分析、原型设计、团队项目、项目管理、产品培训等能力有一定实践经验； '
    },
    {
      sort: 16,
      level: '具备',
      desc: ' 计算机、经济、会计、社会心理、管理等诸多领域知识； '
    }
  ],
  eduExperiences: [
    {
      sort: 1,
      date: '2017.09 ~ 2021.07',
      school: '湖南信息学院',
      class: '计算机科学与工程学院',
      software: '软件工程'
    }
  ],
  workExperiences: [
    {
      sort: 1,
      date: '2021.03.01 ~ 至今',
      company: '湖南汉岳数字科技有限公司',
      department: '用户产品研发部',
      job: 'Java开发工程师',
      responsibility: '伙伴平台项目负责人、BOSS支付与清算系统项目交接负责人、政府营商云平台核心开发。',
      details: [
        '负责公司伙伴平台项目的协调产品需求分析确认、库表设计以及项目核心功能的架构设计实现与生产维护；',
        '负责公司支付与清算系统迭代开发与日常维护；',
        '负责营商云政企平台项目库表设计、参与需求分析、主导核心功能开发。'
      ]
    },
    {
      sort: 2,
      date: '2020.10.18 ~ 2021.02.18',
      company: '湖南好停车网络科技有限公司',
      department: '研发部',
      job: '后端开发',
      responsibility: '智慧停车系统开发、线上长租产品项目负责人、消息中间件技术改革负责人。',
      details: [
        '负责线上长租产品设计研发，包括需求分析、市场调研、原型设计、功能开发、提测发布、产品培训；',
        '负责万象城第三方车流数据同步、本地车场第三方 MallCoo 积分费用自动抵扣功能开发；',
        '负责消息中间件技术选型、方案落地，解决系统分布式 RPC 调用、数据同步场景需求。'
      ]
    }
  ],
  projectExperiences: [
    {
      sort: 1,
      date: '2020.03.10 ~ 至今',
      name: '个人工程技术笔记 | 浮生',
      duty: 'Owner',
      desc: '个人技术学习工程原型，包括单机版与微服务版本、支持云原生与 CI/CD 。',
      details: ['主要用于技术探索实践与知识储备。'],
      refLinks: [
        {
          label: '个人工程技术笔记主页:',
          link: 'http://fusheng.xyz'
        },
        {
          label: '单机版本 Wiki',
          link: 'https://github.com/code-fusheng/model/wiki'
        },
        {
          label: '微服务版本 Wiki',
          link: 'https://github.com/code-fusheng/code-galaxy/wiki'
        }
      ]
    },
    {
      sort: 2,
      date: '2020.02.28 ~ 2020.07.01',
      name: '软件卓越人才班 | 班务综合管理平台',
      duty: '项目负责人&团队队长',
      desc: 'CLMS 班务综合管理平台是辅佐卓越人才班教学任务的在线交流学习平台。',
      details: [
        '首次担任项目负责人，表现优秀且获得导师高度认可与评价；',
        '负责项目的需求分析、技术研讨、项目架构、代码规范、环境搭建、项目部署、进度管理、文档维护；',
        '负责项目文章模块、答疑模块、搜索推荐、个人中心、消息通知设计开发；',
        '负责团队日常管理、人员协调、组织活动、站会例会、工作汇报。'
      ]
    },
    {
      sort: 3,
      date: '2021.03.01 ~ 2021.04.01 ～ 至今',
      name: '蜂擎云服 | 伙伴端',
      duty: '项目开发负责人',
      desc: '[自主研发从0到1] 打造一站式企业工具服务全方位赋能平台。',
      details: [
        '担任平台项目开发负责人，经历(V1.0.0 ~ V1.4.6)版本迭代开发；',
        '负责平台系统库表设计、参与技术方案实现；',
        '负责平台交易业务功能设计与编码开发，包括但不限于充值、消费、退款、提现、优惠券；',
        '负责平台统一消息推送总体设计与实现，包括站内信、短信、微信公众号模版消息；'
      ],
      refLinks: [
        {
          label: '主页',
          link: 'https://hb.gongsibao.com'
        }
      ]
    },
    {
      sort: 4,
      date: '2021.07.19 ~ 2021.10.25',
      name: '伙伴端 | 商标交易平台',
      duty: '库表设计&核心开发',
      desc: '[自主研发从0到1] 商标在线交易商城。',
      details: [
        '负责商标交易平台主站与伙伴渠道库表设计；',
        '负责系统云服商品留资、订单下单、回款结算业务对接与开发；',
        '负责平台标源商品 ES 百万级数据复杂条件检索设计与实现。深度使用 ES 技术(bool聚合、terms精确、filter过滤、script脚本、match匹配、sort排序、random随机、scor评分、agg聚合以及版本兼容和配置优化)；'
      ],
      refLinks: [
        {
          label: '主页',
          link: 'https://shangbiao.gongsibao.com'
        }
      ]
    },
    {
      sort: 5,
      date: '2022.04.26 ~ 2022.08.29 ~ 至今',
      name: '政企智慧营商云平台',
      duty: '库表设计&核心开发',
      desc: '[自主研发从0到1] 优化政府园区营商环境，数字化赋能园区管理与企业发展，打造企业、政府园区、管理终端三端一体，提供数据大屏、政策大数据可视化动态监控。',
      details: [
        '负责平台需求分析、库表设计。借鉴参考天眼查、企查查等数据接口以及工商领域知识，进行面向对象系统建模设计；',
        '负责企业端与政府端的企业列表开发(多表联合复杂查询 => ES检索)、证照管理功能开发(证照日历图)；',
        '负责企业工商大数据清洗与 ES 数据维护与检索、企业标签功能开发；'
      ],
      refLinks: [
        {
          label: '主页',
          link: 'https://zq.gongsibao.com/guochuang/index'
        }
      ]
    },
    {
      sort: 6,
      date: '2021.09.02 ~ 至今',
      name: '伙伴端 ｜ 子系统',
      duty: '核心开发',
      desc: '[围绕伙伴端平台打造的一系列企业服务赋能工作台。包括: 版权工作台、商标工作台、工商工作台、智能分析工作台、财税工作台；',
      details: [
        '负责版权工作台库表设计、案件订单支付流程与退款业务开发、统一消息推送；',
        '负责工商工作台库表设计、服务端架构设计、案件协同编辑、交易业务开发以及统一消息推送；',
        '负责商标工作台业务办理用户行为监控统计与数据分析，Node.Js 后端数据与前端 Echarts 图表全栈开发；',
        '负责智能分析工作台库表设计、API接口签名设计、高新技术企业测评报告开发、Word 版报告生成；',
        '负责财税工作台工行银账通数据对接、Saas系统日常会计业务向问题排查与处理(学习大量会计行业相关知识)；'
      ]
    },
    {
      sort: 7,
      date: '2022.02.23 ~ 至今',
      name: 'BOSS支付与清算系统',
      duty: '项目交接负责人',
      desc: '公司财务系统，基于会计记账体系所打造的公司统一支付网关与清结算系统。',
      details: [
        '负责接管BOSS支付与清算系统整体日常工作，以及定期维护渠道功能稳定性；',
        '负责优化招商银行记账管家支付渠道功能，协调银行进行需求开发与升级维护；',
        '负责对接公司各平台系统支付功能、优化渠道、商户、会员账户开户逻辑与收银台支付功能；',
        '负责维护账务对账与清算功能，补偿处理系统异常订单数据问题；',
        '负责优化支付宝、微信、小程序等渠道支付功能。'
      ]
    }
  ]
}
import confApi from '@/api/sys/conf.js'
// import { getAboutMeCookie, setAboutMeCookie } from '@/utils/auth'
export default {
  data() {
    return {
      about: defaultAbout,
      loading: true,
      aboutStyle: {
        width: ''
      }
    }
  },
  created() {
    // console.log(getAboutMeCookie())
    this.getAboutMe()
  },
  mounted() {},
  methods: {
    getAboutMe() {
      confApi.getAboutMe().then(res => {
        this.about = res.data
        this.loading = false
        // setAboutMeCookie(this.about)
      })
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/markdown.css';
.about-container {
  min-height: 1080px;
  margin: auto;
  width: 100%;
  color: rgb(2, 2, 2);
  /* background-color: rgb(196, 196, 201); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-me-page {
  /* border: 1px solid black; */
  max-width: 850px;
  margin: 10px;
  min-height: 1580px;
  background-color: white;
  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
.user-detail {
  /* line-height: 40px; */
  margin: 10px 0;
  /* padding: 10px; */
  /* float: left; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.user-detail-kv {
  float: left;
  /* display: flex;
  flex-direction: row; */
}
.user-detail-kv::after {
  /* clear: both; */
}

.personal-honer {
  margin: 20px 0 0 0;
  /* display: flex; */
  width: 100%;
  justify-content: center;
}
.ant-timeline-item {
  padding: 0 0 5px;
}
.ant-timeline {
  font-size: 10px;
  width: 100%;
}
.edu-experience {
  margin: 10px 20px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.edu-exp-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.work-experience {
  /* padding: 20px 0; */
  display: flex;
  flex-direction: column;
}
.company-header {
  padding: 5px 20px 5px 0px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.project-experiences {
  display: flex;
  flex-direction: column;
}
.project-experiences-item {
  border: 1px solid white;
}
.project-header {
  margin: 10px 50px 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.link-kv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
