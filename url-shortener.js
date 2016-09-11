// URL Shortener

/**
  Scope:
  - Should create a unique string of at least N characters, as short as possible, that maps to another string


  Requirements:
  - Algorithm to hash a string uniquely in at most N characters
  - Only lowercase alpha characters allowed (a-z)
  - String should be as short as possible (provided at least N characters)
  - Should provide extremely fast lookups
  - Should 404 for invalid hashes

  Design:
  - Something similar to how Git hashes work seems ideal

  Psuedocode:

  function lookupHash(hash) {
    return database[hash];
  }

  function calculateHash(str, minCharacters) {
    var hash = converToAlphabet(sha1(str));
    var substr = hash.substr(0, minCharacters);

    while (lookupHash(substr)) {
      minCharacters++;
      substr = hash.substr(0, minCharacters);
    }

    return substr;
  }
*/