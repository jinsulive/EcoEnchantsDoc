---
title: Overview
titleZh: 总览
category: guide
outline: deep
---

# 📖 Overview

> This documentation covers the **libreforge** effect framework and its integration with **EcoEnchants**, the enchantment plugin powered by the eco ecosystem. It is a bilingual (English / 简体中文) reference directly deployable as a VitePress site.

## What is libreforge?

**libreforge** is the effects engine that powers all Auxilor "eco" plugins. It provides a unified, data-driven effect system: instead of writing code, server owners configure **Effects**, **Triggers**, **Conditions**, **Filters**, and **Mutators** in YAML files to create virtually any gameplay mechanic — damage, healing, particles, economy, progression, and more.

The system contains **over 200 effects, over 100 triggers, and over 100 conditions**, all configurable without writing a single line of Java.

## What is EcoEnchants?

**EcoEnchants** is a custom enchantment plugin built on top of eco and libreforge. It lets you create fully custom enchantments — each enchantment is its own config file that uses the libreforge effect system to define its gameplay behavior. Enchantment levels can be referenced with the `%level%` placeholder to scale effect parameters dynamically.

## Documentation Structure

| Section | Description |
|---------|-------------|
| [Guide](./effect-basics) | Effect system basics, YAML structure, common arguments |
| [Effects](../effects/) | All available effects with full parameter references |
| [Triggers](../triggers/) | All triggers that activate triggered effects |
| [Conditions](../conditions/) | All conditions that gate effect activation |
| [Mutators](../mutators/) | All mutators that transform effect data |
| [Examples](../examples/) | Ready-to-use configuration recipes |

## Ecosystem Overview

```
eco (core library)
 ├── Math expressions & placeholders
 ├── Price system
 ├── Points system
 └── Shared config utilities
        │
        ▼
libreforge (effects framework)
 ├── Effects (actions)
 ├── Triggers (events)
 ├── Conditions (requirements)
 ├── Filters (trigger narrow-down)
 └── Mutators (data transformation)
        │
        ▼
EcoEnchants (enchantment plugin)
 └── Custom enchantments = YAML configs using the effect system
```

::: tip 💡 Note
This documentation is based on the official Auxilor wiki at [plugins.auxilor.io](https://plugins.auxilor.io/). Where the source is ambiguous or incomplete, a 📝 Editor's Note marks the clarification.
:::
