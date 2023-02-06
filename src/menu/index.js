import React, {useState, useMemo} from 'react';
import { MenuIcon, Modal } from './styles'

const Menu = () => {

    const [checked,toggleChecked] = useState(false);

    const menu_links = ['Working Exp', 'Projects', 'Areas', 'Contact', 'Resume']

    const MenuWrapper = useMemo(() => {
        return({
            zIndex: 10,
            position: 'fixed',
            top: 0,
            left: 0,
            width: checked ? '100%' : '0',
            height: checked ? '100%' : '0',
        })
    },[checked])


    const hideMenu = (e) => {
        toggleChecked(false);
    }

    // const OpenResume = (e) => {
    //     window.open('https://drive.google.com/file/d/13VYXeS3hUp8cG9aADIfTygd4D7qJbi9i/view?usp=sharing');
    // }

    return(
        <div style={MenuWrapper} id='wrapper' onClick={hideMenu}>
        <MenuIcon isVisible={checked} onClick={(e) => { e.stopPropagation()}}>
            <input type='checkbox' id='toggle' style={{display: 'none'}} checked={checked} />
            <label for='toggle' onClick={(e) => { toggleChecked((prevState) => !prevState) }}>
                <div class="toggle-background"></div>
            </label>
        </MenuIcon>
        <Modal className={`${checked ? 'visible' : ''}`} isVisible={checked} onClick={(e) => {e.stopPropagation()}}>
            <ul className='menu-list'>
                {menu_links.map((n,i) => { 
                    if(n !== 'Resume'){
                         return (<li key={`menu-items-${i+2}`}><a href={`#section-${i+2}`} onClick={hideMenu}>{n}</a></li>)
                    }else{
                        return (<li key={`menu-items-${i+1}`}><a href={`https://drive.google.com/file/d/1gizGoNV-Sx3stVK74tRwv9Fs--kvp8Kz/view?usp=sharing`} target="_blank" rel="noreferrer noopener" >{n}</a></li>)
                    }
                        })}
            </ul>
        </Modal>
        </div>
    )
}

export default Menu;
