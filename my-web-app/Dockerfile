# Use a base Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

RUN apt-get update

CMD ["echo", "Hello World"]

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (or the port your application listens on)
EXPOSE 3000

# Create a non-root user with a UID between 10000 and 20000
RUN groupadd -r myapp && useradd -r -g myapp -u 10001 myapp

# Set the ownership of the application directory to the non-root user
RUN chown -R myapp:myapp /usr/src/app

# Switch to the non-root user with a specified UID
USER 10001

# Command to run your Node.js application
CMD ["node", "server.js"]
