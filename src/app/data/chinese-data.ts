export const ChineseData = {
  sidebar: {
    headingTitle: '个人简历',
    headingSubtitle: '日期：2019/09/30',
    menuItem: [
      {
        title: '个人介绍',
        position: 0
      },
      {
        title: '工作经历',
        position: 1
      },
      {
        title: '教育经历',
        position: 2
      },
      {
        title: '技能与能力',
        position: 3
      },
      {
        title: '完成项目/作品',
        position: 4
      },
      {
        title: '联系人',
        position: 5
      },
    ]
  },
  content: {
    introduction: {
      title: '个人介绍',
      subtitle: '葛阳 Jack',
      heading: '关于我',
      introduction: '我是一名在读商科大学生，目前正在伍伦贡大学学习商科学士学位，目前我所学的科目帮助我积累了一定程度的商业知识基础，' +
        '在这几年的大学生涯里我经历并完成了许多不同主题，不同类型的学术观点讨论，以及小组合作项目' +
        '因此我认为我是一个具有团队精神，以及可以客观思考，并解决问题的学生。也时刻希望能以这些宝贵在校内解决问题的经验及方法论来解决社会场景中的实际问题。' +
        '对于解决实际问题而言，我始终秉持着\"利用科技来提高生产力\"的宗旨，将商业问题与信息科技相结合，产出效率更高，功能更强大，更有预测性的解决方案，希望以此为' +
        '企业创造更深远的价值。所以目前，在商科的基础上我正在继续往管理学，金融学，以及计算机技术方向学习发展，并寻求机会增加社会中，工作环境中的实际问题的解决经验。',
      tagHeading: '性格标签',
      tags: [
        '乐于助人',
        '逆向思维',
        '高标准',
        '疑难解答',
        '问题解决者',
        '计划统筹',
        '团队精神'
      ],
      contactDetails: {
        title: '联系信息',
        pass: '输入密码',
        passText: '请在此输入密码以显示联系信息',
        wrong: '密码错误，请重试',
        success: '密码正确，请点击联系信息以触发动作',
        phone: '0477459070',
        email: 'plasma9511@hotmail.com',
        address: '60 Allen St, Leichhardt, NSW 2040'
      }
    },
    work: {
      title: '工作经历',
      companyTitle: '公司介绍',
      JDTitle: '职务介绍',
      switch: ['单一显示', '多条显示'],
      items: [
        {
          id: 0,
          name: '上海琼深信息科技有限公司',
          type: '自雇',
          position: '项目开发',
          startYear: '2018/12',
          endYear: '2019/6',
          data: {
            type: '自雇',
            dep: '开发部门',
            location: '上海，中国',
            companyDes: '软件开发及咨询公司；主要业务为中小企业提供结合软/硬件的技术服务。主要专注于企业内部管理系统如ERP的开发，同时提供针对于跨平台的解决方案。',
            jobDes: '项目开发人员；程序开发， 项目整体设计及规划等工作。'
          }
        },
        {
          id: 1,
          name: '威士伯（亚太）有限公司 Valspar Asia Pacific Co. Ltd.',
          type: '实习',
          position: '招聘助理',
          startYear: '2017/1',
          endYear: '2017/3',
          data: {
            type: '全职',
            dep: '人力资源部',
            location: '上海，中国',
            companyDes: '美资500强企业，世界4大涂料公司之一，主要业务及产品包含家具涂料，墙面涂料，工业涂料，集装箱及金属涂料等，威士伯亚太主要负责整个大中华区的行政管理，以及资产管理工作。'
            ,
            jobDes: '主要实习内容包含处理职务描述（JD），候选人筛选，协助人才寻源，帮助准备培训材料以及背景调查，电话面试以及现场面试工作。'
          }
        },
        {
          id: 2,
          name: 'MiMo Australia Pty. Ltd',
          type: '实习',
          position: '市场/销售人员',
          startYear: '2016/3',
          endYear: '2016/6',
          data: {
            type: '兼职',
            dep: '销售部门',
            location: '悉尼，澳大利亚',
            companyDes: '位于悉尼的广告及媒体公司，旨在为目标客户提供针对于华人市场的市场以及媒体解决方案，帮助客户寻找并把握商机。'
            ,
            jobDes: '业务拓展人员，拓展业务，寻找潜在客户线索，并试图转化为商机，同时协助布置活动场地，以及线上活动等。'
          }
        },
        {
          id: 3,
          name: '上海飞煌广告有限公司',
          type: '实习',
          position: '客户执行助理',
          startYear: '2013/11',
          endYear: '2014/3',
          data: {
            type: '全职',
            dep: '客户关系部',
            location: '上海，中国',
            companyDes: '基于政府合作项目的广告公司，主要提供本地的各类广告业务，包括视觉设计，图形设计，品牌设计，活动策划，产品设计以及线上宣传设计等',
            jobDes: '帮助维护以及拓展已有的客户关系，并协助场地布置以及与供货商相关的沟通工作'
          }
        }
      ]
    },
    education: {
      title: '教育经历',
      icItem: {
        name: 'Univeristy of Wollongong 伍伦贡大学',
        degree: 'Bachelor of Business 商业学士',
        completed: false,
        startYear: '2018',
        endYear: '现在'
      },
      items: [
        {
          name: 'International College of Management Sydney 悉尼国际管理学院',
          degree: 'Bachelor of Business Entrepreneurship 商业（企业家）学士',
          completed: true,
          startYear: '2015',
          endYear: '2017'
        },
        {
          name: 'Taylors College 泰勒学院',
          degree: 'Univeristy Foundation Program 大学预科课程',
          completed: true,
          startYear: '2014',
          endYear: '2014'
        },
        {
          name: 'John Paul College 约翰保罗学院',
          degree: 'High School 高中',
          completed: true,
          startYear: '2011',
          endYear: '2013'
        }
      ]
    },
    skills: {
      title: '计算机技能与能力',
      subtitle1: '计算机技能',
      cLanguage: {
        title: '语言',
        items: [
          {
            name: 'Python 3',
            logo: 'fab fa-python',
            level: '中等',
            length: '1年'
          },
          {
            name: 'Javascript & Typescript',
            logo: 'fab fa-js-square',
            level: '熟练',
            length: '2年'
          },
          {
            name: 'HTML+CSS/SCSS',
            logo: 'fab fa-html5',
            level: '熟练',
            length: '2年'
          },
          {
            name: 'Dart',
            logo: 'fab fa-google',
            level: '初级',
            length: '1年'
          },
          {
            name: 'Markdown',
            logo: 'fab fa-markdown',
            level: '中等',
            length: '0.5年'
          }
        ]
      },
      cFrameWork: {
        title: '框架',
        tabs: [
          {
            title: '前端',
            items: [
              {
                name: 'angular',
                logo: 'fab fa-angular',
                level: '熟练',
                version: ['7.0', '8.0'],
              },
              {
                name: 'Vue',
                logo: 'fab fa-vuejs',
                level: '中等',
                version: ['2.0', '3.0']
              }
            ]
          },
          {
            title: '后端',
            items: [
              {
                name: 'Flask',
                logo: 'fas fa-flask',
                level: '中等',
                version: ['1.1']
              }
            ]
          },
          {
            title: '移动端',
            items: [
              {
                name: 'Flutter',
                logo: 'fab fa-google',
                level: '中等',
                version: ['1.9'],
              },
              {
                name: 'Android Studio',
                logo: 'fab fa-android',
                level: '初级',
                version: ['3.5'],
              }
            ]
          },
          {
            title: '数据库',
            items: [
              {
                name: 'MySQL',
                logo: 'fas fa-database',
                level: '初级',
                version: ['5.6', '7.0']
              },
              {
                name: 'PostgreSQL',
                logo: 'fas fa-server',
                level: '初级',
                version: ['11'],
              }
            ]
          },
          {
            title: '其他',
            items: [
              {
                name: 'FileMaker',
                logo: 'fas fa-folder-open',
                level: '中等'
              },
              {
                name: 'WordPress',
                logo: 'fab fa-wordpress',
                level: '中等'
              },
              {
                name: 'Sketch',
                logo: 'fab fa-sketch',
                level: '中等'
              }
            ]
          }
        ]
      }
    },
    projects: {
      title: '项目展示',
      items: [
        {
          url: 'https://i.ibb.co/YdMqR3Z/erp.png',
          caption: '模拟ERP系统'
        },
        {
          url: 'https://i.ibb.co/6YtSRXt/website.png',
          caption: '公司网站'
        },
        {
          url: 'https://i.ibb.co/jv6281N/phone.png',
          caption: 'Flutter移动端开发'
        },
        {
          url: 'https://i.ibb.co/HdDNRQ8/blog.png',
          caption: '博客系统'
        }
      ]
    },
    reference: {
      title: '联系人',
      items: [
        {
          name: 'Teresa Yin',
          relationship: '上级领导',
          contact: 'teresa.yin@valspar.com',
          domain: '威士伯（亚太）有限公司 Valspar Asia Pacific Co. Ltd.'
        },
        {
          name: 'Ken Lin',
          relationship: '上级领导',
          contact: '0430525777',
          domain: 'MiMo Australia Pty. Ltd.'
        },
        {
          name: 'Feng Yao',
          relationship: '上级领导',
          contact: '+8618521757125',
          domain: '上海飞煌广告有限公司'
        },
      ]
    },
  }
};
