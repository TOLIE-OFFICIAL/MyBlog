import { commentRequest } from "../request";

export function fetchCommentList() {
  return commentRequest.get<BlogComment.Comment>("/blogComments");
}

export function createComment() {
  return commentRequest.post("/blogComments");
}
