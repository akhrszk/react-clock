# React-Clock

This app implements clock, timer, and stopwatch in React.

This is an example for using [akhrszk/useInterval.ts](https://gist.github.com/akhrszk/776e7f136f8c167d9e66adff1a2d63e5) that is a custom react hooks and wraps JavaScript’s setInterval function.

You can view a live demo https://akhrszk.github.io/react-clock/

> Build with **CRA + TypeScript + TailwindCSS + Storybook**

## Getting started

1. Clone this app
2. `yarn add` to install all dependencies
3. `yarn start` to start App on the local. (this project based create-react-app)

## Storybook

`yarn storybook` to start Storybook on the local.

## Features

This app is using a custom react hooks [akhrszk/useInterval.ts](https://gist.github.com/akhrszk/776e7f136f8c167d9e66adff1a2d63e5).

### Example

```typescript
// The `useInterval` is stops interval execution automatically on unmounted.

// state:      `RUNNING` or `STOPPED`
// start/stop: function to control `interval execution`
const [state, { start, stop }] = useInterval({
  interval: 100,
  onUpdate: () => {
    // A function to be executed every delay milliseconds.
  },
  // This flag is for start `interval execution` automatically on mount.
  autostart: true,
})
```

## License

**[MIT](LICENSE)** License.

# Authors

- **Akihiro Suzuki**
  - GitHub: [akhrszk](https://github.com/akhrszk)
  - Twitter: [@akhr_s](https://twitter.com/akhr_s)
  - Blog: [akihr.io](https://akihr.io/)
