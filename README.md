# Gyna Application

## Setup
1. Clone this repo to your desktop `git clone https://github.com/TheDreamHunter/gyna-app.git`
2. Run `npm install` to install npm modules.
3. Run `git fetch`
4. Make sure that your application is working on expo.
5. Make sure that eslint is working you don't need any special setup.
6. Also you can include this in your editor settings file `"eslint.autoFixOnSave": true` for eslint to fix autmotically most of the eslint errors. you can still work without it.

## Code Quality Roles
1. Set your indent to two spaces not tabs !!
2. Check the react official style guide from [here](https://github.com/airbnb/javascript/tree/master/react).
2. Files names and functions names are in the `camelCase`.
3. Components Names are in the `PascalCase`.
4. Constants should be written like that `const USER_LOGIN = balabizo;`
5. Please use async await for handling promises.
6. Commenting your code is a must !!
7. Functions, Files and Components names should be descriptive.
8. Please include every screen, action, reducer you make in the index.js file in the respective folder.
9. Please don't modify main.js & app.js file.

## Workflow

### Before starting 
1. run `git pull origin master` to install latest updates in the repo.
2. Run `npm install` to install new npm modules.
3. create a new branch and checkout this branch using this command `git checkout -b your-branch-name`.
4. Branch naming convention should be descriptive for the feature no uppercase characters and words seperated by `-` not `_`
5. Check branch is created successfully by running this command `git branch` you should see all the branches you have locally. you can verify this branch by seeing its name and a star beside it. 

### For Commits
1. Please follow the Style guide in commiting your code. you find it [here](https://drive.google.com/file/d/0B2VFqW0FcrSdZmRnR3MzODJucHc/view?usp=sharing)
2. Make sure the commit is descriptive to what you did.
3. Commit after every important checkpoint. Commits after every subfeature/component. Also a commit for every fix.
4. Reusable components for others tasks must be done at the beginning and create a MR for the component.

## For Pull Requests

#### Before the pull request
1. Make sure that your feature is working on both platforms (Android and iOS).
2. Make sure the design matches the wireframe.
3. Please do include the data you test the feature with in the actions file.
4. We expect from you a screen, component, action and reducer related to the feature implemented. 
5. Remove any debugging lines.

#### Pull request details.

1. Make sure the base branch is `dev`.
2. Make sure you are starting the description of the PR with a bold title. `Hint: put ## before the title`.
3. Make sure to include the features you made in this PR by bullet points. `Hint: put - before every feature`.
4. Make sure to reference the issue related to this PR.
5. Assign a reviewer for the task.
6. Add the appropriate labels (needs-review) to the MR.

## Packages

### When Installing npm modules,  please check the following
1. Check with the team leader why this package is important.
2. Check the documentation and the code written. In many cases it's a simple trick. so you can rewrite it without installing the dependency.
3. Check the latest updates of the package. Newer packages are better !!

### Packages installed
1. react-navigation.
2. react-native-elements.
3. react-redux.
4. redux.
5. redux-thunk.

