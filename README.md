# Thread Clone

A simple clone of the Threads app built using Next.js.

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgements](#acknowledgements)

## Introduction

This project is a basic clone of the Threads app, implemented using the Next.js framework. The goal of this project is to demonstrate the capabilities of Next.js in building a simple social media application with features similar to Threads.

## Features

-   User authentication with clerk
-   Create and view posts
-   Like and reply to posts
-   Simple user profile

## Installation

### Prerequisites

-   Node.js (v14.x or later)
-   npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/thread-clone.git
    cd thread-clone
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Create a .env.local file in the root directory and add the necessary environment variables:

-   You need the following variables:
    ```bash
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     CLERK_SECRET_KEY
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     MONGODB_URL
     UPLOADTHING_SECRET
     UPLOADTHING_APP_ID
    ```
-   You can learn more here:
    -   [Clerk](https://clerk.com/)
    -   [Uploadthing](https://uploadthing.com/)
    -   [Mongo](https://www.mongodb.com/)

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
5. Open http://localhost:3000 with your browser to see the result.

### Usage

-   Home Page: View the latest posts from users.
-   Profile Page: View a user's profile and their posts.
-   Create Post: Create a new post from the home page.
-   Like and Reply: Interact with posts by liking and replying.
