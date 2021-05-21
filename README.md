# Getting started
1. [Template out][template] your repository in Org: **`commit-app-playground`** as a **`Public`** repository.
_<br/><sub>It must be both public and in the org in order to access deployment credentials from Github actions</sub>_

1. [Edit the `zero-project.yml`][edit] with `name` (it must be alpha-numeric and dashes only to be a valid k8s-namespace) then commit the change.
_<br/><sub>Once Github action successfully run you will nolonger see this readme in your repository but instead of your own example project.</sub>_

1. Once you commit the change containing `zero-project.yml`, Github actions will be triggered and rewrite the repository becoming the templated repo

1. You are suggested to clone the repo **ONLY after you have committed the `zero-project.yml` change**, since the Github actions will rewrite the git history and will become a non-fast forward change.

## Notes:
### If your static site is a
####  **Single page app** <br/><sub>(eg. angular / react)</sub>
The built static site will be served and accessible via `<name>.onboarding.dev` OR `<name>.spa.onboarding.dev`  
#### **Traditional static site** <br/><sub>(served on html files instead of purely index.html,  eg. Next.js static site)</sub>
The built static site will be available in `<name>.static.onboarding.dev`

---
#### Credits
<sub>- [stefanbuck](https://github.com/stefanbuck/cookiecutter-template) for inspiration of using Github actions to template out a repo</sub>


[edit]: ../../edit/main/zero-project.yml
[template]: ../../generate
