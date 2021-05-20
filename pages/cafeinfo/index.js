import Head from 'next/head'
import SectionInfo from '../../components/cafephoto/SectionInfo';
import SectionRecommend from '../../components/cafephoto/SectionRecommended';
import Layout from '../../components/Layout';
const name = 'Shisha Trip'
export const siteTitle = 'Beste Shisha Bar, Lounge & Shop - shishatrip'
export default function CafePhoto() {
  return (
    <div>
      <Head>                
        <meta
          name="description"
          content="shisha, Shisha Lounge, Shisha Bar, Shisha Cafes & Shisha Shops auf Shishatrip, Shisha Cafés Nürnberg"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Layout > 
        <SectionInfo/>
        <SectionRecommend/>
      </Layout>
    </div>
    
    
  )
}