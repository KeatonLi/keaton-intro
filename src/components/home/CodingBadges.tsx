'use client'

import { useTheme } from 'next-themes'
import { githubUsername, leetcodeUsername } from '@/config/infoConfig'

export default function CodingBadges() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="space-y-6">
      {/* LeetCode Stats */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">LeetCode 统计</h3>
        <img 
          src={`https://leetcode-stats.vercel.app/api?username=${leetcodeUsername}&theme=${theme}`}
          alt="LeetCode Stats"
          className="mx-auto rounded-lg shadow-sm"
        />
      </div>
      
      {/* GitHub Stats */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">GitHub 统计</h3>
        <div className="space-y-4">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${theme}&hide_border=true`}
            alt="GitHub Stats"
            className="mx-auto rounded-lg shadow-sm"
          />
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${theme}&hide_border=true`}
            alt="Top Languages"
            className="mx-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}