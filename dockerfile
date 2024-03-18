
#!/bin/bash
# Use an official Node.js LTS runtime as the base image

FROM  node:20-alpine

# Set the working directory in the container
WORKDIR /qsofte

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install
# Install the app dependencies
RUN npm install -g serve

# Copy the rest of the app source code to the working directory
COPY . .

# Build the app
RUN npm run build --openssl-legacy-provider

# Expose the port your app will be running on
EXPOSE 3000

# Define the command to run your app
CMD ["npx", "serve -s build"]
