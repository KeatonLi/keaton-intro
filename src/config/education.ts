
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '广东海洋大学',
      major: '计算机科学与技术',
      logo: 'college',
      start: '2019',
      end: '2023'
    },
    {
      school: '福田中学',
      major: '高中生',
      logo: 'college',
      start: '2016',
      end: '2023'
    },
  ]