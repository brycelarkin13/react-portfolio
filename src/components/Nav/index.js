import React from 'react';

function Nav(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <nav>
            <ul className='flex-row'>
            <li className={`mx-2${currentTab && 'about'}`}>
            <span onClick={() => setCurrentTab(true)}>Bio
            </span>
          </li>
                <li className={`mx-2 ${currentTab && 'navActive'}`}>
                    <span onClick={() => setCurrentTab('portfolio')}>Portfolio</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;