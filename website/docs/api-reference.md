# Veto API Reference

Welcome to the Veto API reference. This document outlines the primary endpoints and cryptographic payloads used for institutional B2B stablecoin settlement integrity.

## Base URL
The API is versioned and follows RESTful principles.
`https://api.vetoprotocol.com/api/v1`

## Authentication
Veto uses **JWT-based Authentication** for user sessions and **API Keys** for server-to-server integrations.
Headers:
*   `Authorization: Bearer <your_jwt_token>`
*   `X-API-Key: <your_api_key>`

---

## 1. Identity Attestation (The Integrity Anchor)

This flow anchors a decentralized wallet to a corporate DNS identity.

### Generate Verification Challenge
`POST /attestation/challenge`

Provides the cryptographic payload and DNS instructions for a new attestation request.

**Request Body:**
```json
{
  "domain": "galaxy.com",
  "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18",
  "chain": "ethereum"
}
```

**Response:**
```json
{
  "id": "att_98234",
  "challengeText": "veto-verification:7a6f8b9...",
  "dnsRecord": {
    "type": "TXT",
    "name": "_veto-identity",
    "value": "v=veto1;address=0x742d..."
  },
  "wellKnownUrl": "https://galaxy.com/.well-known/veto.json"
}
```

### Verify Attestation
`POST /attestation/:id/verify`

Submits the proof (DNSSEC/Infrastructure) and the EIP-712 wallet signature for final validation.

**Request Body:**
```json
{
  "signature": "0x8923... (EIP-712 Signature)",
  "issuedAt": "2025-10-15T10:00:00Z"
}
```

---

## 2. Payment Intent & Handshake (Bilateral Consensus)

Veto ensures that both sides of a transaction acknowledge the **Intent**, **Amount**, and **Identity** before settlement occurs.

### Create Payment Intent
`POST /payment-intent`

Initiated by the sender to signal a pending settlement request to a counterparty.

**Request Body:**
```json
{
  "recipientDomain": "acme-supply.com",
  "recipientWallet": "0x123...",
  "amount": 500000.00,
  "currency": "USDC",
  "memo": "Inv #9983 - Q4 Hardware Supply"
}
```

### Confirm Intent (The Handshake)
`POST /payment-intent/:id/confirm`

The recipient validates the parameters and signs the intent using an EIP-712 structured message. This signature is stored as an immutable proof of consensus.

**Request Body:**
```json
{
  "recipientSignature": "0x9fac... (EIP-712 Signature)"
}
```

---

## 3. Institutional Risk Engine

### Scan Payment Target
`POST /scan/wallet`

Performs a pre-flight check across global sanctions lists and behavioral risk models.

**Request Body:**
```json
{
  "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18",
  "amount": 50000,
  "currency": "USDT"
}
```

---

## Cryptographic Standards (For Security Audits)

Veto adheres to institutional-grade cryptographic standards to ensure non-repudiation and safety:

*   **Signature Scheme**: EIP-712 (Typed Data Signing) for human-readable transaction intent.
*   **Identity Anchor**: DNSSEC (Domain Name System Security Extensions) for verified authority linkage.
*   **Auditability**: All successful handshakes generate a unique `Identity Checksum` that can be queried on-chain.
