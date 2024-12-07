import { motion } from "framer-motion";
import ProductsComponent from "@/components/Products";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-leaf/10 pt-20">
      <div className="absolute inset-0 bg-aloe-texture opacity-5 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ProductsComponent />
      </motion.div>
    </div>
  );
};

export default Products;