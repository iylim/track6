# Week 1: Welcome

* [Tuesday](#Tuesday)
  * [Discord](#Discord)
  * [Current Events](#Current-Events)
  * [Tech Overview](#Tech-Overview)
  * [Tooling Setup](#Tooling-Setup)
  * [The Command Line: Basics](#The-Command-Line-Basics)
  * [Command Line: Cheat Sheets](#Command-Line-Cheat-Sheets)
  * [Git](#Git)
* [Wednesday](#Wednesday)
  * [A Few JavaScript Things](#A-Few-JavaScript-Things)
  * [Hangman](#Hangman)

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

### Current Events

Read Tania Rascia's [Everything I Know as a Software Developer Without a Degree](https://www.taniarascia.com/everything-i-know-as-a-software-developer-without-a-degree/)

After reading, discuss the following with your neighbors:

- Do you see any similarities between your journey and Tania's?
- She started her journey a couple of years before you all, how do you think the landscape has changed?
- What would you do differently?
- Does this give you any ideas of new things you would like to learn?

### Tech Overview

#### What have we used before?

- Frontend
  - HTML
    - Pug
  - CSS
    - Bootstrap
    - Flexbox, grid
    - Sass
  - JavaScript
    - TypeScript
  - React
  - Angular
- Backend
  - C#, .NET
  - SQL
    - MySQL
    - Postgres
  - MongoDB
  - MariaDB
  - Node
    - Express
- General language
  - Swift
  - Java
  - C++
  - Python
  - PHP
- Tools
  - CLI
  - Github
  - Bitbucket/Source Tree
  - TFS
  - Docker
  - Xcode
  - Visual Studio
  - Eclipse
  - Postman, ARC
  - Mocha, Chai
  - CLion
  - Editors:
    - Sublime
    - VS Code
- Developer soft skills
  - Googling
  - Teamwork, collaboration, pair programming
  - OOP
  - FP
  - debugging
  - commenting, documentation
  - whiteboarding/interviewing
  - reading, writing
  - research, design, architecting
  - empathy
  - code reviews

#### What do we want to learn about?

- algorithms, data structures
- testing
- integrations
  - FTP
  - API
- All of the JS libraries
- Webpack, gulp
- Cloud
  - AWS
- Server config
  - Apache, nginx
- whiteboarding
- web sockets
- giving and receiving feedback
- Agile
  - user stories
- accesability
- UX
- misc QoL tools

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

![Git workflow](https://user-images.githubusercontent.com/17076638/59949721-d7b3d380-9428-11e9-982f-0213ea3cb5c7.png)

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

Clone repo via GitKraken
![GitKraken 1](https://user-images.githubusercontent.com/17076638/59958101-33e11c80-9456-11e9-9450-116ce81622b5.png)

- Hit the clone button
- Copy the url from the repository you are cloning
- Clone it to a folder on your computer
  ![GitKraken 2](https://user-images.githubusercontent.com/17076638/59958102-33e11c80-9456-11e9-9dc2-928a6f2c429d.png)

- Open the Repo
  ![GitKraken 3](https://user-images.githubusercontent.com/17076638/59958103-33e11c80-9456-11e9-97e7-d0b8495f31de.png)

- View the magic
  ![GitKraken 4](https://user-images.githubusercontent.com/17076638/59958104-33e11c80-9456-11e9-9cad-d0cc55d27d12.png)

Make a new branch
![GitKraken 5](https://user-images.githubusercontent.com/17076638/59958106-33e11c80-9456-11e9-8edb-29c7b4b90e51.png)

Make an edit
![GitKraken 6](https://user-images.githubusercontent.com/17076638/59958107-3479b300-9456-11e9-950d-dba8d35f3cd1.png)

Add and commit
![GitKraken 7](https://user-images.githubusercontent.com/17076638/59958108-3479b300-9456-11e9-86ff-01557d34a77e.png)

Push
![GitKraken 8](https://user-images.githubusercontent.com/17076638/59958109-3479b300-9456-11e9-850f-8ffbead0a52b.png)
![GitKraken 9](https://user-images.githubusercontent.com/17076638/59958110-3479b300-9456-11e9-9b9c-96094a091270.png)

Create pull request (On GitHub)
![GitKraken 10](https://user-images.githubusercontent.com/17076638/59958111-3479b300-9456-11e9-85a2-1631a5a0ca5a.png)
![GitKraken 11](https://user-images.githubusercontent.com/17076638/59958112-35124980-9456-11e9-931f-9e51bb2b8c0f.png)

Create pull request (On GitKraken)
![GitKraken 12](https://user-images.githubusercontent.com/17076638/59958113-35124980-9456-11e9-907f-3ade243e56ba.png)
![GitKraken 13](https://user-images.githubusercontent.com/17076638/59958115-35124980-9456-11e9-8202-b0cfaa4d6a4f.png)

Merge and close
![GitKraken 14](https://user-images.githubusercontent.com/17076638/59958116-35124980-9456-11e9-975d-361f4715ebbc.png)

#### Skills Check Exercise

**Now everyone do it with [student-directory](https://github.com/talent-path-la/student-directory)**

- clone repo
- make your own branch
- Add your own contact info, using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- commit, push, PR, merge

## Wednesday

### A Few JavaScript Things

![Node](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png)

Node is a JavaScript runtime that allows us to run JS anywhere, including the console. We can execute any program by running 
```sh
node myfile.js
```

Node also allows us to import packages. Packages are just pieces of code that we can include in our program for extra functionality. 
Most packages can be found on the [Node Pacakge Management (npm) registry](https://www.npmjs.com/). 
We also use _npm_ to download packages into our projects.

Before installing packages to a project we must first make a `package.json` file.
This file basically keeps track of all the packages and their versions.
To easily make a `package.json` run:
```sh
npm init -y
```

(The `-y` tells _npm init_ to use the default settings. You can read more about that [here](https://docs.npmjs.com/cli/init)).

You should see a new file called `package.json` appear in the root of your project.

Once you have this file you can now install packages.
We install packages by running:
```sh
npm i <package name>
```

(The `i` stands for install. You can also run `npm install`)

We are going to experiment with a package called [`readline-sync`](https://www.npmjs.com/package/readline-sync), so run
```sh
npm readline-sync
```

Now that we have this package, we can import it into any file, like so:
```js
const readlineSync = require('readline-sync');
```

The `require` function is how we import a _module_ (package) into a file.

Now we can use however we want!
Take a look at the [docs](https://www.npmjs.com/package/readline-sync) for some use cases and example code.

### Hangman

#### Teams

- Cody & CJ
- Andre & Adam
- Dandy, Dean, & Ayana
- Brennan & Roberto

#### Your Task

With your team, code a hangman game that can be run in the console.
This game must
- use the provided word bank to randomly choose a target word
- accept user input one character at a time
  - if the letter is in the target word, reveal the letters and move to the next turn
  - if the letter is not in the target word, the player receives one strike

The game ends if
- the user correctly guesses all of the letters
- the user gets 5 strikes

At the end of the game, exit the program.
**Bonus:** allow the player to choose if they would like to play again, and if so, start over with a new word

You should give the player feedback via the console such as
- displaying the revealed and unrevealed letters of the target string
- whether a letter was correctly or incorrectly guessed
- number of strikes
- win/lose message

#### Allowed Resources

You may use any resources you find on the internet **except** any solutions to this exact problem (obviously). Google, StackOverflow, and the MDN docs are your friends 👫

You will most likely need to use the `readline-sync` package we discussed earlier.