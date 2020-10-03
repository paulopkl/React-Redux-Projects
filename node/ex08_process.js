// console.log(process.argv);
// console.log(process.env);

function temParam(param) {
    return process.argv.indexOf(param) !== -1;
}

if(temParam('--producao')) {
    console.log('Produção setado!!');
} else {
    console.log('Tranquilo!!');
}