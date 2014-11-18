# Episode 4: Git: A new hope

We'll cover:

* A brief history of git (with a Stephen Hawking picture)
* Setting up Git (console with CygWin, GUI with SourceTree; mention Github for Windows)
* Commits
* Branching & Merging
* Git flow
* Compared to TFS
(summary)

Each section will have a brief description then a live coding example

## A comparison between TFS & GIT

# Git: A brief history

* What is git
* (Include gratuitous Linus Torvalds picture)

# Git: Why has it become popular

* Distributive or centralized or both
* Control own source locally
* Easy to set up
* Fast and simple
* Powerful: a rich suite of commands
* Prepared for dev stupidity - there are commands to claw back some of the worst mistakes
* Ultimately it's file-based
* Stores all the version control metadata in files (`.git` sub directory)

# Why is Git fast

* Underlying structure based on commits
* Relies on file system
* State of repository
	- Captures diffs
	- Extends into workflow
	- Switch between branches
* Minimal data / metadata retrieval
* (Is there a pretty graphic)
* (Commit diagram)

# Comparison of Git to TFS

## Git is faster than TFS

* Development work flow in Git doesn't experience the same hindrances
* For example branches
	- TFS retrieves everything
	- Git changes the local state, updating files with relevant diffs

* Distinction between Git commits and TFS changesets
	- Self-contained
	- Git treats commits is distinctly different to how TFS tracks changesets
	- Rollbacks in changesets involves erasing history; in Git you can specify the commit you want to move the HEAd to while retaining history (INTERACTIVE)

# Working in Git

## Commits

## Stash

# Other Git Features of Benefit

## Tagging

* A good tagging strategy can allow build rollbacks to occur without difficulty
* 
