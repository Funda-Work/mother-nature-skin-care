import { useState } from "react";
import BlogCard from "./blog/BlogCard";
import BlogDialog from "./blog/BlogDialog";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Latest Articles</h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            Insights and wisdom for natural skincare and holistic wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              {...post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </div>

      <BlogDialog 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </section>
  );
};

export default Blog;