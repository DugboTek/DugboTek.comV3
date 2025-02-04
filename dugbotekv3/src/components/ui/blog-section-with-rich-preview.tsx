import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/lib/airtable";
import type { BlogPost } from "@/lib/airtable";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import solaHeadshot from '../../assets/headshots/soladugbo.jpg';
import '@/styles/glass-card.css';

export default function BlogSectionWithRichPreview() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Loading blog posts...</div>
          </div>
        </div>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">No blog posts found.</div>
          </div>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Blog Posts</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our latest insights and thoughts on technology, automation, and more.
            </p>
          </div>
          
          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`}>
              <div className="glass-card relative w-full overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-[400px]">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 space-y-4 p-6">
                    <Badge>{featuredPost.category}</Badge>
                    <h3 className="text-3xl font-bold">{featuredPost.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={featuredPost.author.image} />
                        <AvatarImage src={solaHeadshot} alt="Sola Dugbo" />
                      </Avatar>
                      <div>
                        <div className="font-medium">{featuredPost.author.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <article className="group h-full">
                    <div className="glass-card flex flex-col h-full overflow-hidden">
                      <div className="relative w-full h-[300px]">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-contain bg-gray-100"
                        />
                      </div>
                      <div className="flex-1 space-y-2 p-6">
                        <Badge>{post.category}</Badge>
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center space-x-4 p-6 border-t">
                        <Avatar>
                          <AvatarImage src={post.author.image} />
                          <AvatarImage src={solaHeadshot} alt="Sola Dugbo" />
                        </Avatar>
                        <div>
                          <div className="font-medium">{post.author.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
