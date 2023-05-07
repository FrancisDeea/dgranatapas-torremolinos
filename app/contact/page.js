import styles from './contact.module.scss';

import { BsInstagram, BsFillEnvelopeAtFill, BsLinkedin } from 'react-icons/bs'

export default function Contact() {
    return (
        <seccion className="page_container">
            <h2>Find me on your favorite social network!</h2>
            <div className={styles.social_container}>
                <BsInstagram className={styles.icon} />
                <BsFillEnvelopeAtFill className={styles.icon} />
                <BsLinkedin className={styles.icon} />
            </div>
        </seccion>
    )
}