# Add Milestone Action

This action adds the current milestone to any PR that is opened in the repository.

## Inputs

### none

## Outputs

### none

## Example usage
```yml
name: Pull Request Milestone

on:
  pull_request:
    types:
      - opened

jobs:
  add_milestone:
    runs-on: ubuntu-latest
    steps:
      - name: Add milestone action step
        env:
            GH_CONTEXT: ${{ toJson(github) }}
        id: milestone
        uses: salesforce-it/add-milestone-action@v1
```
