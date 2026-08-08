---
title: victim_to_owner
titleEn: victim_to_owner
category: mutators
subcategory: victim_player
tags:
  - libreforge
outline: deep
---

# victim_to_owner <Badge type="info" text="libreforge" />

> If the victim is a tamed animal, set the victim to be the owner of the animal

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `victim_to_owner` |
| 所属模块 | libreforge |
| 分类 | 目标/玩家（Victim/Player） |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/mutators/impl/MutatorVictimToOwner.kt`）。

- **源码描述**: Sets the victim to the tamed entity's owner.
- **所属分类**: `victim`

## 配置示例

```yaml
- id: victim_to_owner
```

## 关联页面

- [所有变异器](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有条件](../conditions/)
