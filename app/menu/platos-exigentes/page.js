import Head from 'next/head';

import { plates } from '../../data/plates';
import Plate from '../../components/plate';
import Title from '../../components/title';

export default function Exigentes() {
    const demanding = plates.demanding;


    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="menu_container">
                <Title
                    heading="Para los más exigentes"
                    description="Una selección de platos premium, elaborados con sabores y materias primas de alto nivel, pensados para satisfacer a los más exigentes."
                />
                <div className="plates_container">
                    {
                        demanding.map(item => {
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