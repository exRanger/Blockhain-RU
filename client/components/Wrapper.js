import Head from 'next/head'
import A from './A'

const Meta = ({children}) => {
    return (
    <>
        <Head>
            <meta keywords="blockchain, solidity, geth, ethereum, smart-contracts"></meta>
        </Head>
        <div>
           <div className="header__navbar">
                <A href={'/'} text="Main"/>
                <A href={'/'} text="Docs"/>
                <A href={'/'} text="Forum"/>
            </div>    
        </div>
        <div>
            {children}
        </div>
    </>
    )
}

export default Meta
