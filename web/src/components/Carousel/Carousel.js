import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import { v4 } from "uuid"
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri"

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
    }
    return (
      <div>
        <Slider {...settings}>
          {slides.map((s, i) => (
            <div className="slide" key={v4()}>
              <Img fluid={s.image.asset.fluid} alt={s.image.alt} />
              <div className="text-wrapper hidden sm:block">
                <div className="slide-text">
                  {i === 0 && <h1>{s.title}</h1>}
                  {i > 0 && <h2>{s.title}</h2>}
                  {s.body && <p>{s.body}</p>}
                  {/* <PortableText blocks={rawPageBuilder.slides[i].title} /> */}
                  {/* <PortableText blocks={rawPageBuilder.slides[i].body} /> */}
                  <div className="buttons-wrapper">
                    <Link to={s.link.url} className="button primary large">
                      <span>{s.link.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
