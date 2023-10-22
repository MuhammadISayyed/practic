// Render guides with their meta title
// 1. Read the folder 'guides/' content
// 2. Read the folders withing the 'guides/'
// 3. Get the content within the mdx file matching the folder's name
// 4. Take the metadata and use it to preview guides here
import getGuideMetaData from '@/app/helpers/getGuideMetaData';
import GuidePreview from '../components/GuidePreview';

function GuidesPage() {
  const GuideMetaData = getGuideMetaData();
  const guidePreviews = GuideMetaData.map((guide) => <GuidePreview key={guide.slug} {...guide} />);

  return <div>{guidePreviews}</div>;
}

export default GuidesPage;
