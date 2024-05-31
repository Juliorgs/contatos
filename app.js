const agenda = {
    contatos: [{
        nome: 'Julio',
        telefone: '1199999999',
        email: 'julio@email.com',
        favorito: false
    },{
        nome: 'Maiara',
        telefone: '11888888888',
        email: 'maiara@email.com',
        favorito: false
    }],
    adicionarContato: function(nome, telefone, email){
        const telefoneExistente = this.contatos.some(contato => contato.telefone === telefone);
        const nomeExistente = this.contatos.some(contato => contato.nome === nome);
    
        if (telefoneExistente) {
            const contatoExistente = this.contatos.find(contato => contato.telefone === telefone);
            console.log(`Não foi possível adicionar ${telefone} aos contatos. O número já está cadastrado no contato: ${contatoExistente.nome}\n`);
            return;
        }
    
        if (nomeExistente) {
            console.log(`Sua lista de contatos já possui alguém com o nome '${nome}', insira outro nome para o contato\n`);
            return;
        }

        this.contatos.push({
            nome: nome,
            telefone: telefone,
            email: email,
            favorito: false
        })
        console.log(`${nome} foi adicionado com sucesso aos contatos.\n`);
    },
    listarContatos: function(){
        console.log('Lista de contatos:\n')
        for(let i = 0; i < this.contatos.length; i++){
            console.log(`Nome: ${this.contatos[i].nome}`);
            console.log(`Telefone: ${this.contatos[i].telefone}`);
            console.log(`Email: ${this.contatos[i].email}`);
            let eFavorito = this.contatos[i].favorito ? 'Sim': 'Não';
            console.log(`Favorito: ${eFavorito}\n`);
        }
    },
    marcarComoFavorito: function(nome){
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].nome === nome){
                if(this.contatos[i].favorito === false){
                    this.contatos[i].favorito = true;
                    return console.log(`O contato ${nome} foi marcado como favorito\n`);
                } else{
                    return console.log(`O contato ${nome} já está na sua lista de favoritos.\n`);
                }
            }
        }
        return console.log(`Não foi possivel encontrar o contato ${nome}\n`);
    },
    RemoverComoFavorito: function(nome){
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].nome === nome){
                if(this.contatos[i].favorito === true){
                    this.contatos[i].favorito = false;
                    return console.log(`O contato ${nome} foi retirado da lista de favoritos\n`);
                } else{
                    return console.log(`O contato ${nome} não está na sua lista de favoritos.\n`);
                }
            }
        }
        return console.log(`Não foi possivel encontrar o contato ${nome}\n`);
    },
    listaFavoritos: function(){
        const favoritos = [];
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].favorito === true){
                favoritos.push(this.contatos[i]);
            }
        }
        if(favoritos.length > 0){
            console.log('Lista de contatos favoritos:\n');
            for(let i = 0; i < favoritos.length; i++){
                console.log(`Nome: ${favoritos[i].nome}`);
                console.log(`Telefone: ${favoritos[i].telefone}`);
                console.log(`Email: ${favoritos[i].email}\n`);
            }
        } else{
            console.log('Você não possui contatos na lista de favoritos.\n')
        }
    },
    removerContato: function(nome){
        const contatosAntes = this.contatos.length;

        this.contatos= this.contatos.filter((contato) => contato.nome !== nome);

        if(this.contatos.length === contatosAntes){
            console.log(`Não foi possivel encontrar o contato ${nome}\n`);
        } else{
            console.log(`O contato ${nome} foi removido com sucesso\n`);
        }
    }
}
agenda.adicionarContato('Gabriel', '11123456789', 'gabriel@email.com');

agenda.marcarComoFavorito('Maiara');

agenda.marcarComoFavorito('Julio');

agenda.listarContatos();

agenda.listaFavoritos();

agenda.RemoverComoFavorito('Julio');

agenda.listaFavoritos();

agenda.removerContato('Julio');

agenda.listarContatos();
