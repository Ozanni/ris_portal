pipeline {
    agent any
    environment {
        GITHUB_API_URL='https://api.github.com/repos/Ozanni/ris_portal'
    }
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
                    // def branchName = env.BRANCH_NAME
                    sh 'npm run lint'
                }
            }
        }
    }
    post {
        success {
            script {
                sh '''
                    curl "$GITHUB_API_URL/statuses/$GIT_COMMIT" \
                        -H "Content-Type: application/json" \
                        -X POST \
                        -d "{\"state\": \"success\"}"
                '''
            }
        }
        failure {
            script {
                sh '''
                    curl "$GITHUB_API_URL/statuses/$GIT_COMMIT" \
                        -H "Content-Type: application/json" \
                        -X POST \
                        -d "{\"state\": \"failure\"}"
                '''
            }
        }
    }
}
