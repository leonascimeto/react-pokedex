import React from 'react';
import * as S from './styles';

import AsideMenu from '../../components/AsideMenu';

import myLogo from '../../assets/imgs/my-logo.png';
import react from '../../assets/icons/react.png';
import javascript from '../../assets/icons/javascript.png';
import adobexd from '../../assets/icons/adobexd.png';
import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';


const AboutUs = () => {
  return (
    <S.Container>
      <AsideMenu active={4} />
      <S.Content>
        <S.Developer>
          <div id="myLogo">
            <img src={myLogo} alt="developer logo" />
          </div>
        </S.Developer>
        <S.Info>
          <div id="stacks-container">
            <div className="title">
              <h2>ferramentas utilizadas</h2>
            </div>
            <div id="stacks">

              <div className="stack-item">
                <div className="img">
                  <img src={react} alt="node" />
                </div>
                <div className="description">
                  <span>react js</span>
                </div>
              </div>

              <div className="stack-item">
                <div className="img">
                  <img src={javascript} alt="node" />
                </div>
                <div className="description">
                  <span>javascript</span>
                </div>
              </div>

              <div className="stack-item">
                <div className="img">
                  <img src={adobexd} alt="node" />
                </div>
                <div className="description">
                  <span>adobe xd</span>
                </div>
              </div>

            </div>
          </div>{/* #stack-container */}

          <div id="contacts-container">

            <div className="title">
              <h2>contatos</h2>
            </div>
            <div id="actions">
              <div id="network">

                <div className="item">
                  <a href="https://www.linkedin.com/in/leonascimentopro/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>
                <div className="item">
                  <a href="https://github.com/leonascimeto" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                  </a>
                </div>
                <div className="item">
                  <a href="mailto:nascimentoleo899@gmail.com" target="_blank" rel="noreferrer">
                    <img src={email} alt="email" />
                  </a>
                </div>
                <div className="item curriculo" >
                  <a href="https://www.linkedin.com/in/leonascimentopro/" target="_blank" rel="noreferrer">Meu Curricúlo</a>
                </div>

              </div>
            </div>
          </div>{/* #contacts-container */}

        </S.Info>
        <S.Quote>
          <div id="quote-container">
            <blockquote>
              <p>Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.</p>
              <footer>-Steve Jobs</footer>
            </blockquote>
          </div>
        </S.Quote>
      </S.Content>
    </S.Container>
  )
}

export default AboutUs;
