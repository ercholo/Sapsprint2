const { exec } = require('child_process');
const path = require('node:path'); 
exec('cscript prnjobs.vbs -l', {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
    
    const result = stdout;
    //console.log(result);
    const regex = /\d+$/g;
    const trabajosImpresion = result.replace(/\r\n/g, '').match(regex);
    console.log(trabajosImpresion);
    //console.log(error);
    //console.log(stderr);
});