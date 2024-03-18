# Use a base Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (or the port your application listens on)
EXPOSE 3000

# Command to run your Node.js application
CMD ["node", "server.js"]
