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
				sh 'docker run app'
			}
		}
	}
}
