const notes = []

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

/* create new ul for note title in side nav */
const noteContainer = document.querySelector('.side-nav nav')
const ulreadNote = document.createElement('ul')
ulreadNote.id = 'note-title'
noteContainer.appendChild(ulreadNote)

/* save function and add note title to side nav */

function saveNote() {
  const writtenNote = document.getElementById("note-text").value;
  const line = writtenNote.split('\n');
  const newNote = {}
  newNote['title']= line[0]
  line.shift()
  let stringLine = line.join('<br>');
  newNote['noteBody'] = stringLine
  newNote['id'] = notes.length + 1
  notes.push(newNote)
}

function addNoteTitle() {
  const title = Object.values(notes[notes.length -1]['title']);
  const ulTargetNav = document.getElementById('note-title')
  const noteTitle = document.createElement('li')
  noteTitle.id = `${notes[notes.length -1]['id']}`
  noteTitle.innerHTML = `${title.join('')}`
  ulTargetNav.appendChild(noteTitle)
}

saveButton.addEventListener('click', () => {
  saveNote();
  addNoteTitle();
  cancelNote()
})

/* create close button to close read note area*/

const closeButton = document.createElement('button')
closeButton.innerHTML = 'close note'
closeButton.id = 'close-button';

/* display function and add close button when displaying note */
const readNoteArea = document.querySelector(".read-note-area")
ulreadNote.addEventListener('click', (evt) => {
  const targetNote = evt.target.id;
  for (const note of notes) {
    if (note['id'] == targetNote) {
      const titleNote = `<h1>${note['title']}</h1>`
      const displayNote = `<p>${note['noteBody']}</p>`;
      readNoteArea.insertAdjacentHTML('afterbegin', displayNote)
      readNoteArea.insertAdjacentHTML('afterbegin', titleNote)
      createdIcons.remove()
    }
    if (writeNoteArea.firstElementChild != null) {
      cancelNote()
      createdIcons.remove()
    }
    if (readNoteArea.firstElementChild != null && readNoteArea.contains(closeButton) == false) {
      readNoteArea.appendChild(closeButton)
    }
  }
});

/* click to close note in note read area */

closeButton.addEventListener('click', () => {
  while (readNoteArea.firstChild) {
    readNoteArea.removeChild(readNoteArea.firstChild)
  }
  createNoteArea.appendChild(createdIcons)
})

