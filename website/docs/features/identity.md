# Cryptographic Identity Attestation

The Veto Identity Protocol establishes a verifiable **Chain of Trust** between traditional corporate assets (Domains) and decentralized financial identifiers (Wallets). This mechanism eliminates the anonymity risk inherent in public ledger transactions.

## The Attestation Framework

Veto utilizes a multi-layered attestation architecture to ensure that every claim of ownership is cryptographically backed and independently verifiable.

### 1. DNSSEC-Anchored Proofs
Organizations establish their primary identity by publishing a `_veto-identity` TXT record within their DNS zone. Veto’s engine utilizes **DNSSEC validation** to ensure that this record is authentic and hasn't been tampered with. This links the domain (e.g., `acme-corp.com`) to a specific public key (the Wallet Address).

### 2. Infrastructure Verification (.well-known)
As a secondary proof of control over the organization’s web infrastructure, Veto validates a signed identity manifest hosted at `https://domain.com/.well-known/veto.json`. This ensures that the entity claiming the wallet also controls the primary business infrastructure.

### 3. EIP-712 Structured Signing
To complete the bilateral link, the organization must sign a Veto Challenge using the private key of the claimed wallet. By utilizing **EIP-712 (Typed Structured Data Signing)**, the signature is human-readable and immune to "blind-signing" attacks, proving definitive control over the on-chain assets.

## The Veto Global Registry

Successful attestations result in inclusion in the **Veto Global Registry**, a high-integrity database accessible via API and on-chain oracles.

*   **Trust Scores**: Dynamic reputation matrices calculated using domain vintage, DNSSEC status, and historical transaction hygiene.
*   **Bilateral Peer Verification**: A trust-graph mechanism where established organizations can vouch for the identity of their counterparts, creating a network effect of verified trust.
*   **Automated Revocation**: Real-time monitoring of DNS and infrastructure status; any change in control triggers an immediate "Unverified" status in the registry.
