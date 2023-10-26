import fs from 'fs/promises'
import matter from 'gray-matter'

export async function loadBlogPost(slug: string) {
  const rawContent = await fs.readFile(`posts/${slug}.mdx`)

  const { data: frontmatter, content } = matter(rawContent)

  return { frontmatter, content }
}
