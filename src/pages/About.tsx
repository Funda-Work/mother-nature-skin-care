import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-leaf/10 pt-20">
      <div className="absolute inset-0 bg-leaf-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="nature-card p-8">
              <h2 className="text-2xl font-bold mb-4">Our Heritage</h2>
              <p className="text-forest/80 mb-6">
                Founded on the principles of traditional African healing and modern science, Mother Nature Skin Care 
                brings centuries of natural wisdom to contemporary skincare solutions.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-forest/80">
                We're dedicated to providing gentle, effective skincare solutions for sensitive skin, 
                drawing from nature's wisdom while embracing scientific innovation.
              </p>
            </div>
            <div className="space-y-6">
              <div className="nature-card p-6">
                <h3 className="text-xl font-bold mb-3">Natural Ingredients</h3>
                <p className="text-forest/80">
                  We carefully source ingredients from sustainable African suppliers, 
                  ensuring the highest quality natural components for our products.
                </p>
              </div>
              <div className="nature-card p-6">
                <h3 className="text-xl font-bold mb-3">Scientific Approach</h3>
                <p className="text-forest/80">
                  Our formulations are developed and tested by leading dermatologists, 
                  combining traditional knowledge with modern research.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;