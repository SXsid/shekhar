import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blogs = await getCollection('blog');
  
  // Sort blogs by date descending
  const sortedBlogs = blogs.sort((a, b) => {
    return new Date(b.data.dateOfPublish).getTime() - new Date(a.data.dateOfPublish).getTime();
  });

  return rss({
    title: 'Sudhanshu Shekhar — Blog',
    description: 'Technical articles and deep dives into Backend Engineering, Systems, and Infrastructure.',
    site: context.site || 'https://sidshekhar.dev',
    items: sortedBlogs.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.dateOfPublish),
      description: post.data.topic || 'Tech Article',
      link: `/blogs/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
