---
title: "An Error Budget for Location Verification: Presence Over Time, Not Trust"
description: "Multi-sample location clustering, a clamped error budget, rotating QR codes as a presence proof, and server-side re-validation the client cannot bypass: a design that refuses to trust any single reading."
date: "January 15, 2026"
readTime: "3 min read"
---

Location verification fails when it trusts a single raw client reading. GPS jitters by tens of meters from one fix to the next, and phones report confidence they don't have. A static QR code has the opposite problem: it never changes, so one screenshot outlives the lecture. The design below ships in Class-io, an attendance system running in university courses, and it is built on refusing to trust any single reading from either side.

### Don't trust one fix

The location pipeline never asks for one position. It takes a handful of samples spaced a few hundred milliseconds apart, takes a few more if the best one looks inaccurate, and throws out any sample whose reported accuracy is worse than a fixed threshold. The survivors go through agreement-based clustering: samples group by proximity to each other, the largest cluster wins if enough samples agree, and its members are averaged into a single position. If too few agree, the code falls back to the median rather than trust an outlier. Single readings jitter; a cluster of readings that agree with each other doesn't.

### The error budget

Both sides of the check carry error. The student's position has an accuracy estimate and so does the lecturer's anchor, and the check combines them instead of ignoring them: garbage accuracy is rejected outright, the anchor's error contribution is capped on the assumption that it is the more stable side, and the two errors combine by root sum square. That combined uncertainty doubles for roughly 95 percent confidence, then clamps between a floor and a ceiling. The floor keeps small rooms from rejecting present students over minor drift, and the ceiling keeps a bad signal from opening an acceptance zone the size of a campus. The final allowed distance is the room's radius plus that buffer, and the radius scales with room type, because a lecture hall is not a seminar room.

The important part is the shape, not the constants: uncertainty is measured, propagated, bounded, and only then compared against distance.

### Presence, not cryptography

The QR check is the honest one. A handful of codes are generated when the session starts, and the display cycles them every 2 seconds. To check in, a student scans 3 distinct codes within 15 seconds, and the scanner remembers what it has already seen so re-scanning the same frame three times counts once.

The tokens are plain UUIDs. There is no encryption and no timestamp in the payload, which means the security is not cryptographic freshness, it is presence over time: distinct codes at a fast rotation mean watching the actual screen for several seconds, not grabbing one frame. A screenshot carries exactly one code and is stale by the time it reaches a group chat. A student who is not in the room has nothing to scan.

### The server decides, not the phone

Everything above runs on the client, so the server re-validates all of it before writing the attendance record. The database function recomputes the distance itself under its own rule, counts the scanned codes against the session's tokens and rejects short matches, refuses duplicate joins, and allows only one active session per lecturer. A modified client can pass its own checks; it cannot approve its own attendance.

### The tradeoff

The location gate takes the phone's reported position at face value and does not attempt to detect mocked locations. That is a deliberate tradeoff: mock detection is an arms race of platform-specific flags that a determined user bypasses anyway, and the actual defense is layering. Location proves where the phone claims to be, and the rotating QR proves a person is physically watching the room's display, so the combined mode makes each check cover the other's blind spot. Failed location attempts fall back to a report path that only accepts reports from students plausibly near the room.
