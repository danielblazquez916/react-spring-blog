<h1 align="center">Blog App: <br> React + Spring Boot + MongoDB</h1>
<p align="center"><a href="#project-description">Project Description</a> - <a href="#features">Features</a> - <a href="#tech-stack">Tech Stack</a> - <a href="#installation">Installation</a> - <a href="#screenshots">Screenshots</a></p>

<img src="" alt="" align="middle" width="auto" height="auto">

## Project Description:
<p>This is a minimalist, modern blog application built with <strong>React</strong> for the frontend and <strong>Spring Boot</strong> for the backend, using <strong>MongoDB</strong> for data storage.</p>
<p>Originally created for a friend to share political posts, the project wasn’t deployed publicly. Users can post comments by entering their name (no registration/login system implemented yet), and the comment system works correctly with live updates.</p>

## Features:
<ul>
<li>Minimalist, modern UI design</li>
<li>React frontend with responsive layout</li>
<li>Spring Boot backend handling posts and comments</li>
<li>MongoDB for data storage</li>
<li>Comment system with live updates (user enters name)</li>
<li>Pagination system for easy post navigation</li>
</ul>

## Tech Stack:
<ul style="text-align: left; display: inline-block;">
  <li>Languages: Javascript (Frontend), Java (Backend)</li>
  <li>Technologies / Stack: Spring Boot, React, MongoDB, Axios (HTTP client), Tailwind CSS</li>
  <li>Tools: Git, NetBeans, Visual Studio Code, Postman</li>
</ul>

## Installation:

### 1. Clone the repository

```bash
git clone https://github.com/danielblazquez916/react-spring-blog.git
cd react-spring-blog
```

### 2. Backend setup (Spring Boot)

1. **Open the project** in your IDE (NetBeans recommended).

3. **Requirements:**
   * Java 17 or higher
   * Maven installed

4. **Configure MongoDB:**

   * Install MongoDB Server: [MongoDB Community](https://www.mongodb.com/try/download/community)
   * Make sure the MongoDB service is running.
   * Open **MongoDB Compass** and create a database named `posts_db`.
     * You can rename it, but remember to update the URI in `application.properties`.
   * Create two collections: `posts` and `comments`.
   * *(Optional)* Import the provided JSON file to populate test posts.

5. **Run the backend:**

   * Open `PoliticalBlogApplication.java` in your IDE, right-click and select **Run**.
   * Spring Boot will start the backend on `http://localhost:8080` by default.

### 3. Frontend setup (React)

```bash
cd political_blog_client/political_blog_react
npm install
npm start
```

* The React app will run at [http://localhost:3000](http://localhost:3000).
* Make sure the backend is running so the frontend can fetch data correctly.



## Screenshots:
