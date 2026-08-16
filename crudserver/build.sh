#!/usr/bin/env bash

set -o errexit

pip install -r studyabroad/requirements.txt

python studyabroad/manage.py collectstatic --no-input

python studyabroad/manage.py migrate