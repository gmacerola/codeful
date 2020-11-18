export const getNotesForFolder = (notes = [], folderId) =>
  !folderId
    ? notes
    : notes.filter((note) => note.folder_id === Number(folderId));

export const findNote = (notes = [], noteId) =>
  notes.find((note) => note.id === Number(noteId));
