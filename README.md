# Campus Life Super App

## Project Overview

Campus Life Super App is a student-focused web application designed to bring important campus resources together in one convenient platform.

The goal is to make campus life easier by giving students access to events, dining information, campus maps, community exchange, and account features.

## MVP Features

- **Campus Events:** Find campus activities and events.
- **Dining:** Access campus dining information and tools.
- **Campus Maps:** Find important campus locations.
- **Community Exchange:** Support student-to-student sharing and exchange.
- **User Accounts:** Login and sign-up functionality.
- **AI Student Assistant:** Provide an AI-powered assistant experience.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| AI Integration | OpenAI API |
| Containerization | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Cloud Platform | Google Cloud Platform |

## Repository Structure

- `.github/workflows/` — CI/CD workflow configuration.
- `Backend/` — Backend application.
- `frontend/` — Frontend application.
- `docker-compose.yml` — Docker configuration.
- `README.md` — Project documentation.

## Installation and Setup

### Requirements

- Node.js and npm
- Git
- Docker Desktop
- MongoDB Atlas connection
- Required API credentials

### Run Locally

1. Clone the repository:

   `git clone https://github.com/kam-carter-2/campus-life-app.git`

2. Enter the project directory:

   `cd campus-life-app`

3. Configure the required environment variables, including database credentials and API keys. Never commit private credentials.

4. Start the application using Docker:

   `docker-compose up --build`

5. Review the terminal output for the local frontend and backend addresses.

## GitHub Collaboration Workflow

This project uses Git and GitHub for version control and collaboration.

1. Keep `main` as the primary integration branch.
2. Create feature branches for individual improvements.
3. Commit changes using descriptive commit messages.
4. Open pull requests to propose changes.
5. Review and test changes before merging into `main`.

### Example Branch

`feature/project-documentation`

### Example Commit Message

`docs: update Campus Life project README`

## Project Links

- **GitHub Repository:** https://github.com/kam-carter-2/campus-life-app
- **Original Repository:** https://github.com/carter7/campus-life-app
- **Confluence Space:** https://bmc-team-g7iavvze.atlassian.net/wiki/spaces/CAMPUSLIFE
- **Previous Google Cloud Deployment:** https://campus-life-app-5799649287.europe-west1.run.app/

## Project Documentation

The project documentation is maintained through Confluence. Development tasks, progress, and project planning are intended to be managed through Jira.

## Security Notes

- Keep API keys and database credentials private.
- Use environment variables for sensitive configuration.
- Do not commit `.env` files or passwords.
- Review changes before merging them into the main branch.

## Project Purpose

Campus Life Super App demonstrates the use of modern web development technologies, version control, collaborative software development, CI/CD practices, and cloud deployment.
