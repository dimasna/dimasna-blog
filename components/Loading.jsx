import styles from './Loading.module.css'
export default function Loading() {
    return (
        <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
    )
}