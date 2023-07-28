let idade = prompt('Digite sua idade: ')
let temTitulo = prompt('Tem titulo de eleitor? (sim / não): ')
let idadeMinima = 16

if (idade >= idadeMinima && temTitulo == 'sim') {
    console.log('Você pode votar!')
}
else if (idade >= idadeMinima && temTitulo == 'não'){
    console.log ('Você precisa de um titulo para votar :(')
}
else {
    console.log ('Você não pode votar')
}
//else if (idade < idadeMinima && temTitulo == sim || temTitulo == 'não'){
//    console.log ('Você não pode votar')
//}
