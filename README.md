# Environment

1. Python 3.10
2. Django 4.1.3
3. @vue/cli 5.0.4
4. @vuetify/nightly 3.0.2
5. @vitejs/plugin-vue ^3.0.3 => 3.2.0

# Install Log (Backend)

1. Create virtual environment named "venv"

   > python3 -m venv backend

2. Choose "venv" virtual environment

3. Install django on virtual environment

   > pip3 install django

4. Check django version

   > python3 -m django --version

5. Create django project

   > django-admin startproject backend

6. Verify django server running

6-1. Run django server

> python3 backend/manage.py runserver

6-2. Enter django server on Chrome (http://localhost:8000)

# Run Front-End

1. Go to dsapiens/frontend/dsapiens_frontend/

> cd ./frontend/dsaipens_frontend/

2. Run dev

> npm run dev

# Run Back-end

1. Go to dsapiens/backend/

> cd dsapiens/backend/

2. Activate virtual environment (.venv)

> source .venv/bin/activate

# Docs

1. VueQuill
   Props > https://vueup.github.io/vue-quill/api/
   Delta Docs > https://quilljs.com/docs/delta/
