import API from '@/lib/api/config/api'

//SÓ IMPORTA O AQUIVO DA CONFIG API E FAZER A CHAMADA
export default {
    login (payload) {
        return API.post('/login',{
            "cpf_cnpj":payload.cpf_cnpj,
            "password_hash":payload.password_hash
        })
    },
    cadastrarUsuario (payload) {
        return API.post('/users',{
            name:payload.name,
            password_hash:payload.password_hash,
            provider:payload.provider,
            nomeloja:payload.nomeloja,
            fotoloja:'https://ipetz.s3.sa-east-1.amazonaws.com/avatar_usuario_15_06_2020_15_48_33.png',
            cpf_cnpj:payload.cpf_cnpj,
            telefone:payload.telefone,
            endereco:payload.endereco,
            estado:payload.estado,
            cidade:payload.cidade
    })
    },

}
