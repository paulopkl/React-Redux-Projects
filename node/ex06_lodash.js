const _ = require('lodash');

const alunos = [
    {
        name: "John",
        note: 7.5
    }, 
    {
        name: "Maria",
        note: 8.6
    },
    {
        name: "Pedro",
        note: 8.2
    }
];

const media = _.sumBy(alunos, 'note') / alunos.length;
console.log(media);