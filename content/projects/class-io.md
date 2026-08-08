---
title: "Class-io"
subtitle: "Students were spoofing GPS and screenshotting QR codes to skip class. Here is how I built a location-locked, rotating token system to actually verify attendance for 2,000+ users."
metaTitle: "Building Class-io: Fixing University Attendance — Kelvin Appiah"
metaDescription: "How I built an anti-spoofing attendance system for 2,000+ students using rotating QR tokens and geometric GPS averaging."
category: "EdTech • Mobile & Web"
technologies: "Flutter · Supabase (RLS) · Cloudflare"
status: "2,000+ Users Live"
linkText: "classioedu.com"
linkHref: "https://classioedu.com"
imageSrc: "https://classioedu.com/og-image.png"
imageAlt: "Class-io UI Showcase"
order: 1
---

## The Problem
University attendance relying on paper sign-in sheets or basic check-in apps is easily compromised by proxy sign-ins, screenshotted QR codes, and fake GPS locations. In large lecture halls, passing sign-in sheets around causes hallway congestion and class delays, leaving lecturers with tedious manual spreadsheet data entry.

## Verification Modes & Anti-Spoofing Architecture
Class-io verifies check-ins across three verification modes: geofenced location verification, 15-second rotating QR codes, or dual-layer enforcement.

Location is confirmed by calculating the geometric mean of multi-sample GPS coordinates against saved room presets: Standard Room (25m), Lecture Hall (32m), Large Lecture Hall (40m), and Auditorium (55m). Rapidly jumping coordinates trigger anti-spoofing flags to reject mock location developer tools.

Dynamic QR codes rotate every 15 seconds, embedding AES-GCM encrypted time-decaying tokens validated against server time. Tokens older than 20 seconds expire automatically, rendering screenshotted or forwarded codes useless.

When campus wifi drops, offline fallback codes queue check-ins locally on the client and sync automatically once network connectivity restores.

## Lecturer Workflows & TA Delegation
Lecturers define custom coordinate presets (e.g., "Main Science Lab", "Room 101") to launch sessions instantly. Scheduled auto-attendance configures start and end times alongside class timetables to open and close sessions automatically.

To reduce in-class operational friction, lecturers can delegate attendance controls and student permission requests to Teaching Assistants (TAs) using secure access tokens.

## Roster Management & Excel Export
Lecturers manage course enrollments using unique Join Tokens and Student IDs, maintaining the ability to manually remove students from rosters.

At the end of a session, complete attendance logs export directly into formatted Excel spreadsheets (.xlsx) with a single tap, replacing manual reconciliation.

Data privacy and access rights are enforced using Supabase Row-Level Security (RLS), end-to-end encryption, and native display-layer screenshot protection.

## Where It Stands
Live in production with 2,000+ active students and 10 lecturers across courses at UENR. Evaluated and demoed directly to department leadership as an active, working platform.
