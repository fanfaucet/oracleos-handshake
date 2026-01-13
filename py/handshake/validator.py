from jsonschema import validate, ValidationError
from .schema import HANDSHAKE_SCHEMA

def validate_handshake(envelope: dict):
    try:
        validate(instance=envelope, schema=HANDSHAKE_SCHEMA)
    except ValidationError as e:
        raise ValueError(f"Invalid HandshakeEnvelope: {e.message}")