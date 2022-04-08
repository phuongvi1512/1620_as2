const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

/* create save and delete button */
const saveButton = document.createElement('button')
saveButton.innerHTML = 'Save';


const deleteButton = document.createElement('button')
deleteButton.innerHTML = 'Delete';

/* create textarea with save and delete button*/
const createNoteArea = document.querySelector('.note-container-main .create-note-area')
const writeNoteArea = document.querySelector('.write-note-area')
function addNotearea() {
  const noteArea = `<textarea rows="20" cols="35"></textarea>`
  writeNoteArea.insertAdjacentHTML('afterbegin', noteArea)
  writeNoteArea.appendChild(saveButton)
  writeNoteArea.appendChild(deleteButton)
  createNoteArea.remove()
}

createNoteArea.addEventListener('click', addNotearea)

/* save function */


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