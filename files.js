const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (error, data) => {
    if(error)
        console.log(error)
    console.log(data.toString())
});

// writing files
fs.writeFile('./docs/blog2.txt', 'I am Arun', () => {
    console.log('file was written')
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (error) => {
        if(error)
            console.log(error)
        console.log('folder was created');
    })
}else {
    fs.rmdir('./assets', (error) => {
        if(error)
            console.log(error)
        console.log('Folder deleted')
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (error) => {
        if(error)
            console.log(error)
        console.log('file deleted')
    })
}