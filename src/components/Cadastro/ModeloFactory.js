export const ModeloFactory = (
    {
        name='', 
        birth='', 
        email='',
        phoneNumber='',
        addressNumber='',
        address='',
        neighborhood='',
        zipCode='',
        genre='',
        bust='',
        waist='',
        hip='',
        height='',
        job='',
        schooling='',
        race='',
        people='',
        income='',
        children='',
        housing='',
        LGBTQI='',
        comments=''
    }
    ) => { 
        return {
            nome: name,
            data_nascimento: birth,
            email: email,
            telefone: phoneNumber,
            endereco_logradouro: address,
            endereco_numero: addressNumber,
            endereco_complemento: '',
            endereco_bairro: neighborhood,
            endereco_cidade: '',
            endereco_estado: '',
            endereco_cep: zipCode,
            responsavel_nome: 'TODO',
            responsavel_nascimento: 'TODO',
            responsavel_email: 'TODO',
            responsavel_telefone: 'TODO',
            genero: genre,
            lgbtqia: LGBTQI,
            escolaridade: schooling,
            ocupacao: job,
            moradia: housing,
            moradores: people,
            filhos: children,
            etnia: race,
            renda: income,
            medida_altura: height,
            medida_busto: bust,
            medida_cintura: waist,
            medida_quadril: hip,
            observacoes: comments
        }
     };