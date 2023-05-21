import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Entrantes() {
    const snacks = plates.snacks;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Entrantes"
                    description="Snacks, entrantes, picoslabis. No sabemos exactamente qué son, pero si sabemos que son perfectos para compartir. (o no)"
                />
                <div className="plates_container">
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
                </div>
            </seccion>
        </>
    )
}