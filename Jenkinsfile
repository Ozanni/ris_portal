// void setBuildStatus(String message, String state) {
//   step([
//       $class: "GitHubCommitStatusSetter",
//       reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal.git"],
//       contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
//       errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
//       statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
//   ]);
// }

// void setBuildStatus(String message, String context, String state) {
//   // add a Github access token as a global 'secret text' credential on Jenkins with the id 'github-commit-status-token'
//     withCredentials([string(credentialsId: 'github-commit-status-token', variable: 'TOKEN')]) {
//       // 'set -x' for debugging. Don't worry the access token won't be actually logged
//       // Also, the sh command actually executed is not properly logged, it will be further escaped when written to the log
//         sh """
//             set -x
//             curl \"https://github.com/Ozanni/ris_portal.git/repos/org/repo/statuses/$GIT_COMMIT?access_token=$TOKEN\" \
//                 -H \"Content-Type: application/json\" \
//                 -X POST \
//                 -d \"{\\\"description\\\": \\\"$message\\\", \\\"state\\\": \\\"$state\\\", \\\"context\\\": \\\"$context\\\", \\\"target_url\\\": \\\"$BUILD_URL\\\"}\"
//         """
//     } 
// }

def setBuildStatus(String message, String state) {
    withCredentials([string(credentialsId: 'github-commit-status-token', variable: 'GITHUB_TOKEN')]) {
        sh """
            curl -X POST \
                -H 'Authorization: token $GITHUB_TOKEN' \
                -H 'Content-Type: application/json' \
                -d '{"state": "$state", "target_url": "$BUILD_URL", "description": "$message", "context": "jenkins-ci"}' \
                "https://api.github.com/repos/Ozanni/ris_portal/statuses/$GIT_COMMIT"
        """
    }
}

pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                script {
                    try {
                        sh 'yarn install'
                    } catch (Exception e) {
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
                        error("Error occurred during 'Lint' stage: ${e.message}")
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                if (currentBuild.result == 'FAILURE') {
                    setBuildStatus("Build failed", "failure")
                }
            }
        }
    }
}

