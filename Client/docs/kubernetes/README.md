# Kubernetes

- [Kubernetes](#kubernetes)
  - [Prerequisite](#prerequisite)
  - [Overview](#overview)

## Prerequisite
- kubectl
- helm
- eksctl
- aws-cli
## Overview

We use use aws-eks service to spin up the kubernetes cluster in aws.

Basic topics covered in the kubernetes

- deployment, service, ingress
- helm
- aws-eks
- nginx ingress controller

[set up AWS Account and IAM user](https://docs.aws.amazon.com/rekognition/latest/dg/setup-awscli-sdk.html)

steps to create Elastic Container Registries in AWS
  - Go to ui-react-starter/docker-compose.yaml and change `react-app` service's `SERVER_URL` to mockserver.catalyst.com
  Build the docker-compose file using following command :
    ```
      docker-compose -f docker-compose.yaml build
    ```
  - Once the we build the docker-compose file, it will create two docker images `ui-react-starter_react-app` for react-starter and `ui-react-starter_mock-server` for mock-server
  - Create AWS Elastic Container Registries and push the docker images using following [link](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)
  
steps to run the react-app in the kubernetes cluster
- create a ssh keypair if not exist in aws by following the [link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- create a aws-eks cluseter and deploy nginx ingress controller in it
```
eksctl create cluster \
 --name  <<YOUR_CLUSTER_NAME>> \
 --version 1.21 \
 --nodes-min 2 \
 --nodes-max 2 \
 --ssh-access \
 --ssh-public-key <<EXISTING_AWS_SSH_KEY_PAIR>> \
 --nodegroup-name <<YOUR_CLUSTER_NODEGROUP_NAME>>
```

```
kubectl create namespace ingress-controller
helm install ingress-nginx ingress-nginx/ingress-nginx --namespace ingress-controller
```

- deploy the mockserver in the kubernetes cluster
```
kubectl create namespace apps
kubectl apply -f kubernetes/mockserver-deployment.yaml -n apps
```

- deploy the react app in the kubernetes cluster

```
kubectl apply -f kubernetes/deployment.yaml -n apps
```

- get the external-ip of the nginx ingress controller
  ```
  kubectl get service ingress-controller
  ```
  this the result of above command
  ```
  NAMESPACE                   NAME                  TYPE         CLUSTER-IP         EXTERNAL-IP
  ingress-controller  ingress-nginx-controller  LoadBalancer   10.100.10.211    *******.elb.amazonaws.com
  ```
  ```
  nslookup *******.elb.amazonaws.com
  ```
  this is the result of above command
  ```
  Non-authoritative answer:
  Name:	********.elb.amazonaws.com
  Address: **.***.*.**
  Name:	*******.elb.amazonaws.com
  Address: **.***.*.**
  ```
  Copy anyone of the `Address` ip that is our external ip of nginx ingress controller

- update the /etc/hosts file to access the mockserver and react app from the browser using their respective hosts
  - open the hosts file by following command
  ```
  sudo vi /etc/hosts
  ```
  - add the below two lines at the end of the file hosts

  ```

  -----EOF-----

  <<External ip of nging ingress controller>> react.catalyst.com
  <<External ip of nging ingress controller>> mockserver.catalyst.com
  ```
  - Then save the file. Now you are able to access the react and mockserver by following urls

  ```
  http://react.catalyst.com
  http://mockserver.catalyst.com
  ```
