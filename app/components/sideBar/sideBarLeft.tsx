import React from 'react';
import { Profile } from '../profile/profile';
import { Folder, Home } from 'lucide-react';

export const SideBarLeft = () => {
    return (
        <aside className='w-64 h-full p-4 bg-slate-950'>
            <div className='flex gap-4'>
                <Profile />
                <span>Léo Azevedo</span>
            </div>
            <div className='border-b-2 opacity-10 h-4' />
            <nav className='p-4'>
                <a className='flex gap-4 mb-4 cursor-pointer hover:opacity-50 items-center' href='/'>
                    <Home size={18} />
                    <span>Home</span>
                </a>
                <a className='flex gap-4 mb-4 cursor-pointer  hover:opacity-50 items-center' href='/projects'>
                    <Folder size={18} />
                    <span>Projetos</span>
                </a>
            </nav>
        </aside>
    )
}