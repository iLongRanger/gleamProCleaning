## Development Workflow

We use a changelog + consistent commits so the project can be resumed from any session.

### Branching

- `main` = stable
- Feature branches: `feat/...`, `fix/...`, `chore/...`, `docs/...`

Example:

- `feat/b2b-hero-cta`
- `feat/request-walkthrough-form`

### Commit Conventions

Use conventional prefixes:

- `feat:` new feature
- `fix:` bug fix
- `refactor:` refactor without behavior change
- `chore:` tooling/deps
- `docs:` documentation

Examples:

- `feat(website): add B2B hero + walkthrough CTA`
- `fix(form): validate required fields`
- `docs: add changelog and contribution workflow`

### Changelog

Update `CHANGELOG.md` under **[Unreleased]** for every meaningful change.
When a phase is completed, move items into a dated section.

### Standard Git Flow

```bash
git checkout main
git pull
git checkout -b feat/short-description

# make changes
git add .
git commit -m "feat(scope): short description"
git push -u origin feat/short-description
```

See `RESUME.md` for instructions on how to continue development.
