FROM openjdk:8-jre-alpine

WORKDIR /usr/src/DynamoDb

COPY . .

CMD ["java", "-Djava.library.path=./DynamoDBLocal_lib", "-jar", "DynamoDBLocal.jar", "-sharedDb"]

EXPOSE 8000
