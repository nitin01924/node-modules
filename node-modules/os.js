// const os = require('os');
import os from "os"

console.log('OS:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Uptime:', os.uptime() / 60, 'minutes');
