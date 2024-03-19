def getRepoURL() {
    sh "git config --get remote.origin.url > .git/remote-url"
    return readFile(".git/remote-url").trim()
}

def getCommitSha() {
    sh "git rev-parse HEAD > .git/current-commit"
    return readFile(".git/current-commit").trim()
}

pipeline {
    agent any
    
    stages {
        stage('Update GitHub Commit Status') {
            steps {
                script {
                    // workaround https://issues.jenkins-ci.org/browse/JENKINS-38674
                    def repoUrl = getRepoURL()
                    def commitSha = getCommitSha()

                    step([
                        $class: 'GitHubCommitStatusSetter',
                        reposSource: [$class: "ManuallyEnteredRepositorySource", url: repoUrl],
                        commitShaSource: [$class: "ManuallyEnteredShaSource", sha: commitSha],
                        errorHandlers: [[$class: 'ShallowAnyErrorHandler']],
                        statusResultSource: [
                            $class: 'ConditionalStatusResultSource',
                            results: [
                                [$class: 'BetterThanOrEqualBuildResult', result: 'SUCCESS', state: 'SUCCESS', message: currentBuild.description],
                                [$class: 'BetterThanOrEqualBuildResult', result: 'FAILURE', state: 'FAILURE', message: currentBuild.description],
                                [$class: 'AnyBuildResult', state: 'FAILURE', message: 'Loophole']
                            ]
                        ]
                    ])
                }
            }
        }
    }
}
