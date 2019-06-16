import React, {Component} from 'react';
import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component{
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info"> 
                            <span>Mateus Braga</span>
                            <span className="place">Brasília</span>
                        </div>

                        <img src={more} alt="Mais" />
            
                    </header>
                    <img src="http://localhost:3333/files/papel-de-parede-animado-para.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Mais" />
                            <img src={comment} alt="Mais" />
                            <img src={send} alt="Mais" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info"> 
                            <span>Mateus Braga</span>
                            <span className="place">Brasília</span>
                        </div>

                        <img src={more} alt="Mais" />
            
                    </header>
                    <img src="http://localhost:3333/files/papel-de-parede-animado-para.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Mais" />
                            <img src={comment} alt="Mais" />
                            <img src={send} alt="Mais" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa 
                            <span> #react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;