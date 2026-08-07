---
title: has_completed_task
titleEn: has_completed_task
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_completed_task <Badge type="info" text="libreforge" />

> Requires a player to have completed task for a quest

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_completed_task` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `quest` | The quest ID |
| `task` | The task ID |

## 配置示例

```yaml
- id: has_completed_task
  args:
    quest: magic_miner # The quest ID
    task: mine_diamonds # The task ID
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
