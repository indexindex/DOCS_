// a way to delete files;
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log('error');
    }
    console.log('Deleted!');
})