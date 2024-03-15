pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    def branchName = env.BRANCH_NAME
                    sh 'git checkout $branchName && npm run lint'
                }
            }
        }
    }
}