FROM node:18

WORKDIR /app

COPY backend/package.json ./backend/
COPY backend/package-lock.json ./backend/

RUN cd backend && npm install

COPY backend/ ./backend/
COPY frontend/ ./frontend/

EXPOSE 5000
CMD ["npm", "start"]
