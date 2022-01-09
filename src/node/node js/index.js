const fs= require('fs')

fs.writeFileSync('notes.txt', 'this is my first node file')

fs.copyFileSync('notes.txt', 'copynotes')

fs.renameSync('notes.txt', 'newFilenotes.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
  


  console.log("Files list:",fs.readdirSync("."));


  const data = fs.readFileSync("copynotes", { encoding: "utf8", flag: "r" });
  console.log("copyFile content:", data);
  