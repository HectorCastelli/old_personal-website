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

## The results

This section will be updated with any findings or results as I experience them. Please, do not take the information here as a tome of absolute wisdom. **This part is written up as I go, so expect a lot to change.**

### Initial setup

When I first started testing this approach I decided to go from scratch on my project. My previous projects are badly written and my objectives were mostly to get experience implementing key systems so I could get a better grasp on how I should architect them for the long run. My idea was to create these quick prototypes, then throw them away before writing "production" code.

So, when I started from zero and tried to implement new tests, the blank canvas proved to be a challenge. Having nothing available to test is quite hard when you have to think "what measurable result do I want to verify?".

I decided to take a step back and do some planning. One of the theorized benefits is the ability to create vertical slices of gameplay easily. So, what is the first vertical slice composed of?

For my project, this is what I initially came up with:

- Player movement
  - Walk/run
  - Crouch
  - Jump
- Player camera
  - Orbit
  - Zoom
  - Player Follow

While these features are not unique to my game, they are a good base to make my game playable. This is also a great starting point for me to test what I can expect the player to be able to do and what I don't expect them to be able to do. So, combining this rather crude vertical slice with the concept of rational level design, I would be able to tune my character to make it so the players can move convincingly in the world, without issues.

Besides this, even with such a "crude" vertical slice, automating the tests for things like "can the character jump over a X units wide gap?" is tricky. My first experiment will focus on extracting user input into a class that I can easily mock during my tests, in order to simulate user input.

My first instinct is to use Godot's animation system to set this up in a graphical way, but maybe, when the time comes, I could write an AI agent 🤖 (that could later be reused for in-game AI controllers) to run thru my tests. Exciting stuff.
