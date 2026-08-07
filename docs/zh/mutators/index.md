---
title: 所有变异器
titleEn: All Mutators
category: mutators
outline: deep
---

# 🔀 所有变异器

> 变异器（Mutators）在效果运行**之前**修改传给效果的数据。它们可以改变位置、受害者或玩家等参数。例如，`translate_location` 变异器可以移动粒子的生成位置。本节包含 libreforge 与 EcoEnchants 系统中所有可用 **变异器（Mutators）** 的完整参考。

::: tip 如何使用本页
点击下方任意卡片查看完整参数参考。可使用浏览器搜索（<kbd>Ctrl</kbd>+<kbd>F</kbd>）快速定位。
:::

## 变异器基础

与效果和条件一样，变异器由 **ID** 和 **参数（arguments）** 组成：

```yaml
mutators: # （可选）变异传给效果的数据
  - id: translate_location
    args:
      add_x: 0.5
      add_y: 0.5
      add_z: 0.5
```

::: tip 💡 重复时变异器再次运行
如果效果带有变异器，使用 `repeat` 参数时它们会在每次重复时再次运行。
:::

## 📊 概览

| 分类 | 数量 | 说明 |
|------|------|------|
| 位置 | 7 | 改变位置数据的变异器 |
| 目标/玩家 | 6 | 交换或改变目标/玩家/方块数据的变异器 |
| 旋转 | 3 | 旋转或转动数据的变异器 |
| 其他 | 1 | 其他变异器 |

总计：**17 个变异器**

---

## 🗂️ 按分类浏览

### 📍 位置变异器

<div class="card-grid">

<div class="card">
  <h3><a href="./translate_location">平移位置（Translate Location）</a></h3>
  <p>按指定的 x、y、z 值平移位置。</p>
</div>

<div class="card">
  <h3><a href="./location_to_player">位置移到玩家（Location To Player）</a></h3>
  <p>将位置移动到玩家的位置。</p>
</div>

<div class="card">
  <h3><a href="./location_to_victim">位置移到目标（Location To Victim）</a></h3>
  <p>将位置移动到目标的位置。</p>
</div>

<div class="card">
  <h3><a href="./location_to_block">位置移到方块（Location To Block）</a></h3>
  <p>将位置移动到方块的位置。</p>
</div>

<div class="card">
  <h3><a href="./block_to_location">方块移到位置（Block To Location）</a></h3>
  <p>将方块移动到位置处。</p>
</div>

<div class="card">
  <h3><a href="./location_to_cursor">位置移到准星（Location To Cursor）</a></h3>
  <p>将位置移动到玩家视线指向处。</p>
</div>

<div class="card">
  <h3><a href="./location_to_drop">位置移到掉落点（Location To Drop）</a></h3>
  <p>将位置移动到掉落位置。</p>
</div>

</div>

### 🎯 目标与玩家变异器

<div class="card-grid">

<div class="card">
  <h3><a href="./player_as_victim">玩家作为目标（Player As Victim）</a></h3>
  <p>将玩家设为目标。</p>
</div>

<div class="card">
  <h3><a href="./victim_as_player">目标作为玩家（Victim As Player）</a></h3>
  <p>将目标设为玩家。</p>
</div>

<div class="card">
  <h3><a href="./dispatcher_as_player">派发者作为玩家（Dispatcher As Player）</a></h3>
  <p>将派发者设为玩家。</p>
</div>

<div class="card">
  <h3><a href="./dispatcher_as_victim">派发者作为目标（Dispatcher As Victim）</a></h3>
  <p>将派发者设为目标。</p>
</div>

<div class="card">
  <h3><a href="./victim_as_dispatcher">目标作为派发者（Victim As Dispatcher）</a></h3>
  <p>将目标设为派发者。</p>
</div>

<div class="card">
  <h3><a href="./victim_to_owner">目标改为主人（Victim To Owner）</a></h3>
  <p>将目标设为实体的主人。</p>
</div>

<div class="card">
  <h3><a href="./player_to_pet">玩家改为宠物（Player To Pet）</a></h3>
  <p>将玩家设为宠物。</p>
</div>

</div>

### 🔄 旋转变异器

<div class="card-grid">

<div class="card">
  <h3><a href="./spin_location">旋转位置（Spin Location）</a></h3>
  <p>围绕玩家旋转位置。</p>
</div>

<div class="card">
  <h3><a href="./spin_velocity">旋转速度（Spin Velocity）</a></h3>
  <p>旋转速度。</p>
</div>

<div class="card">
  <h3><a href="./location_to_projectile">位置移到弹射物（Location To Projectile）</a></h3>
  <p>将位置移动到弹射物的位置。</p>
</div>

</div>

---

## 🔍 快速参考表

| 变异器 ID | 分类 | 简述 |
|-----------|------|------|
| `translate_location` | 位置 | 按 x/y/z 平移位置 |
| `location_to_player` | 位置 | 位置移到玩家 |
| `location_to_victim` | 位置 | 位置移到目标 |
| `location_to_block` | 位置 | 位置移到方块 |
| `block_to_location` | 位置 | 方块移到位置 |
| `location_to_cursor` | 位置 | 位置移到玩家准星 |
| `location_to_drop` | 位置 | 位置移到掉落点 |
| `player_as_victim` | 目标/玩家 | 玩家作为目标 |
| `victim_as_player` | 目标/玩家 | 目标作为玩家 |
| `dispatcher_as_player` | 目标/玩家 | 派发者作为玩家 |
| `dispatcher_as_victim` | 目标/玩家 | 派发者作为目标 |
| `victim_as_dispatcher` | 目标/玩家 | 目标作为派发者 |
| `victim_to_owner` | 目标/玩家 | 目标改为实体主人 |
| `player_to_pet` | 目标/玩家 | 玩家改为宠物 |
| `spin_location` | 旋转 | 旋转位置 |
| `spin_velocity` | 旋转 | 旋转速度 |
| `location_to_projectile` | 旋转 | 位置移到弹射物 |

## 关联页面

- [指南：Effect 基础](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
