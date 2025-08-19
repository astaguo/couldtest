import { RouterProvider } from 'react-router';
import router from './router';
import { ConfigProvider } from 'antd';
import { useAppSelector } from './store/hooks';
import { selectLanguage } from './store/slice/languageSlice';
// for date-picker i18n
import 'dayjs/locale/zh-cn';

export default function App() {
  const local = useAppSelector(selectLanguage);

  return (
    <ConfigProvider locale={local} theme={{
      token: {
        // switch global color
        colorPrimary: '#1677ff',
      },
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
