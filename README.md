# React Redux sample code

This is a code sample that was built on top of a redux minimal starter kit: https://github.com/catalin-luntraru/redux-minimal

# Viewing the bundled site
1. Download the public folder
2. Open the index.html file in your browser

# Getting started

1. Before you start working with redux-minimal, you first need to setup your environment. Make sure you have the following installed:
    * [Git](https://git-scm.com/downloads)
    * [NodeJs and Npm](https://nodejs.org/en/download/current/)
    * an IDE to write js code in, for example [Webstorm](https://www.jetbrains.com/webstorm/download/)

2. Once your environment is prepared, open a command prompt (terminal) and type in the following:

    ```sh
    cd C:\js\node\apps
    git clone https://github.com/WesRisenmay/react-redux-sample.git code-sample
    cd code-sample
    npm install
    npm start
    ```

3. Then open your [http://localhost:8080/](http://localhost:8080/) to see the included small users app.


# Scripts

Besides the `start` script, there are also other scripts

|`npm run <script>`|What it does|
|------------------|------------|
|`start`|Starts the app at [http://localhost:8080/](http://localhost:8080/). The bundle js/css files are stored in memory|
|`test`|Starts the unit testing using all the files found in the `test` folder|
|`test-watch`| Starts the unit testing and watches for changes to re-run the tests|
|`build-dev`|Builds the js/css bundle files in the `public` folder. Adds debugging code for development|
|`build-prod`|Builds the js/css bundle minified files in the `public` folder|
