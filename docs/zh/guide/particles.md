---
title: 粒子类型
titleEn: Particle Types
category: guide
outline: deep
---

# 粒子类型

> 本页列出 Paper API `org.bukkit.Particle` 枚举中的全部 **115** 个内置粒子类型，可在 `spawn_particle`、`particle_animation`、`particle_line` 等效果的 `particle` 参数中使用。

## 数据类型说明

**Data Type（数据类型）**列说明通过 Bukkit/Paper API 生成该粒子时是否需要附加数据：

| 数据类型 | 说明 |
|---------|------|
| `—`（无） | 无需附加数据，可直接生成。 |
| `Particle.DustOptions` | 彩色粉尘的颜色与大小（如 `dust`）。 |
| `Particle.DustTransition` | 渐变粉尘的起始/结束颜色与大小。 |
| `Color` | ARGB/RGB 颜色（如 `entity_effect`、`flash`）。 |
| `BlockData` | 方块状态（如 `block`、`falling_dust`）。 |
| `ItemStack` | 物品堆（如 `item`）。 |
| `Vibration` | 振动目标位置与到达时间。 |
| `Particle.Trail` | 目标位置、颜色与持续时间。 |
| `Particle.Spell` | 咒语类型（如 `effect`、`instant_effect`）。 |
| `Float` | 浮点数值（如 `dragon_breath`、`sculk_charge`）。 |
| `Integer` | 整数值（如 `shriek` 的延迟刻数）。 |

如果粒子需要数据，生成时必须传入对应的数据对象，否则粒子将无法正常显示。

## 完整粒子列表

