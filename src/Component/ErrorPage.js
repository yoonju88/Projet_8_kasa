import React from 'react'
import {Link,} from 'react-router-dom'


function ErrorPage (){
    return (
        <div className='errorPage'>
            <h1 className='errorPage_title'>404</h1>
            <p className='errorPage_message'>Oups! La page que <br className='break'/> vous demnadez n'existe pas.</p>
            <p className='errorPage_link'><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
    )

}

export default ErrorPage