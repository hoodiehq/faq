# Frequently asked Hoodies
[![Build Status](https://travis-ci.org/hoodiehq/faq.svg)](https://travis-ci.org/hoodiehq/faq)
[![Dependency Status](https://david-dm.org/hoodiehq/faq.svg)](https://david-dm.org/hoodiehq/faq)
[![devDependency Status](https://david-dm.org/hoodiehq/faq/dev-status.svg)](https://david-dm.org/hoodiehq/faq#info=devDependencies)

## FAQ Workflow - How to display questions and answers on faq.hood.ie

First, a question must be asked! All questions are issues within the [issue tracker](https://github.com/hoodiehq/faq/issues) of this repository. A question will not show up on [faq.hood.ie](http://faq.hood.ie) until a hoodie contributor believes it has been answered correctly. When the question has been answered, a label of `answered` must be added to the GitHub issue for it to appear within the app.

The FAQ app takes the issue's title and uses this as the question title on the app. The first post on the GitHub issue is assumed to be the answer. This can be problematic if the original post in the GitHub Issue is the question asked. In order to have the question and answer show up in the app, you should close the answered issue (make sure it does not have a label of `answered`) and create a new issue. 

This new issue's title should be the question, and the first post should be the answer. It should also have the `answered` label and a `cat:` (category) label so it shows up in helpful categories within the app. See an example [here](https://github.com/hoodiehq/faq/issues/30). This makes sure that our FAQ provides the best information possible and everyone can get the answers they need!

If a better answer comes along, the previous issue within the now incorrect answer can be closed; and a new issue can be created.

Comments and resources are encouraged on each question, dicussion is good and answers may change as time passes. Only the first post will be displayed on the question, but each question comes with a link to the issue to add/view more discussions.


## Development

Install dependencies

```bash
npm install
```

Start development server

```bash
npm start
```

# License

This app is MIT licensed. Feel free to reuse this for your own project.
