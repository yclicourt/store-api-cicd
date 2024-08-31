pipeline {
    agent any
    environment {
        DOCKER_HUB_LOGIN = credentials('docker')
        IMAGE='store-app-api'
        REGISTRY='yoandevelop'
        VERSION='v2'
    }
    stages {
        stage('install dependencies') {
            agent{
                docker {
                    image 'node:alpine'
                    args '-u root:root'
                }
            }
            steps {
               sh 'npm install'
            }
        }
        stage ('unit-test'){
            stage('test') {
                agent{
                    docker {
                        image 'node:alpine'
                        args '-u root:root'
                        }
                    }
                steps {
                        sh 'npm run test'
                    }
                }                
        }         
        stage('build') {
            steps {
               sh 'docker build -t $IMAGE:$VERSION .'
            }
        }
        stage('deploy to hub') {
            steps {
               sh '''
               docker login --username=$DOCKER_HUB_LOGIN_USR --password=$DOCKER_HUB_LOGIN_PSW
               docker tag $IMAGE:$VERSION $REGISTRY/$IMAGE:$VERSION
               docker push $REGISTRY/$IMAGE:$VERSION
               '''
            }
        }
/*         stage('update compose') {
            steps {
               sh '''
               sed -i -- "s/REGISTRY/$REGISTRY/g" docker-compose.yaml
               sed -i -- "s/REPLACE/$IMAGE/g" docker-compose.yaml
               sed -i -- "s/TAG/$VERSION/g" docker-compose.yaml
               cat docker-compose.yaml
               '''
            }
        }  */ 
/*         stage('deploy to K8s') {
            steps {

            }
        } */                
    }//end stages
}//end pipeline