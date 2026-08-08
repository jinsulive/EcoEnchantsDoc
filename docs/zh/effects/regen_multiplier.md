---
title: regen_multiplier
titleEn: regen_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# regen_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies regen speed

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `regen_multiplier` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Custom | — | — | — | The multiplier for regeneration speed |
| `reason` | Custom | — | — | — | Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRegenMultiplier.kt`）。

- **源码描述**: Multiplies the amount of health regenerated.
- **所属分类**: `player`, `combat`

## 配置示例

```yaml
- id: regen_multiplier
  args:
    multiplier: 2 # The multiplier for regeneration speed
    reason: # Optional: The types of regen to multiply, list is here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html
      - magic
      - magic_regen
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
