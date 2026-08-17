---
title: drop_pickup_item
titleEn: drop_pickup_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_pickup_item <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 掉落一个拾取时运行效果链的物品。

> **需要依赖：** Paper

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `drop_pickup_item` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `item` | Item | ✅ | — | — | The item to drop at the trigger location. |
| `effects` | Any | ✅ | — | — | The effects to run when a player picks up the dropped item. |
| `glow-color` | String | — | — | — | The ChatColor name to make the dropped item glow with (e.g. RED, GOLD). |
| `run-type` | String | — | — | — | The chain executor type to use for the pickup effects. |

## 配置示例

```yaml
- id: drop_pickup_item
  args:
      item: diamond # The item texture, cannot actually be picked up
      glow-color: aqua # (Optional) The glow color, check here: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
      run-type: normal # (Optional) The run type, see 'configuring an effect'
      effects:
          - id: send_message
            args:
                message: "&a+ &b20 Crystals ❖"
          - id: give_price
            args:
                type: crystals
                value: 20
                display: ""
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
