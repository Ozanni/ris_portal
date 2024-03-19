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
    withCredentials([usernamePassword(credentialsId: 'github-private-key-ed25519', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
      sh 'curl -X POST --user $USERNAME:$PASSWORD --data  "{\\"state\\": \\"success\\"}" --url $GITHUB_API_URL/statuses/$GIT_COMMIT'
    }
  }
  failure {
    withCredentials([usernamePassword(credentialsId: 'github-private-key-ed25519', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
      sh 'curl -X POST --user $USERNAME:$PASSWORD --data  "{\\"state\\": \\"failure\\"}" --url $GITHUB_API_URL/statuses/$GIT_COMMIT'
    }
  }
}
}
