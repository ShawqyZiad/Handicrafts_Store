# Handicrafts_Store
we are going to discuss the steps involved in building an online E-commerce platform. For example, I've taken a platform that houses DIY and handicraft products made by local artisans. It provides a platform for them to showcase their usually neglected sector.

The name of the website is Kalakaari and it is built using React and SASS. It shows dummy data as of now as this is essentially a frontend-only project implemented using the React framework, which will provide readers insights into how to build the frontend for their e-commerce projects and how to style their React pages using the SASS framework.

# Prerequisites:
- React JS
- Sass & CSS 
- JSX
- ReactJS Components
# Approach to Create E-Commerce Website:
- We are going to initialize the react application using the following files:
index.js - main entry point for the application on the client side.
App.js - Point where routes are defined and all the main components are called.
- We are going to use React components to create various pages.
About.jsx - This page basically describes the purpose of the website. It is optional.
Home.jsx - The home page provides a snapshot of things that can be done on the ecommerce platform.
Login.jsx and Register.jsx - They are meant for logging in/registering the user.
Product.jsx - This is the page to view the details of a single product.
Products.jsx - These pages are the category pages where products of different categories are rendered along with filter options.
Wishlist.jsx - The wishlist page houses the users wishlisted products.
- We are going to create components that will be reusable across all the pages.
Card.jsx - This is the component used accross the entire website to display products.
Cart.jsx - The Cart component houses a popup for facilitating users to view the items present in the cart.
Categories.jsx - This proposes a stylish collage that is displayed on the home page. Various category pages are linked via this collage.
Contact.jsx - Is used to contact the owners of the website, by dropping an email or connecting via social media handles.
FeaturedProducts.jsx - Shows a selected few products that may be trending or new in collection.
Footer.jsx - The footer is the point of contact for people who want to reach out to the owners'. It consists of dummy data currently.
List.jsx - The list component is used on the Products page to render list of items based on the page we are present on.
Navbar.jsx - This is the main centre for navigation accross the website.
ProductCard.jsx - This component is rendered as many times as the number of wishlisted products on wishlist page.
Slider.jsx -This is the hero carousel that appears on the home page.
- index.css - A central css file houses the root colors that can be reused across all pages for styling.
- Material UI icons will be used for icons.
- Sass framework has been used for styling the components. The advantage of using Sass framework for styling is its ability to streamline and enhance CSS development with features like variables, nesting, mixins, and inheritance, ultimately improving code organization and maintainability.
