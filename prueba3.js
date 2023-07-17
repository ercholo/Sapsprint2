const util = require('util');
const exec = util.promisify(require('child_process').exec);

const trabajos= async(printer) => {
  const { stdout, stderr } = await exec(`cscript prnjobs.vbs -l -p ${printer}`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES'});
  //console.log('stdout:', stdout);
  //console.error('stderr:', stderr);
}

console.log(trabajos('local')) ;