import CreekMap from '@/components/CreekMap'
import NotifyForm from '@/components/NotifyForm'
import styles from './page.module.css'

const FACEBOOK_EVENT_URL = 'https://www.facebook.com/events/1115284300875931/'

const steps = [
  {
    number: '01',
    shape: 'circle',
    title: 'Fold',
    body: 'Bring a paper boat of your own design, or pick one up on the bank. Exact rules for boats are still being folded.',
  },
  {
    number: '02',
    shape: 'triangle',
    title: 'Float',
    body: 'Everyone launches together from a secret spot up the creek, below Yatesville Falls. Then the current takes over.',
  },
  {
    number: '03',
    shape: 'square',
    title: 'Finish',
    body: 'Follow your boat along the banks down to The Root, where the first arrivals are fished out and celebrated.',
  },
] as const

const details: [string, React.ReactNode][] = [
  ['When', 'Friday, July 9, 2027 · tentative'],
  ['Start', 'Up the creek, possibly the future arboretum (name TBD) · confirmed closer to race day'],
  ['Finish', 'The Root · Sprakers, New York'],
  ['Boats', 'Make your own or be given one · details to come'],
  ['Who', 'Invite only, by word of mouth. Everyone who signs up gets the details closer to race day.'],
  [
    'Facebook',
    <a key="facebook" href={FACEBOOK_EVENT_URL} target="_blank" rel="noreferrer">
      See the event on Facebook
    </a>,
  ],
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.topbar}>
        <span className={styles.mark} aria-hidden="true">
          <span className={styles.markCircle} />
          <span className={styles.markTriangle} />
          <span className={styles.markSquare} />
        </span>
        <span>Sprakers, New York</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>July 9, 2027 · Yatesville Creek</p>
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>The Inaugural</span>
            <span>Yatesville Creek</span>
            <span className={styles.titleAccent}>Paper Boat Race</span>
          </h1>
          <div className={styles.shapes} aria-hidden="true">
            <span className={styles.sun} />
            <span className={styles.sail} />
            <span className={styles.wave} />
          </div>
          <p className={styles.lede}>
            One creek, a fleet of paper boats, and a long midsummer afternoon. Launch your boat somewhere below
            Yatesville Falls and cheer it all the way down to The Root.
          </p>
          <div className={styles.notify}>
            <NotifyForm />
            <a className={styles.facebook} href={FACEBOOK_EVENT_URL} target="_blank" rel="noreferrer">
              <span className={styles.facebookMark} aria-hidden="true">f</span>
              See the event on Facebook
            </a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <CreekMap />
        </div>
      </section>

      <section className={styles.steps} aria-labelledby="how-heading">
        <h2 id="how-heading" className={styles.sectionTitle}>
          How it works
        </h2>
        <ol className={styles.stepList}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={`${styles.stepShape} ${styles[step.shape]}`} aria-hidden="true" />
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.details} aria-labelledby="details-heading">
        <h2 id="details-heading" className={styles.sectionTitle}>
          The details
        </h2>
        <dl className={styles.detailList}>
          {details.map(([term, value]) => (
            <div key={term} className={styles.detailRow}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className={styles.footer}>
        <span>The Inaugural Yatesville Creek Paper Boat Race</span>
        <span>Sprakers, New York · July 9, 2027</span>
      </footer>
    </main>
  )
}
