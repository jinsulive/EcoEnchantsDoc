---
title: replace_near
titleEn: replace_near
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# replace_near <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将附近的方块替换为其他方块。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `replace_near` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `radius` | Expression(数学表达式) | ✅ | — | — | 替换的水平半径。支持表达式。示例：`3 + %level% * 0.3` |
| `radius_y` | Expression(数学表达式) | ✅ | — | — | 替换的垂直半径。支持表达式。示例：`2 + %level% * 0.2` |
| `replace_to` | Block | ✅ | — | — | 替换目标方块类型。 |
| `duration` | Expression(数学表达式) | — | — | — | （可选）替换后恢复原状的持续时间（以游戏刻为单位）。支持表达式。示例：`20 * %level%` |
| `whitelist` | Block List | — | — | — | （可选）允许被替换的方块类型列表。省略时所有非空气方块均可被替换。 |
| `blacklist` | Block List | — | — | — | （可选）永远不会被替换的方块类型列表。 |
| `exposed_only` | Boolean | — | `false` | — | （可选）是否仅替换正上方为空气的方块。 |
| `source_only` | Boolean | — | `false` | — | （可选）是否仅替换液体源方块（level 0）。 |
| `disable_on_sneak` | Boolean | — | `false` | — | 潜行时是否不执行替换。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReplaceNear.kt`）。

- **源码描述**: 在触发位置周围的指定半径内，将一种方块替换为另一种。
- **所属分类**: `world`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: replace_near
  args:
    radius: 5 # The horizontal radius to replace
    radius_y: 5 # The vertical radius to replace
    replace_to: obsidian # The block to replace to
    duration: 40 # (Optional) The duration to replace for before returning back to the original state
    whitelist: # (Optional) A list of blocks to replace
      - lava
    exposed_only: true # (Optional) If only blocks with air above them should be replaced
    source_only: true # (Optional) If only source blocks should be replaced (for liquids)
    disable_on_sneak: true # If the effect should not activate while sneaking
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
