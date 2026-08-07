---
title: jobs_level_up
titleZh: jobs_level_up
category: triggers
subcategory: external
tags:
  - libreforge
  - jobs-reborn
outline: deep
---

# jobs_level_up <Badge type="info" text="libreforge" /> <Badge type="warning" text="Jobs Reborn" />

> Triggered when levelling up a job

## Overview

| Property | Value |
|----------|-------|
| Type ID | `jobs_level_up` |
| Module | libreforge |
| Category | External Integration |
| Value | The new level |
| Requires | Jobs Reborn |

## Configuration Example

```yaml
triggers:
  - jobs_level_up
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)
