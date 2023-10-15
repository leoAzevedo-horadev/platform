"use client"
import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className='flex'>
            {menuIsOpen ?
                <MenuIcon className='cursor-pointer text-slate-100' onClick={handleMenu} size={24} /> :
                <X className='cursor-pointer text-slate-100' onClick={handleMenu} size={24} />}
        </div>
    )
}