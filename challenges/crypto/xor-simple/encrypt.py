# Simple XOR Cipher Challenge
def xor(data, key):
    return bytes([b ^ key[i % len(key)] for i, b in enumerate(data)])

flag = b"LEGEND{x0r_1s_n0t_3nough_crypt0}"
key = b"secret_key"
with open("cipher.txt", "wb") as f:
    f.write(xor(flag, key).hex().encode())
