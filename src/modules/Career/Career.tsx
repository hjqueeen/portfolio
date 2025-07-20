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
import pengueen from '../../assets/Pengueen-Logo.png';
import alstom_logo from '../../assets/alstom_logo.png';

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
      bgColor='white'
      title={t('app.career.title').toUpperCase()}
      textColor='black'
      iconColor='#625E79'
      selectionColor='app.purple'
    >
      <Box
        className='flex flex-col md:flex-row h-full bg-white shadow-lg rounded-2xl border-solid border border-gray-200 p-8 pt-2 mt-4 w-4/5 mx-auto space-y-6 gap-2'
        sx={{
          '::selection': {
            color: 'white',
            bgcolor: 'app.purple',
          },
        }}
      >
        <div className='flex flex-col items-center w-full md:w-52 border-0 border-solid border-b border-r-0 md:border-r md:border-b-0 border-gray-200 p-2 pr-0 md:pr-6 gap-2'>
          <img className='mt-4 w-52' src={pengueen} alt='pengueen-logo' />
          <a
            href='https://www.pengueen.de/'
            className='text-xs cursor-pointer underline'
          >
            https://www.pengueen.de/
          </a>
        </div>
        <div className='pl-2 flex-1'>
          {/* 제목 */}
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-gray-800'>
              Pengueen은 조직의 업무 프로세스를 유연하게 디지털화하고,
              <br /> 협업을 효율적으로 지원하는 플랫폼을 개발, 제공하는
              회사입니다.
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              근무 기간: 2022년 8월 ~ 현재 (파트타임)
            </p>
            <p className='text-sm text-gray-500'>
              역할: 풀스택 개발자 (Frontend 중심 + Backend 일부 참여)
            </p>
          </div>

          {/* 업무 및 성과 */}
          <div>
            <h3 className='text-base font-semibold text-gray-700 mb-4'>
              ✔️ 주요 업무 및 성과
            </h3>
            <ul className='space-y-4 text-gray-700 list-image-none list-inside text-sm'>
              <li>
                <span className='font-semibold'>
                  홈페이지 성능 개선 및 유지보수:
                </span>
                <br />
                React 구조 최적화 및 코드 스플리팅을 통해 페이지 로딩 속도 약
                30% 개선
              </li>
              <li>
                <span className='font-semibold'>
                  사용자 피드백 기반 기능 개발:
                </span>
                <br />
                게시판, 즐겨찾기, 검색 필터 등 신규 기능 기획 및 구현
              </li>
              <li>
                <span className='font-semibold'>버그 및 이슈 해결: </span>
                <br /> 운영 중 발생한 다양한 UI/UX 이슈 해결 및 품질 안정화
              </li>
              <li>
                <span className='font-semibold'>백엔드 연동 및 개발: </span>
                <br />
                NestJS + TypeORM 기반 간단한 CRUD API 개발 및 PostgreSQL 쿼리
                작성
              </li>
              <li>
                <span className='font-semibold'>협업과 관리: </span>
                <br /> Git, Jira을 통한 이슈 관리 및 팀 간 협업 경험
              </li>
            </ul>
          </div>
        </div>
      </Box>
      <Box
        className='flex flex-col md:flex-row h-full bg-white shadow-lg rounded-2xl border-solid border border-gray-200 p-8 pt-2 mt-4 w-4/5 mx-auto space-y-6 gap-2'
        sx={{
          '::selection': {
            color: 'white',
            bgcolor: 'app.purple',
          },
        }}
      >
        <div className='flex flex-col items-center w-full md:w-52 border-0 border-solid border-b border-r-0 md:border-r md:border-b-0 border-gray-200 p-2 pr-0 md:pr-6 gap-2'>
          <img className='mt-4 w-52' src={alstom_logo} alt='alstom-logo' />
          <a
            href='https://www.alstom.com/'
            className='text-xs cursor-pointer underline'
          >
            https://www.alstom.com/
          </a>
        </div>
        <div className='pl-2 flex-1'>
          {/* 제목 */}
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-gray-800'>
              Alstom은 프랑스에 본사를 둔 세계적인 철도 제조 기업으로,
              <br />
              고속열차, 지하철, 트램 등 다양한 열차와 관련 시스템을 설계하고
              제작합니다.
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              근무 기간: 2023년 10월 ~ 현재 (인턴)
            </p>
            <p className='text-sm text-gray-500'>
              부서: 여객 정보 시스템(PIS, Passenger Information System)
            </p>
            <p className='text-sm text-gray-500'>
              역할: 소프트웨어 개발 (PIS 시스템 개발 및 유지보수 지원)
            </p>
          </div>

          {/* 업무 및 성과 */}
          <div>
            <h3 className='text-base font-semibold text-gray-700 mb-4'>
              ✔️ 주요 업무 및 경험
            </h3>
            <ul className='space-y-4 text-gray-700 list-image-none list-inside text-sm'>
              <li>
                <span className='font-semibold'>
                  PIS 소프트웨어 유지보수 및 테스트 자동화:
                </span>
                <br />
                기존 시스템 코드 분석 및 오류 수정, 테스트 케이스 개선 및 자동화
                스크립트 작성
              </li>
              <li>
                <span className='font-semibold'>
                  프론트엔드 인터페이스 검토 및 개선 제안:
                </span>
                <br />
                승객 정보 디스플레이 UI 구성 및 레이아웃 정렬 등 사용자 경험
                향상 작업 참여
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </ScrollContainer>
  );
};

export default Career;
