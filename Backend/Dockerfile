# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY /IoT-home-automation-system/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY /IoT-home-automation-system/ ./

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

