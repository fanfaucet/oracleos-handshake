# oracleos-handshake
A minimal, auditable handshake layer for governed AI interactions.

Here is just the README, clean and ready to paste into your repo.


---

# OracleOS Handshake Kernel

A minimal, auditable handshake layer for governed AI interactions.

This repository provides a reference implementation of four core primitives:

- **HandshakeEnvelope validator** – schema-based validation of governed sessions  
- **Scope grammar + parser** – compact, enforceable permission language  
- **Consent engine** – fast-path / slow-path authorization decisions  
- **Audit ledger** – hash-chained, tamper-evident logs  
- **Proof verification** – signature checks for attestations  

This is infrastructure, not a product.

The goal is to define a **neutral, testable kernel** for:
- consent  
- proof  
- audit  
- and scoped authority  

in systems where humans, personas, and tools interact.

---

## What’s in this repo

oracleos-handshake/ ├─ spec/ │  ├─ handshake.schema.json │  ├─ scope-grammar.md │  └─ consent-engine.md ├─ ts/ │  ├─ handshake/validator.ts │  ├─ scopes/parser.ts │  ├─ consent/engine.ts │  ├─ audit/ledger.ts │  └─ proof/verify.ts ├─ py/ │  ├─ handshake/validator.py │  ├─ scopes/parser.py │  ├─ consent/engine.py │  ├─ audit/ledger.py │  └─ proof/verify.py └─ examples/ └─ processHandshake.ts

---

## Design principles

1. **No action without scope**  
2. **No sensitive action without explicit consent**  
3. **No proof-required action without proof**  
4. **No payment or delegation without receipts**  
5. **Everything important leaves an audit trail**

---

## Status

- **v0.1 – Kernel draft**
- Focused on correctness, clarity, and testability  
- No product assumptions  
- No platform lock-in  

---

## Use

Fork it.  
Break it.  
Improve it.  

If you build on it, file issues or PRs—this is meant to evolve in the open.

---

## License
Apache 2.0
