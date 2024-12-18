import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BlogDialogProps {
  post: {
    title: string;
    content?: string;
  } | null;
  onClose: () => void;
}

const BlogDialog = ({ post, onClose }: BlogDialogProps) => (
  <Dialog open={!!post} onOpenChange={onClose}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{post?.title}</DialogTitle>
      </DialogHeader>
      {post?.content && (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
    </DialogContent>
  </Dialog>
);

export default BlogDialog;