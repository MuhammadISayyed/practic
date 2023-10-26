type titleProps = {
  title: string
}

function ChapterTitle(props: titleProps) {
  return <h2>{props.title}</h2>
}

export default ChapterTitle
