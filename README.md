# Campus Life Super App

A student-focused web application designed to bring useful campus resources together in one place.

## Project overview

Campus Life Super App is intended to make everyday campus information easier to find through a centralized experience.

## MVP scope

- **Student accounts:** registration and sign-in
- **Campus events:** view upcoming events and event details
- **Dining information:** find dining locations, hours, and food information
- **Campus map:** locate important campus buildings and services
- **Community exchange:** share, buy, sell, or exchange items with other students

## Technology stack

- **Frontend:** React and Tailwind CSS
- **Backend:** Node.js and Express
- **Database:** MongoDB Atlas
- **AI assistant:** OpenAI API
- **Containerization:** Docker and Docker Compose
- **Cloud platform:** Google Cloud Platform / Cloud Run

## Project links

- **GitHub repository:** https://github.com/carter7/campus-life-app
- **Jira project:** https://home.atlassian.com/o/7f707860-e3c3-4f38-83c0-1078ce1f4a68/s/12a49302-2f80-44d2-86bd-5e7113fc0195/project/BMCTE6-2/about
- **Confluence space:** https://bmc-team-g7iavvze.atlassian.net/wiki/spaces/CAMPUSLIFE
- **Google Cloud deployment:** https://campus-life-app-5799649287.europe-west1.run.app/

> The deployed URL is included for the course submission. The application may not currently be available at that address.

## Local setup

1. Clone the repository:
   `git clone https://github.com/carter7/campus-life-app.git`
2. Open the project directory.
3. Copy the example environment file to `.env` and configure the required values, including `MONGO_URI`, `JWT_SECRET`, and `OPENAI_API_KEY`.
4. Start the containers:
   `docker-compose up --build`
5. Open the frontend at http://localhost:3000. The backend is available at http://localhost:5000.

Do not commit real API keys, passwords, or other secrets.

## Development workflow

- Use a separate feature branch for each change.
- Make focused commits with descriptive messages.
- Open a pull request to review changes before merging into `main`.
- Keep this README and project documentation up to date as the MVP changes.

## Deployment

The project includes Docker configuration for the frontend and backend. The application can be built and deployed using Google Cloud tooling and Cloud Run. Review the deployment configuration in the repository before deploying.
