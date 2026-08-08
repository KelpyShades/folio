---
title: "GPS-Locking & Anti-Spoofing: How We Verified Attendance in Class-io"
description: "Building spoof-resistant location verification using averaged coordinate sampling, mock location detection, and network-time reconciliation."
date: "January 15, 2026"
readTime: "8 min read"
---

Attendance verification software fails when it trusts raw client location data. In campus environments, standard GPS checks are easily bypassed using developer mock-location tools, VPNs, or screenshotted QR codes.

### The Mock Location Problem
On Android and iOS, mock location APIs allow apps to simulate coordinates. Default location plugins blindly accept these mock readings. In Class-io, we added native channel checks to inspect OS-level mock provider flags and reject requests when mock location tools are enabled.

### Averaged Coordinate Sampling
Single GPS readings suffer from jitter and spoofing. Class-io enforces a 5-second location lock, collecting multiple coordinate samples and calculating variance and geometric mean. Rapidly jumping coordinates trigger anti-spoofing blocks.

### Rotational QR Timers
To stop screenshot sharing, Class-io rotates check-in QR codes every 15 seconds. Each frame contains a time-locked payload encrypted with AES-GCM, validated against NTP-synchronized server time. Tokens older than 20 seconds are rejected.
