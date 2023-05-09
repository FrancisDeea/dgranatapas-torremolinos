import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';

export default function Platos() {
    const dishes = plates.dishes;

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
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
            </seccion>
        </>
    )
}