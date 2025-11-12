import React, {useState} from 'react';
import MensajeIngles from './../language/en.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localePorDefecto = 'en-US';
    let mensajesPorDefecto = MensajeIngles;

    const [mensaje, setMensaje] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    const selectLanguage = () => {
        setMensaje(MensajeIngles);
        setLocale('en-US');
        localStorage.setItem('lang', 'en-US');
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};