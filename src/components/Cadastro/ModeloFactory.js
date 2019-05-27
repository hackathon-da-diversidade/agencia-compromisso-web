export const ModeloFactory = (
    {
        name='', 
        birth='', 
        guardianName='',
        guardianBirth='',
        guardianEmail='',
        guardianPhoneNumber='',
        email='',
        phoneNumber='',
        addressNumber='',
        addressComplement='',
        address='',
        neighborhood='',
        city='',
        country='',
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
            endereco_complemento: addressComplement,
            endereco_bairro: neighborhood,
            endereco_cidade: city,
            endereco_estado: country,
            endereco_cep: zipCode,
            responsavel_nome: guardianName,
            responsavel_nascimento: guardianBirth,
            responsavel_email: guardianEmail,
            responsavel_telefone: guardianPhoneNumber,
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