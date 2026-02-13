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

type TaskItem = { title: string; detail: string };

const Career = (props: CareerProps) => {
  const { smDown } = useBreakpoints();
  const { t } = useTranslation();

  const pengueenTasksRaw = t('app.career.pengueen.tasks', { returnObjects: true });
  const pengueenTasks: TaskItem[] = Array.isArray(pengueenTasksRaw) ? pengueenTasksRaw : [];

  const alstomTasksRaw = t('app.career.alstom.tasks', { returnObjects: true });
  const alstomTasks: TaskItem[] = Array.isArray(alstomTasksRaw) ? alstomTasksRaw : [];

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
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-gray-800'>
              {t('app.career.pengueen.companyDescription')}
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              {t('app.career.pengueen.period')}
            </p>
            <p className='text-sm text-gray-500'>
              {t('app.career.pengueen.role')}
            </p>
          </div>

          <div>
            <h3 className='text-base font-semibold text-gray-700 mb-4'>
              {t('app.career.pengueen.mainTasksTitle')}
            </h3>
            <ul className='space-y-4 text-gray-700 list-image-none list-inside text-sm'>
              {pengueenTasks.map((task, idx) => (
                <li key={idx}>
                  <span className='font-semibold'>{task.title}</span>
                  <br />
                  {task.detail}
                </li>
              ))}
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
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-gray-800'>
              {t('app.career.alstom.companyDescription')}
            </h2>
            <p className='text-sm text-gray-500 mt-1'>
              {t('app.career.alstom.period')}
            </p>
            <p className='text-sm text-gray-500'>
              {t('app.career.alstom.department')}
            </p>
            <p className='text-sm text-gray-500'>
              {t('app.career.alstom.role')}
            </p>
          </div>

          <div>
            <h3 className='text-base font-semibold text-gray-700 mb-4'>
              {t('app.career.alstom.mainTasksTitle')}
            </h3>
            <ul className='space-y-4 text-gray-700 list-image-none list-inside text-sm'>
              {alstomTasks.map((task, idx) => (
                <li key={idx}>
                  <span className='font-semibold'>{task.title}</span>
                  <br />
                  {task.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Box>
    </ScrollContainer>
  );
};

export default Career;
