
FROM node:14-alpine 


# Create app directory
WORKDIR /AKENZY/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY yarn.lock ./

RUN npm i
# If you are building your code for production
# RUN npm ci --only=productiondo

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/apps/client/main.js" ]
