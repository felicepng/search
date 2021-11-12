const boldSearchInput = (str, substr) => {
  return str.replaceAll(substr, '<span style="font-weight:600">' + substr + '</span>');
}

export default boldSearchInput;