/*
  Dados editáveis do portfólio.
  Se alguma foto ou PDF não carregar, confira aqui o nome literal da pasta/arquivo.
  Mantenha acentos, espaços, parênteses e diferenças como "inimed cascavel" exatamente como estão no projeto.
*/

// Adicione novas experiências neste array.
const experiencias = [
  {
    titulo: "Musicoterapeuta",
    instituicao: "Unimed Cascavel, Espaço Viver Bem",
    periodo: "2024 até o momento",
    categoria: "Atendimento",
    descricao: "Planejamento e condução de atendimentos musicoterapêuticos, com elaboração de planos terapêuticos individualizados de acordo com as necessidades de cada paciente. Intervenções utilizando recursos musicais, preparação de materiais e instrumentos, registro da evolução dos pacientes e alinhamento com a equipe multiprofissional.",
    albumNome: "Unimed Cascavel, Espaço Viver Bem"
  },
  {
    titulo: "Professora de Musicalização",
    instituicao: "Secretaria Municipal da Educação de Cascavel",
    periodo: "2018 a 2020",
    categoria: "Educação",
    descricao: "Professora de musicalização do Infantil IV ao 5º ano do Ensino Fundamental em escolas da Rede Pública. Elaboração de planos de aula e atividades, preparação de materiais e instrumentos musicais, ministração de aulas e preenchimento do livro de chamada.",
    albumNome: "Professora de musicalização do Infantil IV ao 5º ano"
  },
  {
    titulo: "Professora de Música",
    instituicao: "Colégio Santa Maria",
    periodo: "2021 a 2024",
    categoria: "Educação",
    descricao: "Professora de musicalização do Infantil IV ao 5º ano do Ensino Fundamental. Elaboração de planos de aula e atividades, preparação de materiais e instrumentos musicais e ministração de aulas.",
    observacao: "Não possui fotos no momento."
  },
  {
    titulo: "Instrutora de Música",
    instituicao: "CAPSi, Centro de Assistência Psicossocial e Saúde Mental",
    periodo: "2021 a 2022",
    categoria: "Oficinas",
    descricao: "Instrutora de música em oficinas para crianças e adolescentes, utilizando a música como recurso terapêutico. Responsável pelo planejamento das oficinas, preparação de materiais e instrumentos musicais, promovendo desenvolvimento emocional, social e expressivo dos participantes.",
    observacao: "Não possui fotos no momento."
  },
  {
    titulo: "Jurada",
    instituicao: "FestCorb, Festival de Música",
    periodo: "2023",
    categoria: "Evento",
    descricao: "Jurada em festivais de música, atuando na avaliação técnica e artística de apresentações musicais. Responsável por analisar critérios como afinação, ritmo, interpretação, presença de palco e criatividade, contribuindo de forma ética e criteriosa para a seleção e classificação dos participantes.",
    albumNome: "FestCorb, Festival de Música, Jurada 2023"
  },
  {
    titulo: "Primeira Secretária",
    instituicao: "AMT-PR, Associação de Musicoterapia do Paraná",
    periodo: "Gestão 2025/2026",
    categoria: "Institucional",
    descricao: "Primeira Secretária da AMT-PR, responsável pela organização administrativa da instituição, elaboração e registro de atas, gestão e arquivamento de documentos, controle de correspondências e apoio à comunicação interna e externa. Atua na organização de reuniões, eventos e ações institucionais, auxiliando a diretoria no planejamento e alinhamento das atividades da associação.",
    albumNome: "AMT-PR, Associação de Musicoterapia do Paraná"
  },
  {
    titulo: "Palestrante",
    instituicao: "Educação musical e musicoterapia",
    periodo: "Formações e webinários",
    categoria: "Formação",
    descricao: "Palestrante na área de educação musical e musicoterapia, com experiência na condução de formações para professores e profissionais da educação. Realiza palestras e webinários abordando práticas de musicalização, estratégias pedagógicas e o uso da música como recurso no desenvolvimento infantil."
  },
  {
    titulo: "Cantora",
    instituicao: "Eventos da Secretaria de Educação",
    periodo: "2018 a 2020",
    categoria: "Música",
    descricao: "Apresentações em eventos da Secretaria de Educação, em ações institucionais, cerimônias e projetos educacionais.",
    albumNome: "Organização e Participação na Cantata de Natal"
  }
];

