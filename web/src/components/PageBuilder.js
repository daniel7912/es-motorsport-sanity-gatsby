import React from "react"
import Card from "./Card/Card"
import Carousel from "./Carousel/Carousel"
import FeatureBlock from "./FeatureBlock/FeatureBlock"
import Form from "./Form/Form"
import { v4 } from "uuid"
import { gridClassNames } from "../lib/helpers"
import ImageLink from "./ImageLink/ImageLink"
import InstagramFeed from "./InstagramFeed/InstagramFeed"
import PortableText from "./portableText"

const SectionHeaders = ({ titles }) => (
  <div className="text-center mb-4 md:mb-10">
    {titles.title && (
      <h2 className="text-2xl sm:text-4xl font-semibold uppercase">
        {titles.title}
      </h2>
    )}
    {titles.subtitle && (
      <p className="sm:text-lg mt-2 text-gray-800">{titles.subtitle}</p>
    )}
  </div>
)

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
  } else if (section._type === "form") {
    return <Form rawPageBuilder={_rawPageBuilder[index]} />
  } else if (section._type === "grid") {
    return (
      <div className="container mx-auto py-4 md:py-12 px-4">
        {section.sectionTitles && !section.sectionTitles.hideTitles && (
          <SectionHeaders titles={section.sectionTitles} />
        )}
        <div className={gridClassNames(section.columnSizes, section.gapSizes)}>
          {section.columns.map((c, columnIndex) => (
            <div className="column h-full" key={v4()}>
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
  } else if (section._type === "imageLink") {
    return <ImageLink contents={section} rawPageBuilder={_rawPageBuilder} />
  } else if (section._type === "instagramFeed") {
    return <InstagramFeed title={section.title} />
  } else if (section._type === "pageBuilderContent") {
    return (
      <div className="container mx-auto max-w-3xl">
        <PortableText blocks={_rawPageBuilder[index].body} />
      </div>
    )
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
