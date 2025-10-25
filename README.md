<h1 align="center">Blog Project: <br> React + Spring Boot + MongoDB</h1>
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
1. Clone the repository:
```bash
git clone https://github.com/danielblazquez916/react-spring-blog.git
cd react-spring-blog
```
2. Backend setup (Spring Boot):
    - Open the project folder in your IDE (NetBeans recommended).
    - Make sure you have Java 17+ and Maven installed.
    - Configure your MongoDB URI in application.properties (I'll suppose that you have MongoDB installed).
    - Run the backend:
      ```bash
      mvn spring-boot:run
      ```
      (you can run it directly from your IDE)
      
3. Frontend setup (React):
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The app will run on http://localhost:3000

## Screenshots:
