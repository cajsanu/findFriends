# For building the backend
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-backend

WORKDIR /usr/src/app

COPY src/server/. ./

RUN dotnet restore

RUN dotnet publish -c Release -o /app/publish

# For building the frontend
FROM node:20 AS build-frontend

WORKDIR /usr/src/app

COPY src/client/package*.json ./

RUN npm install

COPY src/client/. ./

RUN npm run build

# Serving both frontend and backend
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /usr/src/app

# Copy the build output
COPY --from=build-backend /app/publish .
COPY --from=build-frontend ./ .

EXPOSE 5053

ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]
