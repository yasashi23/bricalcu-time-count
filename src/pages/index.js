import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamS from '../../components/Selisih-jam/JamS'



export default function Home() {
  return (
    <Mycont>
    <Header krmSls="on"/>
    <JamS/>
    </Mycont>
  )
}

const Mycont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
overflow:hidden;
`