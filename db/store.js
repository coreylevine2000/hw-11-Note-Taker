//NULL!

// const fs = require('fs');

// //to generate unique ids
// const uuidv1 = require('uuid/v1');
// const util = require('util');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Store {
//     getNotes() {
//         return readFileAsync('db/db.json', 'utf8').then((notes) => {
//             return JSON.parse(notes)
//             // try {
//             //     parsedNotes = [].concat(JSON.parse(notes))
//             // } catch (err) {
//             //     parsedNotes = []
//             // }

//         })
//     }

//     addNote(note) {
//         const { title, text } = note;

//         if (!title|| !text) {
//             throw new Error('Title and text are required')
//         }

//     const newNote = {title, text, id: uuidv1() };
//     //console.log(this.getNotes());

//     this.getNotes().then((notes) => {
//         //console.log(notes);
//         notes.push(newNote);

//      });
//     }
// }

// module.exports = new Store();