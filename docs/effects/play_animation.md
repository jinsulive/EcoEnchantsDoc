---
title: play_animation
titleZh: play_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# play_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays a BetterModel animation on the triggering entity or victim.

> **Requires:** BetterModel

## Overview

| Property | Value |
|----------|-------|
| Type ID | `play_animation` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `animation` | String | ✅ | — | — | The name of the animation to play. |
| `mode` | String | — | `PLAY_ONCE` | — | The animation playback mode (e.g. PLAY_ONCE, LOOP). Defaults to PLAY_ONCE. |
| `self` | Boolean | — | `false` | — | Whether to show the animation only to the triggering player. |
| `override` | Boolean | — | — | — | Whether to override any currently playing animation. |
| `speed` | Double | — | — | — | Playback speed multiplier for the animation. |
| `start` | Integer | — | — | — | The frame index at which to start the animation. |
| `end` | Integer | — | — | — | The frame index at which to end the animation. |

## Configuration Example

```yaml
- id: play_animation
  args:
    animation: strike # The name of the animation
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
