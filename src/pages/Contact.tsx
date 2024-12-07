import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-leaf/10 pt-20">
      <div className="absolute inset-0 bg-leaf-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get in Touch</h1>
          <div className="max-w-2xl mx-auto">
            <div className="nature-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-forest font-medium mb-2">Name</label>
                  <Input id="name" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-forest font-medium mb-2">Email</label>
                  <Input id="email" type="email" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-forest font-medium mb-2">Message</label>
                  <Textarea id="message" required className="w-full min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;