export const OPEN_EDIT = 'OPEN_EDIT'; 
export const CLOSE_EDIT = 'CLOSE_EDIT'; 

export const openEdit = editId => ({
  type: OPEN_EDIT, 
  editId
}); 

export const closeEdit = () => ({
  type: CLOSE_EDIT
}); 