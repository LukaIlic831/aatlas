import supabase from "../../supabase";
import decPostComment from "./decPostComment";

const deleteCommentFromLikedComments = async (commentId: string) => {
  const { error } = await supabase
    .from("likedComment")
    .delete()
    .eq("id", commentId);
  error && alert(error.message);
};

const deleteComment = async (
  commentId: string,
  postId: string,
  fetchComments: () => Promise<void>
) => {
  const { error } = await supabase
    .from("comment")
    .update({ description: null })
    .eq("id", commentId);

  error && alert(error.message);
  deleteCommentFromLikedComments(commentId);
  decPostComment(postId);
  fetchComments();
};

export default deleteComment;