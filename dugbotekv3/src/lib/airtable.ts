import Airtable from 'airtable';

// Initialize Airtable with your API key
const airtable = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
});

// Connect to your base
const base = airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID!);

// Table name constant
const BLOG_TABLE_NAME = 'Blog';  // Updated to match your table name

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching blog posts from Airtable...');
    const records = await base(BLOG_TABLE_NAME).select({
      view: 'Grid view',
    }).all();

    console.log('Found', records.length, 'records');

    return records.map(record => {
      console.log('Processing record:', record.id);
      // Get the raw content from the record
      const rawContent = record.get('content');
      console.log('Raw content:', rawContent);

      let contentData = {
        title: '',
        content: '',
        excerpt: '',
        slug: '',
        category: '',
        publishedAt: '',
        author: {
          name: 'Sola Dugbo',
          image: '/src/assets/headshots/soladugbo.jpg'
        }
      };

      // Try to parse JSON if content exists
      if (rawContent) {
        try {
          contentData = JSON.parse(rawContent as string);
          console.log('Successfully parsed JSON:', contentData);
        } catch (error) {
          console.warn(`Failed to parse JSON for record ${record.id}:`, error);
          // Use the raw content as the content if JSON parsing fails
          contentData.content = rawContent as string;
          contentData.title = record.get('title') as string || 'Untitled';
          contentData.slug = record.get('slug') as string || record.id;
        }
      }

      // Get the cover image URL from attachments
      const attachments = record.get('coverImage') as any[];
      console.log('Cover image attachments:', attachments);
      const coverImageUrl = attachments && attachments.length > 0 ? attachments[0].url : '';

      const blogPost = {
        id: record.id,
        title: contentData.title || '',
        content: contentData.content || '',
        excerpt: contentData.excerpt || '',
        slug: contentData.slug || record.id,
        coverImage: coverImageUrl,
        category: contentData.category || 'Uncategorized',
        publishedAt: contentData.publishedAt || new Date().toISOString(),
        author: contentData.author || {
          name: 'Sola Dugbo',
          image: '/src/assets/headshots/soladugbo.jpg'
        }
      };

      console.log('Processed blog post:', blogPost);
      return blogPost;
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log('Fetching blog post by slug:', slug);
    
    // First get all records since we need to parse the JSON to find the slug
    const records = await base(BLOG_TABLE_NAME).select({
      view: 'Grid view'
    }).all();

    console.log('Found total records:', records.length);

    // Find the record with matching slug in the content JSON
    const record = records.find(record => {
      const rawContent = record.get('content');
      if (!rawContent) return false;
      
      try {
        const contentData = JSON.parse(rawContent as string);
        console.log('Checking record slug:', contentData.slug, 'against:', slug);
        return contentData.slug === slug;
      } catch (error) {
        console.warn('Failed to parse JSON for record:', record.id);
        return false;
      }
    });

    if (!record) {
      console.log('No record found with slug:', slug);
      return null;
    }

    console.log('Found matching record:', record.id);
    const rawContent = record.get('content');
    console.log('Raw content:', rawContent);

    let contentData = {
      title: '',
      content: '',
      excerpt: '',
      slug: '',
      category: '',
      publishedAt: '',
      author: {
        name: 'Sola Dugbo',
        image: '/src/assets/headshots/soladugbo.jpg'
      }
    };

    // Try to parse JSON if content exists
    if (rawContent) {
      try {
        contentData = JSON.parse(rawContent as string);
        console.log('Successfully parsed JSON:', contentData);
      } catch (error) {
        console.warn(`Failed to parse JSON for record ${record.id}:`, error);
        // Use the raw content as the content if JSON parsing fails
        contentData.content = rawContent as string;
        contentData.title = record.get('title') as string || 'Untitled';
        contentData.slug = record.get('slug') as string || record.id;
      }
    }

    // Get the cover image URL from attachments
    const attachments = record.get('coverImage') as any[];
    console.log('Cover image attachments:', attachments);
    const coverImageUrl = attachments && attachments.length > 0 ? attachments[0].url : '';

    const blogPost = {
      id: record.id,
      title: contentData.title || '',
      content: contentData.content || '',
      excerpt: contentData.excerpt || '',
      slug: contentData.slug || record.id,
      coverImage: coverImageUrl,
      category: contentData.category || 'Uncategorized',
      publishedAt: contentData.publishedAt || new Date().toISOString(),
      author: contentData.author || {
        name: 'Sola Dugbo',
        image: '/src/assets/headshots/soladugbo.jpg'
      }
    };

    console.log('Returning blog post:', blogPost);
    return blogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
