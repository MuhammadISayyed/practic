import getBlogPostsMetaData from '../helpers/getBlogPostsMetaData'
import PostPreview from '../components/PostPreview'
export default function Blog() {
  const blogPostsMetaData = getBlogPostsMetaData()
  const postsPreview = blogPostsMetaData.map((post) => <PostPreview key={post.slug} {...post} />)
  return <div>{postsPreview}</div>
}
