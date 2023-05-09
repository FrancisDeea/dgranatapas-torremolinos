import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
                <h1>Hello World</h1>
                <p>This is rendered from home page (index)</p>
            </seccion>
        </>
    )
}