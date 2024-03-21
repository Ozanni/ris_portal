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
                    setBuildStatus("Lint in progress", "PENDING")
                    sh 'npm run lint'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    setBuildStatus("Test in progress", "PENDING")
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    setBuildStatus("Build in progress", "PENDING")
                    sh 'npm run build:dev'
                }
            }
        }
    }
    post {
        success {
            script {
                setBuildStatus("Build succeeded", "SUCCESS");
            }
        }
        failure {
            script {
                setBuildStatus("Build failed", "FAILURE");
            }
        }
    }
}
