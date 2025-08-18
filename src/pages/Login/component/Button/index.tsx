import './index.css';

type IProps = {
  title: string;
  onClick: () => void;
};

const Button = (props: IProps) => {
  return (
    <a onClick={props.onClick} className="codepen-button">
      <span>{props.title}</span>
    </a>
  );
};

export default Button;
