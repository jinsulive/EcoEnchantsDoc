---
title: mob_coins_drop_multiplier
titleEn: mob_coins_drop_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# mob_coins_drop_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化掉落的怪物硬币数量。

> **需要依赖：** UltimateMobCoins

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `mob_coins_drop_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. |

## 配置示例

```yaml
- id: mob_coins_drop_multiplier
  args:
    multiplier: 1.5 # The drop multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
