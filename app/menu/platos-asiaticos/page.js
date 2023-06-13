import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Asiatico() {
    const asian = plates.asian;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Sabor Asíatico"
                    description="test"
                />
                <div className="plates_container">
                    {
                        asian.map(item => {
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