import { loadChapter } from '@/app/helpers/loadChapter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getHeadings } from '@/app/helpers/getHeadings'
import Link from 'next/link'

type chapterProps = {
  chapterSlug: string
  guideSlug: string
}

async function Chapter({ params }: { params: chapterProps }) {
  const { frontmatter, content } = await loadChapter(`${params.guideSlug}/${params.chapterSlug}`)
  const headings = await getHeadings(content)
  console.log(headings)

  return (
    <main>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <Link href={`#${heading.headingSlug}`}>{heading.text}</Link>
          </li>
        ))}
      </ul>
      <h1>{frontmatter.title}</h1>
      <MDXRemote source={content} />
    </main>
  )
}

export default Chapter
