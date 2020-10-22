import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email } from './../assets/icons'

const DATA = [
    {
        href: "https://github.com/ale1x",
        aria: "Visita il mio profilo GitHub per avere più informazioni su di me",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "#",
        aria: "",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://covid.alessandropassarelli.it/",
        aria: "",
        icon: <Resume />,
        label: "Covid19 - Website",
    },
    {
        href: "mailto:passarelli598@gmail.com",
        aria: "Scrivimi una mail",
        icon: <Email />,
        label: "Email",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
