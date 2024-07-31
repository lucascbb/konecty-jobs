class FilterManager {
  searchTerm(word: string) {
    const normalizedTerm = word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return normalizedTerm;
  }
}

export default new FilterManager();
