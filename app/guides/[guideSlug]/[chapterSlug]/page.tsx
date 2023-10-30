import { loadChapter } from '@/app/helpers/loadChapter'
import { MDXRemote } from 'next-mdx-remote/rsc'

type chapterProps = {
  chapterSlug: string
  guideSlug: string
}

async function Chapter({ params }: { params: chapterProps }) {
  const { frontmatter, content } = await loadChapter(`${params.guideSlug}/${params.chapterSlug}`)
  return (
    <main>
      <h1>{frontmatter.title}</h1>
      <MDXRemote source={content} />
    </main>
  )
}

export default Chapter
