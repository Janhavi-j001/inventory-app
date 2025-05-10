pipeline {
    agent any

    tools {
        nodejs "Node18"   
    }

    environment {
        IMAGE_NAME = "janhavi001/inventory-app"
        IMAGE_TAG = "v1"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', 
                    credentialsId: 'github-creds', 
                    url: 'https://github.com/janhavi-j001/inventory-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --passWithNoTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Build Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    '''
                }
            }
        }


        stage('Deploy') {
            steps {
                sh '''
                    docker stop inventory-app || true
                    docker rm inventory-app || true
                    docker run -d -p 5000:5000 --name inventory-app $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }
}
