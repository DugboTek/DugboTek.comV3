import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug, type BlogPost } from "@/lib/airtable";
import solaHeadshot from '../assets/headshots/soladugbo.jpg';
import { SocialShare } from "@/components/ui/social-share";
import '@/styles/glass-card.css';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-10">
        <Link to="/blog" className="glass-card px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <span>←</span>
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Header */}
      <header className="w-full max-w-screen-md mx-auto pt-20 px-4">
        <div className="glass-card p-8 space-y-6">
          <Badge variant="outline" className="text-gray-600 bg-gray-100">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-gray-900">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.image} />
                <AvatarImage src={solaHeadshot} alt="Sola Dugbo" />
              </Avatar>
              <div>
                <div className="font-medium text-gray-900">{post.author.name}</div>
                <div className="text-sm text-gray-500 space-x-2">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                  <span>·</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <SocialShare 
              url={window.location.href} 
              title={post.title} 
            />
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full max-w-screen-lg mx-auto my-8">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="w-full max-w-screen-md mx-auto px-4 py-12">
        <div className="glass-card p-8">
          <div className="prose prose-lg prose-gray mx-auto font-serif">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 font-serif">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 font-serif">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold mt-6 mb-3 font-serif">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="my-4 text-gray-800 leading-relaxed">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-700">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 my-4 space-y-2 text-gray-800">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-800">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Fixed social share sidebar */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        <SocialShare 
          url={window.location.href} 
          title={post.title} 
        />
      </div>
    </article>
  );
}
