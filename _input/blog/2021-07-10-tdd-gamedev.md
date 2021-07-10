---
tags: ["post", "gamedev"]
title: Leveraging automated tests for game development
---

# Leveraging automated tests for game development

Working with games is difficult. There is a lot to do, and not a whole lot of time to test everything... or is there?

When speaking of testing, usually we picture testing game levels to find out-of-bounds exploits, weird interactions between collision, physics and animations that lead to some unexpected behavior, or bugs that may affect movement speed if we jump and kick in quick succession. The list is endless. The commonality is that, to find all these bugs, a lot of time and effort must be invested, and sometimes, bugs are not visible to those of us with slower reaction times, like me.

While thinking about this, and how I wanted to be sure my iterations on the project I am working on are "safe" and work well together, I thought that I could use automated tests to validate my implementation. And this could even go beyond validating my implementation. What if I created tests that validate use-cases I have in mind, then implement the necessary code to make those viable?

## A solution?

Well, thanks to people way smarter than me, this model of development already exists, and it's called TDD. With this model, you iterate over a short cycle where:

- You write a test for a functionality you want, and see it fail;
- You write the implementation to make the feature possible, and the test passes;
- You cleanup the implementation and the test so it's easier to maintain in the long-run;

## My experiment

This article is not really a collection of useful advice (yet). Right now I have to start working with this new model to be able to gather any interesting insights about this way of working.

I do have an initial theory on what this model may help me achieve:

- By developing with TDD I will be able to write less code
- By guiding my development with tests, I will design more interesting situations
- By the end of the project, the amount of bugs will be minimal
- By relying on automated tests, I will be able to quickly iterate and deliver MVPs faster