| 粒子（key） | Java 枚举 | 数据类型 | 描述 |
|------------|-----------|---------|------|
| `angry_villager` | `ANGRY_VILLAGER` | — | 愤怒村民头顶的乌云。 |
| `ash` | `ASH` | — | 玄武岩三角洲飘落的灰烬。 |
| `block` | `BLOCK` | BlockData | 方块破碎的粒子，需要 BlockData。 |
| `block_crumble` | `BLOCK_CRUMBLE` | BlockData | 崩落的方块碎块，需要 BlockData。 |
| `block_marker` | `BLOCK_MARKER` | BlockData | 方块轮廓标记，需要 BlockData。 |
| `bubble` | `BUBBLE` | — | 在水中上升的气泡。 |
| `bubble_column_up` | `BUBBLE_COLUMN_UP` | — | 向上的气泡柱。 |
| `bubble_pop` | `BUBBLE_POP` | — | 气泡破裂时的迸发。 |
| `campfire_cosy_smoke` | `CAMPFIRE_COSY_SMOKE` | — | 点燃的篝火升起的轻烟。 |
| `campfire_signal_smoke` | `CAMPFIRE_SIGNAL_SMOKE` | — | 信号篝火升起的浓烟。 |
| `cherry_leaves` | `CHERRY_LEAVES` | — | 樱花树飘落的粉色花瓣。 |
| `cloud` | `CLOUD` | — | 白色云雾团。 |
| `composter` | `COMPOSTER` | — | 堆肥桶中堆肥时产生的颗粒。 |
| `copper_fire_flame` | `COPPER_FIRE_FLAME` | — | 铜火的青绿色火焰。 |
| `crimson_spore` | `CRIMSON_SPORE` | — | 绯红森林飘散的孢子。 |
| `crit` | `CRIT` | — | 暴击产生的小星星火花。 |
| `current_down` | `CURRENT_DOWN` | — | 气泡柱中向下的水流。 |
| `damage_indicator` | `DAMAGE_INDICATOR` | — | 实体上方显示受伤的红色爱心。 |
| `dolphin` | `DOLPHIN` | — | 海豚游动留下的轨迹。 |
| `dragon_breath` | `DRAGON_BREATH` | Float | 龙息，需要 Float 控制扩散。 |
| `dripping_dripstone_lava` | `DRIPPING_DRIPSTONE_LAVA` | — | 滴水石锥滴落的岩浆。 |
| `dripping_dripstone_water` | `DRIPPING_DRIPSTONE_WATER` | — | 滴水石锥滴落的水。 |
| `dripping_honey` | `DRIPPING_HONEY` | — | 从方块滴落的蜂蜜。 |
| `dripping_lava` | `DRIPPING_LAVA` | — | 从方块滴落的岩浆滴。 |
| `dripping_obsidian_tear` | `DRIPPING_OBSIDIAN_TEAR` | — | 从方块滴落的黑曜石之泪。 |
| `dripping_water` | `DRIPPING_WATER` | — | 从方块滴落的水滴。 |
| `dust` | `DUST` | Particle.DustOptions | 可着色的彩色粉尘，需要 DustOptions（颜色 + 大小）。 |
| `dust_color_transition` | `DUST_COLOR_TRANSITION` | Particle.DustTransition | 在两种颜色之间渐变的粉尘，需要 DustTransition。 |
| `dust_pillar` | `DUST_PILLAR` | BlockData | 刷子扬起的粉尘柱，需要 BlockData。 |
| `dust_plume` | `DUST_PLUME` | — | 考古刷清扫时扬起的粉尘柱。 |
| `effect` | `EFFECT` | Particle.Spell | 魔法咒语粒子，可通过 Particle.Spell 数据着色。 |
| `egg_crack` | `EGG_CRACK` | — | 蛋孵化时出现的裂纹。 |
| `elder_guardian` | `ELDER_GUARDIAN` | — | 远古守卫者施加的诅咒效果。 |
| `electric_spark` | `ELECTRIC_SPARK` | — | 避雷针产生的电火花。 |
| `enchant` | `ENCHANT` | — | 附魔台上飘起的发光符文。 |
| `enchanted_hit` | `ENCHANTED_HIT` | — | 附魔（魔法）暴击的紫色火花。 |
| `end_rod` | `END_ROD` | — | 末地烛发出的闪光光束。 |
| `entity_effect` | `ENTITY_EFFECT` | Color | 实体效果的彩色粒子（如喷溅药水），需要 Color。 |
| `explosion` | `EXPLOSION` | — | 大型爆炸的闪光。 |
| `explosion_emitter` | `EXPLOSION_EMITTER` | — | 大型爆炸效果的发射器。 |
| `falling_dripstone_lava` | `FALLING_DRIPSTONE_LAVA` | — | 滴水石锥正在下落的岩浆。 |
| `falling_dripstone_water` | `FALLING_DRIPSTONE_WATER` | — | 滴水石锥正在下落的水。 |
| `falling_dust` | `FALLING_DUST` | BlockData | 下落的方块粉尘，需要 BlockData。 |
| `falling_honey` | `FALLING_HONEY` | — | 正在下落的蜂蜜滴。 |
| `falling_lava` | `FALLING_LAVA` | — | 从方块滴落、正在下落的岩浆滴。 |
| `falling_nectar` | `FALLING_NECTAR` | — | 下落的甘露滴（滴叶杜鹃）。 |
| `falling_obsidian_tear` | `FALLING_OBSIDIAN_TEAR` | — | 从方块滴落、正在下落的黑曜石之泪。 |
| `falling_spore_blossom` | `FALLING_SPORE_BLOSSOM` | — | 孢子花飘落的孢子。 |
| `falling_water` | `FALLING_WATER` | — | 从方块滴落、正在下落的水滴。 |
| `firefly` | `FIREFLY` | — | 发光的萤火虫粒子。 |
| `firework` | `FIREWORK` | — | 烟花火箭留下的火花尾迹。 |
| `fishing` | `FISHING` | — | 鱼钩入水激起的水花。 |
| `flame` | `FLAME` | — | 小火苗粒子。 |
| `flash` | `FLASH` | Color | 明亮的闪光，需要 Color。 |
| `glow` | `GLOW` | — | 发光鱿鱼留下的发光光点。 |
| `glow_squid_ink` | `GLOW_SQUID_INK` | — | 发光鱿鱼喷出的发光墨汁云。 |
| `gust` | `GUST` | — | 旋风人（Breeze）产生的风弹。 |
| `gust_emitter_large` | `GUST_EMITTER_LARGE` | — | 大型风弹发射器。 |
| `gust_emitter_small` | `GUST_EMITTER_SMALL` | — | 小型风弹发射器。 |
| `happy_villager` | `HAPPY_VILLAGER` | — | 交易中的村民头顶的绿色闪光。 |
| `heart` | `HEART` | — | 繁殖/爱心模式产生的爱心。 |
| `infested` | `INFESTED` | — | 被蠹虫感染的方块产生的颗粒。 |
| `instant_effect` | `INSTANT_EFFECT` | Particle.Spell | 瞬间效果咒语粒子（如瞬间治疗）。 |
| `item` | `ITEM` | ItemStack | 物品破碎的粒子，需要 ItemStack。 |
| `item_cobweb` | `ITEM_COBWEB` | — | 蜘蛛网破碎时的颗粒。 |
| `item_slime` | `ITEM_SLIME` | — | 粘液球破碎的粒子。 |
| `item_snowball` | `ITEM_SNOWBALL` | — | 雪球破碎的粒子。 |
| `landing_honey` | `LANDING_HONEY` | — | 蜂蜜滴落地时的溅射。 |
| `landing_lava` | `LANDING_LAVA` | — | 岩浆滴落地时的溅射。 |
| `landing_obsidian_tear` | `LANDING_OBSIDIAN_TEAR` | — | 黑曜石之泪落地时的溅射。 |
| `large_smoke` | `LARGE_SMOKE` | — | 更大、扩散更慢的烟雾团。 |
| `lava` | `LAVA` | — | 岩浆中迸出的火花。 |
| `mycelium` | `MYCELIUM` | — | 菌丝体飘散的微小孢子。 |
| `nautilus` | `NAUTILUS` | — | 鹦鹉螺壳发出的闪光。 |
| `note` | `NOTE` | — | 音符盒弹出的音符。 |
| `ominous_spawning` | `OMINOUS_SPAWNING` | — | 不祥试炼刷怪笼生成时的粒子。 |
| `pale_oak_leaves` | `PALE_OAK_LEAVES` | — | 苍白橡树飘落的树叶。 |
| `poof` | `POOF` | — | 小型爆炸产生的一团烟雾。 |
| `portal` | `PORTAL` | — | 紫色的传送门漩涡。 |
| `raid_omen` | `RAID_OMEN` | — | 玩家带有袭击之兆时的效果。 |
| `rain` | `RAIN` | — | 落在地面上的雨滴溅射。 |
| `reverse_portal` | `REVERSE_PORTAL` | — | 返回（反向）传送门的紫色漩涡。 |
| `scrape` | `SCRAPE` | — | 刮去铜块氧化层时的颗粒。 |
| `sculk_charge` | `SCULK_CHARGE` | Float | 从幽匿方块扩散的能量波，需要 Float（角度）。 |
| `sculk_charge_pop` | `SCULK_CHARGE_POP` | — | 幽匿能量波抵达目标时的爆发。 |
| `sculk_soul` | `SCULK_SOUL` | — | 幽匿方块发出的蓝色灵魂火焰。 |
| `shriek` | `SHRIEK` | Integer | 幽匿尖啸体发出的尖啸，需要 Integer（延迟刻数）。 |
| `small_flame` | `SMALL_FLAME` | — | 小火焰（如蜡烛）。 |
| `small_gust` | `SMALL_GUST` | — | 小型风弹。 |
| `smoke` | `SMOKE` | — | 一小团烟雾。 |
| `sneeze` | `SNEEZE` | — | 熊猫打喷嚏喷出的云。 |
| `snowflake` | `SNOWFLAKE` | — | 飘落的雪花。 |
| `sonic_boom` | `SONIC_BOOM` | — | 循声守卫音爆的圆环。 |
| `soul` | `SOUL` | — | 漂浮的灵魂粒子。 |
| `soul_fire_flame` | `SOUL_FIRE_FLAME` | — | 灵魂火的蓝色火焰。 |
| `spit` | `SPIT` | — | 羊驼吐出的口水。 |
| `splash` | `SPLASH` | — | 飞溅而起的水花。 |
| `spore_blossom_air` | `SPORE_BLOSSOM_AIR` | — | 孢子花周围空气中飘浮的孢子。 |
| `squid_ink` | `SQUID_INK` | — | 鱿鱼喷出的墨汁云。 |
| `sweep_attack` | `SWEEP_ATTACK` | — | 剑横扫攻击的弧线。 |
| `tinted_leaves` | `TINTED_LEAVES` | Color | 用 Color 着色的飘落树叶。 |
| `totem_of_undying` | `TOTEM_OF_UNDYING` | — | 不死图腾激活时的绿色圆环。 |
| `trail` | `TRAIL` | Particle.Trail | 飞向目标位置的彩色轨迹，需要 Trail。 |
| `trial_omen` | `TRIAL_OMEN` | — | 玩家带有试炼之兆时的效果。 |
| `trial_spawner_detection` | `TRIAL_SPAWNER_DETECTION` | — | 试炼刷怪笼发出的侦测脉冲。 |
| `trial_spawner_detection_ominous` | `TRIAL_SPAWNER_DETECTION_OMINOUS` | — | 不祥试炼刷怪笼发出的侦测脉冲。 |
| `underwater` | `UNDERWATER` | — | 水下的细微环境气泡。 |
| `vault_connection` | `VAULT_CONNECTION` | — | 宝库钥匙与宝库之间的连接光束。 |
| `vibration` | `VIBRATION` | Vibration | 传向目标位置的振动波，需要 Vibration。 |
| `warped_spore` | `WARPED_SPORE` | — | 诡异森林飘散的孢子。 |
| `wax_off` | `WAX_OFF` | — | 刮掉铜块蜡层时的火花。 |
| `wax_on` | `WAX_ON` | — | 给铜块涂蜡时的火花。 |
| `white_ash` | `WHITE_ASH` | — | 灵魂沙峡谷飘落的白灰。 |
| `white_smoke` | `WHITE_SMOKE` | — | 白色烟雾柱（如篝火）。 |
| `witch` | `WITCH` | — | 女巫魔法产生的绿色闪光。 |

