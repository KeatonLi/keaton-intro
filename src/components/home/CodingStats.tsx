'use client'

import { useEffect, useState } from 'react'
import { Code, Trophy, Target, TrendingUp, Calendar, Languages, Award, Activity, Clock, GitBranch } from 'lucide-react'
import { leetcodeUsername } from '@/config/infoConfig'

interface LeetCodeProfile {
  username: string
  name: string
  avatar: string
  ranking: number
  reputation: number
  gitHubUrl: string
  twitterUrl: string
  linkedINUrl: string
  profile: {
    userAvatar: string
    realName: string
    aboutMe: string
    school: string
    websites: string[]
    countryName: string
    company: string
    jobTitle: string
    skillTags: string[]
    postViewCount: number
    postViewCountDiff: number
    reputation: number
    reputationDiff: number
    solutionCount: number
    solutionCountDiff: number
    categoryDiscussCount: number
    categoryDiscussCountDiff: number
  }
}

interface LeetCodeSolved {
  solvedProblem: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  totalSubmissionNum: {
    difficulty: string
    count: number
    submissions: number
  }[]
  acSubmissionNum: {
    difficulty: string
    count: number
    submissions: number
  }[]
}

interface LeetCodeSubmission {
  title: string
  titleSlug: string
  timestamp: string
  statusDisplay: string
  lang: string
  __typename: string
}

interface LeetCodeLanguageStats {
  languageName: string
  problemsSolved: number
}

interface LeetCodeSkillStats {
  tagName: string
  tagSlug: string
  problemsSolved: number
}

interface LeetCodeCalendar {
  streak: number
  totalActiveDays: number
  dccBadges: any[]
  submissionCalendar: Record<string, number>
}

