export function deleteAll() {
  let confirmation = confirm(
    'Essa operação irá deletar todos os dados salvos e não poderá ser desfeita\nDeseja prosseguir?'
  );

  if (confirmation) {
    localStorage.removeItem('dadosRota');
    location.reload();
  }
}
