import React from 'react';


function Footer() {
  return (
    <footer>
    <div class="center">
        Copyright &copy; www.sneakpeak.com. All rights reserved!
    </div>
    <div class="social-media-links">
        <a href="https://www.facebook.com" target="_blank"><img src="/images/facebook.png" alt="Facebook" width="30"
                height="30"/></a>
        <a href="https://www.twitter.com" target="_blank"><img src="/images/twitter.png" alt="Twitter" width="30"
                height="30"/></a>
        <a href="https://www.instagram.com" target="_blank"><img src="/images/insta.png" alt="Instagram" width="30"
                height="30"/></a>
        <a href="https://www.linkedin.com" target="_blank"><img src="/images/linkedin.png" alt="LinkedIn" width="30"
                height="30"/></a>
    </div>
    <a href="#" class="back-to-top">
        <img src="/images/arrowup.png" alt="Back to Top"/>
    </a>
</footer>
  );
}

export default Footer;
