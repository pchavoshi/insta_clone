export const getPhotos = (following_ids, page) =>
  $.ajax({
    url: 'api/photos',
    method: 'GET',
    data: { following_ids, page}
  });

export const makePhoto = formData =>
  $.ajax({
    url: '/api/photos',
    method: 'POST',
    processData: false,
    contentType: false,
    data: formData
  });

export const editPhoto = photo =>
  $.ajax({
    url: `api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  });

export const deletePhoto = photoId =>
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'DELETE'
  });

export const getPhoto = photoId =>
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'GET'
  });
