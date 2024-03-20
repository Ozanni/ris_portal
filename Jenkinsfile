void setBuildStatus(String message, String state) {
    step([
        $class: "GitHubCommitStatusSetter",
        reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal"],
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
        errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
        statusResultSource: [$class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]]]
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
            }
        }
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
