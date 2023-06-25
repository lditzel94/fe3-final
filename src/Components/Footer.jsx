import React from 'react'
import dhLogo from '../assets/DH.png'

const Footer = () => {
    return (
        <footer>
            <p>Powered by</p>
            {/*TODO: fix image relative url*/}
            <img src={dhLogo} alt='DH-logo'/>
        </footer>
    )
}

export default Footer
