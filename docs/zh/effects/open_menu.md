---
title: open_menu
titleEn: open_menu
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# open_menu <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 打开 EcoMenus 菜单。

> **需要依赖：** EcoMenus

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `open_menu` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `menu` | 要打开的菜单，在 /menus/ 文件夹中配置。 |

## 配置示例

```yaml
- id: open_menu
  args:
    menu: menu_id # The menu to open, configured in /menus/ folder
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
