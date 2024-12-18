import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const blogPosts = [
  {
    title: "The Power of Aloe Ferox",
    description: "Discover the healing properties of this remarkable African plant.",
    image: "/lovable-uploads/7fdd95dd-71a6-418d-91a5-30054ef9fb0d.png",
    date: "March 15, 2024",
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>In the heart of South Africa's diverse landscape grows a powerful healing plant that has been treasured for generations: Aloe Ferox, also known as the Cape Aloe. Its reputation as a natural remedy for sensitive skin conditions like eczema and psoriasis has made it a cornerstone for families searching for gentle, effective, and sustainable skincare solutions.</p>
        
        <p>At Mother Nature, a family-founded South African brand, we understand the challenges of managing skin conditions in children and teens. After years of trauma and frustration treating their daughter's eczema, our founders embarked on a two-year journey to create safe, effective formulations that work for the most sensitive skin types. Central to this solution is Aloe Ferox, nature's answer to inflammation, dryness, and irritation.</p>

        <h2>What is Aloe Ferox?</h2>
        <p>Aloe Ferox, also called Cape Aloe, is a succulent plant native to South Africa, thriving in regions like the Eastern Cape and Western Cape. Unlike its popular cousin Aloe Vera, Aloe Ferox contains twice the amount of beneficial compounds, making it a more potent and versatile option for skincare.</p>

        <h2>Why Aloe Ferox is Perfect for Sensitive Skin</h2>
        <ul>
          <li>
            <strong>Deep Hydration and Skin Barrier Repair</strong>
            <p>Aloe Ferox is rich in polysaccharides and amino acids that hydrate the skin while repairing its barrier function.</p>
          </li>
          <li>
            <strong>Anti-Inflammatory Properties</strong>
            <p>The natural aloenin and aloin compounds in Aloe Ferox calm inflammation, providing relief from itching and discomfort.</p>
          </li>
          <li>
            <strong>Natural Antimicrobial Action</strong>
            <p>Aloe Ferox has natural antimicrobial properties, which reduce the risk of secondary infections.</p>
          </li>
          <li>
            <strong>Gentle on Delicate Skin</strong>
            <p>Unlike harsh steroidal treatments, Aloe Ferox is gentle enough for children and teens.</p>
          </li>
        </ul>

        <h2>Mother Nature's Balanced Skincare Solution</h2>
        <p>At Mother Nature, we believe in a holistic approach to sensitive skin care. Aloe Ferox forms the foundation of our flagship products:</p>
        
        <h3>1. Eczema Relief Oil</h3>
        <p><strong>Key Ingredients:</strong> Castor Oil, Aloe Ferox, Vitamin E, and Sarsaparilla</p>
        
        <h3>2. Kgalagadi Shower Gel</h3>
        <p><strong>Key Ingredients:</strong> Aloe Ferox, Coco Glucoside, Vitamin E, and Lemongrass</p>
        
        <h3>3. Langelihle Sunscreen</h3>
        <p><strong>Key Ingredients:</strong> Shea Butter, Aloe Vera, Sarsaparilla, Zinc, and Titanium Oxide</p>

        <h2>Real-Life Success Stories</h2>
        <blockquote>
          <p>"My daughter suffered from eczema since infancy. She'd cry herself to sleep, and we tried everything – expensive steroid creams, doctor visits, and diets. Mother Nature's Eczema Relief Oil and Shower Gel changed her life. Within weeks, her skin was calm, and she smiled again. I can't thank you enough for bringing back her confidence."</p>
        </blockquote>

        <h2>A Holistic Approach to Skin Health</h2>
        <p>Sensitive skin conditions are not just external; they often connect to overall wellness, including gut health and mental well-being. That's why Mother Nature offers:</p>
        <ul>
          <li>Consultations with Dietitians to address gut health</li>
          <li>Counseling for Children with self-esteem issues related to eczema</li>
          <li>Workshops on Holistic Wellness for families</li>
        </ul>

        <h2>Closing Thoughts</h2>
        <p>Aloe Ferox is a gift from nature, offering a gentle, effective way to heal sensitive skin without harmful chemicals. At Mother Nature, we combine this powerful plant with modern science and a holistic approach to skincare.</p>
      </div>
    `
  },
  {
    title: "Gut Health & Skin Connection",
    description: "Understanding how your diet affects your skin's health.",
    image: "/lovable-uploads/a977ddf6-e836-46ef-bcb7-8d4a94db4b43.png",
    date: "March 12, 2024"
  },
  {
    title: "Natural Skincare Science",
    description: "The research behind Mother Nature's formulations.",
    image: "/lovable-uploads/637bc6a0-1743-4bee-9c29-b186e766bf3a.png",
    date: "March 10, 2024"
  }
];

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
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedPost(post)}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="h-48 rounded-t-lg bg-light mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-dark">{post.title}</CardTitle>
                  <CardDescription className="text-dark/70">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dark/60">{post.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedPost?.title}</DialogTitle>
          </DialogHeader>
          {selectedPost?.content && (
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;