export function confirmAlert(): Promise<boolean> {
  return new Promise((resolve) => {
    const isConfirmed = window.confirm("Are you sure? You won't be able to revert this!");
    resolve(isConfirmed);
  });
}
