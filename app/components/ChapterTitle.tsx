import Link from 'next/link'

type titleProps = {
  title: string
  chapterSlug: string
  guideSlug: string
}

function ChapterTitle(props: titleProps) {
  return (
    <Link href={`${props.guideSlug}/${props.chapterSlug}`}>
      <h2>{props.title}</h2>
    </Link>
  )
}

export default ChapterTitle
