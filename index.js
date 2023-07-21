function introduction(name) {
    return(`Hi, my name is ${name}.`);
  }
  introduction("Luis");

  function introductionWithLanguage (name, language = "Javascript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  }
  function introductionWithLanguageOptional (name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguageOptional("Gracie", "Python");
  
