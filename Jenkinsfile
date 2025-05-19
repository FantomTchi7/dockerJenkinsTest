pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                sh 'docker build . -t app'
            }
        }

        stage('Docker Run and Test') {
            steps {
                // Remove existing container (if it exists) before running
                sh 'docker stop appcontainer || true'  // Stop container, ignore errors if it doesn't exist
                sh 'docker rm appcontainer || true'    // Remove container, ignore errors if it doesn't exist

                // Run the container with the environment variable and port mapping
                sh 'docker run -p 3000:3000 --name appcontainer -e TRAVEL=Japan -d app'

                // Give the container a few seconds to start up before running tests
                sleep time: 5, unit: 'SECONDS'

                // Execute tests inside the container
                sh 'docker exec appcontainer npm test'  // Removed -it because its not needed

            }
        }
    }
}
