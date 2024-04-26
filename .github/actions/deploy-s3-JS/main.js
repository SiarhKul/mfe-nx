const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function runDeployStaticToS3() {
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  console.log('CONTEXT_GIT_HUB', github.context);

  // const s3URL = `s3://${bucket}`;
  // exec.exec(`aws s3 sync ${distFolder} ${s3URL} --region ${region}`);

  core.notice('Heloo from my custom js actions');
}

runDeployStaticToS3();
