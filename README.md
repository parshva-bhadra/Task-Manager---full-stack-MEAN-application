# Task-Manager Full-Stack MEAN Application

## Running the Application with Docker

1. **Build and Start the Services:**

   Navigate to the root directory of your project where the `docker-compose.yml` file is located and run the following command:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the services defined in the `docker-compose.yml` file.

2. **Access the Application:**

   - **Frontend:** Open your web browser and navigate to `http://localhost:4200/` to access the frontend of the application.
   - **API Server:** The API server will be running on `http://localhost:3000/`.

3. **Stopping the Services:**

   To stop the running services, use:

   ```bash
   docker-compose down
   ```

## Development

- **Frontend Development:**

  If you need to make changes to the frontend, you can still use Angular's development server for hot-reloading:

  ```bash
  cd frontend
  ng serve
  ```

  Navigate to `http://localhost:4200/` to see your changes.

- **Backend Development:**

  For backend changes, you can restart the Docker services to see the updates:

  ```bash
  docker-compose down
  docker-compose up --build
  ```

## Notes

- Ensure Docker and Docker Compose are installed on your machine.
- The MongoDB service is included in the Docker setup and does not require separate installation.
