import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../Context/SidebarContext';
import * as C from './styles';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Footer = () => {

    const { dark } = useContext(SidebarContext);

    return(
        <C.Container mode={dark}>
            <C.SocialArea>
                <a href="https://github.com/setxpro" target="_blank"><AiFillGithub/></a>
                <a href="https://www.instagram.com/patrick_anjos_/" target="_blank"><AiOutlineInstagram/></a>
                <a href="https://www.facebook.com/patrick.anjos.r" target="_blank"><AiOutlineFacebook/></a>
                <a href="mailto:patrickpqdt87289@gmail.com" target="_blank"><AiOutlineMail/></a>
                <a href="https://contate.me/devx" target="_blank"><AiOutlineWhatsApp/></a>
            </C.SocialArea>
            <C.InfoDev>
                <p>Created with love by <a href="https://contate.me/devx" target="_blank"><strong>DevX</strong></a></p>
                <p>© 2022</p>
            </C.InfoDev>
        </C.Container>
    );
}