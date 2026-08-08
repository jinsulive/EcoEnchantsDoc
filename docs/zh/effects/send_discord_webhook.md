---
title: send_discord_webhook
titleEn: send_discord_webhook
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_discord_webhook <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向 Discord webhook 发送消息。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `send_discord_webhook` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `webhook_url` | String | ✅ | — | — | 要发送到的 Discord webhook URL。示例：`https:         )         require(             ` |
| `text` | Custom | — | — | — | 消息内容。 |
| `username` | Custom | — | — | — | （可选）覆盖 webhook 用户名。 |
| `avatar_url` | Custom | — | — | — | （可选）覆盖 webhook 头像。 |
| `tts` | Boolean | — | `false` | — | （可选）是否以文本转语音的方式发送消息。 |
| `embeds` | Any/Custom | — | — | — | （可选）要包含在 webhook 消息中的嵌入对象列表。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendDiscordWebhook.kt`）。

- **源码描述**: 通过 webhook URL 向 Discord 频道发送消息。
- **所属分类**: `chat`

## 配置示例

```yaml
- id: send_discord_webhook
  args:
    webhook_url: "https://discord.com/api/webhooks/..." # The webhook URL to send to
    text: "Hello from libreforge!" # The message content
    username: "MyBot" # (Optional) Override the webhook username
    avatar_url: "https://example.com/avatar.png" # (Optional) Override the webhook avatar
    tts: false # (Optional) Send as text-to-speech
    embeds: # (Optional) List of embeds to include
      - title: "Embed Title" # (Optional) Embed title
        description: "Embed description" # (Optional) Embed body text
        url: "https://example.com" # (Optional) URL the title links to
        color: "FF0000" # (Optional) Embed sidebar color (hex)
        timestamp: "2024-01-01T00:00:00Z" # (Optional) ISO 8601 timestamp
        author:
          name: "Author Name" # (Optional) Author display name
          url: "https://example.com" # (Optional) Author URL
          icon_url: "https://example.com/icon.png" # (Optional) Author icon
        footer:
          text: "Footer text" # (Optional) Footer text
          icon_url: "https://example.com/icon.png" # (Optional) Footer icon
        image:
          url: "https://example.com/image.png" # (Optional) Large image
        thumbnail:
          url: "https://example.com/thumb.png" # (Optional) Small thumbnail
        fields: # (Optional) List of inline fields
          - name: "Field Name" # Field label
            value: "Field Value" # Field content
            inline: false # (Optional) Display field inline
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)
