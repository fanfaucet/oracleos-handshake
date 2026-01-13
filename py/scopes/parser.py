import re

SCOPE_RE = re.compile(
    r'^(?P<res>[A-Z_]+)\.(?P<act>[A-Z_]+)'
    r'(:(?P<qual>[^()]+))?'
    r'(\((?P<mod>.+)\))?$'
)

def parse_scope(scope: str):
    m = SCOPE_RE.match(scope)
    if not m:
        raise ValueError(f"Invalid scope: {scope}")

    mods = {}
    if m.group("mod"):
        for part in m.group("mod").split(","):
            if ":" in part:
                k, v = part.split(":")
                mods[k.strip()] = v.strip()
            else:
                mods[part.strip()] = True

    return {
        "resource": m.group("res"),
        "action": m.group("act"),
        "qualifier": m.group("qual"),
        "modifiers": mods
    }