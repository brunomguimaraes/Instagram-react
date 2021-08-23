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
    return (
        <ul class="stories">

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/ig-11.jpg"/>
                </div>
                <p>ig-11</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/bb-8.jpg"/>
                </div>
                <p>bb-8</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/ahsoka-tano (2).jpg"/>
                </div>
                <p>ahsoka_tano</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/r2-d2.jpg"/>
                </div>
                <p>r2-d2</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/The-Mandalorian-Kuiil-Vest-510x600.jpg"/>
                </div>
                <p>Kuiil</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/c-d.jpg"/>
                </div>
                <p>cara.dune</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/grogu1.jpg"/>
                </div>
                <p>grogu</p>
            </li>

            <li class="storie">
                <div class="imagem-storie">
                    <img src="img/ue.jpg"/>
                </div>
                <p>semfuturo</p>
            </li>

            <div class="botao-scroll">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
        </ul>
    );
}

function Posts() {
    return (
        <div>
            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/princesa.jpg" class="profile-photo"/>
                        <span>leia</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <img src="img/leiaesolo.jpg"/>
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
                         <img src="img/luke.jpg"/>
                        <span>Curtido por <strong>luke</strong> e <strong>outras trocentas pessoas</strong></span>
                    </div>

                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>luke</strong> ❤️ </span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>

                        <div class="comment">
                            <span><strong>solo</strong> ❤️❤️❤️ </span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..."/>
                        <button class="publish-btn">Publicar</button>
                    </div>

                </div>
            </div> 

            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/yoda3.jpg" class="profile-photo"/>
                        <span>yoda</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <img src="img/mestreee.jpg"/>
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
                        <img src="img/grogu1.jpg"/>
                        <span>Curtido por <strong>grogu</strong> e <strong>outras trocentas pessoas</strong></span>
                    </div>

                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>grogu </strong>●ω●</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>

                        <div class="comment">
                            <span><strong>luke </strong>🙇</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..."/>
                        <button class="publish-btn">Publicar</button>
                    </div>

                </div>
            </div>

            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/ue.jpg" class="profile-photo"/>
                        <span>semfuturo</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div class="post-foto">
                    <video autoplay="" muted="">
                        <source src="img/video.mp4" type="video/mp4"/>
                    </video>
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
                        <img src="img/desocupado.jpg"/>
                        <span>Curtido por <strong>desocupado</strong> e <strong>outras trocentas pessoas</strong></span>
                    </div>

                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>nadapafazer</strong>🐻</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>

                        <div class="comment">
                            <span><strong>ue</strong>🐻🦆</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..."/>
                        <button class="publish-btn">Publicar</button>
                    </div>

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
            <div class="usuario">
                <img src="img/mando.jpg"/>
                <div class="texto">
                    <h4>mando</h4>
                    <h5>Mando</h5>
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    <h1>Sugestões para você</h1>
                    <div><h3>Ver tudo</h3></div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/fett.jpg"/>
                        <div class="texto">
                            <div class="nome">boba.fett</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/luke.jpg"/>
                        <div class="texto">
                            <div class="nome">luke</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/cobb2.jpg"/>
                        <div class="texto">
                            <div class="nome">cobb.vanth</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/bokatan.jpg"/>
                        <div class="texto">
                            <div class="nome">bo-katan</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/greef-karga.jpg"/>
                        <div class="texto">
                            <div class="nome">greef.karga</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>

            </div>
        </div>
    );
}