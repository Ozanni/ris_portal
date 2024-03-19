pipeline {
    agent any

    // def pipelineError = false

    stages {
        stage('install') {
            steps {
                script {
                    try {
                        sh 'yarn install'
                    } catch (Exception e) {
                        pipelineError = true
                        error("Error occurred during 'install' stage: ${e.message}")
                    }
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    try {
                        def branchName = env.BRANCH_NAME
                        sh "git checkout $branchName && npm run lint"
                    } catch (Exception e) {
                        pipelineError = true
                        error("Error occurred during 'Lint' stage: ${e.message}")
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
}

// def rejectPullRequest() {
//     script {
//         def prId = env.CHANGE_ID
//         def apiUrl = "https://api.github.com/repos/${env.REPOSITORY_NAME}/pulls/${prId}/merge"
//         def authHeader = "-H 'Authorization: token ${env.GITHUB_TOKEN}'"
//         def rejectData = '{"commit_title": "Jenkins build failed", "commit_message": "Automatic rejection due to Jenkins build failure"}'
//         def curlCmd = "curl -X PUT -d '${rejectData}' ${authHeader} ${apiUrl}"

//         sh "${curlCmd}"
//     }
}
