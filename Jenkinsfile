pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                script {
                    sh 'yarn install'
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
