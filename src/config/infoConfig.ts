export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '黎博凯'
export const headline = '别浪费天赋与热爱.'
export const introduction =
  "你好！我是黎博凯，一名热爱技术的 Java 开发工程师。我专注于后端开发，同时也涉猎 Golang 和 React 技术栈。工作之余，我热衷于羽毛球运动和健身，也喜欢在游戏世界中探索和放松。我相信技术与生活的平衡，让每一天都充满活力与创造力。"
export const email = 'li_bo_kai@qq.com'
export const githubUsername = 'KeatonLi'
export const leetcodeUsername = 'keaton'

// about page
export const aboutMeHeadline = '关于我 - 技术与生活的平衡者'
export const aboutParagraphs = [
  "你好！我是黎博凯，一名充满热情的 Java 开发工程师。我专注于后端开发领域，深耕 Spring 生态系统，同时也在 Golang 和 React 技术栈上不断探索和实践。",
  '在技术之路上，我始终相信"别浪费天赋与热爱"这一理念。我热衷于构建高性能、可扩展的后端系统，擅长微服务架构设计和分布式系统开发。从数据库优化到容器化部署，我享受解决复杂技术挑战的过程。',
  "工作之余，我是一个热爱生活的人。羽毛球场上挥洒汗水，健身房里挑战自我，游戏世界中放松心情 - 这些都是我保持工作与生活平衡的方式。我相信技术人不仅要有扎实的专业能力，更要有丰富的生活体验，这样才能在代码中注入更多的创造力和活力。",
]

// blog
export const blogHeadLine = "我在想什么."
export const blogIntro =
  "我写了一些关于人工智能、编程和生活的内容。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/14909430',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'vuedotjs',
  'javascript',
  'java',
  'oracle',
  'mysql',
  'mongodb',
  'clickhouse',
  'apacheflink',
  'linux',
  'postgresql',
  'nginx',
  'docker',
  'kubernetes',
  'apachekafka',
  'rabbitmq',
  'github',
  'spring',
  'python',
  'goland',
  'springboot',
  'spring',
  'redis',
  'elasticsearch',
  'git',
  'jira',
  'prometheus'
]
