import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-desc">
        <img src="spottabl_logo.jpg" alt="logo" className="img" />
        <div className="header-desc-title">
          <h2>YOUR SPOTTABL TEAM</h2>
          <div>
            <p>Spottabl supports you all throughout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
