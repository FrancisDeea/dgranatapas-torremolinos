import styles from './bubbleNav.module.scss'

import { GiKnifeFork } from 'react-icons/gi'

export default function BubbleNav() {

    return (
        <>
            <button className={styles.bubble_btn}><GiKnifeFork  className={styles.icon}/></button>
        </>
    )
}