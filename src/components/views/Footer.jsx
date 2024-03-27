function Footer() {
  return (
    <section className="contact text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="d-flex mt-5">
          <p className="flex-grow-1">Copyright &copy; 2024 | Kieran Price</p>
          <div className="hstack gap-3">
            <a href="https://github.com/Ghosty1667">
              <i className="bi bi-github fs-2 text-white"></i>
            </a>
            <a
              className="text-decoration-none"
              href="https://www.linkedin.com/in/kieran-price-q/"
            >
              <i className="bi bi-linkedin fs-2 text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
