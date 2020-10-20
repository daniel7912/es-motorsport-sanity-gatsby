import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import SocialIcon from "../SocialIcon/SocialIcon"
import Logo from "../Logo"
import Menu from "../Menu/Menu"
import PortableText from "../portableText"

import "./Footer.css"
import { contactDetails } from "../../../../studio/schemas/objects/contactDetails"

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          settings: sanitySiteSettings {
            title
            facebookURL
            instagramURL
            _rawContactDetails
            contactDetails {
              emailAddress
            }
            footerMenu1 {
              title
              _rawMenuItems(resolveReferences: { maxDepth: 10 })
            }
            footerMenu2 {
              title
              _rawMenuItems(resolveReferences: { maxDepth: 10 })
            }
            footerMenu3 {
              title
              _rawMenuItems(resolveReferences: { maxDepth: 10 })
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          facebookURL,
          instagramURL,
          _rawContactDetails,
          contactDetails,
          footerMenu1,
          footerMenu2,
          footerMenu3,
        } = data.settings
        console.log(data.settings)
        return (
          <footer className="footer">
            <div className="container px-5 py-24 mx-auto flex lg:items-center lg:items-start lg:flex-row lg:flex-no-wrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
                <Link
                  to="/"
                  className="text-xl sm:text-2xl md:text-3xl uppercase font-semibold"
                >
                  <Logo />
                </Link>
                <div className="mt-2 text-sm">
                  {_rawContactDetails.address && (
                    <PortableText blocks={_rawContactDetails.address} />
                  )}
                  {contactDetails.emailAddress && (
                    <p>
                      <a href={`mailto:${contactDetails.emailAddress}`}>
                        {contactDetails.emailAddress}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 lg:mt-0 mt-10 lg:text-left text-center">
                <div className="hidden xl:block lg:w-1/4 md:w-1/3 w-full px-4"></div>
                {footerMenu1 && (
                  <div className="xl:w-1/4 lg:w-1/3 w-full px-4">
                    <h4>{footerMenu1.title}</h4>
                    <Menu
                      rawItems={footerMenu1._rawMenuItems}
                      classes="list-none mb-10"
                    />
                  </div>
                )}
                {footerMenu2 && (
                  <div className="xl:w-1/4 lg:w-1/3 w-full px-4">
                    <h4>{footerMenu2.title}</h4>
                    <Menu
                      rawItems={footerMenu2._rawMenuItems}
                      classes="list-none mb-10"
                    />
                  </div>
                )}
                {footerMenu3 && (
                  <div className="xl:w-1/4 lg:w-1/3 w-full px-4">
                    <h4>{footerMenu3.title}</h4>
                    <Menu
                      rawItems={footerMenu3._rawMenuItems}
                      classes="list-none mb-10"
                    />
                  </div>
                )}
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
