# moeviz

visualize token routing in mixture-of-experts models

![example](assets/example.gif)

## Setup

The visualization uses `vite` and `d3`, which requires `Node.js version 18+/20+`.
Download Node.js from https://nodejs.org/en/download (recommended `v20.19.4`).

Then, serve the client:

```bash
cd client
npm install
npm run dev
```

Use `poetry` to setup and activate Python environment. Then:

```bash
# Install in editable mode
poetry install

# Start the server
poetry run python3 moeviz/server.py
```

## Adding new models manually

The model must either be downloaded from huggingface (via huggingface-cli) and the model_id should point to the repo id (e.g. ``). Or, a model must be downloaded locally (as a cloned huggingface repo), where the model_id will be the relative path to the directory containing the checkpoint you want to target (e.g. `models/mixtral_5_6gpu/last-checkpoint`). 

To add a new model to the interface, you need to add its configurations in `moeviz/config.py` and `client/src/config.js`.

## Configuration

`moeviz` can be configured using environment variables:

| Environment Variable | Description | Default |
|---|---|---|
| `MOEVIZ_SERVER_HOST` | Server host address | `0.0.0.0` |
| `MOEVIZ_SERVER_PORT` | Server port | `8000` |
| `MOEVIZ_BASE_URL` | Base URL for client connections | `http://{host}:{port}` |
| `MOEVIZ_ENABLE_CORS` | Enable CORS for API | `true` |
| `MOEVIZ_MAX_NEW_TOKENS` | Max tokens for generation | `128` |
| `MOEVIZ_THREAD_POOL_WORKERS` | Number of worker threads | `1` |

### Examples

```bash
# Run on port 9000
MOEVIZ_SERVER_PORT=9000 poetry run python3 moeviz/server.py

# Custom server base URL for client (e.g., when behind a proxy)
MOEVIZ_BASE_URL=https://moeviz.example.com poetry run python3 moeviz/server.py
```
