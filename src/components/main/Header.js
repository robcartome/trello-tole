import "./Header.css";
/* import AlertLineIcon from 'remixicon-react/AlertLineIcon'; */
import Home6LineIcon from 'remixicon-react/Home6LineIcon';
function Header() {
  return(
    <header className="header">
      <div className="header__main">
        <a className="isVisible" ><Home6LineIcon color="#fff" size={28} /></a>
        <div className = "logo">
          <div className ="logo__rectangle-large"></div>
          <div className ="logo__rectangle-short"></div>
        </div>
      </div>
      <div className="user-photo" alt="user"><span>YL</span></div>
    </header>
  );
}

export default Header;