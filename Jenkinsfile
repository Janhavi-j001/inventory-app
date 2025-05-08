pipeline {
    agent any

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
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t inventory-app:v1 .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 5000:5000 inventory-app:v1'
            }
        }
    }
}
