---
title: BlockFace Enum
titleZh: BlockFace 枚举
category: reference
subcategory: enums
tags:
  - libreforge
outline: deep
---

# BlockFace Enum

> Source: Paper API · 19 values

> Purpose: Used for directional/offset parameters (e.g. `offset` in `aoe`).

| Value | Meaning | Notes |
|-------|---------|-------|
| `NORTH` | North | Negative Z |
| `EAST` | East | Positive X |
| `SOUTH` | South | Positive Z |
| `WEST` | West | Negative X |
| `UP` | Up | Positive Y |
| `DOWN` | Down | Negative Y |
| `NORTH_EAST` | North-East | Diagonal between north and east |
| `NORTH_WEST` | North-West | Diagonal between north and west |
| `SOUTH_EAST` | South-East | Diagonal between south and east |
| `SOUTH_WEST` | South-West | Diagonal between south and west |
| `WEST_NORTH_WEST` | West-North-West | Between west and north-west |
| `NORTH_NORTH_WEST` | North-North-West | Between north and north-west |
| `NORTH_NORTH_EAST` | North-North-East | Between north and north-east |
| `EAST_NORTH_EAST` | East-North-East | Between east and north-east |
| `EAST_SOUTH_EAST` | East-South-East | Between east and south-east |
| `SOUTH_SOUTH_EAST` | South-South-East | Between south and south-east |
| `SOUTH_SOUTH_WEST` | South-South-West | Between south and south-west |
| `WEST_SOUTH_WEST` | West-South-West | Between west and south-west |
| `SELF` | Self | The block itself (no offset) |

[← Back to Enum Overview](../enums)
