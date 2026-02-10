# Institutional Risk Engine

Every transaction on Veto undergoes a "Pre-Flight Scan" powered by our multi-layered Risk Engine.

## The Safety Scan

Before a single dollar moves, Veto analyzes the recipient's wallet and identity against four critical vectors:

### 1. Sanctions & Compliance
Real-time clearing against OFAC, SDN, and global sanctions lists. Veto ensures you never inadvertently pay a sanctioned entity.

### 2. Anomaly Detection
Detects irregular patterns such as sudden surges in volume, high-velocity "hopping" between chains, or interaction with high-risk mixers.

### 3. Shadow Clone Detection
A sophisticated security check for "Lookalike" domains and wallets that attempt to impersonate trusted vendors.

### 4. Risk Scoring (0-100)
Every scan generates a unified Risk Score.
*   **0-25 (SAFE)**: Identity verified, no compliance flags.
*   **26-75 (WARNING)**: Minor anomalies or unverified identity bits.
*   **76-100 (DANGER)**: Sanctions hits or high-risk activity detected.

## Pre-Settlement Consensus
Integrate Veto into your payment backend to automatically block any transaction that exceeds your organization's risk threshold.
