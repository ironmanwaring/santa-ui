# Santa Swap infrastructure
This serverless application creates and manages infrastructure for the Santa Swap UI application.  It is embedded in the UI application repository to facilitate deploying and removing everything together as a single unit.

# What it does
This project uses [Travis-CI](https://travis-ci.org/santaswap/ui) to automatically create new infrastructure whenever a new branch is created, andto  update that infrastructure with each commit on the branch.  See the [.travis.yml](https://github.com/manwaring/odin/blob/master/.travis.yml) and [.travis-deploy.sh](https://github.com/manwaring/odin/blob/master/.travis-deploy.sh) files for more information about how this has been configured.

# How to use it
This project is built with the [Serverless Framework](https://serverless.com/) - see their documentation for more about the tool and how to use it.

To deploy this infrastructure to your AWS environment simply use your favorite CI/CD tool.  This project uses [Travis-CI](https://travis-ci.org/santaswap/ui) - 

Two environment variables are used to configure the infrastructure apppropriately:

1. **DOMAIN:** The naked domain of the site (i.e. santaswap.io)
1. **DOMAIN_HOSTED_ZONE_ID:** The ID of the AWS Hosted Zone where the domain is hosted

# Production architecture overview
![odin - architecture overview](https://cloud.githubusercontent.com/assets/2955468/24730194/3514a6a0-1a30-11e7-8ced-77cd98251222.png)