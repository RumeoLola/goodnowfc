#!/bin/bash

# create database tables automatically
# migrate command migrates to existing tables and
# can create new tables that don't already exist
python manage.py makemigrations
python manage.py migrate
