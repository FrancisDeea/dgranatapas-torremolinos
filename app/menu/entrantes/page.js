import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';

export default function Entrantes() {
    const snacks = plates.snacks;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
                {
                    snacks.map(item => {
                        return (
                            <Plate
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                img={item.img}
                                alt={item.alt}
                                allergens={item.allergens}
                            />
                        )
                    })
                }
            </seccion>
        </>
    )
}