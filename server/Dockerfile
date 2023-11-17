# server/Dockerfile

# Use the official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app/server

# Copy the current directory contents into the container at /app
COPY package.json .
COPY config/ ./config/

# Install any needed packages
RUN npm install

# Copy the rest of the application
COPY . .

# Make the container listen on the specified port at runtime
EXPOSE 3001

# Define the command to run the app
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npm start"]