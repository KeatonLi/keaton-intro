// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '深圳市名通科技股份有限公司',
      title: 'Java 开发工程师',
      logo: 'coffee',
      start: '2025-03',
      end: 'up to now'
    },
    {
      company: '华阳国际城市科技有限公司',
      title: 'Java研发工程师',
      logo: 'bank',
      start: '2023-07',
      end: '2024-12'
    },
    {
      company: '上海云砺信息科技有限公司',
      title: 'Java 开发实习生',
      logo: 'coffee',
      start: '2022-11',
      end: '2023-05'
    }
  ]