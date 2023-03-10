## Init project

```bash
$ npx create-react-app tiktok-clone
```

## Scripts

```bash
# Install deps
$ npm install

# Run dev (Open http://localhost:3000 to view in browser)
$ npm start

# Build
$ npm build
```

## Progress

-   [91. Cài đặt customize-cra](https://fullstack.edu.vn/learning/reactjs?id=18bff2bc-6918-4ff6-af56-50a1c2d8398b)

```bash
# https://github.com/arackaf/customize-cra
$ npm install -D customize-cra react-app-rewired

# https://github.com/timarney/react-app-rewired/#2-create-a-config-overridesjs-file-in-the-root-directory
# https://github.com/timarney/react-app-rewired/#3-flip-the-existing-calls-to-react-scripts-in-npm-scripts-for-start-build-and-test
```

-   [92. Cài đặt babel-plugin-module-resolver](https://fullstack.edu.vn/learning/reactjs?id=a15493ae-8244-4f87-9861-6710af2c2b5a)

```bash
# https://github.com/tleunen/babel-plugin-module-resolver
$ npm install --save-dev babel-plugin-module-resolver

# create .babelrc
# create jsconfig.json

# customize-cra useBabelRc setting in config-overrides.js
# https://github.com/arackaf/customize-cra/blob/master/api.md#usebabelrc
```

-   [93. Cài đặt và cấu hình Prettier](https://fullstack.edu.vn/learning/reactjs?id=4149692d-7c4b-4fca-b7d1-7cdf4a28c04a)

```bash
# VSCode extension (Prettier - Code formatter)
# VSCode formatOnSave (.vscode/settings.json)
# Ctrl + Shift + P > Format Document (Ctrl + Shift + I)
```

-   [94. Cấu hình sử dụng CSS/SASS](https://fullstack.edu.vn/learning/reactjs?id=4149692d-7c4b-4fca-b7d1-7cdf4a28c04a)

```bash
# Tạo GlobalStyles component
# Cài thư viện SASS: npm i -D sass

# clean-up: remove App.css, index.css, logo.svg ...

# Reset CSS: https://www.npmjs.com/package/normalize.css?activeTab=readme
$ npm install --save normalize.css

# Default CSS: font-family, font-size ...
```

-   [95. Cấu hình Router/Layout cho dự án](https://fullstack.edu.vn/learning/reactjs?id=474c8d35-6c6d-4936-a5ce-fc59d0a2eab8)

```bash
# Phân tích tổng quan Layout

# Cài đặt react-router-dom:
$ npm i react-router-dom

# Đưa cấu hình routes ra ngoài (routes/index.js)

# Xây dựng cơ chế tải Layout (setting trong routes/index.js)
# - không set thì dùng DefaultLayout
# - set to null thì không có layout
# - set layout cụ thể thì áp dụng layout đó
```

-   [Dựng khung Layout mặc định](https://fullstack.edu.vn/learning/reactjs?id=6a9a24ec-7182-444e-80de-c26dfce59c39)

```bash
# Cài thư viện classnames: npm i classnames
# Cấu trúc bố cục DefaultLayout: kích thước, vị trí Header, Sidebar
```
