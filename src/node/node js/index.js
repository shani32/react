const fs= require ('fs')
const { argv } = require('process')
const yargs= require ('yargs')
const notes= require ('./notes/notes.js')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNotes(argv.title, argv.body)
    }
    
})
yargs.command({
    command:'remove', 
    describe: 'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'        
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
yargs.argv;

// const dataBuffer=fs.readFileSync('1-json.json')
// const datajson= dataBuffer.toString()
// const data=JSON.parse(datajson)
// console.log(data.title)

// data.name= 'shani'
// data.age=32

// const updateData= JSON.stringify(data)
// const update= fs.writeFileSync('1-json.json', updateData)
// console.log(update)




// const dataBuffer=fs.readFileSync
// const book= {
//     title:'ego is the enemy',
//     author:'Ryan Holiday'
// }
// const bookJSon= JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSon)




// const fs= require('fs')
// const yargs= require ('yargs')

// const user={
//     id: 12,
//     name:'shani',
//     email: 'barak@gmail.com'
// }

// const userJSON= JSON.stringify(user)
// fs.writeFileSync('user-json.json', userJSON)
// const dataBuffer= fs.readFileSync('user-json.json' )
// const dataJSON= dataBuffer.toString()
// const data= JSON.parse(dataJSON)
// console.log(dataJSON)
// console.log(dataBuffer)
// console.log(data.id)

// data.name= 'david'
// data.id=13
// const dataUpdate= JSON.stringify(data)
// fs.writeFileSync('user-json.json', dataUpdate)


// yargs.command({
//     command:'add',
//     discribe: "adding 2 nums",
//     handler: function (){
//         let sum= yargs.argv._[1]+ yargs.argv._[2]
//         console.log(sum)
//     }
// })

// yargs.command({
//     command: 'sub',
//     discribe: 'substract 2 nums',
//     handler: function (){
//         let sub= yargs.argv._[1]- yargs.argv._[2]
//         console.log(sub)
//     }
// })
// yargs.command({
//     command:'pow',
//     discribe:'multi 2 nums',
//     handler: function (){
//         let pow= yargs.argv._[1] * yargs.argv._[2]
//         console.log(pow)
//     }
// })
// yargs.command ({
//     command: 'divide',
//     discribe: 'divide 2 nums',
//     handler: function(){
//         let divide= yargs.argv._[1]/ yargs.argv._[2]
//         console.log(divide)
//     }
// })
// yargs.parse()
// const add= require('./utils')
// const sum= add(4,2)
// console.log(sum)
// const name='shani'
// const person= require ('./person')
// console.log(person)
// fs.writeFileSync('memo.txt', 'welcome to my node page' )
// fs.appendFileSync('memo.txt', ' and i am excited')


// fs.writeFileSync('notes.txt', 'this is my first node file')

// fs.copyFileSync('notes.txt', 'copynotes')

// fs.renameSync('notes.txt', 'newFilenotes.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });
  


//   console.log("Files list:",fs.readdirSync("."));


//   const data = fs.readFileSync("copynotes", { encoding: "utf8", flag: "r" });
//   console.log("copyFile content:", data);
  
// const chalk= require('chalk')
// const greenMsg= chalk.green.bold('success')
// console.log(greenMsg)