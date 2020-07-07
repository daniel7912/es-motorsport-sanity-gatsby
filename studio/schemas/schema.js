// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import page from './documents/page'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import authorReference from './objects/authorReference'
import bioPortableText from './objects/bioPortableText'
import bodyPortableText from './objects/bodyPortableText'
import buttonLink from './objects/buttonLink'
import card from './objects/card'
import excerptPortableText from './objects/excerptPortableText'
import featureBlock from './objects/featureBlock'
import { grid, gridColumn, gridSettings } from './objects/grid'
import instagramFeed from './objects/instagramFeed'
import mainImage from './objects/mainImage'
import pageBuilder from './objects/pageBuilder'
import pageBuilderContent from './objects/pageBuilderContent'
import { carousel, carouselSlide } from './objects/carousel'
import { phoneNumber, contactDetails } from './objects/contactDetails'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    page,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bioPortableText,
    bodyPortableText,
    buttonLink,
    card,
    carousel,
    carouselSlide,
    contactDetails,
    excerptPortableText,
    featureBlock,
    grid,
    gridColumn,
    gridSettings,
    instagramFeed,
    pageBuilder,
    pageBuilderContent,
    phoneNumber

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
