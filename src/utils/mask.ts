export const documentMask = (value: string) => {
  value = value.replace(/\D/g, "");
  if (value.length > 14) value = value.substring(0, 14);

  if (value.length <= 11) {
    // CPF
    return value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  // CNPJ
  return value
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

export const phoneMask = (value: string | undefined): string => {
  if (value && value.length > 19) value = value.substring(0, 19);

  return value
    ? value
        .replace(/\D/g, "")
        // .replace(/(\d{2})(\d)/, "+$1 $2")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
    : "";
};
