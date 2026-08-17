---
title: RunOrder 枚举
titleEn: RunOrder Enum
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# RunOrder 枚举

> 来源：框架源码 · 5 个取值

> 用途：用于效果链执行顺序（如 `run_order`）。

| 值 | 含义 | 作用/说明 |
|----|------|-----------|
| `START` | 起始 | 最先执行 |
| `EARLY` | 较早 | 在较早阶段执行 |
| `NORMAL` | 正常 | 在正常阶段执行 |
| `LATE` | 较晚 | 在较晚阶段执行 |
| `END` | 末尾 | 最后执行 |

[← 返回枚举总览](../enums)
