import React, { Component } from "react"
import Slider from "react-slick"
import { v4 } from "uuid"
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri"
import Lightbox from "react-image-lightbox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ImageGallery.css"
import "../Carousel/Carousel.css"
import "react-image-lightbox/style.css"

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

export default class ImageGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  openImageZoom(index) {
    this.setState({
      isOpen: true,
      photoIndex: index,
    })
  }

  render() {
    const { slides } = this.props
    const { photoIndex, isOpen } = this.state

    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={slides[i].url} />
          </a>
        )
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
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
      <>
        <Slider {...settings}>
          {slides.map((s, i) => {
            return (
              <div className="slide" key={v4()}>
                <img
                  src={s.url}
                  alt={s.alt}
                  onClick={() => this.openImageZoom(i)}
                />
              </div>
            )
          })}
        </Slider>

        {isOpen && (
          <Lightbox
            mainSrc={slides[photoIndex].largeURL}
            nextSrc={slides[(photoIndex + 1) % slides.length].largeURL}
            prevSrc={
              slides[(photoIndex + slides.length - 1) % slides.length].largeURL
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + slides.length - 1) % slides.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % slides.length,
              })
            }
          />
        )}
      </>
    )
  }
}
