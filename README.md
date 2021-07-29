1.  npm install tailwindcss -D
2. npm install postcss-cli
3. npm install autoprefixer npm-run-all postcss -D
```
path => style/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


````
"scripts": {
    "build:css": "postcss src/styles/index.css -o src/styles/tailwind.css",
    "watch:css": "postcss src/styles/index.css -o src/styles/tailwind.css --watch",
    "react-scripts:start": "sleep 5 && react-scripts start",
    "start": "run-p watch:css react-scripts:start",
    "build": "run-s build:css react-scripts:build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ````
  ```
  path => src/postcss.config.js
  module.exports = {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  };
  ```
  ```
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```
4. npx tailwindcss-cli@latest init