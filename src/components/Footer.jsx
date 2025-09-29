function Footer(props) {
  return (
    <footer className={props.classFoot}>
      <h3>&copy; {props.footerText}</h3>
    </footer>
  );
}

export default Footer;
