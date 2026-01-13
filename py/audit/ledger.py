import hashlib
from datetime import datetime

def create_audit_entry(session_id, decision, prev_hash):
    ts = datetime.utcnow().isoformat()
    payload = f"{ts}|{session_id}|{decision}|{prev_hash}"
    h = hashlib.sha256(payload.encode()).hexdigest()

    return {
        "timestamp": ts,
        "sessionId": session_id,
        "decision": decision,
        "prevHash": prev_hash,
        "hash": h
    }