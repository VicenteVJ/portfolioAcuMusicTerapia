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

let albumAtual = 0;
let fotoAtual = 0;
let focoAntesDoModal = null;

function criarElemento(tag, className, textContent) {
  const elemento = document.createElement(tag);
  if (className) elemento.className = className;
  if (textContent !== undefined && textContent !== null) elemento.textContent = textContent;
  return elemento;
}

function caminhoArquivo(pasta, arquivo) {
  return encodeURI(`${pasta}${arquivo}`);
}

function tipoArquivo(caminho) {
  const extensao = caminho.split(".").pop();
  return extensao ? extensao.toUpperCase() : "ARQUIVO";
}

function buscarIndiceAlbum(nome) {
  return albuns.findIndex((album) => album.nome === nome);
}

function getYouTubeId(url) {
  const fallback = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);

  try {
    const endereco = new URL(url);
    if (endereco.hostname.includes("youtu.be")) {
      return endereco.pathname.split("/").filter(Boolean)[0] || "";
    }

    return endereco.searchParams.get("v") || endereco.pathname.split("/").filter(Boolean).pop() || "";
  } catch (erro) {
    return fallback ? fallback[1] : "";
  }
}

function converterYoutubeParaEmbed(url) {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : url;
}

function thumbnailYoutube(url) {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

function renderExperiencias() {
  const lista = document.getElementById("experiencias-lista");
  if (!lista) return;

  lista.innerHTML = "";

  experiencias.forEach((experiencia) => {
    const card = criarElemento("article", "experience-card");
    const aside = criarElemento("div", "experience-aside");
    const periodo = criarElemento("span", "experience-period", experiencia.periodo);
    const tag = criarElemento("span", "experience-tag", experiencia.categoria || "Experiência");
    const body = criarElemento("div", "experience-body");
    const titulo = criarElemento("h3", "", experiencia.titulo);
    const local = criarElemento("p", "experience-place", experiencia.instituicao);
    const descricao = criarElemento("p", "experience-description", experiencia.descricao);

    aside.append(periodo, tag);
    body.append(titulo, local, descricao);

    if (experiencia.observacao) {
      body.appendChild(criarElemento("p", "experience-note", experiencia.observacao));
    }

    if (experiencia.albumNome) {
      const albumIndex = buscarIndiceAlbum(experiencia.albumNome);
      const album = albuns[albumIndex];

      if (albumIndex >= 0 && album.fotos.length > 0) {
        const botao = criarElemento("button", "btn btn-outline", "Ver álbum");
        botao.type = "button";
        botao.setAttribute("aria-label", `Abrir álbum ${experiencia.albumNome}`);
        botao.addEventListener("click", () => abrirModalGaleria(albumIndex, 0));
        body.appendChild(botao);
      }
    }

    card.append(aside, body);
    lista.appendChild(card);
  });
}

function renderVideos() {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;

  grid.innerHTML = "";

  videos.forEach((video, index) => {
    const card = criarElemento("article", "video-card");
    if (video.destaque) card.classList.add("is-featured");

    const thumbButton = criarElemento("button", "video-thumb");
    thumbButton.type = "button";
    thumbButton.setAttribute("aria-label", `Assistir ${video.titulo}`);
    thumbButton.addEventListener("click", () => abrirModalVideo(index));

    const imagem = document.createElement("img");
    imagem.src = thumbnailYoutube(video.url);
    imagem.alt = `Thumbnail do vídeo ${video.titulo}`;
    imagem.loading = "lazy";

    const play = criarElemento("span", "play-mark", "›");
    play.setAttribute("aria-hidden", "true");

    thumbButton.append(imagem, play);

    const body = criarElemento("div", "video-body");
    body.appendChild(criarElemento("span", "video-category", video.categoria));
    body.appendChild(criarElemento("h3", "", video.titulo));
    body.appendChild(criarElemento("p", "", video.descricao));

    const assistir = criarElemento("button", "btn btn-secondary", "Assistir");
    assistir.type = "button";
    assistir.setAttribute("aria-label", `Abrir vídeo ${video.titulo}`);
    assistir.addEventListener("click", () => abrirModalVideo(index));

    body.appendChild(assistir);
    card.append(thumbButton, body);
    grid.appendChild(card);
  });
}

function renderAlbuns() {
  const grid = document.getElementById("albuns-grid");
  if (!grid) return;

  grid.innerHTML = "";

  albuns.forEach((album, albumIndex) => {
    const card = criarElemento("article", "album-card");
    const cover = criarElemento("div", "album-cover");
    const body = criarElemento("div", "album-body");
    const totalFotos = album.fotos.length;
    const titulo = criarElemento("h3", "", album.nome);
    const descricao = criarElemento("p", "", album.descricao);
    const count = criarElemento("span", "album-count", totalFotos ? `${totalFotos} foto${totalFotos > 1 ? "s" : ""}` : "Fotos em breve");

    if (totalFotos) {
      const fotoCapa = album.fotos[0];
      const imagemCapa = document.createElement("img");
      imagemCapa.src = caminhoArquivo(album.pasta, fotoCapa.arquivo);
      imagemCapa.alt = `${album.nome}: ${fotoCapa.legenda}`;
      imagemCapa.loading = "lazy";
      cover.append(imagemCapa, count);
    } else {
      cover.appendChild(count);
    }

    body.append(titulo, descricao);

    if (totalFotos) {
      const preview = criarElemento("div", "album-preview");
      album.fotos.slice(0, 3).forEach((foto) => {
        const imagem = document.createElement("img");
        imagem.src = caminhoArquivo(album.pasta, foto.arquivo);
        imagem.alt = `${album.nome}: ${foto.legenda}`;
        imagem.loading = "lazy";
        preview.appendChild(imagem);
      });

      const botao = criarElemento("button", "btn btn-primary", "Ver álbum");
      botao.type = "button";
      botao.setAttribute("aria-label", `Abrir álbum ${album.nome}`);
      botao.addEventListener("click", () => abrirModalGaleria(albumIndex, 0));

      body.append(preview, botao);
    } else {
      body.appendChild(criarElemento("div", "empty-state", "Fotos em breve."));
    }

    card.append(cover, body);
    grid.appendChild(card);
  });
}

function renderCertificados() {
  const grid = document.getElementById("certificados-grid");
  if (!grid) return;

  grid.innerHTML = "";

  certificados.forEach((certificado) => {
    const card = criarElemento("article", "certificate-card");
    const tipo = tipoArquivo(certificado.arquivo);
    const caminho = encodeURI(certificado.arquivo);
    const head = criarElemento("div", "certificate-head");
    const icon = criarElemento("span", "document-icon");
    const titleWrap = criarElemento("div", "certificate-title");

    icon.setAttribute("aria-hidden", "true");
    titleWrap.appendChild(criarElemento("span", "certificate-type", `${certificado.categoria} · ${tipo}`));
    titleWrap.appendChild(criarElemento("h3", "", certificado.titulo));
    head.append(icon, titleWrap);

    const descricao = criarElemento("p", "", `Documento em ${tipo}, disponível para consulta.`);
    const actions = criarElemento("div", "card-actions");

    const visualizar = criarElemento("a", "btn btn-secondary", "Visualizar");
    visualizar.href = caminho;
    visualizar.target = "_blank";
    visualizar.rel = "noopener noreferrer";
    visualizar.setAttribute("aria-label", `Visualizar ${certificado.titulo}`);

    const baixar = criarElemento("a", "btn btn-outline", "Baixar");
    baixar.href = caminho;
    baixar.target = "_blank";
    baixar.rel = "noopener noreferrer";
    baixar.download = "";
    baixar.setAttribute("aria-label", `Baixar ${certificado.titulo}`);

    actions.append(visualizar, baixar);
    card.append(head, descricao, actions);
    grid.appendChild(card);
  });
}

function atualizarEstadoBodyModal() {
  const existeModalAberto = Boolean(document.querySelector(".modal.is-open"));
  document.body.classList.toggle("modal-open", existeModalAberto);
}

function atualizarModalGaleria() {
  const imagem = document.getElementById("modal-image");
  const albumNome = document.getElementById("modal-album");
  const legenda = document.getElementById("modal-caption");
  const contador = document.getElementById("modal-counter");
  const album = albuns[albumAtual];

  if (!imagem || !album || !album.fotos.length) return;

  const foto = album.fotos[fotoAtual];
  imagem.src = caminhoArquivo(album.pasta, foto.arquivo);
  imagem.alt = `${album.nome}: ${foto.legenda}`;

  if (albumNome) albumNome.textContent = album.nome;
  if (legenda) legenda.textContent = foto.legenda;
  if (contador) contador.textContent = `${fotoAtual + 1} de ${album.fotos.length}`;
}

function abrirModalGaleria(albumIndex = 0, fotoIndex = 0) {
  const modal = document.getElementById("gallery-modal");
  const album = albuns[albumIndex];
  if (!modal || !album || !album.fotos.length) return;

  const estavaFechado = !modal.classList.contains("is-open");
  albumAtual = albumIndex;
  fotoAtual = fotoIndex;
  atualizarModalGaleria();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  atualizarEstadoBodyModal();

  if (estavaFechado) {
    focoAntesDoModal = document.activeElement;
    modal.querySelector(".modal-close")?.focus();
  }
}

function fecharModalGaleria() {
  const modal = document.getElementById("gallery-modal");
  const imagem = document.getElementById("modal-image");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (imagem) imagem.src = "";
  atualizarEstadoBodyModal();
  focoAntesDoModal?.focus?.();
}

function navegarFoto(direcao) {
  const album = albuns[albumAtual];
  if (!album || !album.fotos.length) return;

  fotoAtual = (fotoAtual + direcao + album.fotos.length) % album.fotos.length;
  atualizarModalGaleria();
}

function abrirModalVideo(videoIndex) {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const titulo = document.getElementById("video-modal-title");
  const categoria = document.getElementById("video-modal-category");
  const descricao = document.getElementById("video-modal-description");
  const link = document.getElementById("video-modal-link");
  const video = videos[videoIndex];

  if (!modal || !player || !video) return;

  focoAntesDoModal = document.activeElement;
  player.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = converterYoutubeParaEmbed(video.url);
  iframe.title = video.titulo;
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  player.appendChild(iframe);

  if (titulo) titulo.textContent = video.titulo;
  if (categoria) categoria.textContent = video.categoria;
  if (descricao) descricao.textContent = video.descricao;
  if (link) link.href = video.url;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  atualizarEstadoBodyModal();
  modal.querySelector(".modal-close")?.focus();
}

function fecharModalVideo() {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (player) player.innerHTML = "";
  atualizarEstadoBodyModal();
  focoAntesDoModal?.focus?.();
}

function fecharMenuMobile() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!nav || !toggle) return;

  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}

