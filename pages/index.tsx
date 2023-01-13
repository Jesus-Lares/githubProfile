import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className="info">
        <span>Img</span>
        <div className="infoUser">
          <h1>Jesús Lares</h1>
          <h2>Jesus-Lares</h2>
          <div className="infoUser_follows">
            <div className="followers">4 followers</div>
            <div className="following">4 following</div>
          </div>
        </div>
        <div className="information">
          <h3>Information</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            doloremque, quo, maiores distinctio consequatur ad dicta sunt non
            sapiente corrupti animi sint neque natus. Est dicta eos rerum
            distinctio iste.
          </p>
          <ul>
            <li>Fintecimal</li>
            <li>contacto@jesuslares.com</li>
            <li>Guadalajara Jal</li>
            <li>jesuslares.com</li>
          </ul>
        </div>

        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
        </div>
        <button>View profile</button>
      </section>

      <section className="readme">
        <h3>Readme</h3>
        read readme
      </section>

      <section className="repos">
        <h3>Top repos</h3>
        <ul>
          <li>repo 1</li>
          <li>repo 3</li>
          <li>repo 4</li>
        </ul>
        <button>See all</button>
      </section>
    </div>
  )
}
