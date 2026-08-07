---
title: All Mutators
titleZh: 所有变异器
category: mutators
outline: deep
---

# 🔀 All Mutators

> Mutators modify the data passed to an effect **before it runs**. They allow you to change parameters such as the location, the victim, or the player. For example, a `translate_location` mutator can shift where a particle spawns. This section contains a complete reference of all available **Mutators** in the libreforge & EcoEnchants system.

::: tip How to use this page
Click any card below to view the full parameter reference. Use your browser's search (<kbd>Ctrl</kbd>+<kbd>F</kbd>) to quickly find specific mutators.
:::

## Mutator Basics

Like effects and conditions, a mutator consists of an **ID** and **arguments**:

```yaml
mutators: # (Optional) Mutate the data sent to the effect
  - id: translate_location
    args:
      add_x: 0.5
      add_y: 0.5
      add_z: 0.5
```

::: tip 💡 Mutators Run Again on Repeat
If an effect has any mutators, they will run again for each repeat when the `repeat` argument is used.
:::

## 📊 Overview

| Category | Count | Description |
|----------|-------|-------------|
| Location | 7 | Mutators that change the location data |
| Victim/Player | 6 | Mutators that swap or change victim/player/block data |
| Rotation | 3 | Mutators that rotate or spin data |
| Misc | 1 | Other mutators |

Total: **17 mutators**

---

## 🗂️ Browse by Category

### 📍 Location Mutators

<div class="card-grid">

<div class="card">
  <h3><a href="./translate_location">Translate Location</a></h3>
  <p>Translate the location by specified x, y, and z values.</p>
</div>

<div class="card">
  <h3><a href="./location_to_player">Location To Player</a></h3>
  <p>Move the location to the player's location.</p>
</div>

<div class="card">
  <h3><a href="./location_to_victim">Location To Victim</a></h3>
  <p>Move the location to the victim's location.</p>
</div>

<div class="card">
  <h3><a href="./location_to_block">Location To Block</a></h3>
  <p>Move the location to the block's location.</p>
</div>

<div class="card">
  <h3><a href="./block_to_location">Block To Location</a></h3>
  <p>Move the block to the location.</p>
</div>

<div class="card">
  <h3><a href="./location_to_cursor">Location To Cursor</a></h3>
  <p>Move the location to where the player is looking.</p>
</div>

<div class="card">
  <h3><a href="./location_to_drop">Location To Drop</a></h3>
  <p>Move the location to the drop location.</p>
</div>

</div>

### 🎯 Victim & Player Mutators

<div class="card-grid">

<div class="card">
  <h3><a href="./player_as_victim">Player As Victim</a></h3>
  <p>Set the player as the victim.</p>
</div>

<div class="card">
  <h3><a href="./victim_as_player">Victim As Player</a></h3>
  <p>Set the victim as the player.</p>
</div>

<div class="card">
  <h3><a href="./dispatcher_as_player">Dispatcher As Player</a></h3>
  <p>Set the dispatcher as the player.</p>
</div>

<div class="card">
  <h3><a href="./dispatcher_as_victim">Dispatcher As Victim</a></h3>
  <p>Set the dispatcher as the victim.</p>
</div>

<div class="card">
  <h3><a href="./victim_as_dispatcher">Victim As Dispatcher</a></h3>
  <p>Set the victim as the dispatcher.</p>
</div>

<div class="card">
  <h3><a href="./victim_to_owner">Victim To Owner</a></h3>
  <p>Set the victim to the owner of the entity.</p>
</div>

<div class="card">
  <h3><a href="./player_to_pet">Player To Pet</a></h3>
  <p>Set the player to the pet.</p>
</div>

</div>

### 🔄 Rotation Mutators

<div class="card-grid">

<div class="card">
  <h3><a href="./spin_location">Spin Location</a></h3>
  <p>Spin the location around the player.</p>
</div>

<div class="card">
  <h3><a href="./spin_velocity">Spin Velocity</a></h3>
  <p>Spin the velocity.</p>
</div>

<div class="card">
  <h3><a href="./location_to_projectile">Location To Projectile</a></h3>
  <p>Move the location to the projectile's location.</p>
</div>

</div>

---

## 🔍 Quick Reference

| Mutator ID | Category | Brief |
|------------|----------|-------|
| `translate_location` | Location | Translate location by x/y/z |
| `location_to_player` | Location | Move location to the player |
| `location_to_victim` | Location | Move location to the victim |
| `location_to_block` | Location | Move location to the block |
| `block_to_location` | Location | Move the block to the location |
| `location_to_cursor` | Location | Move location to the player's cursor |
| `location_to_drop` | Location | Move location to the drop location |
| `player_as_victim` | Victim/Player | Set player as victim |
| `victim_as_player` | Victim/Player | Set victim as player |
| `dispatcher_as_player` | Victim/Player | Set dispatcher as player |
| `dispatcher_as_victim` | Victim/Player | Set dispatcher as victim |
| `victim_as_dispatcher` | Victim/Player | Set victim as dispatcher |
| `victim_to_owner` | Victim/Player | Set victim to entity owner |
| `player_to_pet` | Victim/Player | Set player to the pet |
| `spin_location` | Rotation | Spin the location |
| `spin_velocity` | Rotation | Spin the velocity |
| `location_to_projectile` | Rotation | Move location to the projectile |

## Related Pages

- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