// Adicione novos vídeos neste array.
const videos = [
  {
    titulo: "Videoaula de Musicalização 01",
    categoria: "Videoaula",
    descricao: "Proposta introdutória de musicalização com foco em escuta, ritmo e participação ativa.",
    url: "https://www.youtube.com/watch?v=XujbS-5us9c",
    destaque: false
  },
  {
    titulo: "Videoaula de Musicalização 02",
    categoria: "Videoaula",
    descricao: "Conteúdo educativo para ampliar repertórios musicais em contextos de aprendizagem.",
    url: "https://www.youtube.com/watch?v=9M1Q_OkbkXE",
    destaque: false
  },
  {
    titulo: "Conteúdo de Ritmo",
    categoria: "Educação musical",
    descricao: "Atividade voltada à percepção rítmica, coordenação e expressão musical.",
    url: "https://www.youtube.com/watch?v=z2lJsxMA9ps",
    destaque: false
  },
  {
    titulo: "Coral ETI",
    categoria: "Coral",
    descricao: "Registro de prática vocal coletiva em contexto educacional.",
    url: "https://www.youtube.com/watch?v=Btt2SC7N23M",
    destaque: false
  },
  {
    titulo: "Participação no coral",
    categoria: "Coral",
    descricao: "Registro de participação em coral e prática vocal coletiva.",
    url: "https://www.youtube.com/watch?v=mzS_S5NV6Rc",
    destaque: false
  },
  {
    titulo: "Participação no I Webinário da ETI",
    categoria: "Webinário",
    descricao: "Participação na modalidade de musicalização no I Webinário da ETI.",
    url: "https://www.youtube.com/watch?v=3tAXvjurR5g&list=PLclXGj4nKJ0EeGiYX5nxSI1GYJeKCs6LV&index=5",
    destaque: true
  },
  {
    titulo: "Aula prática de música",
    categoria: "Prática musical",
    descricao: "Demonstração de proposta musical aplicada ao cotidiano escolar.",
    url: "https://www.youtube.com/watch?v=tudP58k-W0E",
    destaque: false
  },
  {
    titulo: "Videoaula de Musicalização 03",
    categoria: "Videoaula",
    descricao: "Atividade musical com linguagem acessível para turmas de educação infantil.",
    url: "https://www.youtube.com/watch?v=7C1CE_C8l9o",
    destaque: false
  },
  {
    titulo: "Conteúdo musical editável",
    categoria: "Educação musical",
    descricao: "Conteúdo complementar de musicalização e prática pedagógica.",
    url: "https://www.youtube.com/watch?v=SaKy9CNqTak",
    destaque: false
  }
];

