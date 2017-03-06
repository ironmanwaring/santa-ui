#!/bin/bash
set -e

if [ $TRAVIS_PULL_REQUEST != "false" ]; then
    
    echo Not deploying serverless code on pull requests

else
    
    echo Deploying serverless project with code from branch: $TRAVIS_BRANCH
    
    echo cd infrastructure \&\& serverless deploy --stage $STAGE
    cd infrastructure && serverless deploy --stage $STAGE

    if [ $STAGE == "prod" ]; then

        echo ng build --prod --output-hashing=all
        ng build --prod --output-hashing=all

    else

        echo ng build --env=$STAGE
        ng build --env=$STAGE --output-hashing=all

    fi
    
fi
