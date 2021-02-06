import "../CSS/footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div id="contact">
        <div>
          <h2>Email</h2>
          <p>sgran@kth.se</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+46732666666</p>
        </div>
        <div>
          <h2>Linkedin</h2>
          <a
            id="linkStyle"
            href="https://www.linkedin.com/in/sebastian-granlund-6a7a8ab1/"
          >
            Sebastian's Linkedin
          </a>
        </div>
      </div>
      <p>This Site was made by Sebastian Granlund</p>
    </div>
  );
};
export default Footer;
