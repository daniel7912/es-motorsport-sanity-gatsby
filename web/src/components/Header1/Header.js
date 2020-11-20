import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { MdClearAll } from "react-icons/md"
import Logo from "../Logo"
import SocialIcon from "../SocialIcon/SocialIcon"
// import ThemeToggle from "./ThemeToggler"

import "./Header.css"

export default function Header({ toggleMenu }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          settings: sanitySiteSettings {
            logo {
              ...SanityImage
              alt
            }
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
        const {
          contactDetails,
          facebookURL,
          instagramURL,
          logo,
        } = data.settings
        return (
          <div className="navbar flex border-gray-300">
            <div className="nav-left site-logo pl-4 md:pl-8 text-xl sm:text-2xl md:text-3xl uppercase font-semibold flex-grow self-center">
              <Link to="/">
                <Logo image={logo} />
              </Link>
            </div>
            <div className="nav-right flex">
              {contactDetails?.phoneNumber?.phoneNumber &&
                contactDetails?.phoneNumber?.phoneNumberDisplay && (
                  <a
                    href={`tel:${contactDetails.phoneNumber.phoneNumber}`}
                    className="phone-number hidden sm:block self-center border-r border-gray-300 py-2 pr-6 mr-4"
                  >
                    {contactDetails.phoneNumber.phoneNumberDisplay}
                  </a>
                )}
              {instagramURL && (
                <SocialIcon type="instagram" classes="hidden xs:block" />
              )}
              {facebookURL && (
                <SocialIcon type="facebook" classes="hidden xs:block" />
              )}
              <button
                className="menu-toggle bg-gray-800 outline-none focus:shadow-outline text-white"
                onClick={toggleMenu}
              >
                {}
                <MdClearAll className="mx-auto" />
              </button>
            </div>

            {/* <ThemeToggle /> */}
          </div>
        )
      }}
    />
  )
}

// const Header = ({ toggleMenu }) => {
//   const contactDetails = null
//   const instagramURL = "#"
//   const facebookURL = "#"

//   return (
//     <div className="navbar flex border-b border-gray-300">
//       <div className="nav-left site-logo pl-4 md:pl-8 text-xl sm:text-2xl md:text-3xl uppercase font-semibold flex-grow self-center">
//         <Link to="/">
//           <span className="text-yellow-400">ES</span>Motorsport
//         </Link>
//       </div>
//       <div className="nav-right flex">
//         {contactDetails && contactDetails.phone && (
//           <a
//             href={`tel:${contactDetails.phone.tel}`}
//             className="phone-number hidden sm:block self-center border-r border-gray-300 py-2 pr-6 mr-4"
//           >
//             {contactDetails.phone.display}
//           </a>
//         )}
//         {instagramURL && (
//           <a
//             href={instagramURL}
//             target="_blank"
//             rel="noreferrer"
//             className="nav-link hidden xs:block self-center"
//           >
//             <FiInstagram className="text-brands-instagram" />
//           </a>
//         )}
//         {facebookURL && (
//           <a
//             href={facebookURL}
//             target="_blank"
//             rel="noreferrer"
//             className="nav-link hidden xs:block self-center"
//           >
//             <FaFacebookF className="text-brands-facebook" />
//           </a>
//         )}
//         <button
//           className="menu-toggle bg-gray-800 outline-none focus:shadow-outline text-white"
//           onClick={toggleMenu}
//         >
//           {}
//           <MdClearAll className="mx-auto" />
//         </button>
//       </div>

//       {/* <ThemeToggle /> */}
//     </div>
//   )
// }

// export default Header
