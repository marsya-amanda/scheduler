Status: Maintained document
Created: 24/12/25
Last updated: 24/12/25

# Product Requirements Document (PRD)

## Product Name

Working Title: Avengers (Scheduling App)

## 1\. Product Overview

### 1.1 Product Vision

Make getting people together effortless by providing an intuitive, inclusive, mobile-first scheduling tool that eliminates friction and reduces the time it takes groups to agree on plans.

## 2\. Problem & Context

### 2.1 Problem Statement

When2Meet is widely used across student and social communities, but it breaks down in key areas:

- weak mobile experience
- limited accessibility considerations
- dated and unintuitive interaction design

This creates unnecessary friction for event organizers and social groups who:

- want to quickly collect availability
- expect clear time overlaps
- do not want to rely on Instagram polls, messy group chats, or awkward coordination flows

Users want a fast, accessible, reliable scheduling workflow that fits naturally into how they already communicate.

## 3\. Users & Use Cases

### 3.1 Target Users

Primary users:

- University students
- Society event directors and committee members
- Social group organizers

Secondary users:

- Friends responding to availability
- Casual event participants

### 3.2 Group Profile

- Optimal group size: 5-20 participants
- Supported maximum: <60 participants

### 3.3 Usage Nature

- Primarily one-off events
- Recurring usage by organizers and societies

### 3.4 Core Use Cases

- Creating an event and collecting availability quickly
- Sharing a scheduling link across messaging platforms
- Responding to availability without needing an account
- Viewing group availability clearly
- Finalizing meeting time rapidly

## 4\. Product Positioning

### 4.1 Positioning Statement

A modern, accessible, mobile-first replacement for When2Meet that is easier to use, more inclusive by design, faster to complete, and optimized for real-world student and social scheduling contexts.

### 4.2 Differentiators

- Designed for mobile-first creation
- Accessibility as a first-class requirement
- Faster completion flow
- Clearer overlap visualization
- Low-friction participation

## 5\. Platforms & Release Strategy

### 5.1 MVP Platforms

- iOS
- Android
- Web

### 5.2 Strategy

- Mobile-first UX focus for event creation and management
- Web support for accessible participant onboarding and shareability
- Avoid unnecessary platform expansion until validated demand

## 6\. Accessibility & Inclusivity Requirements

Inclusivity is a core product principle.

Requirements

- WCAG AA contrast compliance
- Readability optimizations for dyslexia and visual comfort
- High-contrast light and dark themes
- Intuitive, cognitively lightweight interaction flows

Accessibility Success Indicators

- UI passes WCAG AA contrast
- Reduced motion behavior verified
- Positive feedback from diverse visual users

## 7\. Participation & Identity Model

Participation

- Participants may respond without login

Responses require only:

- name
- event password
- Explicit warning that identity is not authentication-secure

Event Security

- Each event uses its own unique access code
- Organizers can return and manage events repeatedly

Rationale

- Balances frictionless participation with realistic privacy expectations.

## 8\. Competitive Benchmarking

Primary Competitor

- When2Meet (target replacement)

Supporting Research Considered

- Timeful
- Crab Fit

Insights

- When2Meet retains users due to familiarity, not experience quality
- Strong demand exists for modernized UX and light/dark mode
- Web-first tools fail to satisfy mobile users
- Products with thoughtful design direction maintain devotion
- Timeful is CA-based, lack of usage in APAC

## 9\. MVP Scope

### 9.1 In Scope (MVP)

- Event creation
- Editing event details
- Participant availability submission
- Edit or clear availability
- Event list & viewing experience
- Clear overlap visualization
- Time zone awareness
- Push notifications and reminders

### 9.2 Future Enhancements (Post-MVP)

- Group availability intelligence
- Rich summarization and best-time ranking
- Deeper calendar integration
- Advanced notifications
- Organizer dashboards

## 10\. Success Metrics

Activation

- 70% of invited participants submit availability within 48 hours, indicates usability

Outcome Impact

- Median event finalization time < 3 days

Usage

- 10 created events per month by Month 3

Reliability

- 98% crash-free sessions

Adoption Signal

- Demonstrated sustained usage by university society event directors

## 11\. Non-Goals

- Enterprise meeting scheduling
- Corporate workflow tooling
- Fully identity-secure authentication for participants
- Large-scale event management (>100+)

## 12\. Risks & Mitigations

**Risk: Accessibility claims without verification**

Mitigation: enforce measurable accessibility checks

**Risk: Over-scoping platform effort**

Mitigation: prioritize mobile UX first even though multi-platform is supported

**Risk: Single-purpose retention challenge**

Mitigation: rely on recurring organizers rather than participants

**Risk: Trust concerns due to non-authenticated identity**

Mitigation: clear communication and known expectations

## 13\. Open Questions (for later phases)

- Should recurring groups have persistent shared spaces?
- Should organizers have identity persistence vs anonymous organizers?
- Should participants be optionally authenticated for premium experiences?
- Should scheduling optimize for "best fairness" or "maximum attendance"?