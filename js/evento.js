var botao = document.querySelector("#iniciar-evento");
botao.addEventListener("click",function(event){
    event.preventDefault();
    
    remove();
    
    var form = document.querySelector("#form-x"); // selecionando form do Html
    var x = form.campo.value;
    
    var erro=validaNumber(x); // tratativa de erro
    if (erro.length>0)
        {
            var mensagem = document.querySelector("#erro");
            mensagem.textContent = erro;
            return;
        }
    else{
            var mensagem = document.querySelector("#erro");
            mensagem.textContent = erro;
}
    
    var resultado = document.createElement("div"); // criando div no html
    var lista = document.createElement("ul") // criando ul no html
    resultado.appendChild(lista); // faz ul ser filho da div
    
    resultado.classList.add("div-config"); // é adicionando a classe "div-config" na div
    
    var principal = document.querySelector(".principal"); 
    principal.appendChild(resultado); // adicionando div na main
    
     for (var i=0;i<=x;i++) // lógica de impressão dos multiplos
        {
           if (i%3==0 && i%5==0)
           {
                if(x!=i){
                var xli= document.createElement("li");
                xli.textContent = "Jovens Gênios, ";
                lista.appendChild(xli);
                }
                else{
                    var xli= document.createElement("li");
                    xli.textContent = "Jovens Gênios";
                    lista.appendChild(xli);
                }
           }
           else
           {
               if (i%3==0){
                if(x!=i){
                var xli= document.createElement("li");
                xli.textContent = "Jovens, ";
                lista.appendChild(xli);
                }
                else{
                    var xli= document.createElement("li");
                    xli.textContent = "Jovens";
                    lista.appendChild(xli);
                }
                   
               }
               else if(i%5==0){
                   if(x!=i){
                    var xli= document.createElement("li");
                    xli.textContent = "Gênios, ";
                    lista.appendChild(xli);
                }
                else{
                    var xli= document.createElement("li");
                    xli.textContent = "Gênios";
                    lista.appendChild(xli);
                }
               }
               else{
                if(x!=i){
                var xli= document.createElement("li");
                xli.textContent = i+", ";
                lista.appendChild(xli);
                }
                else{
                    var xli= document.createElement("li");
                    xli.textContent =i;
                    lista.appendChild(xli);
                }
               }
           }
        }
    return;
})

