# Introduction

**Veto** is the first institutional-grade **Identity & Safety Layer** purpose-built for the B2B stablecoin economy.

In the rapidly evolving landscape of digital finance, businesses are increasingly adopting stablecoins (USDC, USDT, EURC) for cross-border settlements. However, this transition introduces a critical **Counterparty Anonymity Risk**: the inability to definitively link a 42-character hexadecimal wallet address to a verified corporate entity. 

Veto bridges this gap by providing a cryptographic attestation layer that anchors blockchain wallets to real-world corporate identities.

## The Problem: The Trust Gap in Digital Finance

Traditional finance relies on the SWIFT network and regulated banking intermediaries to verify identities. In the decentralized world, payments are permissionless but blind. This leads to:
*   **Invoice Hijacking**: Malicious actors swapping wallet addresses in PDF invoices.
*   **Compliance Blindness**: Difficulty in performing real-time OFAC/AML screening on counterparties.
*   **Settlement Uncertainty**: Lack of a formal "handshake" protocol leads to permanent loss of funds if sent to the wrong address.

## The Solution: Veto's Identity Stack

Veto does not move funds; it provides the **Integrity Layer** that resides above existing payment rails.

### Core Value Drivers

*   **Cryptographic Attestation**: Anchoring corporate DNS domains to blockchain addresses using EIP-712 and DNSSEC proofs.
*   **Institutional Risk Engine**: Real-time screening against global watchlists and behavioral anomaly detection.
*   **Bilateral Consensus (The Handshake)**: A pre-settlement protocol where both parties cryptographically confirm transaction parameters.
*   **Document Integrity**: Automated extraction and verification of payment instructions from business documents.

## Strategic Objectives

Veto is designed for organizations that require the efficiency of blockchain with the safety of traditional finance:

1.  **Corporate Treasuries**: Mitigate operational risk when settling high-value vendor invoices.
2.  **Compliance & Risk Officers**: Ensure every transaction is mapped to a verified identity with a permanent audit trail.
3.  **Payment Orchestrators**: Integrate Veto as the "Verified Identity" standard for their enterprise users.
4.  **Issuers & VASPs**: Leverage the Veto Registry to enhance their internal KYC/KYB workflows.

---

*Next: Explore our [Core Features](/features/identity) and the [API Reference](/api-reference).*