// Adicione novas fotos dentro do campo fotos de cada álbum.
const albuns = [
  {
    nome: "Unimed Cascavel, Espaço Viver Bem",
    descricao: "Registros de atendimentos e atividades musicoterapêuticas.",
    pasta: "FOTOS/inimed cascavel/",
    fotos: [
      { arquivo: "WhatsApp Image 2026-06-07 at 19.32.34.jpeg", legenda: "Atividade musicoterapêutica com recursos musicais." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.32.21.jpeg", legenda: "Registro de atendimento no Espaço Viver Bem." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.32.21 (1).jpeg", legenda: "Uso de instrumentos e recursos sonoros em atendimento." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.31.04.jpeg", legenda: "Vivência musical em contexto terapêutico." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.31.03.jpeg", legenda: "Preparação de materiais para intervenção musicoterapêutica." }
    ]
  },
  {
    nome: "AMT-PR, Associação de Musicoterapia do Paraná",
    descricao: "Registros de participação institucional e atuação como Primeira Secretária.",
    pasta: "FOTOS/AMT PR Associação de Musicoterapia do Paraná Primeira Secretária GESTÃO 2025e2026/",
    fotos: [
      { arquivo: "WhatsApp Image 2026-06-07 at 20.38.41.jpeg", legenda: "Registro de atuação institucional na AMT-PR." }
    ]
  },
  {
    nome: "FestCorb, Festival de Música, Jurada 2023",
    descricao: "Participação como jurada em festival de música.",
    pasta: "FOTOS/FestCorb - Festival de Música - Jurada 2023/",
    fotos: [
      { arquivo: "WhatsApp Image 2026-06-07 at 20.37.10.jpeg", legenda: "Registro da participação como jurada no FestCorb." }
    ]
  },
  {
    nome: "Organização e Participação na Cantata de Natal",
    descricao: "Registros da organização e participação em apresentação musical.",
    pasta: "FOTOS/Organização e Participação na Cantata de Natal do Colégio Ademir Correa Barbosa  2020/",
    fotos: [
      { arquivo: "WhatsApp Image 2026-06-07 at 20.42.56.jpeg", legenda: "Registro da participação na Cantata de Natal." }
    ]
  },
  {
    nome: "Professora de musicalização do Infantil IV ao 5º ano",
    descricao: "Registros de aulas, práticas musicais e atividades de musicalização infantil.",
    pasta: "FOTOS/Professora de musicalização do Infantil IV ao 5º ano do Ensino Fundamental em escolas do Município/",
    fotos: [
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.22.jpeg", legenda: "Atividade de musicalização em escola municipal." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.22 (1).jpeg", legenda: "Prática musical com estudantes." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.22 (2).jpeg", legenda: "Vivência musical no Ensino Fundamental." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.22 (3).jpeg", legenda: "Atividade pedagógica com recursos musicais." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23.jpeg", legenda: "Registro de aula de musicalização." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (1).jpeg", legenda: "Exploração sonora em grupo." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (2).jpeg", legenda: "Material musical utilizado em aula." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (3).jpeg", legenda: "Prática de ritmo e escuta." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (4).jpeg", legenda: "Atividade musical com turma." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (5).jpeg", legenda: "Registro de musicalização infantil." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (6).jpeg", legenda: "Dinâmica musical em sala." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (7).jpeg", legenda: "Atividade de expressão musical." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (8).jpeg", legenda: "Aula prática de música." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (9).jpeg", legenda: "Registro de recursos sonoros." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (10).jpeg", legenda: "Vivência coletiva de musicalização." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (11).jpeg", legenda: "Atividade pedagógica musical." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (12).jpeg", legenda: "Registro de aula com instrumentos." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (13).jpeg", legenda: "Prática de musicalização infantil." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (14).jpeg", legenda: "Atividade de educação musical." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (15).jpeg", legenda: "Exploração rítmica em sala." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (16).jpeg", legenda: "Registro de atividade com estudantes." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (17).jpeg", legenda: "Prática musical no ambiente escolar." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (18).jpeg", legenda: "Atividade de escuta e expressão." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (19).jpeg", legenda: "Aula de musicalização em grupo." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (20).jpeg", legenda: "Registro de proposta musical." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (21).jpeg", legenda: "Vivência musical com estudantes." },
      { arquivo: "WhatsApp Image 2026-06-07 at 19.11.23 (22).jpeg", legenda: "Encerramento de atividade musical." }
    ]
  }
];

