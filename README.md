# Los Borbotones

## Products API REST + SEQUALIZE
This is production ready node.js rest api with docker

## Steps:
- Download Docker Compose file: https://gist.github.com/edsonmgoz/9ca78291e4404a34d28466486ffbb10f
- Inside the folder where docker-compose.yaml is located execute:
    - docker pull
    - docker up
- Check example in browser: http://localhost:4000/api/products or load postman-collection located in 'request/borbotones-api-rest-db.postman_collection.json' into postman app.

## Images:
- API REST with NodeJS + Sequalize: https://hub.docker.com/r/edsonmgoz/node-rest-api-sequalize
- Postgres: https://hub.docker.com/_/postgres

## Aditionals:
- Prepare image to DockerHub: docker tag products-rest-api edsonmgoz/borbotones-rest-api
- Push image to DockerHub: docker push edsonmgoz/borbotones-rest-api
