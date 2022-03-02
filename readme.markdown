# Sandbox Demo

First, run `npm i` to install all deps.

Next, run `npm run build`.

Edit the `index.html` within `dist` directory and remove the leading `/` from the script (to load the script locally).

Open `index.html` in Google Chrome and pop open the dev tools -> console. Type `$` - you will see a function returned.

This $ should not be accessible globally. It should be scoped within the function?