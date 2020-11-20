import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { v4 } from "uuid"
import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"

import "./InstagramFeed.css"

export default function InstagramFeed({ title }) {
  return (
    <StaticQuery
      query={graphql`
        query InstagramFeedQuery {
          settings: sanitySiteSettings {
            facebookURL
            instagramURL
          }
          allInstaNode(limit: 4, sort: { order: DESC, fields: timestamp }) {
            edges {
              node {
                id
                localFile {
                  childImageSharp {
                    fixed(width: 360, height: 300, quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const instaPosts = data.allInstaNode.edges
        const { facebookURL, instagramURL } = data.settings

        return (
          <div className="instagram-feed container mx-auto px-4 sm:px-0">
            <h4>{title}</h4>
            <div className="social-icons">
              {instagramURL && (
                <a href={instagramURL} target="_blank" rel="noreferrer">
                  <FiInstagram className="text-brands-instagram" />
                </a>
              )}
              {facebookURL && (
                <a href={facebookURL} target="_blank" rel="noreferrer">
                  <FaFacebookF className="text-brands-facebook" />
                </a>
              )}
            </div>
            <div className="insta-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 row-gap-2">
              {instaPosts.map(p => (
                <a
                  href={`https://www.instagram.com/p/${p.node.id}`}
                  target="_blank"
                  rel="noreferrer"
                  key={v4()}
                >
                  <Img
                    fixed={p.node.localFile.childImageSharp.fixed}
                    key={v4()}
                  />
                </a>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}
