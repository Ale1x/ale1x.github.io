import React, { Component } from 'react';

const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

const Source = () => <>&nbsp;|&nbsp;<a className='footer-link' href='https://github.com/adamalston/v2'>Source</a></>

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <p className='footer-text' aria-label='Adam Aliston'>Creato e Designato da&nbsp;
                    <a className='footer-link' href='https://alessandropassarelli.it/'>Alessandro Passarelli</a>
                    {isMobileDevice ? '' : <Source />}
                </p>
            </div>
        )
    }
}

export default Footer;
