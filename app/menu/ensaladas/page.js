import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Ensaladas() {
    const salads = plates.salads;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Ensaladas"
                    description="Para aquellos que buscan un plato delicioso y sencillo. Nuestras ensaladas son contundentes, rápidas de preparar y muy saciantes. ¿Podrás terminarla entera?"
                />
                <div className="plates_container">
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
                </div>
            </seccion>
        </>
    )
}