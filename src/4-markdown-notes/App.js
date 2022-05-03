import React from 'react'
// styled-componenets
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
// componenets
import { GlobalStyles } from './components/GlobalStyles'
import { SideBarNotes } from './components/SideBarNotes'
import { WriteMarkDowon } from './components/WriteMarkDowon'
import { PreviewMarkDown } from './components/PreviewMarkDown'

export default function App() {
  return (
    <div className='app'>
      <GlobalStyles />
      <SideBarNotes />
      <WriteMarkDowon />
      <PreviewMarkDown />
    </div>
  )
}