## 使用示例

### 无需数据

```yaml
- id: spawn_particle
  args:
    particle: flame # 简单粒子，无需附加数据
    amount: 10 # 要生成的粒子数量
  ...other config (eg triggers, filters, mutators, etc)
```

### 带数据

像 `dust` 这样的粒子在通过 API 生成时需要传入数据对象（此处为 `Particle.DustOptions`，用于定义颜色与大小）：

```yaml
- id: spawn_particle
  args:
    particle: dust # 彩色粉尘 - 需要 DustOptions 数据对象（颜色 + 大小）
    amount: 10 # 要生成的粒子数量
  ...other config (eg triggers, filters, mutators, etc)
```

## 带数据粒子示例

上方表格中的部分粒子在通过 Bukkit/Paper API 生成时需要附加一个**数据对象**（即「数据类型」列）。本节针对 18 个带数据粒子逐一说明：数据对象含义、YAML 中可用的写法，以及如何在 Java 中携带完整数据生成。

### spawn_particle 如何处理粒子字符串

libreforge 的 `spawn_particle` 效果只读取一个 `particle` 参数（即 **eco particle string**），并通过 `Particles.lookup(...)` 生成。字符串语法为：

- **单 token**（无冒号，如 `flame`、`dust`）：将值大写后直接映射到 `org.bukkit.Particle` 枚举。
- **带冒号**（如 `rgb:ff0000`）：`名字:参数` 形式，用 `名字` 匹配已注册的**粒子工厂（ParticleFactory）**，由工厂根据参数创建带数据的粒子。
- 无法识别的 key 会解析为**空粒子**（什么都不生成）。

