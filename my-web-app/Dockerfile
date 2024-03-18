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

# Create a non-root user with a UID between 10000 and 20000
RUN groupadd -r myapp && useradd -r -g myapp -u 10003 myapp

# Set the ownership of the application directory to the non-root user
RUN chown -R myapp:myapp /usr/src/app

# Switch to the non-root user
USER myapp

# Command to run your Node.js application
CMD ["node", "server.js"]
