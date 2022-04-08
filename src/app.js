const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

/*
const createNoteArea = document.querySelector('.note-container-main .create-note-area')
const writeNoteArea = document.querySelector('.write-note-area')
function createNotearea() {
  const noteArea = `<textarea name="textarea" rows="5" cols="33"></textarea>`
  writeNoteArea.insertAdjacentHTML('beforebegin', noteArea)
}


createNoteArea.addEventListener('click', createNoteArea)
*/
/* working code
const createNoteArea = document.querySelector('.create-note-area')
createNoteArea.addEventListener('click', (evt) => {
  const noteArea = `<textarea rows="5" cols="30"></textarea>`
  const writeNoteArea = document.querySelector('.write-note-area')
  writeNoteArea.insertAdjacentHTML('afterbegin', noteArea)
})
*/
const createNoteArea = document.querySelector('.note-container-main .create-note-area')
const writeNoteArea = document.querySelector('.write-note-area')
function addNotearea() {
  const noteArea = `<textarea rows="20" cols="35"></textarea>`
  writeNoteArea.insertAdjacentHTML('afterbegin', noteArea)
  createNoteArea.remove()
}

createNoteArea.addEventListener('click', addNotearea)


/*

function deleteNote() {
  const deleteButton = document.querySelector('.delete')
  const noteArea = createNoteArea()
  const writtenNote = `<p>${noteArea.innerValues}</p>`
  deleteButton.addEventListener('click', noteArea.remove(writtenNote))
}

function saveNote() {
  const noteArea = createNoteArea()
  const noteContainer = createObjectforNote(noteArea)
  const saveButton = document.querySelector('.save')
  saveButton.addEventListener('click',noteContainer)
}

function createObjectforNote(noteArea) {
  const writtenNote = `
    <p>${noteArea.innerValues}
      </p>`;
  const objectNote = Object.create(writtenNote);
  return objectNote
}

*/