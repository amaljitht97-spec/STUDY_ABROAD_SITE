#!/usr/bin/env bash

set -o errexit

cd studyabroad

python manage.py collectstatic --no-input

python manage.py migrate