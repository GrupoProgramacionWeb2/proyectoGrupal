const cpuImage = './assets/productos/cpu.jpg';
const ramImage = './assets/productos/ram.png';
const gpuImage = './assets/productos/gpu.jpg';
const fuenteImage = './assets/productos/fuente.jpg';
const caseImage = './assets/productos/case.jpg';
const mbImage = './assets/productos/mb.jpg';
const soImage = './assets/productos/so.png';
const refrigeracionImage = './assets/productos/refrigeracion.jpg';

datas = {
    components: [
    {
        id: 1,
        total: 2322,
        fee: 99,
        cpu: {
        name: "INTEL CORE I7-12700F 12-CORE",
        price: 359,
        img: cpuImage,
        },
        ram: {
          name: "Corsair RAM 16GB x2 3600hz",
          price: 160,
          img: ramImage,
        },
        gpu: {
          name: "Nvidia RTX 4070 msi OC 12vram",
          price: 999,
          img: gpuImage,
        },
        fuente: {
          name: "Gigabyte HW-750 GOLD",
          price: 125,
          img: fuenteImage,
        },
        case: {
          name: "NZTX GamingCase A2931 RGB",
          price: 99,
          img: caseImage,
        },
        mb: {
          name: "Aorus z690 master model A-123-dsX",
          price: 450,
          img: mbImage,
        },
        so: {
          name: "Windows 10 home",
          price: 30,
          img: soImage,
        },
        refrigeracion: {
          name: "NZTX liquid refrigeration RGB",
          price: 100,
          img: refrigeracionImage,
        },
      },
      {
        id: 2,
        total: 2755.5,
        fee: 99,
        cpu: {
          name: "AMD Ryzen 7950x",
          price: 599,
          img: cpuImage,
        },
        ram: {
          name: "Gigabyte 32gb x4 3600hz",
          price: 280,
          img: ramImage,
        },
        gpu: {
          name: "Nvidia Quadro ultimate generation",
          price: 800,
          img: gpuImage,
        },
        fuente: {
          name: "Corsair CX1200w",
          price: 450,
          img: fuenteImage,
        },
        case: {
          name: "Desing PC case",
          price: 50,
          img: caseImage,
        },
        mb: {
          name: "ASUS x570 AM5",
          price: 450,
          img: mbImage,
        },
        so: {
          name: "Windows 11 pro",
          price: 29.5,
          img: soImage,
        },
        refrigeracion: {
          name: "Desing refrigeration",
          price: 97,
          img: refrigeracionImage,
        },
      },
      {
        id: 3,
        total: 825,
        fee: 99,
        cpu: {
          name: "AMD Ryzen 5600x",
          price: 250,
          img: cpuImage,
        },
        ram: {
          name: "Coirsair 16gb x2 2800hz",
          price: 60,
          img: ramImage,
        },
        gpu: {
          name: "AMD rx580 5vram",
          price: 250,
          img: gpuImage,
        },
        fuente: {
          name: "Gigabyte h450 bronze",
          price: 80,
          img: fuenteImage,
        },
        case: {
          name: "Coding Case",
          price: 35,
          img: caseImage,
        },
        mb: {
          name: "ASUS x270 AM4",
          price: 65,
          img: mbImage,
        },
        so: {
          name: "Windows 10 home",
          price: 30.6,
          img: soImage,
        },
        refrigeracion: {
          name: "NZTX airCondition",
          price: 55,
          img: refrigeracionImage,
        },
      },
      {
        id: 4,
        total: 1413,
        fee: 99,
        cpu: {
          name: "Intel i7 12000f",
          price: 450,
          img: cpuImage,
        },
        ram: {
          name: "Nst 64gbx2 3800hz",
          price: 120,
          img: ramImage,
        },
        gpu: {
          name: "ZOTAC rtx 3090ti",
          price: 560,
          img: gpuImage,
        },
        fuente: {
          name: "Gigabyte HF850 gold",
          price: 80,
          img: fuenteImage,
        },
        case: {
          name: "Rendering Case",
          price: 56,
          img: caseImage,
        },
        mb: {
          name: "ASUS z270",
          price: 60,
          img: mbImage,
        },
        so: {
          name: "Windows 10 pro",
          price: 20,
          img: soImage,
        },
        refrigeracion: {
          name: "CoolerMaster HY564",
          price: 67,
          img: refrigeracionImage,
        },
      },
      {
        id: 5,
        total: 505,
        fee: 99,
        cpu: {
          name: "AMD Ryzen 2400g",
          price: 50,
          img: cpuImage,
        },
        ram: {
          name: "Gigabyte 8gb x1 2500hz",
          price: 25,
          img: ramImage,
        },
        gpu: {
          name: "Nvidia gtx980 4vram",
          price: 250,
          img: gpuImage,
        },
        fuente: {
          name: "Gigabyte 250hd",
          price: 45,
          img: fuenteImage,
        },
        case: {
          name: "Office Case",
          price: 25,
          img: caseImage,
        },
        mb: {
          name: "ASUS x270 AM4",
          price: 50,
          img: mbImage,
        },
        so: {
          name: "Windows XP",
          price: 10,
          img: soImage,
        },
        refrigeracion: {
          name: "AirGeneric",
          price: 50,
          img: refrigeracionImage,
        },
      },
      {
        id: 6,
        total: 605,
        fee: 99,
        cpu: {
          name: "Intel i5 9700k",
          price: 150,
          img: cpuImage,
        },
        ram: {
          name: "Gigabyte 16gb x2 3000hz",
          price: 80,
          img: ramImage,
        },
        gpu: {
          name: "AMD rx580 4vram",
          price: 250,
          img: gpuImage,
        },
        fuente: {
          name: "Generic 500hD",
          price: 50,
          img: fuenteImage,
        },
        case: {
          name: "Other Case",
          price: 15,
          img: caseImage,
        },
        mb: {
          name: "ASUS x270",
          price: 20,
          img: mbImage,
        },
        so: {
          name: "Windows 10 home",
          price: 15,
          img: soImage,
        },
        refrigeracion: {
          name: "AirGeneric",
          price: 25,
          img: refrigeracionImage,
        },
      },
    ],
  }