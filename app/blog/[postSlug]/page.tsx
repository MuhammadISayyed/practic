import { loadBlogPost } from '@/app/helpers/loadBlogPost'
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogPostProps = {
  postSlug: string
}

async function BlogPost({ params }: { params: BlogPostProps }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)
  return <MDXRemote source={content} />
}

export default BlogPost
