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
  const title = Object.values(notes[notes.length -1]['title']);
  const ulTargetNav = document.getElementById('note-title')
  const noteTitle = document.createElement('li')
  noteTitle.id = `${notes[notes.length -1]['id']}`
  noteTitle.innerHTML = `${title.join('')}`
  ulTargetNav.appendChild(noteTitle)
  cancelNote()
}


saveButton.addEventListener('click', saveNote)

/* create new ul for note title in side nav */
const noteContainer = document.querySelector('.side-nav nav')
const ulreadNote = document.createElement('ul')
ulreadNote.id = 'note-title'
noteContainer.appendChild(ulreadNote)

/* code dividing
function saveNote() {
  const writtenNote = document.getElementById("note-text").value; #getting text from textarea
  const line = writtenNote.split('\n');
  const newNote = {}  #create object to put note in: note includes: note title, note body and id
  newNote['title']= line[0] 
  line.shift()
  let stringLine = line.join('\r\n');
  newNote['noteBody'] = stringLine
  newNote['id'] = notes.length + 1
  console.log(stringLine)
  notes.push(newNote) #adding new note to const notes
  console.log(notes)
  const ulTargetNav = document.getElementById('note-title')  #target note-title (ul for note title in side nav)
  const title = Object.values(notes[notes.length -1]['title']); #get title from notes array
  ulTargetNav.insertAdjacentHTML('afterbegin', `<li> ${title.join('')} </li>`); #adding title into li inside ul using insert..html
  cancelNote() #removing textarea box, buttons, return to original state
}
*/
ulreadNote.addEventListener('click', (evt) => {
  const targetNote = evt.target.id;
  for (const note of notes) {
    if (note['id'] == targetNote) {
      const displayNote = `<div>${note['noteBody']}</div>`;
      readNoteArea.insertAdjacentHTML('afterbegin', displayNote)
    }
  }
});
/* display function */
const readNoteArea = document.querySelector(".read-note-area")

/*

/* draft code for display function
click into the li
after clicking
target the id from the li
check with notes to find which note has same note id from li and target note body
make an object to put note body in (maybe a div)
using insertadjacenthtml to put it in read note area*/
/* sample code for copy and paste
const originalContainer = document.querySelector('.original-container');

originalContainer.addEventListener('click', (evt) => {
    const copiedTextDiv = `<div>${evt.target.outerHTML}</div> `;
    const copyContainer = document.querySelector('.copy-container');
    copyContainer.insertAdjacentHTML('afterbegin',copiedTextDiv);
});


const clearButton = document.querySelector('button')

function clearCopiedDiv() {
    const allCopies = document.querySelectorAll('.copy-container div')
    for (const copy of allCopies) {
        copy.remove()
    }
}
clearButton.addEventListener('click', clearCopiedDiv)
*/