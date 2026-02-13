import { AppTranslations } from '../models/app.translations.interface';

export const appTranslationsKO: AppTranslations = {
  project: {
    title: 'Project',
  },
  project1: {
    title: '포트폴리오 웹 페이지 만들기',
    subtitle: '첫번째 개인 프로젝트',
    descriptions: {
      text1: 'React 를 활용하여 포트폴리오용 웹페이지를 제작하였습니다.',
      text2:
        '설계부터 구현, 배포까지 직접 만들어 보면서 지금까지 배운 내용을 실전에서 활용할 수 있었습니다.',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    },
    list1: {
      title: '주요 기능',
      detail: '반응형 웹페이지, 재사용가능한 컴포넌트로 확장이 용이',
    },
    list2: {
      title: '기술스택',
      detail: 'React, TypeScript, Sass, Mui, Zustand',
    },
    list3: {
      title: '디자인 초안',
      detail:
        'https://xd.adobe.com/view/9ca42e05-4621-4844-b961-0a7c3af67053-c9f7/',
    },
    list4: {
      title: '프론트엔드 코드',
      detail: 'https://github.com/hjqueeen/portfolio',
    },
  },
  project2: {
    title: '출고 관리 프로그램 개발',
    subtitle:
      '데이터를 표준화·자동화하여 효율적 관리와 정확성을 높인 통합 출고관리 시스템 개발',
    descriptions: {
      text1:
        '기존에 여러 곳에 분산되어 있던 출고 관련 데이터를 중앙에서 통합 관리하고, 반복적이고 수동으로 처리되던 업무를 자동화하여 업무 효율성을 극대화하기 위해 출고 관리 프로그램을 개발했습니다.',
      text2: '반복 업무 자동화로 인적 오류 감소 및 생산성 향상',
      text3: '사용자 누구나 쉽게 사용할 수 있는 직관적 인터페이스 제공',
      text4: '',
      text5: '',
      text6: '',
    },
    list1: {
      title: '개발 목표',
      detail:
        '데이터 표준화 및 일관된 관리 체계 구축, 반복 업무 자동화로 인적 오류 감소 및 생산성 향상, 사용자 누구나 쉽게 사용할 수 있는 직관적 인터페이스 제공',
    },

    list2: {
      title: '주요 기능',
      detail:
        '데이터베이스 구축, 데이터 검색 및 필터링, 바코드 처리, 검사지 출력 및 저장 기능, 자동 알림, 출고 현황 통계',
    },
    list3: {
      title: '기술스택',
      detail:
        'Figma, React, TypeScript, Tailwind CSS, NestJS, TypeORM, PostgreSQL',
    },
    list4: {
      title: '디자인 초안',
      detail: 'http://bit.ly/4kqY1ks',
    },

    list5: {
      title: '프론트엔드 코드',
      detail: 'https://github.com/hjqueeen/mycu_frontend',
    },
    list6: {
      title: '백엔드 코드',
      detail: 'https://github.com/hjqueeen/mycu_backend',
    },
    list7: {
      title: '출고 현황 통계',
      detail: '기간별·제품별 출고 현황을 시각화하여 통계 제공',
    },
  },
  project3: {
    title: '',
    subtitle: '',
    descriptions: {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    },
    list1: {
      title: '',
      detail: '',
    },
    list2: {
      title: '',
      detail: '',
    },
    list3: {
      title: '',
      detail: '',
    },
  },
  intro: {
    title: '김혜진',
    subtitle: '개발자 포트폴리오',
    description: '',
  },
  introduction: {
    title: 'ABOUT ME',
    name: '이름',
    name_detail: '김혜진',
    education: '학력',
    education_detail: '서울대학교(바이오시스템공학부)',
    education_detail_more: 'HWR Berlin(Informatik)',
    birthday: '생년월일',
    birthday_detail: '86.01.27',
    contact: '연락처',
    contact_detail: '+49-17-9439-7891',
    email: '이메일',
    email_detail: 'hjqueeen@gmail.com',
    address: '위치',
    address_detail: '독일, 베를린',
    profile: {
      text1: '안녕하세요. 저는, ',
      text2: '끊임없이 배우며 성장하는 개발자입니다.',
      text3: '어떤 어려움 앞에서도 책임감을 가지고 해결해나가는 사람입니다. ',
    },
  },
  career: {
    title: 'Career',
    pengueen: {
      companyDescription:
        'Pengueen은 조직의 업무 프로세스를 유연하게 디지털화하고, 협업을 효율적으로 지원하는 플랫폼을 개발, 제공하는 회사입니다.',
      period: '근무 기간: 2022년 8월 ~ 현재 (파트타임)',
      role: '역할: 풀스택 개발자 (Frontend 중심 + Backend 일부 참여)',
      mainTasksTitle: '✔️ 주요 업무 및 성과',
      tasks: [
        {
          title: '홈페이지 성능 개선 및 유지보수:',
          detail:
            'React 구조 최적화 및 코드 스플리팅을 통해 페이지 로딩 속도 약 30% 개선',
        },
        {
          title: '사용자 피드백 기반 기능 개발:',
          detail: '게시판, 즐겨찾기, 검색 필터 등 신규 기능 기획 및 구현',
        },
        {
          title: '버그 및 이슈 해결: ',
          detail: '운영 중 발생한 다양한 UI/UX 이슈 해결 및 품질 안정화',
        },
        {
          title: '백엔드 연동 및 개발: ',
          detail:
            'NestJS + TypeORM 기반 간단한 CRUD API 개발 및 PostgreSQL 쿼리 작성',
        },
        {
          title: '협업과 관리: ',
          detail: 'Git, Jira을 통한 이슈 관리 및 팀 간 협업 경험',
        },
      ],
    },
    alstom: {
      companyDescription:
        'Alstom은 프랑스에 본사를 둔 세계적인 철도 제조 기업으로, 고속열차, 지하철, 트램 등 다양한 열차와 관련 시스템을 설계하고 제작합니다.',
      period: '근무 기간: 2023년 10월 ~ 현재 (인턴)',
      department: '부서: 여객 정보 시스템(PIS, Passenger Information System)',
      role: '역할: 소프트웨어 개발 (PIS 시스템 개발 및 유지보수 지원)',
      mainTasksTitle: '✔️ 주요 업무 및 경험',
      tasks: [
        {
          title: 'PIS 소프트웨어 유지보수 및 테스트 자동화:',
          detail:
            '기존 시스템 코드 분석 및 오류 수정, 테스트 케이스 개선 및 자동화 스크립트 작성',
        },
        {
          title: '프론트엔드 인터페이스 검토 및 개선 제안:',
          detail:
            '승객 정보 디스플레이 UI 구성 및 레이아웃 정렬 등 사용자 경험 향상 작업 참여',
        },
      ],
    },
  },
  common: {
    readMore: '더보기',
  },
  nav: {
    aboutMe: '소개',
    career: '경력',
    skills: '기술',
    archiving: '아카이빙',
    projects: '프로젝트',
  },
  skill: {
    title: 'SKILLS',
    frontend: 'Frontend',
    backend: 'Backend',
    version_control: 'Version Control',
    communication: 'Communication',
  },
  archive: {
    title: 'ARCHIVING',
    github: {
      address: 'https://github.com/hjqueeen',
      description: {
        detail: '소스 코드 저장소입니다.',
        text1: '개인 프로젝트 소스코드',
        text2: '프로그래밍 언어를 배우면서 연습한 코드 ',
        text3: '',
      },
    },
    website: {
      address: 'https://velog.io/@hjqueeen',
      description: {
        detail: '연구 및 지식 공유를 위한 블로그입니다.',
        text1: '공부한 것을 내 것으로 만들기 위한 기록',
        text2: '개발자로서 배운 프로그래밍 관련 지식 모음',
        text3: '',
      },
    },
    brunch: {
      address: 'https://brunch.co.kr/@8d9b6f7cb5ef452',
      description: {
        detail: '독일에서 살아가는 일상의 기록',
        text1:
          '4인 가족이 독일에서 겪는 소소하고 진솔한 이야기들을 담은 블로그입니다.',
        text2: '이민자의 시선으로 풀어낸 생활 에세이',
      },
    },
  },
  title: "HJK's Portfolio",
};
