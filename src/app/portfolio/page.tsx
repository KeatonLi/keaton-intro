import { type Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { portfolioHeadLine, portfolioIntro } from '@/config/infoConfig'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { PortfolioCard, getPortfolioItemsWithIcons } from '@/components/portfolio/PortfolioCard'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: portfolioIntro,
}



export default function Portfolio() {
  const portfolioItemsWithIcons = getPortfolioItemsWithIcons()
  
  return (
    <SimpleLayout
      title={portfolioHeadLine}
      intro={portfolioIntro}
    >
      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItemsWithIcons.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
        
        {/* 技术能力展示区域 */}
        <div className="mt-20 border-t border-zinc-100 pt-16 dark:border-zinc-700/40">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            核心技术能力
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                后端开发
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                精通 Java/Spring 生态系统，熟练掌握微服务架构设计与实现，具备丰富的高并发系统开发经验。
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                系统架构
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                擅长分布式系统设计，熟悉各种中间件技术，能够设计高可用、高性能的系统架构方案。
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                DevOps 实践
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                熟练使用 Docker/Kubernetes 进行容器化部署，具备完整的 CI/CD 流程设计与实施经验。
              </p>
            </div>
          </div>
        </div>
        
        {/* SVG 装饰图案 */}
        <div className="mt-20 flex justify-center">
          <svg
            className="h-32 w-32 text-zinc-200 dark:text-zinc-700"
            fill="currentColor"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="20" r="8" opacity="0.8" />
            <circle cx="20" cy="50" r="6" opacity="0.6" />
            <circle cx="80" cy="50" r="6" opacity="0.6" />
            <circle cx="50" cy="80" r="8" opacity="0.8" />
            <circle cx="35" cy="35" r="4" opacity="0.4" />
            <circle cx="65" cy="35" r="4" opacity="0.4" />
            <circle cx="35" cy="65" r="4" opacity="0.4" />
            <circle cx="65" cy="65" r="4" opacity="0.4" />
            <line x1="50" y1="20" x2="35" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="20" x2="65" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="50" x2="35" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="50" x2="35" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="50" x2="65" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="50" x2="65" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="80" x2="35" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="80" x2="65" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
      </div>
    </SimpleLayout>
  )
}