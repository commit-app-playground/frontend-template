This template is designed to work with sites that can be distributed as static sites only (hosted on AWS S3)

This repository makes the assumption your frontend is Node.js based, please see the [CI's build steps][ci-build] and make changes according to your needs.

The CI runs the following steps:
- Unit test
- build static site
- sync with s3 bucket for your project domain


[ci-build]: ../../.github/workflows/ci.yml#L9-L45