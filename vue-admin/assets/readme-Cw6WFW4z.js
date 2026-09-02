import{R as e,f as t,vt as n}from"./runtime-core.esm-bundler-CpQGbZ0Q.js";import{t as r}from"./Markdown-Cy13rj8h.js";var i=`<p align="center">
    <a href="https://github.com/chocho-1115/vue-admin" target="_blank">
        <img src="https://cn.vuejs.org/images/logo.png" width="100">
    </a>
</p>
<p align="center">
    <a href="https://github.com/vitejs/vite">
        <img src="https://img.shields.io/badge/vite-8.1.4-brightgreen.svg">
    </a>
    <a href="https://github.com/vuejs/core">
        <img src="https://img.shields.io/badge/vue-3.5.39-brightgreen.svg">
    </a>
    <a href="https://github.com/element-plus/element-plus">
        <img src="https://img.shields.io/badge/element--plus-2.14.2-brightgreen.svg">
    </a>
    <a href="https://github.com/axios/axios">
        <img src="https://img.shields.io/badge/axios-1.18.1-brightgreen.svg">
    </a>
    <a href="https://github.com/mswjs/msw">
        <img src="https://img.shields.io/badge/msw-2.15.0-brightgreen.svg">
    </a>
    <a href="https://github.com/faker-js/faker">
        <img src="https://img.shields.io/badge/faker-10.5.0-brightgreen.svg">
    </a>
    <a href="https://github.com/chocho-1115/vue-admin">
        <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
    </a>
</p>
<p align="center">
  <b>English</b> | <a href="./README_zh.md">中文</a>
</p>
<h2>Introduction</h2>
<p>A lightweight, minimalist Vue admin dashboard built with the latest stable dependencies, reducing upgrade and maintenance costs so developers can focus on business logic.</p>
<p><strong>Demo:</strong> <a href="https://chocho-1115.github.io/vue-admin/">https://chocho-1115.github.io/vue-admin/</a></p>
<blockquote>
<p>[!NOTE]
UI design is inspired by <a href="https://github.com/PanJiaChen/vue-admin-template">vue-admin-template</a></p>
</blockquote>
<h2>Why This Project?</h2>
<p>The ideal frontend admin dashboard should be:</p>
<ul>
<li>All dependencies are the latest stable versions, so you'll see &quot;All dependencies match the latest package versions :)&quot; when installing</li>
<li>Every dependency is actively maintained, reducing upgrade and maintenance costs</li>
<li>Only necessary dependencies are included, no bloat</li>
<li>Minimalist functionality and UI design</li>
<li>Wide applicability</li>
</ul>
<p>This project was built to meet these goals.</p>
<h2>✨ Features</h2>
<p>Lightweight, minimal UI, ready to use out of the box. Built with Vue 3 + Vite 8 + Element Plus.</p>
<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Authentication</strong></td>
<td>Login/Logout, Token management, localStorage persistence, Route permission guards</td>
</tr>
<tr>
<td><strong>Layout</strong></td>
<td>Sidebar collapse/expand, Mobile drawer adaptation, Breadcrumbs, Tab view with right-click menu</td>
</tr>
<tr>
<td><strong>Theme</strong></td>
<td>Dark/Light mode switching, localStorage caching</td>
</tr>
<tr>
<td><strong>Router</strong></td>
<td>Nested routes (3 levels), Whitelist, KeepAlive caching, 404 fallback</td>
</tr>
<tr>
<td><strong>HTTP</strong></td>
<td>Axios encapsulation, Unified error handling, EventBus decoupling</td>
</tr>
<tr>
<td><strong>Mock</strong></td>
<td>MSW + Faker.js, Unified response status codes</td>
</tr>
<tr>
<td><strong>Icons</strong></td>
<td>Dual solution: SVG sprite + Element Plus icons</td>
</tr>
<tr>
<td><strong>Others</strong></td>
<td>NProgress loading bar, Markdown rendering</td>
</tr>
</tbody>
</table>
<blockquote>
<p>💬 Have ideas for features? <a href="https://github.com/chocho-1115/vue-admin/discussions/14">Join the discussion</a> to share your thoughts!</p>
</blockquote>
<h2>🎉 Tech Stack</h2>
<p><strong>Created from scratch using <a href="https://github.com/vuejs/create-vue">create-vue 3.x</a>, built with <code>vite 8.x</code>, requires <a href="https://nodejs.org/">Node.js</a> &gt;= 22.16.0.</strong></p>
<p>Main dependencies:</p>
<ul>
<li>💪 <a href="https://vuejs.org/">Vue 3</a> + <a href="https://vite.dev/">Vite 8</a></li>
<li>💅 <a href="https://router.vuejs.org/">Vue Router</a></li>
<li>💅 <a href="https://element-plus.org/zh-CN/">Element Plus</a></li>
<li>🌍 <a href="https://mswjs.io/">MSW</a> + <a href="https://fakerjs.dev/">Faker.js</a></li>
<li>👏 <a href="http://www.axios-js.com/">Axios</a></li>
<li>🥳 <a href="https://sass-lang.com/">Sass</a></li>
<li>📦️ <a href="https://icon-sets.iconify.design/ep/">Element Plus Icon</a> + Custom <a href="https://spiriitlabs.github.io/vite-plugin-svg-spritemap/">SVG Icon Sprite</a> (Element Plus Icon recommended)</li>
</ul>
<h2>Quick Start</h2>
<h3>Prerequisites</h3>
<ul>
<li><a href="https://nodejs.org/">Node.js</a> &gt;= 22.16.0</li>
<li><a href="https://www.npmjs.com/">npm</a> / <a href="https://pnpm.io/">pnpm</a> / <a href="https://yarnpkg.com/">yarn</a></li>
</ul>
<h3>Installation</h3>
<pre><code class="language-bash"># Clone the repository
git clone https://github.com/chocho-1115/vue-admin.git

# Enter project directory
cd vue-admin

# Install dependencies
npm install

# Start development server
npm run dev
</code></pre>
<h3>Other Commands</h3>
<pre><code class="language-bash"># Build for production
npm run build:prod

# Build for staging
npm run build:stage

# Preview build output
npm run preview

# Format code
npm run format

# Lint and fix code
npm run lint
</code></pre>
<h2>License</h2>
<p><a href="https://github.com/chocho-1115/vue-admin/blob/main/LICENSE">MIT</a></p>
<p>Copyright (c) 2025-2026 chocho-1115</p>
`,a={__name:`readme`,setup(a){return(a,o)=>(e(),t(r,{htmlContent:n(i)},null,8,[`htmlContent`]))}};export{a as default};