// Adicione novos certificados neste array.
const certificados = [
  { titulo: "Diploma Música", arquivo: "CERTIFICACAO/Diploma Música.pdf", categoria: "Graduação" },
  { titulo: "Diploma Musicoterapia", arquivo: "CERTIFICACAO/Diploma Musicoterapia (1).pdf", categoria: "Pós-graduação" },
  { titulo: "Diploma Musicoterapia e Autismo", arquivo: "CERTIFICACAO/Diploma Musicoterapia e Autismo.pdf", categoria: "Especialização" },
  { titulo: "Diploma Pedagogia", arquivo: "CERTIFICACAO/Diploma pedagogia.pdf", categoria: "Graduação" },
  { titulo: "Teoria Musical Básica", arquivo: "CERTIFICACAO/Música/Certificado_fmc30anos Teoria Musical Básica.pdf", categoria: "Música" },
  { titulo: "Musicalização Infantil para Professores", arquivo: "CERTIFICACAO/Música/Certificado_fmc30anos Musicalização Infantil para Professores.pdf", categoria: "Música" },
  { titulo: "Instrumentos Reciclados", arquivo: "CERTIFICACAO/Música/Certificado_fmc30anos Instrumentos Reciclados.pdf", categoria: "Música" },
  { titulo: "Webinário 2020", arquivo: "CERTIFICACAO/Música/Certificado webnario 2020.pdf", categoria: "Música" },
  { titulo: "Atividades lúdicas: teatro, dança e música", arquivo: "CERTIFICACAO/Música/certificado curso de atividades lúdicas- teatro, dança e música.pdf", categoria: "Música" },
  { titulo: "Cantata de Natal Ademir", arquivo: "CERTIFICACAO/Música/Cantata de Natal Ademir.pdf", categoria: "Música" },
  { titulo: "Animação 2D para jogos", arquivo: "CERTIFICACAO/Música/Animação 2D para jogos.pdf", categoria: "Música" },
  { titulo: "A Dança e a Música na Educação Infantil", arquivo: "CERTIFICACAO/Música/A Dança e a Música na Educação Infantil.pdf", categoria: "Música" },
  { titulo: "XVII Simpósio Brasileiro de Musicoterapia", arquivo: "CERTIFICACAO/Musicoterapia/XVII Simposio Brasileiro de Musicoterapia.pdf", categoria: "Musicoterapia" },
  { titulo: "XXIII Fórum Paranaense de Musicoterapia", arquivo: "CERTIFICACAO/Musicoterapia/CERTIFICADO XXIII Fórum Paranaense de Musicoterapia.pdf", categoria: "Musicoterapia" },
  { titulo: "Organização Fórum 2026", arquivo: "CERTIFICACAO/Musicoterapia/Certificado Organização Fórum 2026 - Açucena Figueredo Freitas.pdf", categoria: "Musicoterapia" },
  { titulo: "Certificado Açucena Figueredo Freitas", arquivo: "CERTIFICACAO/Musicoterapia/Certificado Açucena Figueredo Freitas.pdf", categoria: "Musicoterapia" },
  { titulo: "Participante Fórum 2026", arquivo: "CERTIFICACAO/Musicoterapia/Certificado Açucena Figueredo Freitas Participante Fórum 2026.pdf", categoria: "Musicoterapia" },
  { titulo: "Certificado 23.09 Açucena Figueredo Freitas", arquivo: "CERTIFICACAO/Musicoterapia/Certificado 23.09 Açucena Figueredo Freitas.pdf", categoria: "Musicoterapia" },
  { titulo: "Certificado 16.09 Açucena Figueredo Freitas", arquivo: "CERTIFICACAO/Musicoterapia/Certificado 16.09 Açucena Figueredo Freitas.pdf", categoria: "Musicoterapia" },
  { titulo: "Consultório particular de Musicoterapia: primeiros passos", arquivo: "CERTIFICACAO/Musicoterapia/cert. Consultório particular de Musicoterapia primeiros passos (1).pdf", categoria: "Musicoterapia" },
  { titulo: "Curso Livre UBAM - Módulo 2 AMT-PR", arquivo: "CERTIFICACAO/Musicoterapia/Açucena Figueredo Freitas Declaração Curso Livre Atualizações e Formação Continuada UBAM - MODULO 2 AMT-PR.pdf", categoria: "Musicoterapia" },
  { titulo: "Profissionalizante e Informática", arquivo: "CERTIFICACAO/Pedagogia +/Profissionalizante e Informática.pdf", categoria: "Pedagogia +" },
  { titulo: "Primeiros socorros SM", arquivo: "CERTIFICACAO/Pedagogia +/primeiros socorros SM.pdf", categoria: "Pedagogia +" },
  { titulo: "Primeiros socorros", arquivo: "CERTIFICACAO/Pedagogia +/primeiros socorros cert.pdf", categoria: "Pedagogia +" },
  { titulo: "Língua Portuguesa IV", arquivo: "CERTIFICACAO/Pedagogia +/Língua Portuguesa IV.pdf", categoria: "Pedagogia +" },
  { titulo: "Língua Portuguesa III", arquivo: "CERTIFICACAO/Pedagogia +/Língua Portuguesa III.pdf", categoria: "Pedagogia +" },
  { titulo: "Língua Portuguesa II", arquivo: "CERTIFICACAO/Pedagogia +/Língua Portuguesa II.pdf", categoria: "Pedagogia +" },
  { titulo: "Informática II", arquivo: "CERTIFICACAO/Pedagogia +/Informática II.pdf", categoria: "Pedagogia +" },
  { titulo: "Informática Básica e Google Apps", arquivo: "CERTIFICACAO/Pedagogia +/Informática Básica e Google Apps.pdf", categoria: "Pedagogia +" },
  { titulo: "Educação Ambiental", arquivo: "CERTIFICACAO/Pedagogia +/Educação Ambiental.pdf", categoria: "Pedagogia +" },
  { titulo: "Curso de Inglês Básico", arquivo: "CERTIFICACAO/Pedagogia +/Curso de Inglês Básico.pdf", categoria: "Pedagogia +" },
  { titulo: "Teoria e prática pedagógica 2018", arquivo: "CERTIFICACAO/Pedagogia +/Certificado_SEMEDFAG_teoria e prat pedag 2018.pdf", categoria: "Pedagogia +" },
  { titulo: "CMEIs 2019", arquivo: "CERTIFICACAO/Pedagogia +/Certificado_cmeis2019_ParticipaÃ§Ã£o_19-47-11.pdf", categoria: "Pedagogia +" },
  { titulo: "Relacionamento interpessoal", arquivo: "CERTIFICACAO/Pedagogia +/certificado relacionamento interpessoal frente.pdf", categoria: "Pedagogia +" },
  { titulo: "Recolocação profissional", arquivo: "CERTIFICACAO/Pedagogia +/certificado recolocação profissional frente.pdf", categoria: "Pedagogia +" },
  { titulo: "Gestão e supervisão", arquivo: "CERTIFICACAO/Pedagogia +/certificado gestão e supervisão frente.pdf", categoria: "Pedagogia +" },
  { titulo: "Alfabetização Baseada na Ciência", arquivo: "CERTIFICACAO/Pedagogia +/Certificado Alfabetização Baseada na Ciência.pdf", categoria: "Pedagogia +" }
];

