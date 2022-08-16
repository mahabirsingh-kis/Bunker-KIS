This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tect Stack

### Typescript
[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

### styled-components
[https://www.styled-components.com/](https://www.styled-components.com/)

### antd
[https://3x.ant.design/docs/react/introduce](https://3x.ant.design/docs/react/introduce)

### antd charts
[https://charts.ant.design/guide](https://charts.ant.design/guide)

### @reduxjs/toolkit
[https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

## Example

1. Run `yarn` to install the node modules
2. Run `cp development.env .env` to initial the env file
3. Run `yarn start` to run the project
4. Open [http://localhost:3000/submit-cv/new](http://localhost:3000/submit-cv/new) to view it in the browser.

## Email Teplate
There is a emailtemplate generate tool.

### Background
Because the email don't support class or style file in the emailtemplate, now only support inline-style, but if we do the emailtemplate and write the inline-style, it is not easy and sometimes some styles need write too many times.
Now use this tool, can define class in css file, and use command will switch css class to inline-style automatically.

### Steps

1. Go to `emailTemplates/autoScript`
2. Go to `input` folder
3. Create a emailtemplate file like `test.html`, then can write html in this file
4. Make sure add `<link rel="stylesheet" href="../style.css" />` in you template file.
5. Then you can use css class in style.css to style your email template.
6. Run `yarn start` and go to your browser and open `http://localhost:3001/[YOUR_EMAIL_TEMPLATE_FILE]`, like `test.html`. When you update some code you can refresh the browser to see the updates.
7. Run `yarn generate` to generate the emailtemplate with inline-style in `output` folder
8. Run `yarn export` to export the emailtemplate for staging and live in staging and live folders.

Then can copy the html code from template in staging and live folders to mailgun template.

## Git Flow

**Branches**

master: the main branch, include all product features.
hotfix: the hotfix branch, checkout from master, to fix critical issues on live. After fixed will deploy to live, them merge it to master and develop.

release: the release branch, checkout from develop branch. Use this branch to do each deploy. After deploy should merge back to master and develop
bugfix: bugfix branch, checkout from release. After fixed, should create PR to release branch.

develop: the develop branch, firstly checkout from master branch, each feature will be checkout from this branch.

feature: feature branch, should checkout from develop to do each feature.

**Naming**
release: release/[SPRINT_NUMBER], like release/SPRINT-1. And when create this branch should update the version in package.json file.
bugfix: bugfix/[TICKET_NUMBER], like bugfix/BNK-2017.
feature: feature/[TICKET_NUMBER], like feature/BNK-1987.

**Version**

Use three levels for our version. Like 1.0.0
The first number 1 represent the big version of our project.
The second number 0 represent our sprint number . EG. If the release is for sprint one, the version should 1.1.0
The third number 0 represent hotfix count. This mean if there is hotfix, it is our first hotfix for sprint 1, the version should 1.1.1. Later have others hotfix, the version will be 1.1.2,1.1.3.

## CI/CD ##

### Merge Reuest ###

After the merge request created, will run `yarn build` to test and build, only this job passed test, the merge request can be merged. So after create merge request, please check the pipeline tab in your merge request.

### Develop branch ###
After the code review and merged to develop, will build and deploy develop branch to dev automatically.

## Release branch
After the code review and merged to release branch, will build and deploy release branch to stg automatically.