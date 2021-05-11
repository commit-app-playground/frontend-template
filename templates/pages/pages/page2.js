// reusing css from home module
import styles from '../../styles/Home.module.css'

export default function Page1() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test page 2
        </h1>

        <div className={styles.grid}>
          <a href="/" target="_self" className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Go to home</p>
          </a>

          <a href="/page1" target="_self" className={styles.card}>
            <h2>Sample page 1 &rarr;</h2>
            <p>Go to Sample page 1</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/commitdev/zero" target="_blank">
          Powered by {'Zero'}
        </a>
      </footer>
    </div>
  )
}
