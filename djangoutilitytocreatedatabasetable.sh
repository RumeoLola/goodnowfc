#!/bin/bash

# create database tables automatically
# migrate command migrates to existing tables and
# can create new tables that don't already exist
python app.py makemigrations
python app.py migrate