对 `spawn_particle` 配置中的带数据粒子而言：

- **无数据粒子**（如 `flame`）：直接可用。
- **Float 数据粒子**（`dragon_breath`、`sculk_charge`）：直接可用——libreforge 会自动传入 `1f`。
- **其余带数据粒子**（BlockData、ItemStack、Color、DustOptions、DustTransition、Vibration、Spell、Trail、Integer）：SimpleParticle 生成时**不传数据对象**，效果可能不可见或使用默认外观。这类粒子建议使用 **RGB 颜色工厂**（仅对粉尘类粒子有效，见下文）或直接通过 **Bukkit/Paper API** 生成（见本节 Java 示例）。
- **高级用法**：可注册自定义 `ParticleFactory`（实现 `getNames()` 与 `create(String key)` 两个方法）来扩展 eco particle string，支持自己的带数据粒子。

下方 Java 示例假定 `world` 为 `World`、`location` 为 `Location`，统一使用 `world.spawnParticle(Particle.X, location, count, offsetX, offsetY, offsetZ, speed, data)` 形式。

### BlockData 组 —— `block`、`falling_dust`、`dust_pillar`、`block_crumble`、`block_marker`

`BlockData`（`org.bukkit.block.data.BlockData`）描述**方块数据**——方块材质及可选的方块状态属性。通过 `Bukkit.createBlockData(Material.X)` 获取。

