- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Frontend\_1 (`23/08/2023`)](#frontend_1-23082023)
    - [Vite (比webpack速度快, 轻量级开发)](#vite-比webpack速度快-轻量级开发)
      - [Vite初始化](#vite初始化)
      - [jsconfig.json](#jsconfigjson)
      - [vite.config.js](#viteconfigjs)
      - [package.json](#packagejson)
    - [Top Social项目](#top-social项目)
      - [项目UI架构](#项目ui架构)
      - [index.html](#indexhtml)
      - [index.css](#indexcss)
      - [index.js](#indexjs)
    - [ESLint: fix code problems](#eslint-fix-code-problems)

# Class Notes

## Resources
[vite](https://vitejs.dev/guide/)<br>
[Class code](https://github.com/jessieyu1/top-soical-fe)<br>
[ESLint](https://eslint.org/)

## Frontend_1 (`23/08/2023`)
<p align='center'><img src='../image/Top Social.png' width='100%' height='100%' /></p>

### Vite (比webpack速度快, 轻量级开发)
[vite](https://vitejs.dev/guide/)

#### Vite初始化
```shell
cd Frontend
npm create vite@latest # yes Vanilla JavaScript
cd client
npm i
npm run dev
```

删除不需要的文件`main.js`, `counter.js`, `style.css`和public文件夹下面的`vite.svg`. 在client下创建src文件夹, 在client文件夹下面创建`index.js`, `index.css`, `jsconfig.json`.

#### jsconfig.json
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    }
}
```

#### vite.config.js
```shell
npm i path-browserify axios normalize.css
```

#### package.json
```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "normalize.css": "^8.0.1",
    "path-browserify": "^1.0.1"
  }
}
```

```js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
```

### Top Social项目
#### 项目UI架构
nav + main (左section+中section+右section)

```html
<body>
    <nav>
        <!-- divs -->
    </nav>
    <main>
        <section></section>
        <section></section>
        <section></section>
    </main>
</body>
```

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Top Social</title>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
  </head>
  <body>
    <!-- NAV BAR  -->
    <nav>
      <div class="container">
        <!-- LOGO -->
        <div class="logo">TOPSOCIAL</div>
        <!-- SEARCH BAR -->
        <div class="search-bar">
          <i class="uil uil-search"></i>
          <input
            type="search"
            name="navbar-search"
            id="navbar-search"
            placeholder="Search for Creators"
          />
        </div>
        <!-- BUTTON -->
        <div class="create">
          <label for="create-post" class="btn btn-primary"> Create </label>
          <!-- profile photo -->
          <div class="profile-photo">
            <img
              alt="profile photo"
              src="./public/images/profile/profile_1.png"
            />
          </div>
        </div>
      </div>
    </nav>
    <!-- MAIN -->
    <main>
      <div class="container">
        <!-- MAIN left -->
        <div class="main-left">
          <!-- Profile MAIN left -->
          <a href="/" class="profile">
            <div class="profile-phote">
              <img
                src="./public/images/profile/profile_1.png"
                alt="profile-photo"
              />
            </div>
            <div class="profile-description">
              <h2>Jess Ye</h2>
              <p>Jess Ye</p>
            </div>
          </a>
          <!--Side bar MAIN left -->
          <div class="sidebar">
            <a class="menu-item">
              <span>
                <i class="uil uil-house-user"></i>
              </span>
              <h2>Home</h2>
            </a>
            <a class="menu-item">
              <span>
                <i class="uil uil-compass"></i>
              </span>
              <h2>Explore</h2>
            </a>
            <a class="menu-item">
              <span>
                <i class="uil uil-bell"></i>
              </span>
              <h2>Notifications</h2>
            </a>

            <a class="menu-item">
              <span>
                <i class="uil uil-envelope"></i>
              </span>
              <h2>Messages</h2>
            </a>
            <a class="menu-item">
              <span>
                <i class="uil uil-bookmark"></i>
              </span>
              <h2>Bookmarks</h2>
            </a>

            <a class="menu-item">
              <span>
                <i class="uil uil-chart-line"></i>
              </span>
              <h2>Analytics</h2>
            </a>
            <a class="menu-item">
              <span>
                <i class="uil uil-palette"></i>
              </span>
              <h2>Theme</h2>
            </a>

            <a class="menu-item">
              <span>
                <i class="uil uil-setting"></i>
              </span>
              <h2>Settings</h2>
            </a>
          </div>
          <!--creat post MAIN left -->
          <label for="create-post" class="btn btn-primary"> Create Post </label>
        </div>
        <!-- MAIN middle-->

        <!-- MAIN right-->
      </div>
    </main>
    <script type="module" src="/index.js"></script>
  </body>
</html>
```

#### index.css
```css
@import "normalize.css";

/* --- Fonts --- */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* --- Foundation --- */
@import "./src/css/foundation/common.css";

/* --- Components --- */
@import "./src/css/components/button.css";
@import "./src/css/components/search.css";
@import "./src/css/components/profile.css";

/* --- Frames --- */
@import "./src/css/frames/nav/nav.css";
```

#### index.js
```js
import "./index.css";
```


### ESLint: fix code problems
[ESLint](https://eslint.org/)
```shell
npm init @eslint/config
```