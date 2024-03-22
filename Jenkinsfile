void setBuildStatus(String message, String state) {
    step([
        $class: "GitHubCommitStatusSetter",
        reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal"],
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
        errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
        statusResultSource: [$class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]]]
    ]);
}

// void setBuildStatus(String message, String state) {
//     withCredentials([string(credentialsId: 'github-private-key', variable: 'rsa')]) {
//         step([
//             $class: "GitHubCommitStatusSetter",
//             reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Ozanni/ris_portal"],
//             contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
//             errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
//             statusResultSource: [$class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]]],
//             accessToken: env.GITHUB_TOKEN
//         ])
//     }
// }


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
        stage('Set JS heap memory') {
            steps {
                script {
                    setBuildStatus("Memory", "PENDING")
                    env.NODE_OPTIONS = "--max-old-space-size=4096"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    setBuildStatus("Build in progress", "PENDING")
                    sh 'npm run build:dev'
                    sh '''
                        mkdir -p ~/build_v4_demo
                        sudo cp -r /var/lib/jenkins/workspace/v4_demo/build /build_v4_demo
                        '''
                    // withDockerRegistry(url: 'https://index.docker.io/v1/') {
                    //     sh '''
                    //         docker build --platform linux/amd64 -t tunglt1810/itech-viewer-v2:latest -f Dockerfile .
                    //         docker image push tunglt1810/itech-viewer-v2:latest
                    //         '''
                    // }
                    
                }
            }
        }
    //     stage('Deploy') {
    //         steps {
    //             sshagent(['github-private-key-ed25519']) {
    //                 sh '''
    //                 docker stop itech-viewer-v2
    //                 docker rm itech-viewer-v2
    //                 docker run --pull=always --restart unless-stopped  -d --name itech-viewer-v2 -p 3000:80 tunglt1810/itech-viewer-v2:latest
    //                 '''
    //             }
    //         }
    //     }
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
