// TODOS
// 1. get the post
// 2. Convert mdx to text
// 3. Return mdx remote component
import { loadBlogPost } from '@/app/helpers/loadBlogPost'
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogPostProps = {
  postSlug: string
}

async function BlogPost({ params }: { params: BlogPostProps }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)
  console.log('hi')
  return <MDXRemote source={content} />
}

export default BlogPost
