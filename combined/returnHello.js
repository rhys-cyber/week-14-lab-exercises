
const generateHelloString = (language = "english") => {
  switch (language) {
    case "english":
      return "Hello";
    case "gurmukhi":
      return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
    case "italian":
      return "Bonjourno";
    case "german":
      return "Guten Tag";
    case "french":
      return "Bonjour";
    default:
      throw RangeError("Unknown language " + language);
  }
};

module.exports={generateHelloString};
