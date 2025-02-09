# สเตจที่ 1: สร้าง React App
FROM node:18 AS build
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดไปใน Container
COPY . .

# สร้างไฟล์ build ของ React
RUN npm run build

