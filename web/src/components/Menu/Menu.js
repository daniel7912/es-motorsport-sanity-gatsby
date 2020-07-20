import React from "react"
import { Link } from "gatsby"

import "./Menu.css"

export const MenuReferencedItem = ({
  item,
  label = null,
  type = "link",
  classes = "",
}) => {
  let url
  if (item._type === "page") {
    url = item.slug.current === "home" ? "/" : `/${item.slug.current}`
  } else if (item._type === "category") {
    url = `/category/${item.slug.current}`
  }

  if (type === "button") {
    return (
      <Link to={url} className={classes} activeClassName="active">
        {label && <span>{label}</span>}
        {!label && <span>{item.title}</span>}
      </Link>
    )
  } else {
    return (
      <Link to={url} activeClassName="active">
        {label && <span>{label}</span>}
        {!label && <span>{item.title}</span>}
      </Link>
    )
  }
}

export const MenuAbsoluteItem = ({ item, type = "link", classes = "" }) => {
  if (type === "button") {
    return (
      <a
        href={item.url}
        target={item.openInNewWindow ? "_blank" : "_self"}
        className={classes}
      >
        <span>{item.title}</span>
      </a>
    )
  } else {
    return (
      <a
        href={item.url}
        target={item.openInNewWindow ? "_blank" : "_self"}
        className={classes}
      >
        {item.title}
      </a>
    )
  }
}

const Menu = ({ rawItems, classes = "" }) => {
  return (
    <nav className={`menu ${classes}`}>
      <ul>
        {rawItems.map(item => (
          <li key={item._id ? item._id : item._key}>
            {item._type === "menuAbsoluteItem" && (
              <MenuAbsoluteItem item={item} />
            )}
            {item._type !== "menuAbsoluteItem" && (
              <MenuReferencedItem item={item.referencedItem} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