function inicializarMenuMobile() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(aberto));
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", aberto);
  });

  document.addEventListener("click", (evento) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (nav.contains(evento.target) || toggle.contains(evento.target)) return;
    fecharMenuMobile();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) fecharMenuMobile();
  });
}

function inicializarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const seletor = link.getAttribute("href");
      if (!seletor || seletor === "#") return;

      const destino = document.querySelector(seletor);
      if (!destino) return;

      evento.preventDefault();
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
      fecharMenuMobile();
    });
  });
}

function inicializarHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const atualizar = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  atualizar();
  window.addEventListener("scroll", atualizar, { passive: true });
}

function marcarLinkAtivo(id) {
  const links = document.querySelectorAll('.site-nav a[href^="#"]');

  links.forEach((link) => {
    const ativo = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", ativo);

    if (ativo) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function inicializarNavAtiva() {
  const links = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const secoes = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!secoes.length) return;

  if (!("IntersectionObserver" in window)) {
    marcarLinkAtivo(secoes[0].id);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visivel = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visivel?.target?.id) marcarLinkAtivo(visivel.target.id);
    },
    {
      rootMargin: "-32% 0px -54% 0px",
      threshold: [0.1, 0.35, 0.6]
    }
  );

  secoes.forEach((secao) => observer.observe(secao));
  marcarLinkAtivo(secoes[0].id);
}

