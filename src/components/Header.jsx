import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        title="LymWrite Logo"
        alt="LymWrite Logo"
        aria-label="LymWrite Logo"
        width={40}
      />
      <p role="heading">
        <span style={{ fontWeight: "bold" }}>L</span>ym
        <span style={{ fontWeight: "bold" }}>W</span>rite
      </p>
    </header>
  );
}

export default Header;
