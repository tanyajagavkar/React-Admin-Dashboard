import React from 'react'
import './footer.css';

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className='copyright'>
            &copy; CopyRight{ ' '}
            <strong>
                <span>BugendaiTech Pvt Ltd</span>
                </strong>
                   . Data Science Intern
        </div>
        <div className='credits'>
            Designed by <a href='#'>Tanya</a>
        </div>
    </footer>
  );
}

export default Footer