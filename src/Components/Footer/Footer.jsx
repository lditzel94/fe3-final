import React from 'react';
import dhLogo from '../../assets/LogoHeader.svg';
import {FooterContainer, Img, Text} from "./styles";

const Footer = () => (
    <FooterContainer>
        <Text value={"Powered by"}/>
        <Img src={dhLogo} alt="DH-logo"/>
    </FooterContainer>
);

export default Footer;
