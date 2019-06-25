# Week 1: Welcome

## Tuesday

### Discord

[Discord](https://discordapp.com/) is text/voice chat, kind of like Slack or Skype.
This is how we will handle day-to-day communications.

1. Join our server with this [link](https://discord.gg/wHVRTFQ).
2. Post a greeting in `general-chat`
3. Drop your contact info in `contact-info`
4. Give me a music suggestion in `music-suggestions`

Once you get in, you will notice that there are a bunch of channels, including:

- `general-chat`: most chatting goes here
- `coding-questions`: any questions you have for any kind of code (even things outside of class) can be asked here
- `class-notes`: anytime I want to link certain repos for exercises or notes I will put them here
- `general-resources`: collection of nice resources for things we are learning. You can go back through this channel and see a bunch of things that people from the old cohort found
- `cool-stuff`: kind of like general resources, but more for interesting stuff (both code and non-code) people find
- `extracurricular-hangouts`: if we're planning any events outside of work, it'll usually happen here

Your cohort also has its own chat in `trainee-chat` if you ever want to discuss things with just Track 6 folks.

### Tech Overview

#### What have we used before?

#### What do we want to learn about?

### Tooling Setup

Follow the instructions in the [tooling-config](https://github.com/talent-path-la/tooling-config) repo to get all of the goodies you'll need for development.

### The Command Line: Basics

[Basic Command Sheet](https://skillcrush.com/wp-content/uploads/2016/04/1a-TerminalCommandsCheatsheetMac.pdf)

#### Navigation

- `ls`: (List Segments) Shows all of the contents within your current searching directory.
- `cd <directory>`: (Change Directory) Changes from your current directory to the one provided in the `<directory>` argument.
  - Directories can be relative or absolute.
  - If no directory is provided, then you go back to your default directory.
  - If `..` is provided, then you move up one parent directory

#### File Management

- `pwd`: (Print working directory) Prints the working directory (absolute path) that you are currently in.

#### Process

- `ctrl + c`: Kill current process. If you are running a process that must be stopped for the following reasons:
  - runs indefinitely and must be stopped manually
  - crashes and cannot restart
  - just needs to be murked

#### NPM

- `npm help`: Lots of lovely helpful hints on how to use npm.
- `npm init`: Start an npm module (creates a package.json)
- `npm run <command>`: Executes a script in your package.json `scripts` section where `<command>` is the name of your script

#### VS Code

All `code` related commands are due to VS Code related setup involving installation onto your machine. If you have a windows, you might need to go some extra steps to get this command set up properly.

- `code <directory> / <file>`: Opens VS Code with that folder / file
- `code -r .`: Reloads your current directory's window.

### Command Line: Cheat Sheets

- [Mac / Linux](http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/)
- [Windows Powershell](https://bytescout.com/blog/windows-command-prompt-commands.html)

### Git

![Git workflow](https://appendtonew.wpengine.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-24-at-8.37.13-PM-1024x663.png)

#### Code-along

**First, try this on the command line:**

1. create directory locally
2. create `README.md` file
3. create repo online
4. `git init`
5. `git add .`
6. `git commit -m "init"`
7. `git remote add origin <new-repository>`
8. `git push -u origin master`
9. 💵💵💵

Wipe the code from drive

**Now let's do it with GitKraken**

1. clone repo via GitKraken (demonstrate how to do this on command line)
2. Make a new branch (or `git checkout -b <branch-name>`
3. Make an edit
4. Add
5. Commit
6. Push
7. Create pull request
8. Merge and close

#### Skills Check Exercise

**Now everyone do it with [student-directory](https://github.com/talent-path-la/student-directory)**

- clone repo
- make your own branch
- Add your own contact info, using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- commit, push, PR, merge
