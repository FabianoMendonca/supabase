const { createClient } = supabase;

const banco = createClient(
    config.url,
    config.publishableKey
)



async function buscarPersonagens (){
    let _, data = await banco
    .from('personagens')
    .select("*")
    
    // console.log(data)
    return  await data
}

async function getItens() {
    let _, data = await banco
    .from('itens')
    .select('*')
    
    // console.log(data)
    return data
}
// LOGIN
async function entrar() {
    const email = config.email

    const senha = config.senha

    const { data, error } =
        await banco.auth.signInWithPassword({
            email: email,
            password: senha
        });

    if (error) {
        console.log( error.message);
        return;
    }
    // console.log(data.user.email);
}

async function main() {
    await entrar();
    let personagens = await buscarPersonagens();
    console.log(personagens);

}


main();
