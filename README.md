# pingdx
### build
    buildah bud -f Dockerfile  -t pingdx .
### run
    podman run \
    --name pingdx \
    -p 30080:80 \
    -v /etc/localtime:/etc/localtime:ro \
    localhost/pingdx
 
 ### run -d
    podman run -d \
    --name pingdx \
    -p 30080:80 \
    -v /etc/localtime:/etc/localtime:ro \
    localhost/pingdx
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