#### `block` — `BLOCK` · BlockData

方块破碎的粒子；数据用于指定破碎的方块材质。

```yaml
- id: spawn_particle
  args:
    particle: block
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中该粒子不会携带 `BlockData`，可能无法正常显示。请使用 Bukkit API 提供方块数据：

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.STONE);
world.spawnParticle(Particle.BLOCK, location, 10, 0.5, 0.5, 0.5, 0, data);
```

#### `falling_dust` — `FALLING_DUST` · BlockData

下落的方块粉尘；数据用于指定下落的方块材质。

```yaml
- id: spawn_particle
  args:
    particle: falling_dust
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `BlockData`。请使用 Bukkit API：

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.SAND);
world.spawnParticle(Particle.FALLING_DUST, location, 10, 0, 0, 0, 0, data);
```

#### `dust_pillar` — `DUST_PILLAR` · BlockData

刷子扬起的粉尘柱；数据用于指定被刷方块材质。

```yaml
- id: spawn_particle
  args:
    particle: dust_pillar
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `BlockData`。请使用 Bukkit API：

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.DIRT);
world.spawnParticle(Particle.DUST_PILLAR, location, 10, 0.2, 0.2, 0.2, 0, data);
```

#### `block_crumble` — `BLOCK_CRUMBLE` · BlockData

崩落的方块碎块；数据用于指定崩落的方块材质。

```yaml
- id: spawn_particle
  args:
    particle: block_crumble
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `BlockData`。请使用 Bukkit API：

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.SANDSTONE);
world.spawnParticle(Particle.BLOCK_CRUMBLE, location, 10, 0.3, 0.3, 0.3, 0, data);
```

#### `block_marker` — `BLOCK_MARKER` · BlockData

方块轮廓标记；数据用于指定显示轮廓的方块材质。

```yaml
- id: spawn_particle
  args:
    particle: block_marker
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `BlockData`。请使用 Bukkit API：

```java
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.data.BlockData;

BlockData data = Bukkit.createBlockData(Material.STONE);
world.spawnParticle(Particle.BLOCK_MARKER, location, 10, 0, 0, 0, 0, data);
```

### Color 组 —— `entity_effect`、`flash`、`tinted_leaves`

`Color`（`org.bukkit.Color`）是 ARGB/RGB 颜色。可使用常量（`Color.RED`、`Color.BLUE`……）或 `Color.fromRGB(0xRRGGBB)`。

#### `entity_effect` — `ENTITY_EFFECT` · Color

实体效果的彩色粒子（如喷溅药水）；数据为粒子颜色。

```yaml
- id: spawn_particle
  args:
    particle: entity_effect
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Color`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.ENTITY_EFFECT, location, 1, 0, 0, 0, 0, Color.RED);
```

#### `flash` — `FLASH` · Color

明亮的闪光；数据为闪光颜色。

