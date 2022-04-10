const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

/* create save and delete button */
const saveButton = document.createElement('button')
saveButton.innerHTML = 'save'
saveButton.id = 'save-button';


const cancelButton = document.createElement('button')
cancelButton.innerHTML = 'cancel'
cancelButton.id = 'cancel-button';


/* create textarea with save and delete button*/
const createNoteArea = document.querySelector('.create-note-area')
const createdIcons = document.querySelector('.create-note-area .icons')
const writeNoteArea = document.querySelector('.write-note-area')

function addNotearea() {
  const noteArea = `<textarea id="note-text" rows="20" cols="35"></textarea>`
  writeNoteArea.insertAdjacentHTML('beforeend', noteArea)
  writeNoteArea.appendChild(saveButton)
  writeNoteArea.appendChild(cancelButton)
  createdIcons.remove()
}

createdIcons.addEventListener('click', addNotearea)



/* delete function */
function cancelNote() {
  saveButton.remove()
  cancelButton.remove()
  let node = document.getElementById("note-text");
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
  createNoteArea.appendChild(createdIcons)
}

cancelButton.addEventListener('click', cancelNote)

/* save function */

const readNoteArea = document.querySelector(".read-note-area")

function saveNote() {
  const writtenNote = document.getElementById("note-text").value;
  const line = writtenNote.split('\n');
  const newNote = {}
  newNote['title']= line[0]
  line.shift()
  let stringLine = line.join('\r\n');
  newNote['noteBody'] = stringLine
  newNote['id'] = notes.length + 1
  console.log(stringLine)
  notes.push(newNote)
  console.log(notes)
  saveButton.remove()
  cancelButton.remove()
  let node = document.getElementById("note-text");
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
  createNoteArea.appendChild(createdIcons)
}
/* sample code for remove textarea after click save
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
*/
saveButton.addEventListener('click', saveNote)
