"use client"

import React from 'react';

import { Profile } from '../profile/profile';
import { Menu } from './components/menu/menu';
import { Features } from './components/features/features';
import { Message } from './components/message/message';
import { Mail } from './components/mail/mail';

export const Header = () => {
    return (
        <header className='bg-slate-950 h-14 px-6 w-full flex items-center'>
            <div className='flex items-center w-64 mr-8'>
                <img src='https://horadev.com/wp-content/uploads/2023/02/png-branco.png' alt='logo hora dev' width={48} height={48} />
            </div>
            <div className='w-full flex justify-between'>
                <Menu />
                <div className='flex gap-6 items-center'>
                    <Features />
                    <Message />
                    <Mail />
                    <Profile />
                </div>
            </div>
        </header>
    )
}