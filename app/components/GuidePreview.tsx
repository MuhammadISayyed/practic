import Link from 'next/link';

type guideProps = {
  title: string;
  slug: string;
};

function GuidePreview(props: guideProps) {
  return (
    <div>
      <Link href={`guides/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}

export default GuidePreview;
