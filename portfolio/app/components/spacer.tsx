export function Spacer({ height = 2 }: { height?: number }) {
  return <div style={{ height: `${height * 0.25}rem` }} />;
}
