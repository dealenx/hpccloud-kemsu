# HPCCloud-KemSU

## Introduction

This project is a fork of Kitware's repositories. The infrastruture of the repository for development. A word 'kemsu' in the title means that the development is directed for research at Kemerovo State University

## The main Goal of HPCCloud

Web interface to the HPCCloud infrastructure that abstract simulation environment and resources on which you can run those simulations.

## Our Goal

HPCCloud web-based interface that can run OpenFoam simulation

## Official Kitware's repositories

- Source: https://github.com/Kitware/hpccloud
- Docker compose infrastructure for HPCCloud: https://github.com/Kitware/hpccloud-services

### Running it

```
git clone https://github.com/dealenx/hpccloud-kemsu.git
cd hpccloud-kemsu
```

If you have run the system before, you may need to re-pull the stack of images:

```
docker-compose pull
```

And then you can bring the system up with:

```
docker-compose up -d
```

Once done, make sure ansible is done configuring the various bits by looking at the following log

```
docker logs -f hpccloud-services_ansible_1
```

At that point you should be able to connect to http://localhost:8888 and login as demo/letmein <br/>
or hpccloud/letmein

If you want to stop the services you can run the command

```
docker-compose down
```
