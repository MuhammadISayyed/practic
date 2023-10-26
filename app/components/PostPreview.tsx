import Link from 'next/link'

type postProps = {
  title: string
  slug: string
}

function PostPreview(props: postProps) {
  return <Link href={props.slug}>{props.title}</Link>
}

export default PostPreview
