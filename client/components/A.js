import Link from 'next/link'
import styles from '../styles/A.module.scss'

export default function({text, href}){
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}