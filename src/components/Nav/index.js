import React from 'react';

function Nav() {
    return (
        <header>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>  
                        <a href='#about'>
                            Bio
                        </a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;