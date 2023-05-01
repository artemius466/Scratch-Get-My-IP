//artemius466
//SashaAntipov

(function(Scratch) {
  'use strict';
  const vm = Scratch.vm;




  class ScratchGetMyIP {
    constructor() {
    }



    getInfo() {
      return {
        id: "GetMyIP",
        name: "Get my IP",
        color1: '#A33AE5',
        color2: '#C72FFA',
        color3: '#CE1EE6',
        blocks: [
          {
            opcode: "GetIP",
            blockType: "reporter",
            text: "Get my IP",
            arguments: {}
          },
          {
            opcode: "GetCountry",
            blockType: "reporter",
            text: "Get my country",
            arguments: {}
          }
        ],
      };
    }

    GetIP(args) {

      return Scratch.fetch('https://jsonip.com')
        .then(r => r.json())
        .then(d => d.ip)
        .catch(() => '');

    }

    GetCountry(args) {
      return Scratch.fetch('https://jsonip.com')
        .then(r => r.json())
        .then(d => d.country)
        .catch(() => '');
    }


  }



  Scratch.extensions.register(new ScratchGetMyIP())
})(Scratch);
