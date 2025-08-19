import { Button, DatePicker, Input, Space } from "antd";
import { decrement, increment, selectCount } from "../../store/slice/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLanguage } from "../../store/slice/languageSlice";
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';

const onChange = () => {};

export default function Home() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (<>
    <div>
      <Button type="primary" onClick={() => dispatch(setLanguage(zhCN))}>Switch Chinese</Button>
      <Button type="primary" onClick={() => dispatch(setLanguage(enUS))}>Switch English</Button>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </div>
    <div>
      <Button type="primary" onClick={() => dispatch(increment())}>Increment</Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>Decrement</Button>
      <Input value={count} placeholder="Basic usage" />
    </div>
  </>);
}
