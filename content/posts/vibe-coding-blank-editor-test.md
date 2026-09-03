---
title: "Vibe Coding Isn't the Problem. How You Vibe Code Is."
description: "Autocomplete already moved coding from recall to recognition. AI moves it from recognition to generation. The blank editor test shows how much is left."
date: "August 31, 2026"
readTime: "7 min read"
---

The complaint shows up constantly: people still aren't okay with vibe coding. On one side, developers who treat AI-written code as an existential skill crisis and on the other, developers who can't imagine typing everything by hand again.

The discomfort isn't really about AI writing code, though. It's about what's left in the writer's head while the AI does the writing.

### The blank editor test

Before defending a workflow, try this.

Open a blank file. Not an IDE, a plain text editor or even a notes app. No autocomplete, no AI, no extensions.

Then write, from memory, the basic boilerplate of a normal working day:

- The HTML skeleton, `<!DOCTYPE html>` through `</html>`, with the meta tags that always get included.
- Python's `if __name__ == "__main__":` block and the usual imports.
- A basic component in whatever framework gets shipped: state, props, the wiring.
- The small stuff. Arrow function syntax, which bracket goes where, where the semicolons live.

Search is allowed, but it defeats the point.

What tends to surface is uncomfortable: the *idea* of the code is there, but not the code. The shape of a doctype, not the actual line. The exact characters, semicolons, colons, `() =>`, are where it falls apart.

### Autocomplete got there first

This did not start with AI. Autocomplete has been quietly carrying developers for years.

IntelliSense and its relatives solved a real problem: nobody holds an entire standard library in their head. So the IDE took over the exact-character work, method names and parameter orders and import paths, and the developer kept the map: knowing what exists and roughly where to find it. Recall got outsourced. Recognition stayed internal.

That trade was mostly fine, because the developer was still the one composing. Autocomplete filled in what had already been decided; the syntax, the structure, and the flow still arrived through human fingers.

AI changes the division of labor. Composing itself gets outsourced. The jump is from "the IDE remembers the API for me" to "the model remembers how to program for me", and now recognition isn't required either. Only judgment about whether the output is good.

This is also why the blank editor test bites harder than people expect. It isn't testing whether someone is a good developer. It's testing how much of the craft still lives in memory versus in the tools, and a developer who has leaned on autocomplete for a decade is starting from a position that was already eroded before the AI ever showed up.

### Reading is not writing

This is the comparison I keep coming back to:

Letting AI write code, reviewing it, and thinking you could replicate it is the new version of watching coding tutorials on youtube wihtout taking on any projects.

Both feel like work. Both produce a real sense of fluency: following what's happening, spotting bugs in review. But comprehension and production are different muscles. Reading a language is not speaking it.

The trap is that the review pass feels rigorous. Every line gets read. But I do not think reviewing code is enough to keep the writing ability alive. The skill being exercised is code review. The one I am worried about is the one that writes.

### Who can actually defend vibe coding

Two groups hold the position honestly.

The first is developers with enough raw coding mileage that AI is a speedup, not a substitute. The blank editor test is a non-event for them; the muscle memory was built before the tools existed. For them, vibe coding is what a calculator is to an accountant. Faster, and nothing that matters got worse.

The second is developers who use AI deliberately as a boilerplate writer but guard the boundary: real code still gets written by hand sometimes, on purpose, specifically to keep the muscle alive. Raw coding treated like exercise you schedule because you know you'd otherwise skip it.

What most workflows actually look like is neither. The AI writes everything, everything gets read, everything ships, and then that workflow gets described using the second group's vocabulary. "I review everything carefully." Reviewing is not the same as being able to produce.

### The day the tool is unavailable

The scenario that makes this concrete instead of philosophical:

Production is down. Customers are angry. The AI assistant's usage is capped for the day, or the service is out, or security hasn't approved it for that repository. Whatever the reason, the thing that writes the code is unavailable, and the problem is still there.

The question isn't whether it could eventually be solved with Google and documentation. Anyone in the profession clears that floor. The question is whether the first draft of the fix exists in anyone's head, or whether the entire process has an external dependency nobody controls.

There's also the interview version, which is less dramatic and more common: a shared blank canvas in a browser, and boilerplate that seemed too simple to forget turns out to be gone.

### The actual position

This is not the anti-AI position. The tools exist, they're good, and for some categories of code they're better than most humans writing from memory. That's the industry now, and pretending otherwise helps nobody.

My problem is how I see people vibe code, not whether AI exists. The test I am using is simpler: open a blank notes app, turn off AI and autocomplete, and write a few Flutter and JavaScript initializations from memory. I did not like how much of the code had become only an idea in my head.

I am not arguing for quitting the tools. I think raw coding has to stay in the routine somewhere, even if it is just writing boilerplate by hand sometimes and noticing when a review pass is hiding a gap.

A defensible version of vibe coding is a thing you demonstrate, not a thing you declare.
