# STORE-TS API DEMO

This DEMO API will be used to showcase typescript, nodejs,JWT, CICD and more.

## Requirements

nodejs >= 18.20.2

## Instruction

1. Install dependencies
```
bun install
```

2. Install prisma,prisma client and generate tables 
```
bun install @prisma/client prisma
bunx prisma generate && bunx prisma migrate dev --init
```

3. Test Code
```
bun run test
```

4. Start API
```
bun start or bun run dev
```
