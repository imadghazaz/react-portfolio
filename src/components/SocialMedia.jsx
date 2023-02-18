import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/imad-ghazaz-a761a2246/" target={'_blank'}>
        <AiFillLinkedin />
      </a> 
    </div>
    <div>
      <a href="https://www.facebook.com/ghazazimad" target={'_blank'}>
        <FaFacebookF />
      </a> 
    </div>
    <div>
      <a href="https://www.instagram.com/imadghazaz/" target={'_blank'}>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
