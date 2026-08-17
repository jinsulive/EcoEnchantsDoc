---
title: chain_lightning
titleEn: chain_lightning
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# chain_lightning <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 释放连锁闪电，在附近的实体间跳跃。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `chain_lightning` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `jumps` | Expression | ✅ | — | — | The number of entities the lightning can chain to. Supports expressions. 例: `3 + %level%` |
| `range` | Expression | ✅ | — | — | The maximum distance between chain targets. Supports expressions. 例: `5 + %level% * 0.5` |
| `damage` | Expression | ✅ | — | — | The damage dealt to each entity struck. Supports expressions. 例: `%level% * 1.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectChainLightning.kt`）。

- **源码描述**: 释放连锁闪电，在附近实体间跳跃并对每次跳跃造成伤害。
- **所属分类**: `combat`, `visual`
- **需要触发器数据**: `VICTIM`, `LOCATION`

## 配置示例

```yaml
- id: chain_lightning
  args:
    jumps: 3 # The number of times the lightning jumps
    range: 6 # The range in blocks to look for the next target
    damage: 3.0 # The damage dealt to each entity hit
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
