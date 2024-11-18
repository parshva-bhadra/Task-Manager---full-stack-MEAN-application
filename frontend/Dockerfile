# Use Node.js LTS version
FROM node:10

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=0 /usr/src/app/dist/frontend /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80