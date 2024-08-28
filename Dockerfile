# For building the backend
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-backend

WORKDIR /app

COPY src/server/*.csproj ./server/

RUN dotnet restore ./server/findFriends.csproj

COPY src/server/ ./server/

RUN dotnet publish ./server/findFriends.csproj -c Release -o /app/publish
RUN ls -al /app/publish

# For building the frontend
FROM node:20 AS build-frontend

WORKDIR /app

COPY src/client/package*.json ./

RUN npm install

COPY src/client/ ./

RUN npm run build

# Serving both frontend and backend
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

# Copy the build output
COPY --from=build-backend /app/publish .
COPY --from=build-frontend /app/dist ./wwwroot

ENTRYPOINT ["dotnet", "findFriends.dll"]
