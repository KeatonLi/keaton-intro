import React from 'react'
import { Code, Database, Server, Globe, Zap, Shield } from 'lucide-react'
import { portfolioItems } from '@/config/projects'

// 图标映射
const iconMap = {
  Globe: Globe,
  Database: Database,
  Server: Server,
  Zap: Zap,
  Shield: Shield,
  Code: Code,
}

type PortfolioItemWithIcon = typeof portfolioItems[0] & {
  icon: React.ReactNode
}

// 将配置数据转换为带图标的数据
export const getPortfolioItemsWithIcons = (): PortfolioItemWithIcon[] => {
  return portfolioItems.map(item => {
    const IconComponent = iconMap[item.iconName as keyof typeof iconMap]
    return {
      ...item,
      icon: <IconComponent className="h-8 w-8" />
    }
  })
}

export function PortfolioCard({ item }: { item: PortfolioItemWithIcon }) {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <div className="text-zinc-700 dark:text-zinc-300">
          {item.icon}
        </div>
      </div>
      <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {item.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
      
      {/* 技术栈标签 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800/50 dark:text-zinc-400 dark:ring-zinc-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* 亮点展示 */}
      <div className="mt-4 space-y-1">
        {item.highlights.map((highlight, index) => (
          <div key={index} className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
            <div className="mr-2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            {highlight}
          </div>
        ))}
      </div>
    </div>
  )
}