let currentAlbumIndex = 0;
let currentImageIndex = 0;
let focusBeforeModal = null;

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent !== undefined && textContent !== null) element.textContent = textContent;
  return element;
}

function filePath(folder, file) {
  return encodeURI(`${folder}${file}`);
}

function getFileType(path) {
  const extension = path.split(".").pop();
  return extension ? extension.toUpperCase() : "ARQUIVO";
}

function summarizeText(text, limit = 86) {
  if (!text || text.length <= limit) return text || "";
  return `${text.slice(0, limit).trim()}...`;
}

function findAlbumIndex(name) {
  return albuns.findIndex((album) => album.nome === name);
}

function getAlbumCover(album) {
  if (!album || !album.fotos.length) return "";
  return filePath(album.pasta, album.fotos[0].arquivo);
}

function getYouTubeId(url) {
  const fallback = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);

  try {
    const address = new URL(url);
    if (address.hostname.includes("youtu.be")) {
      return address.pathname.split("/").filter(Boolean)[0] || "";
    }

    return address.searchParams.get("v") || address.pathname.split("/").filter(Boolean).pop() || "";
  } catch (error) {
    return fallback ? fallback[1] : "";
  }
}

function getYouTubeEmbedUrl(url) {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : url;
}

function getYouTubeThumb(url) {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

function renderExperiencias() {
  const list = document.getElementById("experiencias-lista");
  if (!list) return;

  list.innerHTML = "";

  experiencias.slice(0, 6).forEach((experience) => {
    const card = createElement("article", "experience-card");
    const cover = createElement("div", "experience-cover");
    const tag = createElement("span", "experience-tag", experience.categoria || "Trajetória");
    const body = createElement("div", "experience-body");
    const title = createElement("h3", "", experience.titulo);
    const place = createElement("p", "experience-place", experience.instituicao);
    const description = createElement("p", "experience-description", summarizeText(experience.descricao, 72));
    const albumIndex = experience.albumNome ? findAlbumIndex(experience.albumNome) : -1;
    const album = albuns[albumIndex];

    if (album && album.fotos.length) {
      const image = document.createElement("img");
      image.src = getAlbumCover(album);
      image.alt = `${album.nome}: ${album.fotos[0].legenda}`;
      image.loading = "lazy";
      cover.appendChild(image);
    } else {
      cover.classList.add("is-empty");
      cover.textContent = "AF";
    }

    body.append(title, place, description);
    card.append(cover, tag, body);

    if (album && album.fotos.length) {
      const openButton = createElement("button", "experience-open", "›");
      openButton.type = "button";
      openButton.setAttribute("aria-label", `Abrir álbum ${album.nome}`);
      openButton.addEventListener("click", () => openGalleryModal(albumIndex, 0));
      card.appendChild(openButton);
    } else {
      const contactLink = createElement("a", "experience-open", "›");
      contactLink.href = "#contato";
      contactLink.setAttribute("aria-label", `Entrar em contato sobre ${experience.titulo}`);
      card.appendChild(contactLink);
    }

    list.appendChild(card);
  });
}

function renderVideos() {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;

  grid.innerHTML = "";

  videos.forEach((video, index) => {
    const card = createElement("article", "video-card");
    if (video.destaque) card.classList.add("is-featured");

    const thumbButton = createElement("button", "video-thumb");
    thumbButton.type = "button";
    thumbButton.setAttribute("aria-label", `Assistir ${video.titulo}`);
    thumbButton.addEventListener("click", () => openVideoModal(index));

    const image = document.createElement("img");
    image.src = getYouTubeThumb(video.url);
    image.alt = `Thumbnail do vídeo ${video.titulo}`;
    image.loading = "lazy";

    const play = createElement("span", "play-mark", "▶");
    play.setAttribute("aria-hidden", "true");
    thumbButton.append(image, play);

    const body = createElement("div", "video-body");
    body.appendChild(createElement("span", "video-category", video.categoria));
    body.appendChild(createElement("h3", "", video.titulo));
    body.appendChild(createElement("p", "", video.descricao));

    const watchButton = createElement("button", "btn btn-secondary", "Assistir");
    watchButton.type = "button";
    watchButton.setAttribute("aria-label", `Abrir vídeo ${video.titulo}`);
    watchButton.addEventListener("click", () => openVideoModal(index));
    body.appendChild(watchButton);

    card.append(thumbButton, body);
    grid.appendChild(card);
  });
}

function renderAlbuns() {
  const grid = document.getElementById("albuns-grid");
  if (!grid) return;

  grid.innerHTML = "";

  albuns.forEach((album, albumIndex) => {
    const card = createElement("article", "album-card");

    if (!album.fotos.length) {
      const empty = createElement("div", "album-thumb", "AF");
      card.appendChild(empty);
      grid.appendChild(card);
      return;
    }

    const button = createElement("button", "album-thumb");
    button.type = "button";
    button.setAttribute("aria-label", `Abrir álbum ${album.nome}`);
    button.addEventListener("click", () => openGalleryModal(albumIndex, 0));

    const image = document.createElement("img");
    image.src = getAlbumCover(album);
    image.alt = `${album.nome}: ${album.fotos[0].legenda}`;
    image.loading = "lazy";
    button.appendChild(image);

    const name = createElement("span", "album-name", album.nome);
    card.append(button, name);
    grid.appendChild(card);
  });
}

function renderCertificados() {
  const grid = document.getElementById("certificados-grid");
  if (!grid) return;

  grid.innerHTML = "";

  certificados.forEach((certificate) => {
    const card = createElement("a", "certificate-card");
    const path = encodeURI(certificate.arquivo);

    card.href = path;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `Abrir ${certificate.titulo}`);

    const icon = createElement("span", "document-icon");
    icon.setAttribute("aria-hidden", "true");

    const titleWrap = createElement("span", "certificate-title");
    titleWrap.appendChild(createElement("h3", "", certificate.titulo));
    titleWrap.appendChild(createElement("span", "certificate-type", `${certificate.categoria} · ${getFileType(certificate.arquivo)}`));

    card.append(icon, titleWrap);
    grid.appendChild(card);
  });
}

