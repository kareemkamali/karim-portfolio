import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/kareemkamali'>
      <BsGithub color='#00000' />
      </a>
    </div>
    <div>
    <a href='https://ar-ar.facebook.com/karim.kamaly.73'>
      <FaFacebookF color='#1e00ff' />
      </a>
    </div>
    <div>
    <a href='https://www.instagram.com/magmasolutions/'>
      <BsInstagram color='#ff00e1' />
      </a>
    </div>
  </div>
);

export default SocialMedia;