void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

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
    success {
        setBuildStatus("Build succeeded", "SUCCESS");
    }
    failure {
        setBuildStatus("Build failed", "FAILURE");
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
