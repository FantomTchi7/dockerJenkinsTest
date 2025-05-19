pipeline
{
	agent any

	stages
	{
		stage('docker build')
		{
			steps
			{
				sh 'docker build . -t app'
			}
		}
		stage('docker run')
		{
			steps
			{
				sh 'docker run -p 3000:3000 --name appcontainer -e TRAVEL=Japan -d app'
				sh 'docker exec -it appcontainer "npm test"'
			}
		}
	}
}
