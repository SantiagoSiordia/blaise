export default (minutes: number) => [
  Math.floor((minutes * 60) / 60),
  Math.floor((minutes * 60) % 60),
];