function updateModalBodyState() {
  document.body.classList.toggle("modal-open", Boolean(document.querySelector(".modal.is-open")));
}

function updateGalleryModal() {
  const image = document.getElementById("modal-image");
  const albumName = document.getElementById("modal-album");
  const caption = document.getElementById("modal-caption");
  const counter = document.getElementById("modal-counter");
  const album = albuns[currentAlbumIndex];

  if (!image || !album || !album.fotos.length) return;

  const photo = album.fotos[currentImageIndex];
  image.src = filePath(album.pasta, photo.arquivo);
  image.alt = `${album.nome}: ${photo.legenda}`;
  if (albumName) albumName.textContent = album.nome;
  if (caption) caption.textContent = photo.legenda;
  if (counter) counter.textContent = `${currentImageIndex + 1} de ${album.fotos.length}`;
}

function openGalleryModal(albumIndex = 0, imageIndex = 0) {
  const modal = document.getElementById("gallery-modal");
  const album = albuns[albumIndex];
  if (!modal || !album || !album.fotos.length) return;

  const wasClosed = !modal.classList.contains("is-open");
  currentAlbumIndex = albumIndex;
  currentImageIndex = imageIndex;
  updateGalleryModal();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  updateModalBodyState();

  if (wasClosed) {
    focusBeforeModal = document.activeElement;
    modal.querySelector(".modal-close")?.focus();
  }
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  const image = document.getElementById("modal-image");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (image) image.src = "";
  updateModalBodyState();
  focusBeforeModal?.focus?.();
}

