---
name: Video audio fallback
description: Handling optional music and voice-over when media generation is unavailable in the current workspace mode.
---

When building promotional video artifacts, treat music and voice-over as optional layers and keep the visual composition exportable without them if generation is unavailable.

**Why:** Audio generation may be unavailable in the current workspace mode even when the video build itself is supported. Blocking the visual deliverable on optional audio creates unnecessary rework.

**How to apply:** Finish and present the silent visual animation first; offer a separate audio pass only when the user wants narration or music added.