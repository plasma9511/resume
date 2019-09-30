export const EnglishData = {
  sidebar: {
    headingTitle: 'Resume',
    headingSubtitle: 'Updated: 30/09/2019',
    menuItem: [
      {
        title: 'Personal Introduction',
        position: 0
      },
      {
        title: 'Working Experience',
        position: 1
      },
      {
        title: 'Education History',
        position: 2
      },
      {
        title: 'Skills and Competence',
        position: 3
      },
      {
        title: 'Projects',
        position: 4
      },
      {
        title: 'Reference',
        position: 5
      },
    ]
  },
  content: {
    introduction: {
      title: 'Personal Introduction',
      subtitle: 'Jack GE',
      heading: 'About Me',
      introduction: 'I\'m a passionate, driven University student who has been through a few different working experience,' +
        ' and is now primarily building knowledge base in business management and computer technology development.' +
        ' I\'m a person who strives to think critically and objectively.' +
        ' currently seeking for a career path in business and software development' +
        ' to explicitly explore skills and advantages in the area.',
      tagHeading: 'Personality Tags',
      tags: [
        'Friendly',
        'Critical Thinker',
        'High Standards',
        'Troubleshooter',
        'Problem Solver',
        'Multitask',
        'Team Player'
      ],
      contactDetails: {
        title: 'Contact Details',
        pass: 'Verify Password',
        passText: 'Please enter your password here to reveal contact information',
        wrong: 'Password Invalid, Please Try Again',
        success: 'Password is Correct, You Can Click On Contact Info to Trigger Actions',
        phone: '0477459070',
        email: 'plasma9511@hotmail.com',
        address: '60 Allen St, Leichhardt, NSW 2040'
      }
    },
    work: {
      title: 'Working Experience',
      companyTitle: 'Company Description',
      JDTitle: 'Job Description',
      switch: ['Single View', 'Multiple View'],
      items: [
        {
          id: 0,
          name: 'Shanghai QiongSheng Information Technology Co. Ltd.',
          type: 'Self-Employed',
          position: 'Project Developer',
          startYear: '2018/12',
          endYear: '2019/6',
          data: {
            type: 'Self-Employed',
            dep: 'Software Development',
            location: 'Shanghai, CN',
            companyDes: 'Software Design/Development and Consulting Company, providing Full-Stack Software/Hardware Solutions to clients,' +
              ' specialized in ERP system design and implementation, providing software support for most desktop and mobile platforms,',
            jobDes: 'Project Developer; Programming, design project logic, timelines for clients'
          }
        },
        {
          id: 1,
          name: 'Valspar Asia Pacific Co. Ltd.',
          type: 'Intern',
          position: 'Recruitment and Acquisition Assistant',
          startYear: '2017/1',
          endYear: '2017/3',
          data: {
            type: 'Full Time',
            dep: 'Human Resource',
            location: 'Shanghai, CN',
            companyDes: 'American painting and industrial' +
              ' coating company, currently listed as the world’s 4th largest coating company,' +
              ' with its services known of furniture paintings, wall paintings' +
              ', industrial packaging, container painting and metal coating. Valspar AP Co. Ltd. is ' +
              'the Management Company of all its factories within the greater China Area.'
            ,
            jobDes: 'Main responsibilities of processing job descriptions,' +
              ' candidate screening, talent sourcing, preparation for training programs(Management trainees).' +
              ' Additionally, Conducting background checks, as well as phone and on-site interviews.'
          }
        },
        {
          id: 2,
          name: 'MiMo Australia Pty. Ltd',
          type: 'Intern',
          position: 'Marketing/Sales Executive',
          startYear: '2016/3',
          endYear: '2016/6',
          data: {
            type: 'Part Time',
            dep: 'Sales Team',
            location: 'Sydney, AU',
            companyDes: 'Advertising and Media Agency, Sydney based,' +
              ' Providing professional marketing and media solutions for business to' +
              ' capture effective business opportunities within the growing Chinese market in Sydney.'
            ,
            jobDes: 'Business Development; Developing business resources and building potential network and connections,' +
              ' as well as assisting in launching online marketing campaigns and event planning.'
          }
        },
        {
          id: 3,
          name: 'Shanghai FeiHuang Advertising Co. Limited',
          type: 'Intern',
          position: 'Account Executive Assistant',
          startYear: '2013/11',
          endYear: '2014/3',
          data: {
            type: 'Full Time',
            dep: 'Account',
            location: 'Shanghai, CN',
            companyDes: 'Local Advertising Company,' +
              ' major revenue from local government based projects varies from graphical design, product design, branding,' +
              ' event planning, online marketing, etc.',
            jobDes: 'In charge of both contacting existing clients and developing new clients for advertising related business.' +
              ' Assisting in venue decoration and communication with suppliers.'
          }
        }
      ]
    },
    education: {
      title: 'Education History',
      icItem: {
        name: 'University of Wollongong',
        degree: 'Bachelor of Business',
        completed: false,
        startYear: '2018',
        endYear: 'Now'
      },
      items: [
        {
          name: 'International College of Management Sydney',
          degree: 'Bachelor of Business Entrepreneurship',
          completed: true,
          startYear: '2015',
          endYear: '2017'
        },
        {
          name: 'Taylors College',
          degree: 'University Foundation Program',
          completed: true,
          startYear: '2014',
          endYear: '2014'
        },
        {
          name: 'John Paul College',
          degree: 'High School',
          completed: true,
          startYear: '2011',
          endYear: '2013'
        }
      ]
    },
    skills: {
      title: 'Computer Skills and Competence',
      subtitle1: 'Computer Skills',
      cLanguage: {
        title: 'Languages',
        items: [
          {
            name: 'Python 3',
            logo: 'fab fa-python',
            level: 'Intermediate',
            length: '1 Year'
          },
          {
            name: 'Javascript & Typescript',
            logo: 'fab fa-js-square',
            level: 'Proficient',
            length: '2 Year'
          },
          {
            name: 'HTML+CSS/SCSS',
            logo: 'fab fa-html5',
            level: 'Proficient',
            length: '2 Year'
          },
          {
            name: 'Dart',
            logo: 'fab fa-google',
            level: 'Beginner',
            length: '1 Year'
          },
          {
            name: 'Markdown',
            logo: 'fab fa-markdown',
            level: 'Intermediate',
            length: '0.5 Year'
          }
        ]
      },
      cFrameWork: {
        title: 'Frameworks',
        tabs: [
          {
            title: 'Frontend',
            items: [
              {
                name: 'Angular',
                logo: 'fab fa-angular',
                level: 'Proficient Level',
                version: ['7.0', '8.0'],
              },
              {
                name: 'Vue',
                logo: 'fab fa-vuejs',
                level: 'Intermediate Level',
                version: ['2.0', '3.0']
              }
            ]
          },
          {
            title: 'Backend',
            items: [
              {
                name: 'Flask',
                logo: 'fas fa-flask',
                level: 'Intermediate Level',
                version: ['1.1'],
              }
            ]
          },
          {
            title: 'Mobile',
            items: [
              {
                name: 'Flutter',
                logo: 'fab fa-google',
                level: 'Intermediate Level',
                version: ['1.9'],
              },
              {
                name: 'Android Studio',
                logo: 'fab fa-android',
                level: 'Beginner',
                version: ['3.5'],
              }
            ]
          },
          {
            title: 'Database',
            items: [
              {
                name: 'MySQL',
                logo: 'fas fa-database',
                level: 'Beginner Level',
                version: ['5.6', '7.0'],
              },
              {
                name: 'PostgreSQL',
                logo: 'fas fa-server',
                level: 'Beginner Level',
                version: ['11']
              }
            ]
          },
          {
            title: 'Other',
            items: [
              {
                name: 'FileMaker',
                logo: 'fas fa-folder-open',
                level: 'Intermediate Level'
              },
              {
                name: 'WordPress',
                logo: 'fab fa-wordpress',
                level: 'Intermediate Level'
              },
              {
                name: 'Sketch',
                logo: 'fab fa-sketch',
                level: 'Intermediate Level'
              }
            ]
          }
        ]
      }
    },
    projects: {
      title: 'Projects',
      items: [
        {
          url: 'https://i.ibb.co/YdMqR3Z/erp.png',
          caption: 'Mock ERP System'
        },
        {
          url: 'https://i.ibb.co/6YtSRXt/website.png',
          caption: 'Company Website'
        },
        {
          url: 'https://i.ibb.co/jv6281N/phone.png',
          caption: 'Flutter Mobile Dev'
        },
        {
          url: 'https://i.ibb.co/HdDNRQ8/blog.png',
          caption: 'Blog System'
        }
      ]
    },
    reference: {
      title: 'Reference',
      items: [
        {
          name: 'Teresa Yin',
          relationship: 'Supervisor',
          contact: 'teresa.yin@valspar.com',
          domain: 'Valspar Asia Pacific Co. Ltd.'
        },
        {
          name: 'Ken Lin',
          relationship: 'Manager',
          contact: '0430525777',
          domain: 'MiMo Australia Pty. Ltd.'
        },
        {
          name: 'Feng Yao',
          relationship: 'Manager',
          contact: '+8618521757125',
          domain: 'Shanghai FeiHuang Advertising Co. Limited'
        },
      ]
    },
  }
};
