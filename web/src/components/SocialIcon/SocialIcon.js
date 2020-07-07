import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import "./SocialIcon.css"

export default function SocialIcon({ type, color = "default" }) {
  return (
    <StaticQuery
      query={graphql`
        query SocialIconsQuery {
          settings: sanitySiteSettings {
            facebookURL
            instagramURL
          }
        }
      `}
      render={data => {
        const { facebookURL, instagramURL } = data.settings
        return (
          <>
            {type === "facebook" && (
              <a
                href={instagramURL}
                target="_blank"
                rel="noreferrer"
                className="nav-link hidden xs:block self-center"
              >
                <FiInstagram
                  className={`${
                    color === "default"
                      ? "text-brands-instagram"
                      : "color-" + color
                  }`}
                />
              </a>
            )}
            {type === "instagram" && (
              <a
                href={facebookURL}
                target="_blank"
                rel="noreferrer"
                className="nav-link hidden xs:block self-center"
              >
                <FaFacebookF
                  className={`${
                    color === "default"
                      ? "text-brands-facebook"
                      : "color-" + color
                  }`}
                />
              </a>
            )}
          </>
        )
      }}
    />
  )
}
