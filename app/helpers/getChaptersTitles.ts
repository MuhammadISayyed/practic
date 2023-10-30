import fs from 'fs'
import matter from 'gray-matter'

const getChaptersTitles = (guide: string) => {
  const guideFolder = `guides/${guide}`
  const chapters = fs.readdirSync(guideFolder)
  const markdownChapters = chapters.filter((chapter) => chapter.endsWith('.mdx'))

  const chaptersTitles = markdownChapters.map((title) => {
    const chapterContents = fs.readFileSync(`${guideFolder}/${title}`)
    const frontMatter = matter(chapterContents)
    return {
      title: frontMatter.data.title,
      slug: title.replace('.mdx', ''),
    }
  })

  return chaptersTitles
}

export default getChaptersTitles
