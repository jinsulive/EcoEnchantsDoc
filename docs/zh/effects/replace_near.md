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

> Replaces nearby blocks with other blocks

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `replace_near` |
| 所属模块 | libreforge |
| 分类 | 世界（World） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `radius` | The horizontal radius to replace |
| `radius_y` | The vertical radius to replace |
| `replace_to` | The block to replace to |
| `duration` | (Optional) The duration to replace for before returning back to the original state |
| `whitelist` | (Optional) A list of blocks to replace |
| `blacklist` | (Optional) A list of blocks to not replace |
| `exposed_only` | (Optional) If only blocks with air above them should be replaced |
| `source_only` | (Optional) If only source blocks should be replaced (for liquids) |
| `disable_on_sneak` | If the effect should not activate while sneaking |

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
