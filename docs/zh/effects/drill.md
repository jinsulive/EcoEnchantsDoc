---
title: drill
titleEn: drill
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# drill <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Mine blocks behind the initial mined block

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drill` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of blocks to mine \| Source: The number of blocks to break in a line. Supports expressions. Example: `3 + %level%` |
| `blacklisted_blocks` | Block List | — | — | — | The blocks to not mine \| Source: These block types will never be broken by the drill. |
| `check_hardness` | Boolean | ✅ | — | — | If only blocks with the same (or lower) hardness than the mined block can be broken \| Source: If true, only blocks with hardness ≤ the trigger block are broken. |
| `disable_on_sneak` | Boolean | — | `false` | — | If the effect shouldn't activate while sneaking \| Source: If true, the drill effect is disabled while the player is sneaking. |
| `whitelist` | Block List | — | — | — | The only blocks allowed to mine \| Source: Only these block types will be broken by the drill. |
| `prevent_trigger` | Boolean | — | `false` | — | If true, breaking additional blocks will not fire further libreforge triggers. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDrill.kt`）。

- **源码描述**: Breaks a line of blocks in front of the player in their look direction.
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: drill
  args:
    amount: 4 # The amount of blocks to mine
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
