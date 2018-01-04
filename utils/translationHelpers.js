/* global fetch */
import 'isomorphic-fetch';

export async function getTranslation(lang, file, baseUrl) {
  const response = await fetch(`${baseUrl}${lang}/${file}.json`);
  const json = await response.json();

  return json;
}

/* todo: do this better, use loop for namespaces */
/* todo: clean this file after refactor */

