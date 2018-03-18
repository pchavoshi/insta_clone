export const getComments = photoId =>
  $.ajax({
    url: `api/photos/${photoId}/comments`,
    method: 'GET'
  });
