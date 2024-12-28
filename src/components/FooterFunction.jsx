import React from 'react'

export default function FooterFunction() {
  return (
    <div>
        <footer className="text-center bg-body-tertiary">
  {/* Grid container */}
  <div className="container pt-4">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-facebook-f" />
        Facebook
      </a>
      {/* Twitter */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://x.com/home?lang=tr"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-twitter" />
        Twitter
      </a>
      {/* Google */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-google" />
        Google
      </a>
      {/* Instagram */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-instagram" />
        Instagram
      </a>
      {/* Linkedin */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-linkedin" />
        Linkedin
      </a>
      {/* Github */}
      <a
        data-mdb-ripple-init=""
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-github" />
        Github
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
  >
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}
