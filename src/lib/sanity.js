import { client } from "../utils/sanityClient"

// Fetch all blog posts
export async function getBlogPosts() {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      _id,
      title
    },
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    difficultyLevel,
    metaDescription
  } | order(publishedAt desc)`

  return client.fetch(query)
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    metaDescription,
    body,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    "categories": categories[]->{
      _id,
      title
    },
    "author": author->{
      _id,
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    difficultyLevel,
    tags,
    "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0][0...3]{
      _id,
      title,
      slug,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      metaDescription
    }
  }`

  return client.fetch(query, { slug })
}

// Fetch a single blog post by ID (for editing)
export async function getBlogPostById(id) {
  const query = `*[_type == "post" && _id == $id][0] {
    _id,
    title,
    slug,
    metaDescription,
    body,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      _id,
      title
    },
    author->{
      _id,
      name
    },
    difficultyLevel,
    tags,
    publishedAt
  }`

  return client.fetch(query, { id })
}

// Update an existing blog post
export async function updateBlogPost(post) {
  return client.createOrReplace(post)
}

// Delete a blog post
export async function deleteBlogPost(id) {
  return client.delete(id)
}

