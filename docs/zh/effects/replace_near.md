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
| `radius` | Expression | ✅ | — | — | 搜索方块的水平半径。支持数学表达式。 例: `3 + %level% * 0.3` |
| `radius_y` | Expression | ✅ | — | — | 搜索方块的垂直半径。支持数学表达式。 例: `2 + %level% * 0.2` |
| `replace_to` | Block | ✅ | — | — | 用于替换匹配方块的方块类型。 |
| `whitelist` | Block List | — | — | — | 允许被替换的方块类型列表。若省略，所有非空气方块均可被替换。 |
| `blacklist` | Block List | — | — | — | 永远不会被替换的方块类型列表。 |
| `duration` | Expression | — | — | — | 被替换方块恢复为原始类型的时长（以刻为单位）。支持数学表达式。 例: `20 * %level%` |
| `disable_on_sneak` | Boolean | — | `false` | — | 玩家潜行时是否跳过替换。 |
| `exposed_only` | Boolean | — | `false` | — | 是否仅替换正上方为空气的方块。 |
| `source_only` | Boolean | — | `false` | — | 是否仅替换源液体方块（等级 0）。 |

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
