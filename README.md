# Climate Change Attribution Quiz

An interactive single-page web quiz that tests whether you can identify which environmental impacts are caused by climate change.

## Play the Quiz

**https://shoibalc.github.io/climate-attribution-game/**

Scan the QR code to open it on your phone:

![QR Code](My_QR_Code_1-1024.jpeg)

## How It Works

- 10 photos of environmental impacts are shown at random each round.
- For each photo, answer: **Yes**, **No**, or **Maybe** — is climate change the cause?
- Some photos have more than one correct answer; you earn a point for picking any of them.
- Immediate feedback is shown after each answer, along with a running score.
- A results screen shows your final score at the end.

## Running Locally

No build tools required. Open `index.html` directly in a browser, or serve it with any static file server to avoid CORS restrictions when loading images:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
