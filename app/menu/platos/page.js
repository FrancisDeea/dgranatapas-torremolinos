import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Platos() {
    const dishes = plates.dishes;

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Platos principales"
                    description="Una amplia variedad de platos elaborados 100% a mano, con sabores que recorren todo el mundo: ¡Desde Andalucía hasta el mismo continente asiático!"
                />
                <div className="plates_container">
                    {
                        dishes.map(item => {
                            let description;
                            if (item.description === "object") {

                            }
                            return (
                                <Plate
                                    name={item.name}
                                    price={item.price}
                                    description={
                                        typeof item.description === "object"
                                            ? <ul><li>{item.description[1]}</li><li>{item.description[2]}</li></ul>
                                            : item.description
                                    }
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