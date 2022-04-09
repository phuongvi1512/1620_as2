const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

/* create save and delete button */
const saveButton = document.createElement('button')
saveButton.innerHTML = 'Save'
saveButton.id = 'save-button';


const deleteButton = document.createElement('button')
deleteButton.innerHTML = 'Delete'
deleteButton.id = 'delete-button';


/* create textarea with save and delete button*/

const createNoteArea = document.querySelector('.icons')
const writeNoteArea = document.querySelector('.write-note-area')
const noteArea = `<textarea id="note-text" rows="20" cols="35"></textarea>`
function addNotearea() {
  writeNoteArea.insertAdjacentHTML('beforeend', noteArea)
  writeNoteArea.appendChild(saveButton)
  writeNoteArea.appendChild(deleteButton)
  createNoteArea.remove()
}

createNoteArea.addEventListener('click', addNotearea)



/* delete function */
function deleteNote() {
  document.getElementById("note-text").value = '';
}

deleteButton.addEventListener('click', deleteNote)

/* save function */

const readNoteArea = document.querySelector(".read-note-area")

function save() {
  const writtenNote = document.getElementById("note-text").value;
  const line = writtenNote.split('\n');
  const newNote = {}
  newNote['title']= line[0]
  line.shift()
  let stringLine = line.join('\r\n');
  newNote['noteBody'] = stringLine
  console.log(stringLine)
  notes.push(newNote)
  console.log(notes)
}

saveButton.addEventListener('click', save)
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