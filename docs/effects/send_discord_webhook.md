---
title: send_discord_webhook
titleZh: send_discord_webhook
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_discord_webhook <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Send a message to a Discord webhook

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_discord_webhook` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `webhook_url` | String | ✅ | — | — | The Discord webhook URL to send the message to. Example: `https:         )         require(             ` |
| `text` | Custom | — | — | — | The message content |
| `username` | Custom | — | — | — | (Optional) Override the webhook username |
| `avatar_url` | Custom | — | — | — | (Optional) Override the webhook avatar |
| `tts` | Boolean | — | `false` | — | Whether to send the message as text-to-speech. |
| `embeds` | Any/Custom | — | — | — | A list of embed objects to include in the webhook message. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendDiscordWebhook.kt`).

- **Source Description**: Sends a message to a Discord channel via a webhook URL.
- **Categories**: `chat`

## Configuration Example

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

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)
