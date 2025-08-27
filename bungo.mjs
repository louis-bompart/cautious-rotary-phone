export async function bungo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({'error': 'Bungo error occurred'});
    }, 1000);
  });
}