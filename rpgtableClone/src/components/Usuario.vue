<template>
    <body>
        <section class="containerpai">
            <div class="containerPerfil">
                <h1>Nome de Usuário</h1>
                <div class="imagem"> 
                    <div class="imagemPerfil"></div>
                </div>
                <button>carregar nova imagem</button>
                <p>Troque sua foto de perfil e deixe o seu perfil personalizado pra mostrar a sua personalidade!</p>
                <p><b>A imagem deve conter no máximo 2b</b></p>
                <p class="dataInicio">criado em 19 de maio de 2024</p>
            </div>

            <div class="userInformacoes">
                <h1> Informações de Usuário</h1>
                <form>
                    <div class="contInfo">
                        <label for="nome">Nome completo</label>
                        <input type="text" id="nome" name="nome" class="infoInputs">
                    </div>
                </form>
                <form>
                    <div class="contInfo">
                        <label for="email">Endereço de email</label>
                        <input type="email" id="email" name="email" class="infoInputs">
                    </div>
                    <div  class="contInfo">
                        <label for="confirmar-email">Confirmar endereço de email</label>
                        <input type="email" id="confirmar-email" name="confirmar-email" class="infoInputs">
                    </div>
                </form>
                <form>   
                    <div class="contInfo">
                        <label for="nova-senha">Nova senha</label>
                        <input type="password" id="nova-senha" name="nova-senha" class="infoInputs">
                    </div>
                    <div  class="contInfo">
                        <label for="confirmar-senha">Confirmar senha</label>
                        <input type="password" id="confirmar-senha" name="confirmar-senha" class="infoInputs">
                    </div>
                </form>
                <button type="submit">Confirmar alterações</button>
            </div>
        </section>
    </body>
</template>

<script>


export default {
    name:"Usuario"
}
</script>

<style style scoped>

:root{
--corVermelho:#880000;
--corPreto: #242424;
--corCinza: #858585;
}

.imagem{
    border: solid 2px #880000;
    border-radius: 50%;
    padding: 5px;
}

.imagemPerfil{
    background: url(/public/imgs/logo.png);
    height: 150px;
    width: 150px;
    background-size: contain;
}

.containerPai{
display: flex;
background: url(/public/imgs/texturaPapel.png);
justify-content: center;
}
section.containerpai {
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin-top: 30px;
}

.containerPerfil{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    background:#00000034;
    border-radius: 20px;
}


.containerPerfil button {
    display: block;
    margin: 10px auto;
    padding: 8px;
    background-color:#880000;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: -1px 10px 37px -15px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 10px 37px -15px rgba(0,0,0,0.75);
    box-shadow: -1px 10px 37px -15px rgba(0,0,0,0.75);
}

.containerPerfil p {
    margin: 10px 0;
    font-size: 0.9em;
    font-family: "Poppins" ;
}

.userInformacoes button {
    display: block;
    margin: 10px auto;
    padding: 8px;
    background-color:#880000;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

}

.userInformacoes{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

}

.userInformacoes form {
    display: flex;
    justify-content: space-between;

}

.userInformacoes h1{
    color: #880000;
}
.infoInputs{
    border-radius: 6px;
    background-color: rgba(160, 126, 126, 0.1);
    border:solid 1px #880000;
    font-family: 'Poppins';
    height: 2.5rem;

}
.contInfo {
    display: flex;
    flex-direction: column;

}

#nome{
    width: 400px;
}
</style>


nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
}

nav ul li {
    display: inline;
}

nav ul li a {
    text-decoration: none;
    color: #a94442;
    font-size: 1.2em;
}


main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background-color: #fff;
}

.user-info {
    display: flex;
    gap: 20px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-picture {
    text-align: center;
}




.created-date {
    color: #999;
    font-size: 0.8em;
}

.user-details form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.user-details label {
    font-size: 1em;
    color: #a94442;
}

.user-details input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

.user-details button {
    padding: 10px;
    background-color: #a94442;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}