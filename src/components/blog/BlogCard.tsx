import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  content?: string;
  onClick: () => void;
}

const BlogCard = ({ title, description, image, date, onClick }: BlogPost) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    onClick={onClick}
  >
    <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <div className="h-48 rounded-t-lg bg-light mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <CardTitle className="text-dark">{title}</CardTitle>
        <CardDescription className="text-dark/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-dark/60">{date}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default BlogCard;