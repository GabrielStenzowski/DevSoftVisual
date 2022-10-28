function cadastrar(){
    let nome = document.getElementById('nome-completo')
    if(nome.value.trim().slip(' ').lenght < 2)
        {
            alert('coloque o nome completo')
        }    
}