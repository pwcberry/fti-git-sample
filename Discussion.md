# Episode 4: Git: A New Hope

* Merge & distributive
	- Compare to the centralized model of TFS
		* Github as the centre of a distributive software source control (partially centralized)

	- Benefits:
		* Use own topology
		* Manage own commits, branches, development habits
		* Work offline
		* Commit: self-contained, metadata storage
		* Every copy of the source code has a copy of the same history
		* Automatic backup of the whole repo every time someone pulls from the central repository


* Repositories
	- "Source of truth"

* Prmotes a different approach to software maintenance
	- smaller and regular commits - not necessary to remote - recording your intent as you go along. A bit like the trail of breadcrumbs left behind by Hansel und Gretel.
	- So if you stuff up, you can go back to the most recent ideas you had when writing your code. Rather than the last time you pulled out of the main repo
	- compartabmalized commits
	- the closest thing TFS could possibly offer are shelvesets

* git commit -m "Forgot semicolon" --amend
	- TFS would have to create a new changeset

* squashing git commits after a merge
	- produces new commit with new SHA
	- TFS would have to create a new changeset

* commit locally
	- file-based
	- don't need the overhead of a database

* Github Flow

* Why has adoption of Git exponentially increasing?
	- OSS collaboration
	- Hide in a cave and hack without a network

* Terminology differences TFS / Git
	- TFS Check-in: record all changes and then submitted to central repository for storage
	- Git commit: record all changes locally
	- Git push: the latest commits for that branch are sent to a remote repository
	

# Episode 5: Collaboration strategies

