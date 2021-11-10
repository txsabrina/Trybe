let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 
  info['recorrente'] = 'Sim';

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

  let info3 = {
   perso2: info.personagem + " " + "e" + " " + info2.personagem,
   ori2: info.origem + " " + "e" + " " + info2.origem,
   nota2: info.nota + " " + "e" + " " + info2.nota,
   reco2: "Ambos recorrentes"
  };

  console.log(info3)