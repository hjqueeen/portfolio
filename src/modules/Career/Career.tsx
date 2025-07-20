import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  faUser,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

// Components
import { UserCard } from '../../shared/components/UserCard/UserCard';
import { ScrollContainer } from '../../shared/components/ScrollContainer/ScrollContainer';

// Assets
import hjkim2 from '../../assets/hjkim2.png';

// Styles
import styles from './Career.module.scss';
import { useBreakpoints } from '../../shared/hooks/use-breakpoints.hook';

type CareerProps = {
  scrollTo: string;
};

const Career = (props: CareerProps) => {
  const { smDown } = useBreakpoints();
  const { t } = useTranslation();

  const profile_texts = [
    t('app.introduction.profile.text2'),
    t('app.introduction.profile.text3'),
  ];
  return (
    <ScrollContainer
      name={props.scrollTo}
      bgColor='black'
      title={t('app.introduction.title')}
      textColor='white'
      iconColor='#625E79'
      selectionColor='app.purple'
    >
      <div className='bg-white shadow-md rounded-2xl p-6 space-y-4 max-w-3xl mx-auto'>
        <h2 className='text-xl font-bold text-gray-800'>
          🐧 펭귄(Penguin) – 프론트엔드 & 백엔드 개발자
        </h2>
        <p className='text-sm text-gray-500'>근무 기간: (직접 입력)</p>

        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>
            <strong className='font-semibold'>
              홈페이지 성능 개선 및 유지보수:
            </strong>{' '}
            React 구조 최적화 및 코드 스플리팅을 통해 페이지 로딩 속도 약 30%
            개선
          </li>
          <li>
            <strong className='font-semibold'>UI/UX 전면 개편:</strong> 최신
            디자인 반영 및 반응형 웹 재설계, 컴포넌트 기반 구조 정비
          </li>
          <li>
            <strong className='font-semibold'>
              사용자 피드백 기반 기능 개발:
            </strong>{' '}
            게시판, 즐겨찾기, 검색 필터 등 신규 기능 기획 및 구현
          </li>
          <li>
            <strong className='font-semibold'>버그 및 이슈 해결:</strong> 운영
            중 발생한 다양한 UI/UX 이슈 해결 및 품질 안정화
          </li>
          <li>
            <strong className='font-semibold'>백엔드 연동 및 개발:</strong>{' '}
            NestJS + TypeORM 기반 간단한 CRUD API 개발 및 PostgreSQL 쿼리 작성
          </li>
          <li>
            <strong className='font-semibold'>협업과 관리:</strong> Git, Jira,
            Slack을 통한 이슈 관리 및 팀 간 협업 경험
          </li>
        </ul>

        <div className='pt-2'>
          <p className='font-medium text-gray-800'>🛠 사용 기술</p>
          <p className='text-sm text-gray-600'>
            React, TypeScript, JavaScript, Tailwind CSS, NestJS, TypeORM,
            PostgreSQL, Git, Figma, Jira
          </p>
        </div>
      </div>
    </ScrollContainer>
  );
};

export default Career;
