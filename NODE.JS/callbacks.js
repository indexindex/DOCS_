// TODO: NESTED CALLBACKS

/*
    * Let's assume the content of the input.txt is "next-input".
    * Once the file is read, our callback will have the contents of that file,
    * that content can now be used to read another file.
    * Finally both file contents have been written together in "output.txt" file.
*/
fs.readFile('./filepath/input.txt', 'utf-8', (error, content) => {
    fs.readFile(`./filepath/${content}.txt`, 'utf-8', (error, data) => {
        console.log(data);

        fs.writeFile('./filepath/output.txt', `${content}\n${data}`, 'utf-8', error => {
            console.log('file has been written');
        });
    });
});