let tabelaDeAlunos = [
    {Curso: "Back-End", nome: "Caio", Nota: 6},
    {Curso: "Back-End", nome: "Maria", Nota: 8},
    {Curso: "Front-End", nome: "Joao", Nota: 5},
    {Curso: "Front-End", nome: "Bruno", Nota: 8},
    {Curso: "Front-End", nome: "Pedro", Nota: 10},
    {Curso: "Full-Stack", nome: "Laura", Nota: 7},
    {Curso: "Full-Stack", nome: "Matheus", Nota: 5},
];

// Filtro Para os alunos de Front-End com nota maior que 6
function alunosFront(tabelaDeAlunos) {
    return tabelaDeAlunos.Curso === "Front-End" && tabelaDeAlunos.Nota >= 6;
}
const filtroFront = tabelaDeAlunos.filter(alunosFront);



//Filtro Para os alunos de Back-End com nota maior que 6
function alunosBack(tabelaDeAlunos) {
    return tabelaDeAlunos.Curso === "Back-End" && tabelaDeAlunos.Nota >= 6;
}
const filtroBack = tabelaDeAlunos.filter(alunosBack);



//Filtro Para os alunos de Full-Stack com nota maior que 6
function alunosFullStack(tabelaDeAlunos) {
    return tabelaDeAlunos.Curso === "Full-Stack" && tabelaDeAlunos.Nota >= 6;
}
const filtroFullStack = tabelaDeAlunos.filter(alunosFullStack);



console.log(filtroFront);
console.log(filtroBack);
console.log(filtroFullStack);
