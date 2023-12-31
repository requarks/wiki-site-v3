# Blocks - Index

Show a list of pages matching a path or set of tags.

**Element:** `block-index`

## Properties

| Parameter | Description | Default | Required |
|---|---|:---:|:---:|
| `path` | Base path to query from. Do NOT include a `/` prefix or suffix. |  | *No* |
| `tags` | Filter pages matching all tags. *(comma-separated)* |  | *No* |
| `limit` | Maximum number of pages to query. | `10` | *No* |
| `orderBy` | Field to order by.<br>Possible values: `createdAt`, `fileName`, `title`, `updatedAt` | `title` | *No* |
| `orderByDirection` | Order direction.<br>Possible values: `asc`, `desc` | `asc` | *No* |
| `depth` | Subfolder depth to fetch pages from. | `0` | *No* |
| `noResultMsg` | Message to display when there are no results. | `No pages matching your query.` | *No* |

## Usage

### Markdown

```markdown
::block-index{path="folder-a" tags="foo,bar" limit="5"}
::
```

### AsciiDoc

*Coming soon*

### Visual Editor

*Coming soon*