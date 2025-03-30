export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '黎博凯'
export const headline = '别浪费天赋与热爱.'
export const introduction =
  "你好！我是黎博凯，目前的职业是 Java 开发工程师，还会一点 Golang 与 Python 语言，爱好是羽毛球健身和打电子游戏."
export const email = 'li_bo_kai@qq.com'
export const githubUsername = 'KeatonLi'

// about page
export const aboutMeHeadline = '我是谁?你该注意哪些事情'
export const aboutParagraphs = [
  "你好，朋友们！我叫德里克·胡。我来自湖北，是北京邮电大学、芝加哥大学和清华大学的校友。自2020年以来，我一直在上海协和双语高级中学教授计算机科学。",
  '目前，我正在开发一门名为AI Camp的新课程，这是一门创新课程，高中生可以在探索人工智能前沿领域的同时，创建实际的产品和创业项目。',
  "我开设这个博客是为了分享我每天学到的见解。大多数博客专注于人工智能教育和普通计算机科学，而其他博客则分享我学到的生活经验。",
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
  'golang',
  'springboot',
  'spring',
  'redis',
  'elasticsearch',
  'git',
  'jira',


]
