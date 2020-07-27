import React from "react"
import { Link } from "gatsby"

import "./Menu.css"

export const getItemLink = item => {
  let url
  if (item._type === "page") {
    url = item.slug.current === "home" ? "/" : `/${item.slug.current}`
  } else if (item._type === "category") {
    url = `/category/${item.slug.current}`
  }
  return url
}

export const MenuReferencedItem = ({
  item,
  children,
  label = null,
  type = "link",
  classes = "",
}) => {
  const url = getItemLink(item)

  return (
    <Link to={url} className={classes} activeClassName="active">
      {children}
    </Link>
  )
}

export const MenuAbsoluteItem = ({
  item,
  children,
  type = "link",
  classes = "",
}) => {
  return (
    <a
      href={item.url}
      target={item.openInNewWindow ? "_blank" : "_self"}
      className={classes}
    >
      {children}
    </a>
  )
}

const Menu = ({ rawItems, classes = "" }) => {
  return (
    <nav className={`menu ${classes}`}>
      <ul>
        {rawItems.map(item => (
          <li key={item._id ? item._id : item._key}>
            {item._type === "menuAbsoluteItem" && (
              <MenuAbsoluteItem item={item}>{item.title}</MenuAbsoluteItem>
            )}
            {item._type !== "menuAbsoluteItem" && (
              <MenuReferencedItem item={item.referencedItem}>
                {item.label && <span>{item.label}</span>}
                {!item.label && <span>{item.referencedItem.title}</span>}
              </MenuReferencedItem>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
