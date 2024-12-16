import { BlogPosts } from '../../../components/posts/posts';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="container">
      <BlogPosts />
    </section>
  )
}

