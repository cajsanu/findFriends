# DogGo


<div style="display: flex; justify-content: space-around;">
  <img src="src/images/users-page.png" alt="drawing" width="300"/>
  <img src="src/images/chat.png" alt="drawing" width="300"/>
</div>

## Overview

**DogGo** is a platform designed to connect dog owners who live near each other, allowing them to arrange dog walks together. The app helps you find other dog lovers near you and makes it easy to find walking companions for both dogs and their owners.

## Features

- **Real-time Messaging**: Instantly connect with other dog owners using real-time chat powered by SignalR.
- **User Authentication & Authorization**: Secure registration and login using ASP.NET Core Identity.
- **Location-Based Matching**: Find nearby dog owners based on your preferred location.
- **Profile Management**: Create and manage user profiles, including details about your dogs.
- **Manage Your Dogs**: Add and remove dogs as your pack size changes.

## Tech Stack

### Frontend

- **React**: A powerful JavaScript library for building user interfaces.
- **TypeScript**: A strongly-typed superset of JavaScript that enhances code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.

### Backend

- **C# and ASP.NET Core**: A high-performance, cross-platform framework for building modern cloud-based applications.
- **SignalR**: A library that simplifies adding real-time web functionality.
- **Entity Framework Core**: An ORM for database access using .NET objects.
- **ASP.NET Core Identity**: A system for managing user authentication and authorization.

### Database

- **PostgreSQL**: An object-relational database to store data.

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Run in development mode

1. ```
   docker compose --file docker-compose.dev.yml up --build
   ```

2. Navigate to [http://localhost:5173](http://localhost:5173)
