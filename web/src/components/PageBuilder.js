import React from "react"
import Card from "./Card/Card"
import Carousel from "./Carousel/Carousel"
import FeatureBlock from "./FeatureBlock/FeatureBlock"
import { v4 } from "uuid"
import { gridClassNames } from "../lib/helpers"
import InstagramFeed from "./InstagramFeed/InstagramFeed"

const PageBuilderSection = ({ section, _rawPageBuilder, index }) => {
  // console.log(section)
  if (section._type === "carousel") {
    return (
      <Carousel
        slides={section.slides}
        rawPageBuilder={_rawPageBuilder[index]}
      />
    )
  } else if (section._type === "card") {
    return <Card contents={section} rawPageBuilder={_rawPageBuilder} />
  } else if (section._type === "featureBlock") {
    return (
      <FeatureBlock
        contents={section}
        rawPageBuilder={_rawPageBuilder[index]}
      />
    )
  } else if (section._type === "grid") {
    return (
      <div className="container mx-auto py-4 md:py-12 px-4">
        <div className={gridClassNames(section.settings)}>
          {section.columns.map((c, columnIndex) => (
            <div className="column" key={v4()}>
              <PageBuilderSection
                section={c}
                _rawPageBuilder={_rawPageBuilder[index].columns[columnIndex]}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    )
  } else if (section._type === "instagramFeed") {
    return <InstagramFeed title={section.title} />
  } else {
    return null
  }
}

const PageBuilder = ({ contents }) => {
  return (
    <>
      {contents.pageBuilder.map((section, index) => (
        <PageBuilderSection
          key={v4()}
          section={section}
          _rawPageBuilder={contents._rawPageBuilder}
          index={index}
        />
      ))}
    </>
  )
}

export default PageBuilder
