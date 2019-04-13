export const ModeloFactory = (
    {
        name='', 
        // TODO - no modelo ta 'nascimento', verificar qual o correto
        age='', 
        email='',
        number='',
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
            data_nascimento: '',
            email: email,
            telefone: '',
            endereco: address,
            responsavel_nome: '',
            responsavel_nascimento: '',
            responsavel_email: '',
            responsavel_telefone: '',
            genero: genre,
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