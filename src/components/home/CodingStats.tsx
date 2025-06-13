'use client'

import { useEffect, useState } from 'react'
import { Code, Trophy, Target, TrendingUp } from 'lucide-react'

interface LeetCodeStats {
  totalSolved: number
  totalQuestions: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  ranking: number
}

export default function CodingStats() {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  
  const username = 'keaton' // 从配置文件获取

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
        const data = await response.json()
        if (data.status === 'success') {
          setLeetcodeStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch LeetCode stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeetCodeStats()
  }, [username])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-muted shadow-sm">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-muted rounded mb-2"></div>
            <div className="h-8 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!leetcodeStats) {
    return null
  }

  const stats = [
    {
      icon: <Code className="h-5 w-5" />,
      label: '总解题数',
      value: leetcodeStats.totalSolved,
      total: leetcodeStats.totalQuestions,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: '通过率',
      value: `${leetcodeStats.acceptanceRate}%`,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      label: '全球排名',
      value: leetcodeStats.ranking.toLocaleString(),
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: '困难题',
      value: leetcodeStats.hardSolved,
      color: 'text-red-600 dark:text-red-400'
    }
  ]

  return (
    <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Code className="h-5 w-5" />
        LeetCode 统计
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`flex items-center justify-center mb-2 ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold">
              {stat.value}
              {stat.total && (
                <span className="text-sm text-muted-foreground">/{stat.total}</span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* 难度分布 */}
      <div className="mt-4 pt-4 border-t border-muted">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="text-center">
            <div className="text-green-600 dark:text-green-400 font-semibold">
              {leetcodeStats.easySolved}
            </div>
            <div className="text-muted-foreground">简单</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-600 dark:text-yellow-400 font-semibold">
              {leetcodeStats.mediumSolved}
            </div>
            <div className="text-muted-foreground">中等</div>
          </div>
          <div className="text-center">
            <div className="text-red-600 dark:text-red-400 font-semibold">
              {leetcodeStats.hardSolved}
            </div>
            <div className="text-muted-foreground">困难</div>
          </div>
        </div>
      </div>
    </div>
  )
}