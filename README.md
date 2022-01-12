# BYUFreeFood
A cooperatively developed React Native application built as a club project for event organizers to advertise their events where free food will be present and for hungry college students to find free food on campus.

## Git Best Practices
After installing git on your machine run the following in the repository where you want to keep the repo:

(This is just for the first time)

`git clone https://github.com/byudevelopers/BYUFreeFood.git` this downloads the repo

(or if you already have the repository...)

`git pull` while you have the master branch checked out (`git checkout master`) to get the most recent version of the code


When you start working on a new feature...

`git checkout -b <branch_name_here>` this creates a new branch. You can make changes here without messing anybody else up.

when you've completed your work...

`git add -p` This will show you all the changes you've made. You confirm whether or not you want to commit these changes by entering 'y'/'n' or 'q' to cancel. Alternatively, you can use `git add .` to stage all these changes for commit.

Next ->

`git commit -m "<Description of your changes>"` This commits to your changes in preparation for pushing.

if (this is your first time pushing) {
  `git push -u origin <branch_name_here>` This creates a remote (online) version of your branch and adds your committed changes to it.
}
else {
  `git push` This adds your committed changes to your remote branch.
}

Once you are done making your own changes and you are ready to put them in the main branch, go to github.com and open a pull-request from your branch. Get a club officer to review it and they will merge it into the master branch!!

DO NOT merge or push to `master` without talking to a club officer!



## To set up your expo package...
`npm install` If you are missing npm (node package manager), here is a link to install Node https://phoenixnap.com/kb/install-node-js-npm-on-windows

`npm install --global expo-cli`  (if that doesn't work try `sudo npm install -g expo-cli`
`expo start` in the repo directory to access developer tools!

Download the Expo Go app on your phone to access a live emulator.
