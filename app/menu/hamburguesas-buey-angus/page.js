import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Hamburguesas() {
    const burguers = plates.burguers;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Hamburguesas"
                    description="Pan brioche, carne de primera, 200 gramos reales, queso, patatas... Son hamburguesas, no fallan."
                />
                <div className="plates_container">
                    {
                        burguers.map(item => {
                            return (
                                <Plate
                                    key={item.name}
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