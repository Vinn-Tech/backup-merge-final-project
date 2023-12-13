import React from 'react'
import { NavbarBeranda } from '../components/NavbarBeranda'
import { Banner } from '../components/Banner'
import { KategoriBelajar } from '../components/KategoriBelajar'
import { KursusPopuler } from '../components/KursusPopuler'
import { Search } from '../components/Search'

export const BerandaNoLogin = () => {
  return (
    <div className='flex flex-col'>
        <NavbarBeranda/>
        <Search/>
        <Banner/>
        <KategoriBelajar/>
        <KursusPopuler/>
    </div>
  )
}
