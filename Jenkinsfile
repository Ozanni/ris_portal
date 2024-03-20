// pipeline {
//     agent any
//     environment {
//         GITHUB_API_URL='https://api.github.com/repos/Ozanni/ris_portal'
//     }
    
//     stages {
//         stage('Declarative: Checkout SCM') {
//             steps {
//                 script {
//                     checkout([$class: 'GitSCM', branches: [[name: env.BRANCH_NAME]], userRemoteConfigs: [[url: 'git@github.com:Ozanni/ris_portal.git']]])
//                 }
//             }
//         }
//         stage('install') {
//             steps {
//                 script {
//                     sh 'yarn install'
//                 }
//             }
//         }
//         stage('Lint') {
//             steps {
//                 script {
//                     sh 'npm run lint'
//                 }
//             }
//         }
//     }
//     post {
//         success {
//             script {
//                 sh """
//                     curl -L \
//                     -X POST \
//                     -H "Accept: application/vnd.github+json" \
//                     ${GITHUB_API_URL}/statuses/$GIT_COMMIT \
//                     -d '{"state":"success","description":"The build succeeded!","context":"continuous-integration/jenkins"}'
//                 """
//             }
//         }
//         failure {
//             // script {
//             //     sh """
//             //         curl -X POST "${GITHUB_API_URL}/statuses/$GIT_COMMIT" \
//             //         -H "Content-Type: application/json" \
//             //         -d '{"state": "failure"}'
//             //     """
//             // }
//             script {
//                 sh """
//                     curl -L \
//                     -X POST \
//                     -H "Accept: application/vnd.github+json" \
//                     ${GITHUB_API_URL}/statuses/$GIT_COMMIT \
//                     -d '{"state":"failure","description":"The build succeeded!","context":"continuous-integration/jenkins"}'
//                 """
//             }
//         }
//     }
// }
void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
    agent any
    stages {
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint'
                }
                post {
                    always {
                        script {
                            if (currentBuild.result == 'SUCCESS') {
                                setBuildStatus("Build succeeded", "SUCCESS")
                                echo "success"
                            } else {
                                setBuildStatus("Build failed", "FAILURE")
                                echo "fail"
                            }
                        }
                    }
                }
            }
        }
    }
}
