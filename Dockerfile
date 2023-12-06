# Start with the official Node.js Docker image
FROM node:17-alpine

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json, pnpm-lock.yaml and .env file before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy all files from src directory
COPY . .

# Build the project
RUN pnpm build

# Expose the listening port
EXPOSE 8000

# Run the app
CMD [ "pnpm", "start" ]
