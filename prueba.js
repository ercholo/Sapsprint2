const { exec } = require('child_process');
const path = require('node:path'); 
exec('cscript prnjobs.vbs -l', {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
    console.log(stdout);
    //console.log(error);
    //console.log(stderr);
});