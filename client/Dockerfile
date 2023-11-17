# client/Dockerfile

# Use the official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app/client

# Copy the current directory contents into the container
COPY package.json .

# Install any needed packages
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
