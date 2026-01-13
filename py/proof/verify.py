from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import padding

def verify_attestation(payload: bytes, signature: bytes, public_key_pem: bytes):
    pub = serialization.load_pem_public_key(public_key_pem)
    pub.verify(
        signature,
        payload,
        padding.PKCS1v15(),
        hashes.SHA256()
    )
    return True