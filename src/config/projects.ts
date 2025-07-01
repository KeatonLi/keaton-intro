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

export type PortfolioItemType = {
  title: string
  description: string
  technologies: string[]
  icon: React.ReactNode
  highlights: string[]
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
export const projectHeadLine = "作品集"
export const projectIntro = "个人作品集展示"

// Portfolio Items
export const portfolioItems: Array<Omit<PortfolioItemType, 'icon'> & { iconName: string }> = [
  {
    title: '分布式电商系统',
    description: '基于 Spring Cloud 微服务架构的高并发电商平台，支持秒杀、订单处理、支付等核心功能。采用 Redis 缓存、RabbitMQ 消息队列、MySQL 主从分离等技术栈。',
    technologies: ['Spring Boot', 'Spring Cloud', 'Redis', 'MySQL', 'RabbitMQ'],
    iconName: 'Globe',
    highlights: ['日处理订单量 10万+', '系统可用性 99.9%', '响应时间 < 200ms']
  },
  {
    title: '实时数据处理平台',
    description: '基于 Apache Flink 的实时流处理系统，支持大规模数据实时计算和分析。集成 Kafka、ClickHouse 等组件，为业务决策提供实时数据支持。',
    technologies: ['Apache Flink', 'Kafka', 'ClickHouse', 'Golang', 'Docker'],
    iconName: 'Database',
    highlights: ['处理 TPS 50万+', '毫秒级延迟', '支持复杂事件处理']
  },
  {
    title: '智能运维监控系统',
    description: '基于 Prometheus + Grafana 的全链路监控平台，集成日志分析、性能监控、告警通知等功能。支持容器化部署和自动扩缩容。',
    technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'ELK Stack', 'Python'],
    iconName: 'Server',
    highlights: ['监控节点 1000+', '告警响应 < 1分钟', '自动化运维']
  },
  {
    title: '高性能 API 网关',
    description: '基于 Golang 开发的轻量级 API 网关，支持路由转发、限流熔断、认证鉴权等功能。具备高并发处理能力和低延迟特性。',
    technologies: ['Golang', 'Redis', 'JWT', 'Docker', 'Nginx'],
    iconName: 'Zap',
    highlights: ['QPS 10万+', '平均延迟 < 10ms', '内存占用 < 100MB']
  },
  {
    title: '企业级权限管理系统',
    description: '基于 RBAC 模型的细粒度权限控制系统，支持多租户、动态权限配置、审计日志等企业级功能。前后端分离架构设计。',
    technologies: ['Spring Security', 'React', 'PostgreSQL', 'JWT', 'TypeScript'],
    iconName: 'Shield',
    highlights: ['支持万级用户', '细粒度权限控制', '完整审计追踪']
  },
  {
    title: '代码质量分析平台',
    description: '集成多种静态代码分析工具的质量管控平台，支持代码规范检查、安全漏洞扫描、技术债务分析等功能。与 CI/CD 流程深度集成。',
    technologies: ['SonarQube', 'Jenkins', 'GitLab CI', 'Java', 'Shell'],
    iconName: 'Code',
    highlights: ['支持 20+ 语言', '集成 CI/CD', '自动化质量门禁']
  }
]


// Hobbies & Volunteer
export const activitiesHeadLine = "爱好与志愿活动"
export const activitiesIntro = "个人兴趣和社区贡献。"

export const activities: Array<ActivityItemType> = [
  {
    name: '羽毛球运动',
    description: '热爱羽毛球运动，定期参与俱乐部活动和比赛，通过运动保持身心健康。',
    location: '深圳',
  },
  {
    name: '健身训练',
    description: '坚持规律的健身训练，注重身体素质的提升和健康生活方式的维持。',
    location: '深圳',
  },
  {
    name: '技术分享',
    description: '积极参与技术社区，分享开发经验和技术心得，帮助其他开发者成长。',
    location: '线上/线下',
  }
]


