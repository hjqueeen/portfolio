import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isKo = i18n.language?.startsWith('ko');

  return (
    <ButtonGroup size="small" variant="text" sx={{ ml: 1 }}>
      <Button
        onClick={() => i18n.changeLanguage('en')}
        disabled={!isKo}
        sx={{
          fontWeight: !isKo ? 700 : 400,
          color: 'app.brown',
          '&.Mui-disabled': { color: 'app.brown' },
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => i18n.changeLanguage('ko')}
        disabled={!!isKo}
        sx={{
          fontWeight: isKo ? 700 : 400,
          color: 'app.brown',
          '&.Mui-disabled': { color: 'app.brown' },
        }}
      >
        KO
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
