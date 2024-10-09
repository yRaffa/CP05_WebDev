import React from 'react';
import ApresentacaoBG from '../Assets/bg-apresentacao.png';
import ImgApresentacaoBG from '../Assets/bg-apresentacao-imagem.png';
import {BsFillPlayCircleFill} from 'react-icons/bs';


const Apresentacao = () => {
    return (
        <div className='about-section-container'>
            <div className='about-backgroud-image-container'>
                <img src={ApresentacaoBG} alt="" />
            </div>
            <div className='about-section-image-container'>
                <img src={ImgApresentacaoBG} alt="" />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>Apresentação</p>
                <h1 className='primary=heading'>Lorem ipsum dolor sit amet.</h1>
                <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, necessitatibus?</p>
                <p className='primary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente optio unde eos?</p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Saiba Mais</button>
                    <button className='watch-video-button'> <BsFillPlayCircleFill/> Assista ao Video</button>
                </div>
            </div>
        </div>
    )
};

export default Apresentacao;