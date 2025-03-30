// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  icon?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date?: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "个人证件 & 奖项"
export const awardsIntro = "个人证件和获得的奖项。"

export const awards: Array<ActivityItemType> = [
  {
    name: '软考中级-软件设计师',
    description: '',
    date: '2025',
    location: '深圳',
  },
  {
    name: '驾驶证',
    description: '',
    date: '2021',
    location: '深圳',
  },
  {
    name: '英语四级',
    description: '',
    date: '2019',
    location: '广东海洋大学',
  }
]

// Research & Projects
export const projectHeadLine = "研究 & 项目经历"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '沃尔玛发票结算平台 - WAPP',
    description: '该项目是由票易通公司运维开发，为沃尔玛给供应商使用的平台，有报表管理、发票管理、结算金额、索赔单管理等等，供应商将发票上传至平台，经过一系列解析、验真、匹配关系等操作，最后交给沃尔玛的SAP系统完成付款',
    link: { href: 'xforceplus.com', label: 'GitHub卡片' },
    tags: ['SpringBoot', 'Java', 'RabbitMQ'],
    icon: '/images/icon/aibesttools.png'
  },
  {
    name: '华阳大数据指标平台',
    description: '工程造价数据管理平台（对标广联达指标网站）是建筑互联网领域',
    link: { href: 'ibim.com.cn', label: '编程马拉松' },
    tags: ['ElasticSearch', 'Java'],
    icon: '/images/icon/capol.ico'
  },
  {
    name: '消息分发平台',
    description: '统一的接口发送各种类型消息，对消息生命周期全链路追踪。',
    link: { href: '106.75.176.183:3001', label: '查看课程' },
    tags: ['Kafka', 'Java', 'SpringBoot'],
    icon: '/images/icon/austin.png'
  },
  {
    name: '云帆Passm',
    description: '微服务监控平台',
    link: { href: 'mastercom.cn', label: '查看课程' },
    tags: ['Kafka', 'Java', 'SpringBoot', 'ElasticSearch'],
    icon: '/images/icon/mastercom.png'
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "爱好与志愿活动"
export const activitiesIntro = "个人兴趣和社区贡献。"

export const activities: Array<ActivityItemType> = [
  {
    name: '字节跳动青训营',
    description:
      '通过青训营学习Golang语言，并且写出简易的抖音服务器，包括用户注册、登录、视频投稿、视频流、评论、点赞等功能。',
    date: '2022-02-24',
    location: 'ShenZhen',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'Leetcode 周赛参与者',
    description:
      '参加Leetcode周赛，获得了多个奖项，包括Knight段位等。',
    location: 'ShenZhen'
  },
  {
    name: '掘金作者交流会',
    description:
      '参加了掘金作者交流会议，与其他作者分享了自己的经验和想法。',
    date: '2024-03-15',
    location: 'ShenZhen',
  },
]
