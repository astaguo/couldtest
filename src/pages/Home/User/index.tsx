import Search, { type SearchProps } from "antd/lib/input/Search";
import './index.scss';

const User = () => {

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="content">
      <div className="content-header">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <div className="content-body"></div>
    </ div>
  );
};

export default User;