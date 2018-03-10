export const makePhoto = photo => (
  $.ajax({
    url: '/api/photos',
    method: 'POST',
    data: {photo }
  })
);

export const editPhoto = photo => (
  $.ajax({
    url: `api/photos/{photo.id}`,
    method: 'PATCH',
    data: { photo }
  })
);

export const deletePhoto = photoId => (
  $.ajax({
    url: `api/photos/{photoId}`,
    method: 'DELETE'
  })
);
