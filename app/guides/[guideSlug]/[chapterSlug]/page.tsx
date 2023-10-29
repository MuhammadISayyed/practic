// Here I need to be able to use the 'guideSlug' and the 'chapterSlug'
import { loadChapter } from '@/app/helpers/loadChapter'
import { MDXRemote } from 'next-mdx-remote/rsc'

async function Chapter({ params }) {
  console.log(params)
  const { frontmatter, content } = await loadChapter(`${params.guideSlug}/${params.chapterSlug}`)
  return <MDXRemote source={content} />
}

export default Chapter
