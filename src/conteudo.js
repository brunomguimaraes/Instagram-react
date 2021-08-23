export default function Conteudo() {
    return (
        <div class="conteudo">
            <Timeline />
            <MobileBottom />
            <Sidebar />
        </div>
    );
}

function Timeline() {
    return (
        <div class="timeline">
            <Stories />
            <Posts />
        </div>
    );
}

function Stories() {
    const arraystories = [
        {img:'img/ig-11.jpg', name:'ig-11'},
        {img:'img/bb-8.jpg', name:'bb-8'},
        {img:'img/ahsoka-tano (2).jpg', name:'ahsoka_tano'},
        {img:'img/r2-d2.jpg', name:'r2-d2'},
        {img:'img/The-Mandalorian-Kuiil-Vest-510x600.jpg', name:'Kuiil'},
        {img:'img/c-d.jpg', name:'cara.dune'},
        {img:'img/grogu1.jpg', name:'grogu'},
        {img:'img/ue.jpg', name:'semfuturo'},   
    ]

    return (
        <ul class="stories">
            {arraystories.map((storie) => <Storie img={storie.img} name={storie.name}/>)}
            <div class="botao-scroll">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
        </ul>
    );
}

function Storie(props) {
    return (
        <li class="storie">
            <div class="imagem-storie">
                <img src={props.img}/>
            </div>
            <p>{props.name}</p>
        </li>
    );
}

function Posts() {
    const arrayPosts = [
        {profileImg:'img/princesa.jpg', profileUser:'leia', photo:'img/leiaesolo.jpg', 
        likeImg:'img/luke.jpg', likeUser:'luke', likes:'outras trocentas pessoas'},
        {profileImg:'img/yoda3.jpg', profileUser:'yoda', photo:'img/mestreee.jpg', 
        likeImg:'img/grogu1.jpg', likeUser:'grogu', likes:'outras trocentas pessoas'},
    ]
    return (
        <div class="post">
            {arrayPosts.map((post) => <Post profileImg={post.profileImg} profileUser={post.profileUser}
            photo={post.photo} likeImg={post.likeImg} likeUser={post.likeUser} likes={post.likes} />)}
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="post-topo">
                <div class="post-profile">
                    <img src={props.profileImg} class="profile-photo"/>
                    <span>{props.profileUser}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div class="post-foto">
                <img src={props.photo} />
            </div>

            <div class="post-footer">
                <div class="post-actions">
                    <div class="reactions">
                        <ion-icon name="heart-outline" ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="post-curtidas">
                    <img src={props.likeImg}/>
                    <span>Curtido por <strong>{props.likeUser}</strong> e <strong>{props.likes}</strong></span>
                </div>
            </div>
        </div>
    );
}

function MobileBottom() {
    return (
        <div class="bottom-bar-mobile">
            <div class="botoes-bottom">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div> 
    );
}

function Sidebar() {
    return (
        <div class="sidebar">
           <SideBarUser />
           <Suggestions />
           <Information />
        </div>
    );
}

function SideBarUser() {
    const objectUser = {
        userPhoto:'img/mando.jpg',
        userName:'Mando',
        userAt:'mando',
    }
    return (
        <User userPhoto = {objectUser.userPhoto} 
        userAt={objectUser.userAt} 
        userName={objectUser.userName} />
    );
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.userPhoto}/>
            <div class="texto">
                <h4>{props.userAt}</h4>
                <h5>{props.userName}</h5>
            </div>
        </div>
    );
}

function Suggestions() {
    const arraySuggestions =[
        {sugestionImg: 'img/fett.jpg', sugestionUser:'boba.fett', reason: 'Segue você'},
        {sugestionImg: 'img/luke.jpg', sugestionUser:'luke', reason: 'Segue você'},
        {sugestionImg: 'img/cobb2.jpg', sugestionUser:'cobb.vanth', reason: 'Segue você'},
        {sugestionImg: 'img/bokatan.jpg', sugestionUser:'bo-katan', reason: 'Segue você'},
        {sugestionImg: 'img/greef-karga.jpg', sugestionUser:'greef.karga', reason: 'Novo no Instagram'}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                <h1>Sugestões para você</h1>
                <div><h3>Ver tudo</h3></div>
            </div>

            {arraySuggestions.map ((suggestion) => <Suggestion sugestionImg={suggestion.sugestionImg}
            sugestionUser={suggestion.sugestionUser}
            reason={suggestion.reason} /> )}
        </div>     
    );
}

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.sugestionImg}/>
                <div class="texto">
                    <div class="nome">{props.sugestionUser}</div>
                    <div class="reacao">{props.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

function Information() {
    return (
        <div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}