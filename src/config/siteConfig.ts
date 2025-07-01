// site config
export const utm_source = 'derek-portfolio'


// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: '主页',
    href: '/'
  },
  {
    name: '项目列表',
    href: '/projects'
  },
  {
    name: '作品集',
    href: '/portfolio'
  },
  {
    name: '文章列表',
    href: '/blogs'
  },
  {
    name: '关于我',
    href: '/about'
  },
]

export const navItems: Array<NavItemType> = [
  {
    name: '主页',
    href: '/'
  },
  {
    name: '作品集',
    href: '/portfolio'
  },
  {
    name: '文章列表',
    href: '/blogs'
  },
    {
    name: '关于我',
    href: '/about'
  }
]