```yaml
- id: spawn_particle
  args:
    particle: flash
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Color`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.FLASH, location, 1, 0, 0, 0, 0, Color.WHITE);
```

#### `tinted_leaves` — `TINTED_LEAVES` · Color

用颜色着色的飘落树叶；数据为着色颜色。

```yaml
- id: spawn_particle
  args:
    particle: tinted_leaves
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Color`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

world.spawnParticle(Particle.TINTED_LEAVES, location, 10, 0.5, 0.5, 0.5, 0, Color.fromRGB(0x00ff00));
```

### Float 组 —— `dragon_breath`、`sculk_charge` ✅

`Float` 数据用作速度/扩散或角度。这两个粒子是唯一在 `spawn_particle` 中**直接可用**的带数据粒子：libreforge 会自动传入 `1f`。

#### `dragon_breath` — `DRAGON_BREATH` · Float

龙息；数据用于控制扩散。

```yaml
- id: spawn_particle
  args:
    particle: dragon_breath # Float 数据 - libreforge 自动传入 1f
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

如需精确控制数值，请使用 Bukkit API：

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.DRAGON_BREATH, location, 10, 0.5, 0.5, 0.5, 0, 1f);
```

#### `sculk_charge` — `SCULK_CHARGE` · Float

从幽匿方块扩散的能量波；数据为角度（度）。

```yaml
- id: spawn_particle
  args:
    particle: sculk_charge # Float 数据 - libreforge 自动传入 1f
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

如需精确控制角度，请使用 Bukkit API：

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.SCULK_CHARGE, location, 1, 0, 0, 0, 0, 0f); // 角度（度）
```

### Integer 组 —— `shriek`

`Integer` 数据为普通整数值（此处指延迟刻数）。

#### `shriek` — `SHRIEK` · Integer

幽匿尖啸体发出的尖啸；数据为尖啸出现前的延迟刻数。

```yaml
- id: spawn_particle
  args:
    particle: shriek
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中延迟始终为 `0`（立即尖啸）。如需自定义延迟请使用 Bukkit API：

```java
import org.bukkit.Particle;

world.spawnParticle(Particle.SHRIEK, location, 1, 0, 0, 0, 0, 20); // 延迟 20 刻
```

### ItemStack 组 —— `item`

`ItemStack`（`org.bukkit.inventory.ItemStack`）描述正在破碎的物品。

#### `item` — `ITEM` · ItemStack

物品破碎的粒子；数据用于指定破碎的物品。

```yaml
- id: spawn_particle
  args:
    particle: item
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `ItemStack`。请使用 Bukkit API：

```java
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.inventory.ItemStack;

ItemStack data = new ItemStack(Material.DIAMOND);
world.spawnParticle(Particle.ITEM, location, 10, 0.5, 0.5, 0.5, 0, data);
```

### Dust 组 —— `dust`、`dust_color_transition`

`Particle.DustOptions`（颜色 + 大小）与 `Particle.DustTransition`（起始颜色、结束颜色、大小）用于描述彩色粉尘。

#### `dust` — `DUST` · Particle.DustOptions

彩色粉尘；数据为颜色与大小。YAML 中推荐使用 **RGB 颜色工厂**（见下文），它会生成指定颜色的 `DUST`：

```yaml
- id: spawn_particle
  args:
    particle: rgb:ff0000 # 等效于指定颜色的粉尘（大小 1.0）
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

如需完全控制颜色与大小，请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.DustOptions data = new Particle.DustOptions(Color.RED, 1.0f);
world.spawnParticle(Particle.DUST, location, 10, 0, 0, 0, 0, data);
```

#### `dust_color_transition` — `DUST_COLOR_TRANSITION` · Particle.DustTransition

在两种颜色之间渐变的粉尘；数据为起始颜色、结束颜色与大小。

```yaml
- id: spawn_particle
  args:
    particle: dust_color_transition
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `DustTransition`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.DustTransition data = new Particle.DustTransition(Color.RED, Color.BLUE, 1.0f);
world.spawnParticle(Particle.DUST_COLOR_TRANSITION, location, 10, 0, 0, 0, 0, data);
```

