export function deleteAll() {
  let confirmation = confirm(
    'Essa operação irá deletar todos os dados salvos e não poder ser desfeita\nDeseja prosseguir?'
  );
  if (confirmation) {
    localStorage.removeItem('infos');
    location.reload();
  }
}
