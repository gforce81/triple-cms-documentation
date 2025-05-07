import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/cms_intro_1.svg').default,
    description: (
      <>
        Visually create rich card linked deals experiences for the Triple White Label UI with no programming knowledge or complex deployment procedures.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/cms_intro_2.svg').default,
    description: (
      <>
        Triple CMS lets you focus on organizing the deals and content you want to show to your cardholders. It takes care of the rest.
      </>
    ),
  },
  {
    title: 'Single Page or Multi Pages',
    Svg: require('@site/static/img/cms_intro_3.svg').default,
    description: (
      <>
        Deploy a single main deals page or multiple campaign and feature pages with ease to create a more engaging experience for your cardholders.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
