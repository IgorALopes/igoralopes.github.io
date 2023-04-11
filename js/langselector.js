//Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]")

// Language translations
var language = {
  eng: {
    profession: "Full stack / Frontend Web Developer | Graphic Designer",
    idiom: "Idiom",
    aboutMe: "About Me",
    myName: "Name:",
    aboutHello: "Hello there, I'm Igor.",
    about1p:
      "Trained at Ironhack's bootcamp as a Full Stack Web Developer, I have skills in working with several technologies such as ",
    about1pTechsBold:
      "Javascript (ES6), MongoDB, Express, React, NodeJS, HTML, CSS, Tailwind and Git/GitHub.",
    about2p:
      "I love exploring my creativity to solve problems and generate positive and innovative contributions. I take advantage of my previous graduations in Graphic Design and Interaction Design to provide enhanced results of aesthetic and functional quality with zeal for details and good practices.",
    about3p:
      "A lover of games and technology, the natural world also fascinates me. Learning something new is always motivating. I have communication skills in English and I like to help everyone in the best way possible.",
    about4p:
      "I have been a father for over 3 years and this was one of my main reasons for my career transition as a programmer. I want to influence with the example that it is possible to achieve our goals with effort, dedication and empathy. For this reason, I am looking for an opportunity in the Web Development role.",
    about5p:
      "If you want to know more about my history and how I can, together with companies, transform the user experience and bring	quality to work, feel free to contact me.",
    projects: "Projects",
    resume: "My Resume",
    exp: "Work Experience",
    expTitle1: "Online Class Coordinator",
    exp1descr1p: "Maneged the full functioning of the remote learning modality",
    exp1descr2p: "Technical assistance to customers.",
    exp1descr3p:
      "Creation of physical and virtual advertising, layout of internal material, in addition to updating and maintaining the institutional website.",
    techBold: "Technologies used:",
    expTitle2: "Graphic Designer",
    exp2descr1p: "Creation of advertising pieces.",
    exp2descr2p: "Customer service.",
    exp2descr3p:
      "Printing and plotting quality, colors, use of inputs and materials.",
    exp2descr4p: "Handling of cutting, blocking, binding and similar machines.",
    exp3descr1p: "Development of visual identity and online media.",
    education: "Education",
    edu1Title: "Course Certification",
    edu1Descr1p:
      "9-week intensive Fullstack web development bootcamp (Full-Time)",
    edu1Descr2p: "Front end technologies learned:",
    edu1Descr3p: "Back end technologies learned:",
    edu1Descr4p: "Version Control: Git | GitHub",
    edu2Title: "Post-graduate",
    edu2Descr1p: "Post-graduate in Interaction Design.",
    edu2Descr2p: "Concepts of UX and UI design.",
    edu3Title: "Graduation",
    edu3Descr1p: "Graduation in Graphic Design",
    HireMe: "Hire Me",
    HireMeDescr1p: "Commitment | Professionalism | Respect",
    ResumeEnBtn: "Resume en",
    ResumePtBtn: "Resume pt-br",
  },
  pt_br: {
    profession: "Desenvolvedor Web Full stack / Frontend | Designer Gráfico",
    idiom: "Idioma",
    aboutMe: "Sobre Mim",
    myName: "Nome:",
    aboutHello: "Olá, eu sou Igor.",
    about1p:
      "Formado no bootcamp da Ironhack como Desenvolvedor Web Full Stack (Frontend e Backend), possuo competências no trabalho com diversas tecnologias como ",
    about1pTechsBold:
      "Javascript (ES6), MongoDB, Express, React, NodeJS, HTML, CSS, Tailwind e Git/GitHub.",
    about2p:
      "Adoro explorar minha criatividade para resolver problemas e gerar contribuições positivas e inovadoras. Aproveito de minhas formações anteriores em Design Gráfico e Design de Interação para prover resultados de qualidade estética e funcional aprimorados, com zelo aos detalhes e boas práticas.",
    about3p:
      "Amante de games e tecnologia, o mundo natural também me fascina. Aprender algo novo é sempre motivador. Tenho habilidade de comunicação em inglês e gosto de ajudar a todos da melhor forma possível.",
    about4p:
      "Sou pai há mais de 3 anos e esse foi um dos meus estímulos para a minha transição de carreira como programador. Quero influenciar com o exemplo de que é possível alcançar nossos objetivos com esforço, dedicação e empatia. Por esse motivo, busco uma oportunidade na área de Desenvolvimento Web.",
    about5p:
      "Se você quiser saber mais sobre minha história e como posso, junto com as empresas, transformar a experiência do usuário e trazer qualidade para o trabalho, fique à vontade para entrar em contato comigo.",
    projects: "Projetos",
    resume: "Meu Resumo",
    exp: "Experiência",
    expTitle1: "Coordenador de aulas online",
    exp1Descr1p: "Encarregado pelo pleno funcionamento da modalidade de EAD.",
    exp1Descr2p: "Atendimento técnico aos clientes.",
    exp1Descr3p:
      "Responsável pela criação de peças publicitárias físicas e virtuais, diagramação de material interno, além da atualização e manutenção do site institucional.",
    techBold: "Tecnologias utilizadas:",
    expTitle2: "Designer Gráfico",
    exp2Descr1p: "Criação de peças publicitárias.",
    exp2Descr2p: "Atendimento ao cliente.",
    exp2Descr3p:
      "Impressor - Qualidade de impressão e plotagem, cores, aproveitamento de insulmos e materiais.",
    exp2Descr4p:
      "Manipulação de máquina de corte, blocagem, encadernação e afins.",
    exp3Descr1p: "Elaboração de identidade visual, papelaria e mídias online.",
    education: "Educação",
    edu1Title: "Certificação",
    edu1Descr1p:
      "Bootcamp de desenvolvimento web intensivo de 9 semanas (tempo integral)",
    edu1Descr2p: "Tecnologias Frontend aprendidas:",
    edu1Descr3p: "Tecnologias Backend aprendidas:",
    edu1Descr4p: "Versionamento: Git | GitHub",
    edu2Title: "Pós-graduação",
    edu2Descr1p: "Pós-graduado em Design de Interação",
    edu2Descr2p: "Conceitos de Design UI e UX",
    edu3Title: "Graduação",
    edu3Descr1p: "Graduação em Design Gráfico",
    HireMe: "Contrate-me",
    HireMeDescr1p: "Comprometimento | Profissionalismo | Respeito",
    ResumeEnBtn: "Currículo en",
    ResumePtBtn: "Currículo pt-br",
  },
};

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#pt_br") {
      profession.textContent = language.pt_br.profession
      idiom.textContent = language.pt_br.idiom
      aboutMe.textContent = language.pt_br.aboutMe
      myName.textContent = language.pt_br.myName
      aboutHello.textContent = language.pt_br.aboutHello
      about1p.textContent = language.pt_br.about1p;
      about1pTechsBold.textContent = language.pt_br.about1pTechsBold;
      about2p.textContent = language.pt_br.about2p;
      about3p.textContent = language.pt_br.about3p;
      about4p.textContent = language.pt_br.about4p;
      about5p.textContent = language.pt_br.about5p;
      projects.textContent = language.pt_br.projects;
      resume.textContent = language.pt_br.resume;
      exp.textContent = language.pt_br.exp;
      expTitle1.textContent = language.pt_br.expTitle1;
      exp1Descr1p.textContent = language.pt_br.exp1Descr1p;
      exp1Descr2p.textContent = language.pt_br.exp1Descr2p;
      exp1Descr3p.textContent = language.pt_br.exp1Descr3p;
      techBold.textContent = language.pt_br.techBold;
      expTitle2.textContent = language.pt_br.expTitle2;
      exp2Descr1p.textContent = language.pt_br.exp2Descr1p;
      exp2Descr2p.textContent = language.pt_br.exp2Descr2p;
      exp2Descr3p.textContent = language.pt_br.exp2Descr3p;
      exp2Descr4p.textContent = language.pt_br.exp2Descr4p;
      techBold2.textContent = language.pt_br.techBold;
      expTitle3.textContent = language.pt_br.expTitle2;
      exp3Descr1p.textContent = language.pt_br.exp3Descr1p;
      expTitle4.textContent = language.pt_br.expTitle2;
      exp4Descr1p.textContent = language.pt_br.exp2Descr1p;
      exp4Descr2p.textContent = language.pt_br.exp2Descr2p;
      exp4Descr3p.textContent = language.pt_br.exp2Descr3p;
      exp4Descr4p.textContent = language.pt_br.exp2Descr4p;
      techBold4.textContent = language.pt_br.techBold;
      education.textContent = language.pt_br.education;
      edu1Title.textContent = language.pt_br.edu1Title;
      edu1Descr1p.textContent = language.pt_br.edu1Descr1p;
      edu1Descr2p.textContent = language.pt_br.edu1Descr2p;
      edu1Descr3p.textContent = language.pt_br.edu1Descr3p;
      edu1Descr4p.textContent = language.pt_br.edu1Descr4p;
      edu2Title.textContent = language.pt_br.edu2Title;
      edu2Descr1p.textContent = language.pt_br.edu2Descr1p;
      edu2Descr2p.textContent = language.pt_br.edu2Descr2p;
      edu3Title.textContent = language.pt_br.edu3Title;
      edu3Descr1p.textContent = language.pt_br.edu3Descr1p;
      HireMe.textContent = language.pt_br.HireMe;
      HireMeDescr1p.textContent = language.pt_br.HireMeDescr1p;
      ResumeEnBtn.textContent = language.pt_br.ResumeEnBtn;
      ResumePtBtn.textContent = language.pt_br.ResumePtBtn;
    }
}

// Define language reload onclick iteration
for (let i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function reloadPage() {
        setTimeout(() => location.reload(), 100);
    }
}