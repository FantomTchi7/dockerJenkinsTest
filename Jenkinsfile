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
				sh 'docker run -p 3000:3000 -e TRAVEL=Japan app'
			}
		}
	}
}
