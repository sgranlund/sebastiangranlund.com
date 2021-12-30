import "../CSS/footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div id="contact">
        <div>
          <a id="linkStyle" href={`mailto:${"sgran@kth.se"}`}>sgran@kth.se</a>
        </div>
        <div>

          <p>+46732688883</p>
        </div>
        <div>
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
