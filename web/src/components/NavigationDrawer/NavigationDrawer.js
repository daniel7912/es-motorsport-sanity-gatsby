import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { AiOutlineCloseSquare } from "react-icons/ai"
import "./NavigationDrawer.css"
import Menu from "../Menu/Menu"

export default function NavigationDrawer({ toggleMenu, open }) {
  return (
    <StaticQuery
      query={graphql`
        query NavigationDrawerQuery {
          settings: sanitySiteSettings {
            title
            facebookURL
            instagramURL
            mainMenu {
              _rawMenuItems(resolveReferences: { maxDepth: 10 })
            }
          }
        }
      `}
      render={data => {
        const { mainMenu } = data.settings

        return (
          <div
            className={`${
              open ? "open" : "closed"
            } navigation-drawer fixed block z-40 top-0 h-full bg-gray-800 text-white transition-all duration-500 ease-in-out`}
          >
            <button
              onClick={toggleMenu}
              className="close-menu-button bg-gray-800 outline-none text-white absolute"
            >
              <AiOutlineCloseSquare className="mx-auto" />
            </button>
            <div className="flex w-full h-full">
              <Menu
                rawItems={mainMenu._rawMenuItems}
                classes="nav-links self-center text-center mx-auto"
              />
            </div>
          </div>
        )
      }}
    />
  )
}
