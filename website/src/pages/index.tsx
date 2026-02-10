import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <div className={styles.heroGlow}></div>
                <div className={styles.heroContent}>
                    <Heading as="h1" className="hero__title">
                        The <span className={styles.highlight}>Identity & Safety</span> Layer for B2B Stablecoins
                    </Heading>
                    <p className="hero__subtitle">
                        Bridge the gap between anonymous wallets and corporate identities.
                        Automated compliance, fraud prevention, and identity attestation for the next generation of finance.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/intro">
                            Explore the Registry
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Feature({ title, description, icon }) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
                <div className="padding-horiz--md">
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} | Identity & Safety`}
            description="Cryptographical identity verification for stablecoin payments.">
            <HomepageHeader />
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <Feature
                                title="Cryptographic Attestation"
                                description="Securely link your corporate domain to your blockchain wallet using DNS and EIP-712 proofs."
                                icon="🔐"
                            />
                            <Feature
                                title="Institutional Risk Engine"
                                description="Real-time OFAC screening, anomaly detection, and shadow-clone prevention for every transaction."
                                icon="🛡️"
                            />
                            <Feature
                                title="Document Shield"
                                description="Automatically extract and verify wallet addresses from invoices to prevent payment hijacking."
                                icon="📄"
                            />
                        </div>
                        <div className="row" style={{ marginTop: '2rem' }}>
                            <Feature
                                title="Two-Party Handshake"
                                description="A pre-settlement consensus protocol that ensures both parties agree on terms before funds move."
                                icon="🤝"
                            />
                            <Feature
                                title="Global Registry"
                                description="A verified list of corporate identities and trust scores, building the backbone of B2B trust."
                                icon="🏛️"
                            />
                            <Feature
                                title="Always-On Monitoring"
                                description="Continuous infrastructure health checks to detect DNS hijacks or server compromises instantly."
                                icon="📊"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.integritySection}>
                    <div className="container">
                        <div className={styles.integrityCard}>
                            <div className={styles.integrityContent}>
                                <Heading as="h2">Zero-Trust Execution</Heading>
                                <p>
                                    Veto operates on the principle of verifiable integrity. We don't ask you to trust a database;
                                    we provide the cryptographic tools to verify identities at every step of the payment lifecycle.
                                </p>
                                <div className={styles.integrityGrid}>
                                    <div className={styles.integrityItem}>
                                        <strong>Verified Logic</strong>
                                        <span>DNSSEC-backed ownership proofs</span>
                                    </div>
                                    <div className={styles.integrityItem}>
                                        <strong>Immutable Trails</strong>
                                        <span>Sanitized, verifiable audit logs</span>
                                    </div>
                                    <div className={styles.integrityItem}>
                                        <strong>Autonomous Defense</strong>
                                        <span>Real-time webhook-driven isolation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
