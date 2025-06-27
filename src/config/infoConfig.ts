export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '博凯的小站'
export const headline = '技术驱动创新，热爱成就未来 --- 别浪费天赋与热爱'
export const introduction =
  "您好！我是黎博凯，一名专注于后端开发的 Java 工程师。我在 Spring 生态系统和微服务架构方面有着丰富的实践经验，同时也在 Golang 和 React 技术栈上持续精进。我致力于构建高性能、可扩展的系统解决方案，追求代码质量与技术创新的完美结合，与此同时我还是一名羽毛球和健身爱好者。"
export const email = 'li_bo_kai@qq.com'
export const githubUsername = 'KeatonLi'
export const leetcodeUsername = 'keaton'

// about page
export const aboutMeHeadline = '关于我 - 专业技术与持续成长'
export const aboutParagraphs = [
  "您好！我是黎博凯，一名专业的 Java 后端开发工程师。我在企业级应用开发方面拥有丰富经验，深度掌握 Spring 生态系统，并在 Golang 和 React 技术栈上持续探索与实践。",
  "在技术发展道路上，我专注于构建高性能、高可用的后端系统，擅长微服务架构设计、分布式系统开发以及性能优化。从数据库设计到容器化部署，我致力于通过技术创新解决复杂的业务挑战，追求代码质量与系统稳定性的最佳平衡。",
  "除了专业技术能力，我也注重个人全面发展。通过羽毛球运动保持身心健康，通过持续学习保持技术敏锐度。我相信优秀的技术人员不仅需要扎实的专业基础，更需要开阔的视野和持续学习的能力，这样才能在快速变化的技术环境中保持竞争力。",
]

// blog
export const blogHeadLine = "技术思考与分享"
export const blogIntro =
  "分享关于软件开发、技术架构、人工智能以及个人成长的思考与实践经验。"

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
