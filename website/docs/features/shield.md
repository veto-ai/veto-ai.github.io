# Document Shield

Invoice fraud is one of the most common vectors for B2B payment loss. Hackers often compromise email accounts to swap the payment wallet address on a PDF invoice. Veto’s **Document Shield** stops this at the source.

## Automated Extraction

Simply upload an invoice or paste the payment text into Veto. Our engine:
1.  **Extracts**: Automatically identifies wallet addresses, amounts, and vendor domains.
2.  **Cross-Verifies**: Checks if the extracted wallet address matches the **Verified Identity** of the vendor domain found in the same document.
3.  **Flags Discrepancies**: If an invoice from `acme-corp.com` asks for payment to a wallet that *isn't* verified for that domain, Veto triggers a "DANGER" alert.

## Verified Safety Certificate
Once a document is scanned and cleared, Veto generates a **Safety Certificate** (PDF) which can be attached to the payment record for audit and compliance purposes.
