const logoImg = 'img/logo.png'

export default function Top() {
    return (
        <div class="topo">
            <Container />
            <MobileTop />
        </div>
    );
}

function Container() {
    return (
        <div class="topo-container">
            <div class="logo">
                <ion-icon name="logo-instagram" class="icon"></ion-icon>
                <a href="https//instagram.com"><img src={logoImg} /></a>
            </div>
 
            <input type="text" placeholder="Pesquisar" />

            <div class="botoes-topo">
                <a href="https//instagram.com"><ion-icon name="paper-plane-outline"></ion-icon></a>
                <a href="https//instagram.com"><ion-icon name="compass-outline"></ion-icon></a>
                <a href="https//instagram.com"><ion-icon name="heart-outline"></ion-icon></a>
                <a href="https//instagram.com"><ion-icon name="person-outline"></ion-icon></a>
            </div>
        </div>
    );
}

function MobileTop() {
    return (
        <div class="topo-container-mobile">
            <ion-icon name="logo-instagram"></ion-icon> 
            <img src={logoImg} class="logo" /> 
            <ion-icon name="paper-plane-outline"></ion-icon> 
        </div> 
    );
}