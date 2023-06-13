import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Pescados() {
    const fishes = plates.fishes;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Pescados"
                    description="Tres opciones, tres métodos: frito, a fuego lento en cazuela y a la plancha. Sabor y frescura 100% garantizada."
                />
                <div className="plates_container">
                    {
                        fishes.map(item => {
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