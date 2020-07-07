import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import SocialIcon from "../SocialIcon/SocialIcon"
import Logo from "../Logo"

import "./Footer.css"

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          settings: sanitySiteSettings {
            title
            facebookURL
            instagramURL
            contactDetails {
              phoneNumber {
                phoneNumber
                phoneNumberDisplay
              }
              emailAddress
            }
          }
        }
      `}
      render={data => {
        const { title, facebookURL, instagramURL } = data.settings
        return (
          <footer className="footer">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <Link
                  to="/"
                  className="flex  text-xl sm:text-2xl md:text-3xl uppercase font-semibold"
                >
                  <Logo />
                </Link>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  suscipit nisi condimentum nunc dapibus, a venenatis libero
                  bibendum. Aenean enim sem, elementum vel turpis non,
                  ullamcorper aliquam ex.
                </p>
              </div>
              <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h4>Header 1</h4>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to="/">First Link</Link>
                    </li>
                    <li>
                      <Link to="/">Second Link</Link>
                    </li>
                    <li>
                      <Link to="/">Third Link</Link>
                    </li>
                    <li>
                      <Link to="/">Fourth Link</Link>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h4>Header 2</h4>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to="/">First Link</Link>
                    </li>
                    <li>
                      <Link to="/">Second Link</Link>
                    </li>
                    <li>
                      <Link to="/">Third Link</Link>
                    </li>
                    <li>
                      <Link to="/">Fourth Link</Link>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h4>Header 3</h4>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to="/">First Link</Link>
                    </li>
                    <li>
                      <Link to="/">Second Link</Link>
                    </li>
                    <li>
                      <Link to="/">Third Link</Link>
                    </li>
                    <li>
                      <Link to="/">Fourth Link</Link>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-sm text-center sm:text-left">
                  © {new Date().getFullYear()} {title}. All rights reserved.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  {instagramURL && (
                    <SocialIcon type="instagram" color="light" />
                  )}
                  {facebookURL && <SocialIcon type="facebook" color="light" />}
                </span>
              </div>
            </div>
          </footer>
        )
      }}
    />
  )
}
