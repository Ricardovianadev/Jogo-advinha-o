alert ('Boas vindas ao jogo do numero secreto');
let numeroMaximo=5000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1); 
let chute ;
console.log (numeroSecreto);
let tentativas = 1;
// enquanto o chute nao for igual ao numero secreto 
while (chute != numeroSecreto) {
   chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);
   // Se chute for igual ao numero secreto
  if (chute == numeroSecreto) {
   break;
   } else 

   if (chute > numeroSecreto) {
        alert (`O numero secreto é menor que  ${chute}`);
    } else { 
    alert (`O numero secreto é maior que  ${chute}`);
    } 
   // tentativas = tentativas +1;
    tentativas ++;
}
let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert (`Isso aí! Você descobriu o ${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);
if (tentativas > 1) {
    alert (`Isso aí! Você descobriu o ${numeroSecreto}) com ${tentativas} tentativas`);
} else {
    alert (`Isso aí! Você descobriu o ${numeroSecreto}) com ${tentativas} tentativa`);
}

