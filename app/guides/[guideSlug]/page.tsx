import getChaptersTitles from '@/app/helpers/getChaptersTitles'
import ChapterTitle from '@/app/components/ChapterTitle'

export default function GuidePage({ params }: { params: { guideSlug: string } }) {
  const guide = params.guideSlug
  const ChaptersTitles = getChaptersTitles(guide)
  const titles = ChaptersTitles.map((title) => (
    <ChapterTitle
      key={title.slug}
      title={title.title}
      guideSlug={params.guideSlug}
      slug={title.slug}
    />
  ))

  return <div>{titles}</div>
}
