import matter from 'gray-matter'
import fs from 'fs'

const getGuideMetaData = () => {
  const folder = 'guides/'
  const files = fs.readdirSync(folder)
  const markdownGuides = files.filter((file) => file.endsWith('.mdx'))

  const guides = markdownGuides.map((guide) => {
    const guideContents = fs.readFileSync(`guides/${guide}`, 'utf8')
    const frontMatter = matter(guideContents)
    return {
      title: frontMatter.data.title,
      slug: guide.replace('.mdx', ''),
    }
  })

  return guides
}

export default getGuideMetaData
