# Git and GitHub

## Handout
You can find the Handout for this here: [Handout - Git & GitHub.pdf](./Handout%20-%20Git%20&%20GitHub.pdf)

## Common workflow cheat sheets

### Committing without branching

```sh
# make your changes
# stage the changes: <files> is a path to either a directory or file
# We can use . to add everything in the current directory 
git add <files>
# commit changes
# Without commit_msg, we will have to save and exit the COMMIT_EDITMSG file
git commit (-m <commit_msg>)
```

### Working with branches

```sh
# make sure main is up too date
git checkout main
git fetch
git pull
# create a new branch to work in
git checkout -b <branch_name>
# make your changes
# stage and commit
git add <files>
git commit (-m <commit_msg>)
# push the branch
git push -u origin <branch_name>
# checkout main
git checkout main
# merge the branch into main
git merge <branch_name>
# optional but highly recommended: Delete the branch
git branch -D <branch_name>
# push the merge results. Notice that -u is only required for new branches
git push
```

When using Pull Requests, you skip the merge step on the command line and do it with the PR instead. After that, use
```sh
git checkout main
git pull
```
to get update the local copy of the main branch.

### Merge Conflicts
When working with GitHub and Pull Requests, we need to resolve conflicts on the working branch:

```sh
# make sure our local main branch is up to date
git checkout main
git fetch
git pull
# switch to our branch
git checkout <branch_name>
git merge main
# resolve conflicts in the editor
# then mark them as resolved by staging
git add <file>
git commit
# Note the merge commit already has a message, so we can just close the message editor
# push the merge commit
git push
```

Without merge requests, we could also handle the merge while merging to main.

```sh
git checkout main
git pull
git merge <branch_name>
# resolve conflicts in the editor
# then mark them as resolved by staging
git add <file>
git commit
git push
```
