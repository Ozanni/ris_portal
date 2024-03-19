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
                    sh 'npm run lint'
                }
            }
        }
    }
    post {
        success {
            script {
                sh """
                    curl -L \
                    -X POST \
                    -H "Accept: application/vnd.github+json" \
                    ${GITHUB_API_URL}/statuses/$GIT_COMMIT \
                    -d '{"state":"success","description":"The build succeeded!","context":"continuous-integration/jenkins"}'
                """
            }
        }
        failure {
            // script {
            //     sh """
            //         curl -X POST "${GITHUB_API_URL}/statuses/$GIT_COMMIT" \
            //         -H "Content-Type: application/json" \
            //         -d '{"state": "failure"}'
            //     """
            // }
            script {
                sh """
                    curl -L \
                    -X POST \
                    -H "Accept: application/vnd.github+json" \
                    ${GITHUB_API_URL}/statuses/$GIT_COMMIT \
                    -d '{"state":"failure","description":"The build succeeded!","context":"continuous-integration/jenkins"}'
                """
            }
        }
    }
}
