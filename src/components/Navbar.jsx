function Navbar(props) {
  return (
    <header>
      <nav>
        <img src={props.Logo} alt={props.altImg} style={{ width: props.width }} />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#<p></p>">Help</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
