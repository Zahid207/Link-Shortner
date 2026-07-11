#  URL Shortener

A modern, fast, and user-friendly URL Shortener application built using Next.js, MongoDB, and Tailwind CSS. This application allows users to easily convert long, complex web links into short, customized URLs.

---

##  Features

- **Custom Short Text:** Users can choose and set their preferred custom short URL text or slug (e.g., `ggl`) instead of a random string.
- **Duplicate Slug Validation:** If a user tries to create a short link with a slug that already exists in the database, the system will prevent it and display a validation error message: *"ei name onno url ache"*.
- **Dynamic Redirection:** Clicking on the generated short link instantly redirects the user to the original destination URL using Next.js dynamic routing.
- **Clean & Responsive UI:** A minimalist, beautiful, and fully responsive user interface styled with Tailwind CSS.

---

##  Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** MongoDB
- **Styling:** Tailwind CSS & PostCSS
- **Language:** JavaScript (ES6+)

---

##  Folder Structure

```
Link-Shortner/
├── app/
│   ├── [shorturl]/              # Dynamic route for URL redirection (page.js)
│   ├── api/
│   │   └── generate/            # API route to handle link generation (route.js)
│   ├── globals.css              # Tailwind global styles
│   ├── layout.js                # Root layout
│   └── page.js                  # Main UI / Homepage form
├── lib/
│   └── mongodb.js               # MongoDB database connection configuration
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── next.config.mjs              # Next.js configuration
└── package.json                 # Project dependencies and scripts
```

##  Getting Started

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites

Make sure you have **Node.js** and **MongoDB** installed and running on your local system.

### 2. Clone the Repository

```bash
git clone https://github.com/Zahid207/Link-Shortner.git
cd Link-Shortner
```

### 3. Install Dependencies

Run the following command in your terminal to install the required packages:

```bash
npm install
```

### 4. Environment Configuration

Create a file named `.env.local` in the root directory of your project and add the following environment variables according to your local setup:

```env
MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 5. Run the Application

Start the local development server by running this command in your terminal:

```bash
npm run dev
```

Once the server starts successfully, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view and use the application.

##  Screenshots

### Main UI / Dashboard

The primary user interface where users input the original URL and the preferred custom short text.

![Main UI Dashboard](https://github.com/Zahid207/Link-Shortner/blob/main/screenshoot/example_2.png)

### Generated Short URL Output

Displays the successfully generated short URL that users can click or copy.

![Generated Short URL Output](https://github.com/Zahid207/Link-Shortner/blob/main/screenshoot/example_1.png)