### Spell 组 —— `effect`、`instant_effect`

`Particle.Spell`（颜色 + 强度）用于为魔法咒语粒子着色。

#### `effect` — `EFFECT` · Particle.Spell

魔法咒语粒子；数据为颜色与强度。

```yaml
- id: spawn_particle
  args:
    particle: effect
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Particle.Spell`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Spell data = new Particle.Spell(Color.PURPLE, 1.0f);
world.spawnParticle(Particle.EFFECT, location, 1, 0, 0, 0, 0, data);
```

#### `instant_effect` — `INSTANT_EFFECT` · Particle.Spell

瞬间效果咒语粒子（如瞬间治疗）；数据为颜色与强度。

```yaml
- id: spawn_particle
  args:
    particle: instant_effect
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Particle.Spell`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Spell data = new Particle.Spell(Color.WHITE, 1.0f);
world.spawnParticle(Particle.INSTANT_EFFECT, location, 1, 0, 0, 0, 0, data);
```

### Trail 组 —— `trail`

`Particle.Trail`（目标位置、颜色、持续时间）描述飞向目标位置的彩色轨迹。

#### `trail` — `TRAIL` · Particle.Trail

飞向目标位置的彩色轨迹；数据为目标位置、颜色与持续时间（刻）。

```yaml
- id: spawn_particle
  args:
    particle: trail
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Particle.Trail`。请使用 Bukkit API：

```java
import org.bukkit.Color;
import org.bukkit.Particle;

Particle.Trail data = new Particle.Trail(targetLocation, Color.RED, 20); // 目标位置、颜色、持续时间（刻）
world.spawnParticle(Particle.TRAIL, location, 1, 0, 0, 0, 0, data);
```

### Vibration 组 —— `vibration`

`Vibration`（`org.bukkit.Vibration`）描述振动波：起点、目的地与到达时间。注意 `Vibration` 是独立类，不是 `Particle` 的嵌套类。

#### `vibration` — `VIBRATION` · Vibration

传向目标位置的振动波；数据为起点、目的地与到达时间（刻）。

```yaml
- id: spawn_particle
  args:
    particle: vibration
    amount: 1
  ...other config (eg triggers, filters, mutators, etc)
```

> ⚠️ 在 `spawn_particle` 中不会携带 `Vibration`。请使用 Bukkit API：

```java
import org.bukkit.Location;
import org.bukkit.Particle;
import org.bukkit.Vibration;

Location origin = location;
Location destination = location.clone().add(5, 0, 0);
Vibration data = new Vibration(origin, new Vibration.Destination.BlockDestination(destination.getBlock()), 20);
world.spawnParticle(Particle.VIBRATION, location, 1, 0, 0, 0, 0, data);
```

### RGB 颜色工厂用法

内置的 `ParticleFactoryRGB` 注册了 `rgb`、`color`、`hex` 三个别名。语法 `名字:<hex>` 会把参数解析为 6 位十六进制颜色，并生成一个大小为 `1.0f`、指定颜色的 `DUST` 粒子。因此 `rgb:00ff00`、`color:ff0000`、`hex:00aaff` 在 YAML 中都可用，等效于生成指定颜色的 `dust`：

```yaml
- id: spawn_particle
  args:
    particle: rgb:ff0000 # 红色粉尘，大小 1.0
    amount: 10
  ...other config (eg triggers, filters, mutators, etc)
```

常见颜色：

| 颜色 | Hex |
|------|-----|
| 红 | `ff0000` |
| 绿 | `00ff00` |
| 蓝 | `0000ff` |
| 黄 | `ffff00` |
| 紫/品红 | `ff00ff` |
| 青 | `00ffff` |
| 白 | `ffffff` |

> 该工厂只影响粉尘类粒子（始终生成 `DUST`），不会为其他类型的粒子补充数据。

## 关联页面

- [spawn_particle 效果](../effects/spawn_particle)
- [particle_animation 效果](../effects/particle_animation)
- [particle_line 效果](../effects/particle_line)
- [所有效果](../effects/)
