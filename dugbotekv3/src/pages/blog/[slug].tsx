import { getBlogPostBySlug } from "@/lib/airtable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const blogPost = await getBlogPostBySlug(slug);
        setPost(blogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
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
    <article className="w-full min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Back button */}
          <Link to="/blog" className="text-primary hover:underline inline-block mb-8">
            ← Back to Blog
          </Link>
          
          {/* Header */}
          <div className="space-y-6">
            <Badge>{post.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.author.image} />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative aspect-video">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
