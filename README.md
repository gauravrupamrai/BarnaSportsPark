# 🏟 Barna Sports Park Website Revamp

## 📜 Introduction
The Barna Sports Park website was initially hosted on Squarespace. Our team of five was tasked with revamping the website to address various issues faced by users and to introduce new functionalities.
This is a revamping of the website for [Barnas Sportspark](https://www.barnassportspark.com/).
The goal was to create an easy-to-use, responsive and modern looking site that could be used as a template by other sporting club that would be able to display all information about our sporting facilities.
The website was developed using ReactJS for the frontend and NodeJS for the backend. MongoDB was used as the database, and AWS Lambda was used for serverless functions. The website was deployed on AWS S3 and AWS CloudFront.


## 📚Table of Contents
- [🏟 Barna Sports Park Website Revamp](#🏟-barna-sports-park-website-revamp)
    - [📜 Introduction](#📜-introduction)
    - [📖 Table of Contents](#📖-table-of-contents)
    - [📌 Project Overview](#📌-project-overview)
        - [❗ Issues with the Current System](#❗-issues-with-the-current-system)
        - [📋 Functional Requirements](#📋-functional-requirements)
            - [👥 For Users:](#👥-for-users)
            - [🛠 For Administration:](#🛠-for-administration)
            - [💻 For Developers:](#💻-for-developers)
        - [🛠 Development Methodology](#🛠-development-methodology)
        - [🔧 Technologies Used](#🔧-technologies-used)
        - [🔄 Main Processes](#🔄-main-processes)
    - [🎨 Frontend Development](#🎨-frontend-development)
        - [👁 Overview](#👁-overview)
        - [📚 Technologies and Libraries](#📚-technologies-and-libraries)
        - [📂 Code Structure](#📂-code-structure)
            - [📁 Folder Breakdown](#📁-folder-breakdown)
        - [🌐 Frontend Routes](#🌐-frontend-routes)
    - [🔧 Backend Development](#🔧-backend-development)
      - [👁 Overview](#👁-overview)
      - [📚 Technologies and Libraries](#📚-technologies-and-libraries-1)
      - [📂 Directory Structure](#📂-directory-structure)
          - [📁 Folder Breakdown](#📁-folder-breakdown-1)
      - [🔗 API Endpoints](#🔗-api-endpoints)
    - [🏗 System Architecture](#🏗-system-architecture)
        - [👁 Overview](#👁-overview-2)
        - [🔧 Components](#🔧-components)
        - [🔄 Flow](#🔄-flow)
        - [🗺 SiteMap](#🗺-sitemap)
        - [🌐 Frontend Deployment](#🌐-frontend-deployment)
        - [🔧 Backend Deployment](#🔧-backend-deployment)
        - [🗄 Database](#🗄-database)
        - [📧 Email Notifications](#📧-email-notifications)
        - [💳 Payment Gateway](#💳-payment-gateway)
        - [🔍 Monitoring & Debugging](#🔍-monitoring--debugging)
    - [🚀 Getting Started](#🚀-getting-started)
    - [🔗 Live Demo](#🔗-live-demo)
    - [🔚 Conclusion](#🔚-conclusion)
    - [🤝 Contributing](#🤝-contributing)
    - [📜 License](#📜-license)
    - [🙏 Acknowledgments](#🙏-acknowledgments)



    
## 📌 Project Overview
Barna Sports Park is a non-profit organization that provides sports facilities to the community. The organization has a website that provides information about the park, its facilities, and the committee. It also allows users to book courts and purchase memberships. The website is hosted on Squarespace and is not user-friendly. It lacks a database and requires manual intervention for membership renewals and court bookings. Our team was tasked with revamping the website to address these issues and introduce new functionalities.

### ❗ Issues with the current system
1. Absence of a database.
2. Manual notification to users for memberships and renewals.
3. Manual court booking system.
4. Lack of user-specific information on the website such as membership renewal, user details, payment history, and booking details.
5. No way to track members' payments for memberships.
6. No way to track members' court bookings.

### 📋 Functional Requirements
#### 👥 For Users:
1. Registration
    - User Registration/Sign Up
    - Membership Registration
2. Profile
    - User Profile view
    - User Profile edit
    - User Login
3. Payment System
    - New Membership Payment
    - Membership Renewal
4. Court Booking System
5. Automated Email Notification
##### Additional Features:
1. User Dashboard
    - Membership Details
    - Payment History
    - Court Booking Details
3. Events
4. Contact Us

#### 🛠 For Administration:
1. Admin Profile
2. Record Management
    - Transaction Records
    - Membership Records
    - Court Booking Records
3. Website Content Update Functionality
    - Notices and News
    - Events
    - Membership details
4. Member Search by Name, Phone Number or ID number

#### 💻 For Developers:
1. Scalable and Robust System
2. Easy Maintainability
3. Easy Deployment
4. Easy Debugging
5. Ease of Use
6. API Supported
7. Database Support
8. Easy to Integrate with Frontend
9. Easy to Integrate with Third-Party Services

### 🛠 Development Methodology
We adopted the Agile methodology for the development of this project. The project was divided into sprints, and each sprint had a set of tasks to be completed. The tasks were assigned to team members based on their expertise and interest. The team met regularly to discuss the progress and plan the next steps. The project was developed using the Scrum framework, and the team followed the Scrum ceremonies like daily standups, sprint planning, sprint review, and sprint retrospective.

### 🔧 Technologies Used
1. Figma: For UI design.
2. Lucid Chart: For system design diagrams and architecture.
3. VS Code: Coding IDE.
4. Amazon Web Services (AWS):
    - AWS Cloudfront
    - AWS S3
    - AWS API Gateway
    - AWS Lambda
    - AWS SES
5. MongoDB: Database.
6. React JS: Frontend framework.
7. Node JS: Backend runtime.
8. Stripe: Payment gateway.
9. Git and GitHub: Version control.
10. Serverless: Framework for building applications.
11. GoDaddy: Domain registration.
12. Lumigo: Monitoring and debugging.

### 🔄 Main Processes
1. Barna Court Booking : This process is dedicated to the management of tennis lesson scheduling and court reservations. It ensures that users can easily book courts for their desired time slots and manage their reservations.
2. Membership : The membership process is designed to provide users with a seamless experience when browsing various membership packages. Users can:
    - Browse different membership options.
    - Purchase new memberships.
    - Renew their existing memberships.
3. User Profile : The user profile process is a centralized hub for users to manage their personal information. Features include:
    - Viewing personal details.
    - Editing profile information.
    - Deleting their account.
    - Ensuring that their profiles are accurate and up-to-date.
4. Admin Panel : The admin panel is a comprehensive tool for administrators to manage various aspects of the website and its users. It includes:
    - Event Management: Allows administrators to create, edit, and manage events.
    - Content Management: Provides tools to control the website's content, ensuring it remains relevant and updated.
    - Access to Client Details: Administrators can view and manage user profiles, membership details, and transaction records.
5. Contact Us: This feature facilitates communication between users and the system's administrators. Users can:
    - Send queries.
    - Provide feedback.
    - Communicate any other concerns or suggestions.
6. Events: The events process is designed to enhance user engagement and participation. It allows users to:
    - Explore upcoming events at Barna Sports Park.
    - View details of events such as competitions, workshops, and special activities.
7. Email Process: The email process is an automated communication system that ensures users are always informed. It includes:
    - Sending activation emails to newly registered users.
    - Delivering confirmation emails upon successful membership purchases.
    - Sending renewal reminder emails to inform users about the status of their memberships.
    - Responding to user inquiries received via the "Contact Us" feature.
8. Payments: The payment process is designed to facilitate membership payments. It allows users to:
    - Purchase new memberships.
    - Renew their existing memberships.
    - The payment process is integrated with Stripe, a popular payment gateway, to ensure secure and reliable transactions.
9. Notifications:
    - Membership Renewal Notifications
    - Court Booking Notifications
10. Reports: The reports process provides a way for members to view past transactions with us (e.g., receipts). This includes all types of transaction including but not limited to membership payments, court bookings, and event registrations.


## 🎨 Frontend Development
### 👁 Overview
Our team developed the application logic and user interface using ReactJS. The frontend code has been modularized into distinct components to enhance stability and reusability. React, a versatile JavaScript framework, was chosen for its prowess in single-page application development.
The frontend is developed using the react js library, which makes it easy to build user interfaces that are interactive and responsive across all devices. The code written in react js is reusable and modular, which makes it easy to maintain and update. The react js library is also very fast and efficient, which makes it a good choice for building web applications that are responsive and interactive.

### 📚 Technologies and Libraries
- React Router Dom: Enables defining multiple routes within our application, facilitating dynamic routing for web browser-based application development.
- Redux: Used for state management. It ensures consistent behavior of our app and provides features like state, undo/redo, and more.
- Redux Thunk & Redux Toolkit: Provides asynchronous logic and utilities to streamline the development process.
- UI & Icon Libraries: We utilized a combination of Headless UI, Hero Icons, React Icons, CKEditor, and Tailwind CSS for designing the user interface.

### 📂 Code Structure
To enhance code reusability and maintain a modular structure:
- Components like Sidebar, Navbar, and Banner were made reusable.
- The project structure is divided into folders for each page. Each folder contains components and resources specific to that page.
- The app.js file handles routing and redirection between different pages, serving as the main entry point for our application.
- Their respective files are stored in the `components` folder of each page's directory.
- The layout component is used to wrap all pages within it. This helps with styling and routing.

```
BarnaSportsPark\frontend
|-- build
|-- node_modules
|-- public
|-- src
|   |-- assets
|   |   |-- documents
|   |   |-- images
|   |   |-- logo
|   |-- components
|   |   |-- [Various Components]
|   |-- helper
|   |-- pages
|   |   |-- [Various Pages]
|   |-- redux
|   |   |-- reducers
|   |-- services
|   |-- static
|   |-- styles
|-- .env
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
|-- tailwind.config.js
```
#### 📁 Folder Breakdown
- `build`: This folder contains the production-ready build of the frontend. It's generated after running the build command and is optimized for deployment.
- `node_modules`: This directory houses all the dependencies and libraries required for the project. These are installed via npm (Node Package Manager).
- `public`: Contains static assets that can be accessed publicly. This includes files like the `index.html` template, icons, and any other static assets that aren't processed by Webpack.
- `src`: The main source code directory for the frontend application.
    - `assets`: Stores various assets used in the project.
        - `documents`: Any document files related to the project.
        - `images`: Image assets used throughout the application.
        - `logo`: Logos or branding images specific to the project.
    - `components`: Contains reusable React components.
        - `[Various Components]`: Individual folders or files for each reusable component like Sidebar, Navbar, Banner, etc.
    - `helper`: Contains utility functions or helper scripts that are used across different parts of the application.
    - `pages`: Houses the main page components of the application.
        - `[Various Pages]`: Individual folders or files for each page like Home, AboutUs, ContactUs, etc.
    - `redux`: Contains Redux-related files for state management.
        - `reducers`: Houses reducer functions that specify how the application's state changes in response to actions.
    - `services`: Contains files or scripts related to external services, like API calls or third-party integrations.
    - `static`: Any static data or configuration files.
    - `styles`: Contains CSS or styling-related files.
- `.env`: Environment-specific variables are stored here. This file is crucial for keeping sensitive information like API keys out of the source code.
- `.gitignore`: Specifies which files or directories should be ignored by Git, ensuring that certain files (like node_modules or environment variables) aren't - tracked or pushed to the repository.
- `package-lock.json`: Automatically generated for any operations where npm modifies the node_modules tree or package.json. It describes the exact tree that - was generated in detail.
- `package.json`: Contains metadata about the project, like its dependencies, scripts, and other configurations.
- `README.md`: The markdown file that provides detailed information about the project, its setup, and other relevant details.
- `tailwind.config.js`: Configuration file for Tailwind CSS, a utility-first CSS framework.

### 🌐 Frontend Routes
The Barna Sports Park application uses React Router to define and manage routes for the frontend. Here's a breakdown of the routes:

#### General Routes:
- Home Page: / - Displays the homepage of the application, providing an overview of Barna Sports Park.
- About Us: /aboutUs - Showcases information about Barna Sports Park's foundation and courts.
- Facilities: /facilities - Provides details about the available facilities or services in the park.
- News & Notices: /newsNotice - Displays the latest news and notices related to Barna Sports Park.
- Contact Us: /contactUs - Allows users to get in touch with the administration or management.
- FAQs: /faqs - Displays the FAQs (Frequently Asked Questions) page, answering common inquiries.
- Policies: /policies - Provides information about the park's policies.
- Events: /events - Allows users to explore and view upcoming Barna Sports Park events.
- Membership: /membership - Displays information about the membership packages available.
#### Authentication Routes:
- Login: /login - Provides a login interface for users.
- Sign Up: /signup - Allows new users to register.
- Account Activation: /activate - Handles account activation requests.
- Forgot Password: /forgot-password - Allows users to request a password reset link.
- Reset Password: /reset-password - Enables users to reset their password.
#### Membership Payment Routes:
- Membership Success: /membership/success - Displays a success message upon successful membership payment.
- Membership Failed: /membership/failed - Informs users if there was an issue with the membership payment.
#### Volunteer Route:
- Volunteer: /volunteer - Displays the volunteer page for those interested in joining the committee.
#### User Routes:
The user-specific routes are protected and require authentication:
- User Dashboard: /user/* - Displays the user dashboard and other user-specific pages.
#### Admin Routes:
The admin-specific routes are protected and require admin privileges:
- Admin Dashboard: /admin/* - Displays the admin dashboard and other admin-specific functionalities.
- Content Creation: /createContent - Allows admins to create new content for the website.
- Draft & Send Email: /draftSendEmail - Enables admins to draft and send emails.
- Assign FOB: /assignFOB - Provides an interface for FOB assignment.
#### Miscellaneous Routes:
- Page Not Found: * - Displays a 404 Page Not Found message for any undefined routes.

## 🔧 Backend Development
### 👁 Overview
Our backend is designed using serverless functions in Node.js, organized around essential functionalities and deployed using AWS Lambda.
The backend is developed using the node js runtime, which makes it easy to build scalable and robust applications. The code written in node js is reusable and modular, which makes it easy to maintain and update. The node js runtime is also very fast and efficient, which makes it a good choice for building web applications that are responsive and interactive.

### 📚 Technologies and Libraries
- Node.js: The primary runtime for our backend logic.
- npm (Node Package Manager): Facilitates the management of libraries and dependencies.
- Mongoose: A library for MongoDB that offers schema definition, validation, and querying capabilities.
- AWS SES: Used for sending emails for profile activation, membership confirmations, and user queries.
- Stripe API: Integrated for handling membership payments.

### 📂 Directory Structure
The backend directory structure is as follows:
```
BarnaSportsPark\backend
|-- .serverless
|-- node_modules
|-- src
|   |-- apis
|   |-- database
|   |-- models
|   |-- services
|   |-- utils
|-- .env
|-- .gitignore
|-- index.js
|-- logs.txt
|-- package-lock.json
|-- package.json
|-- README.md
|-- serverless.yml
```

#### 📁 Folder Breakdown
- `.serverless`: Contains the build files for the serverless functions. It's generated after running the build command and is optimized for deployment.
- `node_modules`: This directory houses all the dependencies and libraries required for the project. These are installed via npm (Node Package Manager).
- `src`: The main source code directory for the backend application.
    - `apis`: Contains the API endpoints for the backend.
    - `database`: Contains the database connection and configuration files.
    - `models`: Contains the Mongoose models for the database.
    - `services`: Contains files or scripts related to external services, like API calls or third-party integrations.
    - `utils`: Contains utility functions or helper scripts that are used across different parts of the application.
- `.env`: Environment-specific variables are stored here. This file is crucial for keeping sensitive information like API keys out of the source code.
- `.gitignore`: Specifies which files or directories should be ignored by Git, ensuring that certain files (like node_modules or environment variables) aren't - tracked or pushed to the repository.
- `index.js`: The main entry point for the backend application. It contains the code for the serverless functions.
- `logs.txt`: Contains the logs for the serverless functions. It's generated after running the build command.
- `package-lock.json`: Automatically generated for any operations where npm modifies the node_modules tree or package.json. It describes the exact tree that - was generated in detail.
- `package.json`: Contains metadata about the project, like its dependencies, scripts, and other configurations.
- `README.md`: The markdown file that provides detailed information about the project, its setup, and other relevant details.
- `serverless.yml`: Contains the configuration for the serverless functions. It specifies the runtime, memory, and other parameters for the functions.

### 🔗 API Endpoints
Below is a list of the main API endpoints of the Barna Sports Park application:

#### **Authentication Endpoints** (`signupLogin` function):
| Request Type | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | Health check endpoint. |
| POST | `/register` | Allows users to create new profiles and join the committee. |
| POST | `/login` | Processes the login request by verifying user credentials. |
| POST | `/verify` | Verifies user information. |
| GET | `/activate` | Handles account activation requests. |
| POST | `/reset-password-request` | Allows users to request a password reset link. |
| POST | `/reset-password` | Enables users to reset their password. |

#### **Admin Functions** (`adminFunctions` function):
| Request Type | Endpoint | Description |
| --- | --- | --- |
| POST | `/sendCustomEmail` | Allows admins to send custom emails. |
| POST | `/create-notice` | Enables admins to create notices. |
| GET | `/get-notices` | Fetches all notices created by admins. |
| GET | `/get-notice-for-home` | Fetches notices specifically for the home page. |
| GET | `/get-emails` | Retrieves all emails sent by the admin. |
| GET | `/get-unassigned-fob` | Fetches all unassigned FOBs. |
| POST | `/assign-fob` | Allows admins to assign FOBs. |

#### **User Functions** (`userFunctions` function):
| Request Type | Endpoint | Description |
| --- | --- | --- |
| POST | `/user-profile-update` | Allows users to update their profiles. |
| GET | `/user-profile-info` | Fetches user profile information. |
| POST | `/user-new-membership` | Enables users to purchase new memberships. |
| POST | `/user-membership-webhook` | Webhook endpoint for membership-related actions. |
| POST | `/get-court-booking` | Fetches court booking details. |
| POST | `/user-court-booking` | Allows users to book courts. |
| POST | `/get-membership` | Retrieves membership details. |
| POST | `/user-renew-membership` | Enables users to renew their memberships. |
| POST | `/get-bookings` | Fetches all bookings made by the user. |
| GET | `/get-redux-values` | Retrieves values stored in Redux. |

#### **External Connections** (`externalConn` function):
| Request Type | Endpoint | Description |
| --- | --- | --- |
| POST | `/send-Email` | Sends emails to users. |
| POST | `/submit-volunteer-info` | Allows users to submit volunteer information. |
| GET | `/get-volunteer-info` | Fetches volunteer information. |
| POST | `/submit-contact-us-info` | Allows users to submit contact information. |
| GET | `/get-contact-us-info` | Retrieves contact information submitted by users. |
| GET | `/get-all-users` | Fetches all registered users. |
| GET | `/get-all-memberships` | Retrieves all memberships. |
| GET | `/get-all-bookings` | Fetches all court bookings. |
| GET | `/get-all-transactions` | Retrieves all transactions made on the platform. |

#### **Payment Endpoints** (`payment` function):
| Request Type | Endpoint | Description |
| --- | --- | --- |
| POST | `/membership-payment` | Processes payment details through the Stripe API for membership payment completion. |
| POST | `/membership-payment-webhook` | Webhook endpoint for membership payment-related actions. |

## 🏗 System Architecture
The architecture of the Barna Sports Park system is designed to be robust, scalable, and efficient. It leverages modern technologies and best practices to ensure a seamless user experience and easy maintainability.

### 👁 Overview
The system is divided into two main parts:
1. Frontend: Developed using ReactJS, it provides the user interface and interacts with the backend through API calls.
2. Backend: Built using serverless functions in Node.js, it handles business logic, data processing, and communicates with the database.

### 🔧 Components
1. User Interface (UI): Developed in ReactJS, the UI provides dynamic web pages that allow users to interact with the system. It uses various libraries like React Router Dom for routing, Redux for state management, and Tailwind CSS for styling.
2. API Gateway: Acts as a bridge between the frontend and backend. It routes the incoming requests from the frontend to the appropriate AWS Lambda functions in the backend.
3. AWS Lambda: These are serverless functions that execute the backend logic. They process requests, interact with the database, and return responses. The backend is organized around essential functionalities and is deployed using the Serverless Framework.
4. Database: MongoDB Serverless is used as the primary database. It stores user profiles, membership details, court bookings, and other essential data. The backend interacts with MongoDB using the Mongoose library, which provides a structured way to model and query the database.
5. AWS S3: Used for hosting the static content of the frontend. The ReactJS code is deployed here, and it's configured with AWS CloudFront for faster content delivery.
6. AWS SES: This service is used for sending emails for various purposes like profile activation, membership confirmations, and user queries.
7. Stripe API: Integrated for handling membership payments. Different membership packages are created on Stripe, and they are linked in the code to facilitate payments.
8. AWS CloudFront: Integrated with the S3 bucket to reduce latency. It caches and distributes the static website content, ensuring faster load times for users.

### 🔄 Flow
1. Users interact with the frontend, making requests based on their actions.
2. These requests are routed through the API Gateway to the appropriate AWS Lambda functions.
3. The Lambda functions process the requests, interacting with the MongoDB database as needed.
4. Responses are then sent back through the API Gateway to the frontend, where they are displayed to the user.
5. For functionalities like email notifications and payments, services like AWS SES and Stripe API are invoked respectively.

![BSP Architecture](./BSP%20Architecture.png)

### 🗺 SiteMap
![BSP Sitemap](./BSP%20Sitemap.png)

## 🌐 Frontend Deployment

### AWS S3
Our ReactJS frontend code is deployed on AWS Simple Storage System (S3). AWS S3 is a secure cloud storage platform that stores the static content of our Barna Sports Park website. Deployment is facilitated by the Serverless Framework, which uploads the static files to an AWS S3 bucket named barnasportspark.com.

### AWS CloudFront
To reduce latency and enhance user experience, we integrated the S3 bucket with AWS CloudFront. This service caches and distributes the static website content, ensuring faster load times for users.

## 🔧 Backend Deployment

### AWS Lambda & Serverless Framework
Our backend code is deployed as AWS Lambda functions using the Serverless Framework. This framework simplifies the deployment process by automating the building and configuration of AWS services.

### AWS API Gateway
To bridge the frontend and backend, we utilize AWS API Gateway in conjunction with the Serverless Framework. The API Gateway acts as an intermediary, connecting the frontend S3 bucket with backend Lambda functions. It facilitates the definition of REST APIs, endpoints, and the mapping of requests and responses to Lambda functions.

## 🗄 Database
### MongoDB Serverless
For our database needs, we opted for MongoDB Serverless, a fully managed database service by AWS. Given that our backend is deployed on Lambda functions, we connect to the MongoDB Atlas serverless cluster to execute database operations.

## 📧 Email Notifications
### AWS SES
We utilize AWS Simple Email Service (SES) for sending emails to users. This service is used for various purposes like profile activation, membership confirmations, and user queries. It's integrated with the backend using the Nodemailer library, which provides an easy way to send emails from Node.js applications.

## 💳 Payment Gateway
### Stripe API
We integrated the Stripe API for handling membership payments. Different membership packages are created on Stripe, and they are linked in the code to facilitate payments. The Stripe API is invoked when users purchase or renew their memberships. It's integrated with the backend using the Stripe Node.js library, which provides an easy way to interact with the Stripe API.

## 🔍 Monitoring & Debugging
### Lumigo
We utilized Lumigo for monitoring and debugging our application. It provides a comprehensive dashboard that displays the performance of our application, including the number of invocations, errors, and latency. It also provides detailed logs for each Lambda function, allowing us to debug issues and identify bottlenecks.

## 🚀 Getting Started
Detailed setup and deployment instructions will be provided soon. Stay tuned!

## 🔗 Live Demo
Experience the revamped Barna Sports Park website live [here](https://d2thrwagvcx5mz.cloudfront.net/).

## 🔚 Conclusion
The Barna Sports Park website revamp project was a great learning experience for our team. We were able to apply our knowledge of various technologies and frameworks to develop a robust and scalable system. We also learned how to work in a team and collaborate effectively to achieve our goals. Overall, it was a challenging yet rewarding experience that helped us grow as developers.

## 🤝 Contributing

Contributions to the Barna Sports Park project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`
3. Make changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## 📜 License

The Barna Sports Park project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

The Barna Sports Park project was created as part of revamping the website. Thanks to Barna Sports Park Administration and fellow team members for their support and feedback.