function nextImage() {
  const album = albuns[currentAlbumIndex];
  if (!album || !album.fotos.length) return;

  currentImageIndex = (currentImageIndex + 1) % album.fotos.length;
  updateGalleryModal();
}

function previousImage() {
  const album = albuns[currentAlbumIndex];
  if (!album || !album.fotos.length) return;

  currentImageIndex = (currentImageIndex - 1 + album.fotos.length) % album.fotos.length;
  updateGalleryModal();
}

function openVideoModal(videoIndex) {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const title = document.getElementById("video-modal-title");
  const category = document.getElementById("video-modal-category");
  const description = document.getElementById("video-modal-description");
  const link = document.getElementById("video-modal-link");
  const video = videos[videoIndex];

  if (!modal || !player || !video) return;

  focusBeforeModal = document.activeElement;
  player.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = getYouTubeEmbedUrl(video.url);
  iframe.title = video.titulo;
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  player.appendChild(iframe);

  if (title) title.textContent = video.titulo;
  if (category) category.textContent = video.categoria;
  if (description) description.textContent = video.descricao;
  if (link) link.href = video.url;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  updateModalBodyState();
  modal.querySelector(".modal-close")?.focus();
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (player) player.innerHTML = "";
  updateModalBodyState();
  focusBeforeModal?.focus?.();
}

function closeMobileMenu() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!nav || !toggle) return;

  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}

function initMobileMenu() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMobileMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeMobileMenu();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");
      if (!selector || selector === "#") return;

      const target = document.querySelector(selector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    });
  });
}

function initHeaderState() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 6);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setActiveNavLink(id) {
  document.querySelectorAll('.site-nav a[href^="#"]').forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initActiveNavigation() {
  const links = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  if (!sections.length) return;

  if (!("IntersectionObserver" in window)) {
    setActiveNavLink(sections[0].id);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) setActiveNavLink(visible.target.id);
    },
    {
      rootMargin: "-35% 0px -52% 0px",
      threshold: [0.12, 0.35, 0.6]
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActiveNavLink(sections[0].id);
}

function initAboutToggle() {
  const button = document.querySelector("[data-about-toggle]");
  const content = document.getElementById("about-more");
  if (!button || !content) return;

  button.addEventListener("click", () => {
    const isHidden = content.hasAttribute("hidden");
    if (isHidden) {
      content.removeAttribute("hidden");
    } else {
      content.setAttribute("hidden", "");
    }

    button.setAttribute("aria-expanded", String(isHidden));
    button.textContent = isHidden ? "Ver menos" : "Ver mais";
  });
}

function initCertificatesToggle() {
  const button = document.querySelector("[data-show-certificates]");
  const grid = document.getElementById("certificados-grid");
  if (!button || !grid) return;

  button.addEventListener("click", () => {
    const isExpanded = grid.classList.toggle("is-expanded");
    button.setAttribute("aria-expanded", String(isExpanded));
    button.textContent = isExpanded ? "Ver menos" : "Ver todos";
  });
}

function initModals() {
  document.querySelectorAll("[data-close-gallery]").forEach((element) => {
    element.addEventListener("click", closeGalleryModal);
  });

  document.querySelectorAll("[data-close-video]").forEach((element) => {
    element.addEventListener("click", closeVideoModal);
  });

  document.querySelector("[data-prev-photo]")?.addEventListener("click", previousImage);
  document.querySelector("[data-next-photo]")?.addEventListener("click", nextImage);

  document.addEventListener("keydown", (event) => {
    const galleryOpen = document.getElementById("gallery-modal")?.classList.contains("is-open");
    const videoOpen = document.getElementById("video-modal")?.classList.contains("is-open");

    if (event.key === "Escape") {
      if (galleryOpen) closeGalleryModal();
      if (videoOpen) closeVideoModal();
      closeMobileMenu();
    }

    if (!galleryOpen) return;
    if (event.key === "ArrowLeft") previousImage();
    if (event.key === "ArrowRight") nextImage();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderExperiencias();
  renderVideos();
  renderAlbuns();
  renderCertificados();
  initHeaderState();
  initMobileMenu();
  initSmoothScroll();
  initActiveNavigation();
  initAboutToggle();
  initCertificatesToggle();
  initModals();
});
