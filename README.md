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

`npm install`
`npm install --global expo-cli` (if that doesn't work try `sudo npm install -g expo-cli`
`expo start` in the repo directory to access developer tools!

Download the Expo Go app on your phone to access a live emulator.

## Solutions to possible bugs

If at any time you receive the error:
`opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],`
`library: 'digital envelope routines',`
`reason: 'unsupported',`
`code: 'ERR_OSSL_EVP_UNSUPPORTED'`
Try:
`export NODE_OPTIONS=--openssl-legacy-provider`
However when pushing to get you may receive an error:
`--openssl-legacy-provider is not allowed in NODE_OPTIONS`
Then run the command:
`unset NODE_OPTIONS`
