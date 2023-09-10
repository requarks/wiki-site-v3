# Blocks - Index

Show a list of pages matching a path or set of tags.

## Properties

| Parameter | Description | Default | Required |
|---|---|---|---|
| `path` | Base path to query from. |  | No |
| `tags` | Filter pages matching all tags. (comma-separated) |  | No |
| `limit` | Maximum number of pages to query. | `10` | No |
| `noResultMsg` | Maximum number of pages to query. | `10` | No |

## Usage

### Markdown

```markdown
::block-index{path="folder-a" tags="foo,bar" limit="5"}
::
```