function inicializarModais() {
  document.querySelectorAll("[data-close-gallery]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalGaleria);
  });

  document.querySelectorAll("[data-close-video]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalVideo);
  });

  document.querySelector("[data-prev-photo]")?.addEventListener("click", () => navegarFoto(-1));
  document.querySelector("[data-next-photo]")?.addEventListener("click", () => navegarFoto(1));

  document.addEventListener("keydown", (evento) => {
    const galeriaAberta = document.getElementById("gallery-modal")?.classList.contains("is-open");
    const videoAberto = document.getElementById("video-modal")?.classList.contains("is-open");

    if (evento.key === "Escape") {
      if (galeriaAberta) fecharModalGaleria();
      if (videoAberto) fecharModalVideo();
      fecharMenuMobile();
    }

    if (!galeriaAberta) return;
    if (evento.key === "ArrowLeft") navegarFoto(-1);
    if (evento.key === "ArrowRight") navegarFoto(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderExperiencias();
  renderVideos();
  renderAlbuns();
  renderCertificados();
  inicializarHeader();
  inicializarMenuMobile();
  inicializarScrollSuave();
  inicializarNavAtiva();
  inicializarModais();

  const anoAtual = document.getElementById("ano-atual");
  if (anoAtual) anoAtual.textContent = new Date().getFullYear();
});
