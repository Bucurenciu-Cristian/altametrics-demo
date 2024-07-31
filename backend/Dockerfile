# Use an official Node.js runtime as the base image
FROM node:20

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port specified in .env
EXPOSE ${PORT}

# Command to run the application
CMD ["npm", "run", "start:prod"]
