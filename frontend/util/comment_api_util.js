export const makeComment = comment =>
  $.ajax({
    url: `api/photos/${comment.photo_id}/comments`,
    method: 'POST',
    data: { comment }
  });

export const editComment = comment =>
  $.ajax({
    url: `api/comments/${comment.id}`,
    method: 'PATCH',
    data: { comment }
  });

export const deleteComment = commentId =>
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'DELETE'
  });
