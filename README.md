# travel-safar
A Saudi website to write your travel experience and express your opinion to the world

The navigation bar consists of three sections: left, center, and right.
In the left section, there is a logo and a search box. The logo is represented by an image wrapped in an anchor tag, and the search box contains an image and an input field.
The center section contains a list of navigation links. Each link is represented by a list item that contains an image and a text span.
The right section includes a container that represents an online status, displayed as an image.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class="container"
+
class="left-sidebar"
The provided code is an HTML markup accompanied by CSS styles that creates a left sidebar layout for a web page. The sidebar contains a profile box displaying the profile picture, name, description, and post-related information of a traveler. It also includes a link for "my travels" and sections for displaying the latest updates and hashtags. The sidebar design is visually enhanced with background colors, box shadows, and other CSS styles.
The HTML markup utilizes div elements with specific class names to structure the sidebar components, while the CSS styles define properties such as padding, margins, font sizes, and alignments to achieve the desired visual presentation.
In summary, the code generates an aesthetically pleasing left sidebar layout for a web page, showcasing profile information, activity updates, and links related to travels. The CSS styles contribute to the overall appearance and formatting of the sidebar.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class="main-content"
the code creates a visually appealing main content section for a web page, incorporating features for creating posts, sorting options, and displaying individual posts. The CSS styles enhance the presentation and aesthetics of the elements within the main content section.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class="right-sidebar"
the code creates a right sidebar section for a web page, including news, advertisements, useful links, and a copyright message. The CSS styles enhance the visual presentation and formatting of the elements within the right sidebar section.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
** Code Updates: **

Folder Structure:
- `main.js`: Handles routing for the home (`'/'`) and exploration (`'/Explore'`) routes.
- `main.ejs`: Provides a basic HTML structure for generating dynamic web pages using a server-side templating engine.
- `partials` folder:
  - `left-sidebar.ejs`: Represents the left sidebar section of the web page.
  - `navbar.ejs`: Represents the navigation bar section of the web page.
  - `right-sidebar.ejs`: Represents the right sidebar section of the web page.
- `app.js`: Sets up an Express.js server with EJS as the template engine and express-ejs-layouts to support the layout. It configures the static file service, prepares the template engine and layout middleware, defines routes, and starts the server on port 3000.
- `package.json`: Provides information and dependencies for the "project-wep-safar" application. It includes libraries for authentication, rendering views, managing sessions, working with databases, etc.

**Code Functionality:**

`main.js`:
- Sets up two routes: one for the home (`'/'`) and one for exploration (`'/Explore'`).
- Handles GET requests for each route and returns the corresponding render form, allowing the application to serve dynamic content based on the requested route.

`main.ejs`:
- Provides a basic HTML structure for generating dynamic web pages using a server-side templating engine.
- Includes metadata, external resources, reusable components, and a designated area for rendering dynamic content.
- The templating engine replaces specific placeholders with actual content, resulting in a complete and customized web page.

`partials` folder:
- Contains reusable components of the web page: `left-sidebar.ejs`, `navbar.ejs`, and `right-sidebar.ejs`.

`app.js`:
- Sets up an Express.js server.
- Configures EJS as the template engine and express-ejs-layouts to support layouts.
- Configures the static file service to serve static files.
- Defines routes and their corresponding handlers.
- Starts the server on port 3000 to handle incoming requests and serve dynamic content using EJS templates and layouts.

`package.json`:
- Provides necessary information and dependencies for running and developing the "project-wep-safar" application.
- Includes libraries for authentication, rendering views, managing sessions, working with databases, etc.
- Defines scripts for running tests, starting the application, and running the development server with automatic restarts.

**Additional Features:**
- A dropdown menu has been added to the code.
- CSS code has been written to make the site responsive, adjusting its size based on the type of device used, enhancing interactivity.


