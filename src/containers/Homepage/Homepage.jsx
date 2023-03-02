import React from 'react';
import './Homepage.scss'
class Homepage extends React.Component{
    render(){
        return(
            <div className='homepage'>
                <div className='homepage__header'>
                    <img src='/images/logo-conest.png' alt='logo' className='homepage__logo'/>
                </div>
                <div className='homepage__banner'>
                    <div className='homepage__box'>
                        <h2 className='homepage__text homepage__title'>Asociația de proprietari Conest Residence</h2>
                        <h3 className='homepage__text'>Plătește întreținerea aici:</h3>
                        <button className='homepage__pay'>Plătește</button>
                    </div>
                </div>
                <div className='homepage__footer'>
                    <h3>CONTACT</h3>
                    <div>
                        <h4>Telefon:<b> 074545745</b></h4>
                    </div>
                    <div>
                        <h4>Email: <b>conest@conest.com</b></h4>
                    </div>
                    <div>
                        <h4>Adresa: <b>Bulevardul chimiei nr. 4 Iași</b></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;