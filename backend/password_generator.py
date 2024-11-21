import random

def generate_password():
    """Generate a secure 6-digit password."""
    password = ''.join(random.choices('0123456789', k=6))  # Generate 6-digit password
    return password
