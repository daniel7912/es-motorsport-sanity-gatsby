import React, { Component } from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import { v4 } from "uuid"
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri"
import { MenuAbsoluteItem, MenuReferencedItem } from "../Menu/Menu"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Carousel.css"

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <RiArrowRightCircleLine
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <RiArrowLeftCircleLine
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

export default class Carousel extends Component {
  render() {
    const { slides, rawPageBuilder } = this.props
    const settings = {
      dots: true,
      infinite: true,
      autoPlay: true,
      speed: 700,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      hideContent: rawPageBuilder.carouselSettings
        ? rawPageBuilder.carouselSettings.hideContent
        : null,
      containered: rawPageBuilder.carouselSettings
        ? rawPageBuilder.carouselSettings.containered
        : null,
    }
    return (
      <div
        className={
          settings.containered ? "container mx-auto max-w-3xl mb-8" : ""
        }
      >
        <Slider {...settings}>
          {slides.map((s, i) => {
            const link = settings.hideContent
              ? null
              : rawPageBuilder.slides[i].link[0]

            return (
              <div className="slide" key={v4()}>
                <Img fluid={s.image.asset.fluid} alt={s.image.alt} />
                {!settings.hideContent && (
                  <div className="text-wrapper">
                    <div className="slide-text">
                      {i === 0 && <h1>{s.title}</h1>}
                      {i > 0 && <h2>{s.title}</h2>}
                      {s.body && <p className="hidden sm:block">{s.body}</p>}
                      <div className="buttons-wrapper">
                        {link && link._type === "menuAbsoluteItem" && (
                          <MenuAbsoluteItem
                            item={link}
                            type="button"
                            classes="button mx-auto primary large"
                          >
                            <span>{link.title}</span>
                          </MenuAbsoluteItem>
                        )}
                        {link && link._type !== "menuAbsoluteItem" && (
                          <MenuReferencedItem
                            item={link.referencedItem}
                            classes="button mx-auto primary large"
                          >
                            {link.label && <span>{link.label}</span>}
                            {!link.label && (
                              <span>{link.referencedItem.title}</span>
                            )}
                          </MenuReferencedItem>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
