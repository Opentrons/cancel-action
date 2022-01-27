## Cancel Action
This Action uses the [GitHub API](https://docs.github.com/en/rest/reference/actions#cancel-a-workflow-run) to cancel the currently running workflow. Example usage:

```yaml
    - name: cancelling
      uses: Opentrons/cancel-action@v0.7
        with:
          message: "Your message."
```

The cancellation might take a few seconds to process, this is most useful when you'd like to cancel a long running build. In combination with the `if` statement, this allows you to cancel the build conditionally.

## How to Release

- open in dev container
- bump the version in [README](README.md), [package.json](package.json), [use-cancel.yml]().github/workflows/use-cancel.yml)
- `npm run build`
- ```bash
  git add .
  git commit -m "Your commit message"
  git tag -a -m "Release message" v0.6
  git push --follow-tags
  ```