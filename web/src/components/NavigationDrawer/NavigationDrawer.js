import React from "react"
import { Link } from "gatsby"
import { AiOutlineCloseSquare } from "react-icons/ai"
import "./NavigationDrawer.css"

const navLinks = [
  { label: "Home", slug: "/" },
  { label: "Motorsport", slug: "/blog" },
  { label: "Electronics", slug: "#" },
  { label: "Track Day Services", slug: "#" },
  { label: "Garage Services", slug: "#" },
  { label: "Vehicles For Sale", slug: "#" },
  { label: "Parts", slug: "#" },
]

export default class NavigationDrawer extends React.Component {
  render() {
    const { toggleMenu, open } = this.props
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
          <ul className="nav-links self-center text-center mx-auto">
            {navLinks.map((l, i) => (
              <li key={`navlink-${i}`}>
                <Link to={l.slug} activeClassName="active">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
