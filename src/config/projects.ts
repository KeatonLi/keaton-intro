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
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖项与荣誉"
export const awardsIntro = "对学术和职业成就的认可。"

export const awards: Array<ActivityItemType> = [
  {
    name: '优秀教师奖',
    description: '',
    date: '2024',
    location: '上海协和双语高级中学',
  },
  {
    name: '追影奖',
    description: '',
    date: '2023',
    location: '上海青浦',
  },
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
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
