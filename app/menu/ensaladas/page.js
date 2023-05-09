import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';

export default function Ensaladas() {
    const salads = plates.salads;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
                {
                    salads.map(salad => {
                        return (
                            <Plate
                                name={salad.name}
                                price={salad.price}
                                description={salad.description}
                                img={salad.img}
                                alt={salad.alt}
                                allergens={salad.allergens}
                            />
                        )
                    })
                }
            </seccion>
        </>
    )
}