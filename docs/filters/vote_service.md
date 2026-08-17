---
title: vote_service
titleZh: vote_service
category: filters
subcategory: votifier
tags:
  - libreforge
outline: deep
---

# vote_service <Badge type="info" text="libreforge" /> <Badge type="info" text="Filter" />

> Matches when the vote service name matches one of the given service names.

> **Requires:** Votifier

## Overview

| Property | Value |
|----------|-------|
| Type ID | `vote_service` |
| Module | libreforge |
| Category | Player |
| Value Type | `STRING_LIST` |

## Usage

Filters are configured as a YAML map under the `filters` key. The filter ID is the key and the value depends on the filter:

```yaml
filters:
  vote_service: <value>
```

## Inverting

Prefix the filter ID with `not_` to invert it (`not_vote_service`):

```yaml
filters:
  not_vote_service: <value>
```

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/votifier/impl/FilterVoteService.kt`).

- **Source Description**: Matches when the vote service name matches one of the given service names.

- **Categories**: `player`

## Related Pages

- [All Filters](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
