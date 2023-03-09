# ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 安装
```
npm install lite-ts-jwt
```

## 使用
```typescript
import { JwtCrypto } from 'lite-ts-jwt';

const jwt = new JwtCrypto('xxx');
const token = await jwt.encrypt(JSON.stringify({a:'b'}));
// token = 'xxxx-xxx.xxx'

const data = await jwt.decrypt(token);
// data = "{'a':'b'}";
```
