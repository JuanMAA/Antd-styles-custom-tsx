export function cambiarColor(checked) {
  window.less
    .modifyVars({
      '@primary-color': checked ? '#52c41a' : 'purple',
    })
    .then(() => {
      console.log('color changed!');
    })
    .catch((error) => {
      console.error(error);
    });
}
