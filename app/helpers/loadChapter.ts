// TOODS
// 1. Get inside the ${guide} folder 🐥
// 2. Select a specific ${chapter}
// 3. Render its content with mdx

import fs from 'fs/promises'
import matter from 'gray-matter'

export async function loadChapter(slug: string) {
  // Can I read the guides/{guide} here instead of the page.tsx of the chapter?
  const chapterContent = await fs.readFile(`guides/${slug}.mdx`)
  const { data: frontmatter, content } = matter(chapterContent)

  return { frontmatter, content }
}
