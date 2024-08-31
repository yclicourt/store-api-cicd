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
    }//end stages
}//end pipeline