from oracleos.scopes.parser import parse_scope

def evaluate_handshake(scopes, trust_profile, cached_grants, proofs_present):

    for s in scopes:
        parsed = parse_scope(s)
        if parsed["modifiers"].get("DENIED"):
            return ("DENY", "Explicit deny modifier")

    if all(s in cached_grants for s in scopes):
        return ("GRANT_FAST", None)

    if all(s in trust_profile for s in scopes):
        return ("GRANT_FAST", None)

    if any("PAYMENTS" in s or "PII" in s for s in scopes):
        return ("REQUIRE_APPROVAL", None)

    if not proofs_present:
        return ("REQUIRE_PROOF", None)

    return ("GRANT_LOGGED", None)