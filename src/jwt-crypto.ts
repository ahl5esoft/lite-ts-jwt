import jwt from 'jsonwebtoken';

import { CryptoBase } from './crypto-base';

export class JwtCrypto extends CryptoBase {
    public constructor(
        private m_SecretKey: string,
    ) {
        super();
    }

    public async compare(_: string, __: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    public async decrypt(cipherText: string) {
        const data = jwt.decode(cipherText);
        return data?.toString();
    }

    public async encrypt(plaintext: string) {
        return jwt.sign(plaintext, this.m_SecretKey);
    }
}