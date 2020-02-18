import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css'

function App() {
  return (
    <>
    <div id="app">
      <aside>
        <strong>Cadastro</strong>
        <form>
          <div className="input">
            <label htmlFor="usuario">Usuário</label>
            <input id="usuario" name="usuario" required></input>
          </div>
          <div className="input">
            <label htmlFor="tecnologias">Tecnologias</label>
            <input id="tecnologias"  name="tecnologias" required></input>
          </div>
          <div className="input">
            <label htmlFor="Objetivo">Objetivo como programador</label>
            <input id="Objetivo"  name="Objetivo" required></input>
          </div>
        </form>
        <button type="submit" >Salvar</button>
      </aside>
      <main>
        <div className="search">
          <input placeholder="COLOQUE AQUI SUAS PALAVRAS MÁGICAS"/>
          <button>PESQUISE AQUI</button>
        </div>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
              <div className="dev-info">
                <strong>KJHGFD</strong>
                <h5 className="dev-techs">Node.js, React.js</h5>
              </div>
            </header>
            <p className="dev-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi est, earum cum rerum commodi velit repellendus nobis officia consequuntur facere sint maiores perferendis. Odio possimus dolorem quae. Voluptatum, fugiat.</p>
            <p className="dev-goals">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam quod obcaecati nobis placeat quis! Omnis laudantium blanditiis aperiam quaerat, illum vitae accusantium, rerum eum, sapiente dolore ut voluptatum!</p>
            <a href="https://github.com/caue96">CLIQUE AQUI MOTHER FUCKER!</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
              <div className="dev-info">
                <strong>KJHGFD</strong>
                <h5 className="dev-techs">Node.js, React.js</h5>
              </div>
            </header>
            <p className="dev-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi est, earum cum rerum commodi velit repellendus nobis officia consequuntur facere sint maiores perferendis. Odio possimus dolorem quae. Voluptatum, fugiat.</p>
            <p className="dev-goals">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam quod obcaecati nobis placeat quis! Omnis laudantium blanditiis aperiam quaerat, illum vitae accusantium, rerum eum, sapiente dolore ut voluptatum!</p>
            <a href="https://github.com/caue96">CLIQUE AQUI MOTHER FUCKER!</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
              <div className="dev-info">
                <strong>KJHGFD</strong>
                <h5 className="dev-techs">Node.js, React.js</h5>
              </div>
            </header>
            <p className="dev-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi est, earum cum rerum commodi velit repellendus nobis officia consequuntur facere sint maiores perferendis. Odio possimus dolorem quae. Voluptatum, fugiat.</p>
            <p className="dev-goals">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam quod obcaecati nobis placeat quis! Omnis laudantium blanditiis aperiam quaerat, illum vitae accusantium, rerum eum, sapiente dolore ut voluptatum!</p>
            <a href="https://github.com/caue96">CLIQUE AQUI MOTHER FUCKER!</a>
          </li>
        </ul>
      </main>
    </div>
    </>
  );
}

export default App;