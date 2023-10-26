import getGuideMetaData from '@/app/helpers/getGuideMetaData';
import GuidePreview from '../components/GuidePreview';

function GuidesPage() {
  const GuideMetaData = getGuideMetaData();
  const guidePreviews = GuideMetaData.map((guide) => <GuidePreview key={guide.slug} {...guide} />);

  return <div>{guidePreviews}</div>;
}

export default GuidesPage;
