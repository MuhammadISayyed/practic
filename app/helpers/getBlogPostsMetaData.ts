import matter from 'gray-matter'
import fs from 'fs'

const getBlogPostsMetaData = () => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

  const posts = markdownPosts.map((post) => {
    const postContents = fs.readFileSync(`posts/${post}`)
    const frontMatter = matter(postContents)

    return {
      title: frontMatter.data.title,
      slug: post.replace('.mdx', ''),
    }
  })

  return posts
}

export default getBlogPostsMetaData
