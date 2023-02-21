// You'll use the fs module and the router method as well. . .so you'll have 'get' request pass in the path followed by your req, res. . .From there you'll need to use the fs.readFilesync method to read the json file. . .Then you'll need to res.send that data.
const router = require("express").Router();
const fs = require('fs');
const createId = require("uniqid");


router.get('/notes', (req, res) => {
  const data = fs.readFileSync('./db/db.json');
  const jsonData = JSON.parse(data);
  res.send(jsonData);
});

router.post(`/notes`, (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    const jsonData = JSON.parse(data);
    const id = createId()
    const {title,text} = req.body;
    const newNote = {title,text,id}

    jsonData.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify(jsonData))
  res.send(newNote);
});

router.delete(`/notes/:id`, (req, res)=> {
  const noteData = JSON.parse( fs.readFileSync('./db/db.json'));
  res.json(noteData);
  const noteId = req.params.id;
  const newNotes = noteData.filter((note)=>note.id !== noteId);
  fs.writeFileSync(`./db/db.json`,JSON.stringify(newNotes));
  });


    // removeNote(req.params.id).then(() => res.json({ ok: true}));



  //parsedNotes().then((notes)=> notes.filter((note)=>notes.id !==id)).then((filteredNotes)=> this.write(filteredNotes)); 


//   const jsonData= JSON.parse(data);
//   req.params.id()
//   removeNote(id){
//     return this.read().then((notes)=>{
//       let parsedNotes;
    
// removeNote(req.params.id).then(() => res.json({ ok: true}));




module.exports = router;
