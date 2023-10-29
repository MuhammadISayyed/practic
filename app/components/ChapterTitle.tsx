import Link from 'next/link'

type titleProps = {
  title: string
  slug: string
}

function ChapterTitle(props: titleProps) {
  return (
    <Link href={`guides/${props.slug}`}>
      <h2>{props.title}</h2>
    </Link>
  )
}

export default ChapterTitle
