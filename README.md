# Getting started
1. [Edit the `zero-project.yml`][edit] with `name` (it must be alpha-numeric and dashes only to be a valid k8s-namespace) then commit the change.

2. Once you commit the change containing `zero-project.yml`, Github actions will be triggered and rewrite the repository becoming the templated repo

## Notes:
### If your static site is a
####  **single page app**
The built static site will be served and accessible via `<name>.onboarding.dev` OR `<name>.spa.onboarding.dev`  
#### **traditional static site** (served on html files instead of purely index.html)
The built static site will be available in `<name>.static.onboarding.dev`

## Credits
- https://github.com/stefanbuck/cookiecutter-template

[edit]: ../../edit/main/zero-project.yml
