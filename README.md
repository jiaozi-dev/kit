# @jiaozi-dev/kit

A modern, type-safe TypeScript utility kit.

## Features

- 🌲 Zero dependencies & Tree-shakable
- 🛡️ 100% Type-safe

## Installation

```bash
npm install @jiaozi-dev/kit
```

```bash
yarn add @jiaozi-dev/kit
```

```bash
pnpm add @jiaozi-dev/kit
```

## Enum

```typescript
import { Enum } from "@jiaozi-dev/kit";

const STATUS = Enum({
    Success: "success",
    Warning: "warning",
    Error: "error",
});
// inferred as
// const STATUS: Readonly<{
//     readonly Success: "success";
//     readonly Warning: "warning";
//     readonly Error: "error";
// }>;

type STATUS = Enum<typeof STATUS>;
// inferred as
// type STATUS = "success" | "warning" | "error";

Enum.keys(STATUS);
// inferred as
// Readonly<["Success", "Warning", "Error"]>

Enum.values(STATUS);
// inferred as
// Readonly<["success", "warning", "error"]>

Enum.entries(STATUS);
// inferred as
// Readonly<[["Success", "success"], ["Warning", "warning"], ["Error", "error"]]>

Enum.hasKey(STATUS, "Success");
// inferred as
// true

STATUS.Success;
// inferred as
// "success"

Enum.getValue(STATUS, "Success");
// inferred as
// "success"
```

## ...

## 🥟 Jiaozi

Jiaozi(饺子) is a beloved Chinese delicacy, where a simple dough wrapper securely encases rich and delicious fillings.😋
