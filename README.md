# Coding Challenge - Swagger Request Maker

Using the boilerplate provided, create a chrome extension that processes a [Swagger](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) file and displays a UI for easily sending HTTP requests based on the operations defined in the Swagger spec.

## Requirements

* Be able to successfully create a request to operations defined in the [Todos API](https://export.stoplight.io/stoplight/specs/todo-demo.json?__token=4bgg9r9te&__deref=remote).

* Display the response from the latest sent request.

* Use [React](https://github.com/facebook/react) to create the UI for the request maker.

* Use a request library such as [Superagent](https://github.com/visionmedia/superagent) or roll your own.

* Style the UI using css - it should look reasonably pretty.

* Obviously you'll need the [Chrome browser](https://www.google.com/chrome/browser/desktop/index.html).

## Bonus

* Use a state management library such as [Redux](https://github.com/reactjs/redux) or [Mobx](https://github.com/mobxjs/mobx).

* Persistant storage of previous requests and responses

* Use a more complex Swagger file

* Tests

## Instructions

1. Create a Github repo, upload the attached folder, and invite me [https://github.com/ChrisNLott](https://github.com/ChrisNLott)
2. `npm i` && `npm run start`
3. Go to chrome://extensions/ and enable developer mode
4. Click "Load unpacked extension", navigate to the directory of your extension and load the `dev` folder.
5. Open "https://export.stoplight.io/stoplight/specs/todo-demo.json?__token=4bgg9r9te&__deref=remote" in Chrome.
6. Click little "S" icon button in top right of Chrome (the installed extension).
7. This will open up this little react app. The text "Request Maker" should be shown in the rendered popup. This is your starting point!
8. Open /app/containers/App.js, make a change to the text there, note the hot reloading in the chrome extension. You're ready to code!

#### Notes & Hints

* The `apikey` for the Todos API is 123. For example, `http://todos.stoplight.io/todos?apikey=123`
* You'll be working in the app folder. You shouldn't really have to touch anything else.
* You can right click on the "S" button icon, and select "Inspect Popup" to get a developer tools window for the extension. This is where console.log will go.
* See how much progress you can make on the requirements listed above in < 4 hours (half day). There is more than 4 hours of work here, we just want to see how far you can get - good luck!
* Don't waste time working with build systems such as Webpack. Your main focus should be on building the request maker.
* If you have any questions, please email me at [chris@stoplight.io](mailto:chris@stoplight.io)

## Useful Links

* Chrome Extensions - [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)

* Todos API Spec - [https://export.stoplight.io/stoplight/specs/todo-demo.json?__token=4bgg9r9te&__deref=remote](https://export.stoplight.io/stoplight/specs/todo-demo.json?__token=4bgg9r9te&__deref=remote)

* Swagger 2.0 - [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)

* Mobx - [https://github.com/mobxjs/mobx](https://github.com/mobxjs/mobx)

* Redux - [https://github.com/reactjs/redux](https://github.com/reactjs/redux)

* Superagent - [https://github.com/visionmedia/superagent](https://github.com/visionmedia/superagent)
