import "./styles.css";
import logo from "../../logo.svg";

export default function Header({ title }: { title: string }) {
  return (
    <div className="header-container">
      <div className="header-brand">
        <a href="#/">
          <img src={logo} className="header-logo" alt="logo" />
        </a>
      </div>
      <div className="header-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
