const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');
// http://mfe-nx-statics.s3-website.eu-central-1.amazonaws.com

function runDeployStaticToS3() {
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  const URL = `http://${bucket}.s3-website.${region}.amazonaws.com`;
  const s3URL = `s3://${bucket}`;

  // exec.exec(`aws s3 sync ${distFolder} ${s3URL} --region ${region}`);

  core.setOutput(URL);

  console.log('CONTEXT_GIT_HUB', github.context);
}

runDeployStaticToS3();