export default function CodingStats() {
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null)
  const [solved, setSolved] = useState<LeetCodeSolved | null>(null)
  const [submissions, setSubmissions] = useState<LeetCodeSubmission[]>([])
  const [languageStats, setLanguageStats] = useState<LeetCodeLanguageStats[]>([])
  const [skillStats, setSkillStats] = useState<LeetCodeSkillStats[]>([])
  const [calendar, setCalendar] = useState<LeetCodeCalendar | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllLeetCodeData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        console.log('开始获取 LeetCode 数据，用户名:', leetcodeUsername)
        
        // 使用 alfa-leetcode-api 获取详细数据
        const baseUrl = 'https://alfa-leetcode-api.onrender.com'
        
        const endpoints = [
          { name: 'profile', url: `${baseUrl}/${leetcodeUsername}` },
          { name: 'solved', url: `${baseUrl}/${leetcodeUsername}/solved` },
          { name: 'submission', url: `${baseUrl}/${leetcodeUsername}/submission?limit=10` },
          { name: 'language', url: `${baseUrl}/languageStats?username=${leetcodeUsername}` },
          { name: 'skill', url: `${baseUrl}/skillStats/${leetcodeUsername}` },
          { name: 'calendar', url: `${baseUrl}/${leetcodeUsername}/calendar` }
        ]
        
        // 添加备用 API 端点（使用不同的服务）
        const fallbackEndpoints = [
          { name: 'profile', url: `https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}` }
        ]
        
        console.log('请求的 API 端点:', endpoints)
        
        const [profileRes, solvedRes, submissionRes, languageRes, skillRes, calendarRes] = await Promise.allSettled(
          endpoints.map(endpoint => fetch(endpoint.url))
        )
        
        const results = [profileRes, solvedRes, submissionRes, languageRes, skillRes, calendarRes]
        const resultNames = ['profile', 'solved', 'submission', 'language', 'skill', 'calendar']
        
        // 检查每个请求的状态
        results.forEach((result, index) => {
          if (result.status === 'rejected') {
            console.error(`${resultNames[index]} 请求失败:`, result.reason)
          } else if (!result.value.ok) {
            console.error(`${resultNames[index]} 请求返回错误状态:`, result.value.status, result.value.statusText)
          } else {
            console.log(`${resultNames[index]} 请求成功`)
          }
        })

        // 处理 profile 数据
        if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
          try {
            const profileData = await profileRes.value.json()
            console.log('Profile 数据:', profileData)
            setProfile(profileData)
          } catch (err) {
            console.error('解析 profile 数据失败:', err)
          }
        } else {
          console.warn('Profile 数据获取失败')
        }

        // 处理 solved 数据
        if (solvedRes.status === 'fulfilled' && solvedRes.value.ok) {
          try {
            const solvedData = await solvedRes.value.json()
            console.log('Solved 数据:', solvedData)
            setSolved(solvedData)
          } catch (err) {
            console.error('解析 solved 数据失败:', err)
          }
        } else {
          console.warn('Solved 数据获取失败')
        }

        // 处理 submission 数据
        if (submissionRes.status === 'fulfilled' && submissionRes.value.ok) {
          try {
            const submissionData = await submissionRes.value.json()
            console.log('Submission 数据:', submissionData)
            setSubmissions(submissionData.submission || [])
          } catch (err) {
            console.error('解析 submission 数据失败:', err)
          }
        } else {
          console.warn('Submission 数据获取失败')
        }

        // 处理 language 数据
        if (languageRes.status === 'fulfilled' && languageRes.value.ok) {
          try {
            const languageData = await languageRes.value.json()
            console.log('Language 数据:', languageData)
            setLanguageStats(languageData.matchedUser?.languageProblemCount || [])
          } catch (err) {
            console.error('解析 language 数据失败:', err)
          }
        } else {
          console.warn('Language 数据获取失败')
        }

        // 处理 skill 数据
        if (skillRes.status === 'fulfilled' && skillRes.value.ok) {
          try {
            const skillData = await skillRes.value.json()
            console.log('Skill 数据:', skillData)
            setSkillStats(skillData.data?.matchedUser?.tagProblemCounts?.advanced || [])
          } catch (err) {
            console.error('解析 skill 数据失败:', err)
          }
        } else {
          console.warn('Skill 数据获取失败')
        }

        // 处理 calendar 数据
        if (calendarRes.status === 'fulfilled' && calendarRes.value.ok) {
          try {
            const calendarData = await calendarRes.value.json()
            console.log('Calendar 数据:', calendarData)
            setCalendar(calendarData)
          } catch (err) {
            console.error('解析 calendar 数据失败:', err)
          }
        } else {
          console.warn('Calendar 数据获取失败')
        }
        
        // 检查是否有任何数据成功获取
        const hasAnyData = profile || solved || submissions.length > 0 || languageStats.length > 0 || skillStats.length > 0 || calendar
        if (!hasAnyData) {
          console.warn('所有 API 请求都失败了，尝试备用 API')
          
          // 尝试备用 API
          try {
            console.log('尝试使用备用 API:', `https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
            const fallbackResponse = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
            
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json()
              console.log('备用 API 数据:', fallbackData)
              
              // 转换备用 API 数据格式以适配现有组件
              const convertedProfile: LeetCodeProfile = {
                username: fallbackData.name || leetcodeUsername,
                name: fallbackData.name || '',
                avatar: '',
                ranking: fallbackData.ranking || 0,
                reputation: 0,
                gitHubUrl: '',
                twitterUrl: '',
                linkedINUrl: '',
                profile: {
                  userAvatar: '',
                  realName: fallbackData.name || '',
                  aboutMe: '',
                  school: '',
                  websites: [],
                  countryName: '',
                  company: '',
                  jobTitle: '',
                  skillTags: [],
                  postViewCount: 0,
                  postViewCountDiff: 0,
                  reputation: 0,
                  reputationDiff: 0,
                  solutionCount: 0,
                  solutionCountDiff: 0,
                  categoryDiscussCount: 0,
                  categoryDiscussCountDiff: 0
                }
              }
              
              const convertedSolved = {
                solvedProblem: fallbackData.totalSolved || 0,
                easySolved: fallbackData.easySolved || 0,
                mediumSolved: fallbackData.mediumSolved || 0,
                hardSolved: fallbackData.hardSolved || 0,
                acceptanceRate: fallbackData.acceptanceRate || 0,
                totalSubmissionNum: [{
                  difficulty: 'All',
                  count: fallbackData.totalSubmissions || 0,
                  submissions: fallbackData.totalSubmissions || 0
                }],
                acSubmissionNum: [{
                  difficulty: 'All',
                  count: fallbackData.totalSolved || 0,
                  submissions: fallbackData.totalSolved || 0
                }]
              }
              
              setProfile(convertedProfile)
              setSolved(convertedSolved)
              
              console.log('备用 API 数据设置成功')
            } else {
              console.error('备用 API 也失败了:', fallbackResponse.status, fallbackResponse.statusText)
              setError('无法获取 LeetCode 数据，请检查用户名是否正确或稍后重试')
            }
          } catch (fallbackError) {
            console.error('备用 API 请求失败:', fallbackError)
            setError('无法获取 LeetCode 数据，请检查网络连接或稍后重试')
          }
        }

      } catch (error) {
        console.error('获取 LeetCode 数据时发生错误:', error)
        setError(`获取 LeetCode 数据失败: ${error instanceof Error ? error.message : '未知错误'}`)
      } finally {
        setLoading(false)
      }
    }

    fetchAllLeetCodeData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-muted shadow-sm">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-8 bg-muted rounded"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-48 bg-muted rounded-2xl animate-pulse"></div>
          <div className="h-48 bg-muted rounded-2xl animate-pulse"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card text-center">
        <div className="text-muted-foreground">{error}</div>
      </div>
    )
  }

  if (!solved && !profile) {
    return (
      <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card text-center">
        <div className="text-muted-foreground">暂无 LeetCode 数据</div>
      </div>
    )
  }

  // 计算总提交数和通过率
  const totalSubmissions = solved?.totalSubmissionNum?.reduce((sum, item) => sum + item.submissions, 0) || 0
  const totalAccepted = solved?.acSubmissionNum?.reduce((sum, item) => sum + item.submissions, 0) || 0
  const acceptanceRate = totalSubmissions > 0 ? ((totalAccepted / totalSubmissions) * 100).toFixed(1) : '0'

  const mainStats = [
    {
      icon: <Code className="h-5 w-5" />,
      label: '总解题数',
      value: solved?.solvedProblem || 0,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: '通过率',
      value: `${acceptanceRate}%`,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      label: '全球排名',
      value: profile?.ranking?.toLocaleString() || 'N/A',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: '声誉值',
      value: profile?.reputation || 0,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Activity className="h-5 w-5" />,
      label: '连续天数',
      value: calendar?.streak || 0,
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: '活跃天数',
      value: calendar?.totalActiveDays || 0,
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      label: '总提交数',
      value: totalSubmissions.toLocaleString(),
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: '解决方案',
      value: profile?.profile?.solutionCount || 0,
      color: 'text-pink-600 dark:text-pink-400'
    }
  ]

  return (
    <div className="space-y-6">
      {/* 主要统计数据 */}
      <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Code className="h-5 w-5" />
          LeetCode 详细统计
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`flex items-center justify-center mb-2 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-xl font-bold">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* 难度分布 */}
        {solved && (
          <div className="mt-6 pt-4 border-t border-muted">
            <h4 className="text-sm font-medium mb-3 text-muted-foreground">难度分布</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {solved.easySolved}
                </div>
                <div className="text-sm text-muted-foreground">简单</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {solved.mediumSolved}
                </div>
                <div className="text-sm text-muted-foreground">中等</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-red-50 dark:bg-red-950/20">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {solved.hardSolved}
                </div>
                <div className="text-sm text-muted-foreground">困难</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 语言统计和最近提交 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 编程语言统计 */}
        {languageStats.length > 0 && (
          <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Languages className="h-5 w-5" />
              编程语言统计
            </h4>
            <div className="space-y-3">
              {languageStats.slice(0, 5).map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{lang.languageName}</span>
                  <span className="text-sm text-muted-foreground">{lang.problemsSolved} 题</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 最近提交 */}
        {submissions.length > 0 && (
          <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              最近提交
            </h4>
            <div className="space-y-3">
              {submissions.slice(0, 5).map((submission, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{submission.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {submission.lang} • {new Date(parseInt(submission.timestamp) * 1000).toLocaleDateString()}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    submission.statusDisplay === 'Accepted' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {submission.statusDisplay}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 技能标签统计 */}
      {skillStats.length > 0 && (
        <div className="p-6 rounded-2xl border border-muted shadow-sm bg-card">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            技能标签统计
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillStats.slice(0, 8).map((skill, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/50 text-center">
                <div className="font-semibold text-sm">{skill.tagName}</div>
                <div className="text-xs text-muted-foreground">{skill.problemsSolved} 题</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}