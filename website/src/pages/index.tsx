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
                        The <span className={styles.highlight}>Identity & Security</span> Layer for Institutional Stablecoins
                    </Heading>
                    <p className="hero__subtitle">
                        Bridge the gap between pseudonymous wallets and verified corporate identities.
                        Automated compliance, fraud prevention, and persistent attestation for the future of global finance.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/intro">
                            Access the Registry
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
            title={`${siteConfig.title} | Institutional Safety Layer`}
            description="Cryptographic identity verification and risk mitigation for B2B stablecoin settlements.">
            <HomepageHeader />
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <Feature
                                title="Bilateral Attestation"
                                description="Cryptographically anchor corporate domains to blockchain identifiers using DNSSEC and EIP-712 structured proofs."
                                icon="🔐"
                            />
                            <Feature
                                title="Institutional Risk Monitor"
                                description="Real-time multi-vector screening against global sanctions (OFAC/SDN) and behavioral anomaly detection."
                                icon="🛡️"
                            />
                            <Feature
                                title="Document Integrity Shield"
                                description="Autonomous extraction and cross-verification of payment instructions from procurement documents to prevent hijacking."
                                icon="📄"
                            />
                        </div>
                        <div className="row" style={{ marginTop: '2rem' }}>
                            <Feature
                                title="Pre-Settlement Consensus"
                                description="A bilateral handshake protocol ensuring both parties agree on transaction parameters before on-chain execution."
                                icon="🤝"
                            />
                            <Feature
                                title="Global Identity Registry"
                                description="The authoritative database of verified corporate wallets, trust scores, and interconnected reputation graphs."
                                icon="🏛️"
                            />
                            <Feature
                                title="Persistent Infrastructure Audit"
                                description="Continuous monitoring of counterparty security posture to detect DNS hijacks or server compromises in real-time."
                                icon="📊"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.integritySection}>
                    <div className="container">
                        <div className={styles.integrityCard}>
                            <div className={styles.integrityContent}>
                                <Heading as="h2">The Foundation of Verified Finance</Heading>
                                <p>
                                    Veto eliminates the "Anonymous Wallet" risk by enforcing cryptographic integrity at every stage of the payment lifecycle.
                                    We move B2B payments from a state of blind trust to one of verifiable assurance.
                                </p>
                                <div className={styles.integrityGrid}>
                                    <div className={styles.integrityItem}>
                                        <strong>Cryptographic Authority</strong>
                                        <span>Identity anchored to verified infrastructure</span>
                                    </div>
                                    <div className={styles.integrityItem}>
                                        <strong>Zero-Trust Architecture</strong>
                                        <span>Bilateral consensus before every settlement</span>
                                    </div>
                                    <div className={styles.integrityItem}>
                                        <strong>Institutional Guardrails</strong>
                                        <span>Autonomous policy enforcement and compliance</span>
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
