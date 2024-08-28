
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-backend

WORKDIR /server

COPY src/server/*.csproj ./

RUN dotnet restore ./findFriends.csproj

COPY src/server/ ./

CMD ["dotnet", "watch"]