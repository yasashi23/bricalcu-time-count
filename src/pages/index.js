import Head from 'next/head'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamBrp from '../../components/jam-berapa/jamBrp'
import JamS from '../../components/Selisih-jam/JamS'
import TglS from '../../components/Selisih-tgl/tglS'
import TanggalBrp from '../../components/tgl-berapa/Tanggal-brp'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>  
      <MainCont>
          <div className='selisih-jam'>
            <JamS/>
          </div>
      <br/><hr/><br/>
          <div className='jam-berapa'>
            <JamBrp/>
          </div>
<br/><hr/><br/>
          <div className='selisih-tgl'>
            <TglS/>
          </div>
          <br/><hr/><br/> 
    <div className="tanggal-brp">
      <TanggalBrp/>
    </div>
      </MainCont>
    </>
  )
}

const MainCont = styled.div`

`