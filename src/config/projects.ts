// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
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
    name: '学生期末项目作品集',
    description: '静态网站作品集',
    link: { href: 'scls-cs.com', label: 'GitHub卡片' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Portfolio']
  },
  {
    name: '寻找DNA',
    description: '2022上海协和双语高级中学编程马拉松',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: '编程马拉松' },
    tags: ['Hackathon', 'Java']
  },
  {
    name: '德州扑克裁判',
    description: '2024上海协和双语高级中学编程马拉松',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: '编程马拉松' },
    tags: ['Hackathon']
  },
  {
    name: 'AI Camp课程开发',
    description: '为高中生开发了一套全面的人工智能课程，融入了实际项目和创业理念。',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: '查看课程' },
    tags: ['Education', 'AI']
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
