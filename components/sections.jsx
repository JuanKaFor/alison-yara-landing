// Componentes de las secciones de la landing page Alison Yara

const WHATSAPP = "+573229140715";
const WA_LINK = `https://wa.me/573229140715?text=${encodeURIComponent("Hola Alison Yara, quiero agendar una cita 🇰🇷")}`;
const AGENDA_LINK = "https://alisonyaraconsultoriocoreano.site.agendapro.com/co/sucursal/511311";
const IG_LINK = "https://instagram.com/alisonyara.co";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Calle+99+%23+7A+51+Edificio+So100+Bogot%C3%A1";
const MAPS_EMBED = "https://www.google.com/maps?q=Calle+99+%237A-51+Edificio+So100+Bogot%C3%A1&output=embed";

// ---------------------------------------------------------------------------
// NAV
// ---------------------------------------------------------------------------
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
  ["Servicios", "#servicios"],
  ["Filosofía", "#sobre"],
  ["Galería", "#galeria"],
  ["Testimonios", "#testimonios"],
  ["Ubicación", "#ubicacion"],
  ["FAQ", "#faq"]];

  return (
    <nav className={`ay-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ay-nav__inner">
        <a href="#top" className="ay-logo">
          <img src="assets/alison-yara-logo.png" alt="Alison Yara — Consultorio Estético Coreano" className="ay-logo__img" />
        </a>
        <div className="ay-nav__links">
          {links.map(([label, href]) =>
          <a key={href} href={href}>{label}</a>
          )}
        </div>
        <a href={AGENDA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--sm">
          Agendar
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <button className="ay-nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
      {open &&
      <div className="ay-nav__mobile" onClick={() => setOpen(false)}>
          {links.map(([label, href]) =>
        <a key={href} href={href}>{label}</a>
        )}
          <a href={AGENDA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--accent">Agendar cita en línea</a>
          <a href={WA_LINK} target="_blank" rel="noopener" className="ay-nav__mobile-secondary">o escribir por WhatsApp</a>
        </div>
      }
    </nav>);

};

// ---------------------------------------------------------------------------
// HERO — Editorial portrait + huge name (Dra. Carolina style)
// ---------------------------------------------------------------------------
const Hero = () =>
<section id="top" className="ay-hero ay-hero--centered">
    <div className="ay-container">
      <div className="ay-hero__visual">
        <img src="assets/alison-hero.png" alt="Alison Yara" loading="eager" />
      </div>
      <div className="ay-hero__content">
        <h1 className="ay-hero__title">Alison Yara</h1>
        <p className="ay-hero__subtitle">Cosmiatría coreana líder en Bogotá</p>
        <div className="ay-hero__cta">
          <a href={AGENDA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--primary ay-btn--lg">
            Agendar cita
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener" className="ay-hero__alt">o escribir por WhatsApp</a>
        </div>
        <div className="ay-hero__trust">
          <span>✦ Pioneros #1 cosmiatría coreana</span>
          <span>·</span>
          <span>Tratamientos desde $120.000</span>
        </div>
      </div>
    </div>
  </section>;


// ---------------------------------------------------------------------------
// CATEGORÍAS — 4-card photo grid (Dra. Carolina style)
// ---------------------------------------------------------------------------
const CATEGORIAS = [
  { nombre: "Faciales", img: "assets/galeria-tratamiento.jpeg", desc: "Limpiezas profundas Hydrafacial coreanas en 12, 15 o 17 pasos. Diagnóstico con escáner facial IA.", href: "#servicios" },
  { nombre: "Cejas", img: "assets/galeria-ceja.jpeg", desc: "Laminado coreano que alinea, define y disciplina el vello para un acabado natural y duradero.", href: "#servicios" },
  { nombre: "Pestañas", img: "assets/galeria-pestanas.jpeg", desc: "Lifting con cisteamina coreana: realza la curvatura natural sin agredir la fibra capilar.", href: "#servicios" },
  { nombre: "Labios", img: "assets/galeria-labios.jpeg", desc: "Hydralips con Dermapen y ácido hialurónico no reticulado para una hidratación profunda y real.", href: "#servicios" }
];

const Categorias = () =>
<section id="categorias" className="ay-section ay-cats">
  <div className="ay-container">
    <div className="ay-cats__head">
      <span className="ay-section__eyebrow">— Nuestros servicios</span>
      <h2 className="ay-h2">Especialistas en <em>cosmiatría coreana.</em></h2>
    </div>
    <div className="ay-cats__grid">
      {CATEGORIAS.map((c) =>
        <a key={c.nombre} href={c.href} className="ay-cat">
          <div className="ay-cat__media"><img src={c.img} alt={c.nombre} loading="lazy"/></div>
          <h3 className="ay-cat__name">{c.nombre}</h3>
          <p className="ay-cat__desc">{c.desc}</p>
          <span className="ay-cat__more">
            Ver más
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </a>
      )}
    </div>
  </div>
</section>;

// ---------------------------------------------------------------------------
// SOBRE / FILOSOFÍA
// ---------------------------------------------------------------------------
const Sobre = () =>
<section id="sobre" className="ay-section ay-sobre">
    <div className="ay-container">
      <div className="ay-sobre__grid">
        <div className="ay-sobre__copy">
          <span className="ay-section__eyebrow">— Filosofía</span>
          <h2 className="ay-h2">
            <em>coreano</em> no es una tendencia.
            Es un protocolo.
          </h2>
          <p className="ay-body">
            En Alison Yara trabajamos con <strong>cosmiatría facial</strong>, una rama
            de la dermatología estética enfocada en resultados reales. Cada protocolo
            está diseñado con productos coreanos premium importados directamente
            desde Seúl —ingredientes como ADN de salmón, cisteamina y activos botánicos
            que respetan la estructura natural de tu piel.
          </p>
          <p className="ay-body">
            Somos pioneros #1 en Bogotá en aplicar técnicas coreanas en un consultorio
            boutique. Acompañamos a cada clienta en un protocolo personalizado, sin
            promesas vacías y sin agresiones a la piel.
          </p>
          <div className="ay-pillars">
            <div className="ay-pillar">
              <span className="ay-pillar__num">01</span>
              <h3>Diagnóstico</h3>
              <p>Análisis personalizado de tu tipo de piel y objetivos.</p>
            </div>
            <div className="ay-pillar">
              <span className="ay-pillar__num">02</span>
              <h3>Protocolo</h3>
              <p>Tratamiento con activos coreanos seleccionados para ti.</p>
            </div>
            <div className="ay-pillar">
              <span className="ay-pillar__num">03</span>
              <h3>Acompañamiento</h3>
              <p>Rutina en casa y seguimiento de resultados a largo plazo.</p>
            </div>
          </div>
        </div>
        <div className="ay-sobre__visual">
          <div className="ay-sobre__photo ay-sobre__photo--top">
            <img src="assets/sobre-1.jpeg" alt="Laminado de cejas coreano" />
          </div>
          <div className="ay-sobre__photo ay-sobre__photo--bottom">
            <img src="assets/sobre-2.jpeg" alt="Mascarilla Hydrojelly Retinol Alternative — Esthemax" />
          </div>
          <div className="ay-sobre__quote" style={{ height: "102.8px", fontWeight: "400", borderStyle: "solid", borderWidth: "0px", fontSize: "20px", padding: "28px 32px", margin: "2px 0px 0px" }}>
            <span className="ay-quote-mark">"</span>
            Tu piel merece un protocolo, no un producto.
          </div>
        </div>
      </div>
    </div>
  </section>;


// ---------------------------------------------------------------------------
// SERVICIOS
// ---------------------------------------------------------------------------
const SERVICIOS = [
{
  nombre: "Laminado de Cejas Coreano",
  flag: "🇰🇷",
  precio: "120.000",
  desc: "Alinea, define y disciplina el vello para lograr cejas más organizadas, pulidas y con acabado natural. Productos coreanos de alta calidad que moldean la dirección del vello respetando su estructura, con fases de hidratación y nutrición que lo mantienen sano y brillante.",
  img: "assets/laminado-cejas.jpeg"
},
{
  nombre: "Hidralips",
  flag: "🇰🇷",
  precio: "150.000",
  desc: "Revitaliza y restaura labios resecos devolviéndoles suavidad, hidratación y aspecto saludable. Tecnología Dermapen para microestimulación controlada y ácido hialurónico no reticulado: hidrata intensamente sin aportar volumen artificial. Mejora textura y devuelve vitalidad.",
  img: "assets/hidralips.jpeg"
},
{
  nombre: "Lifting de Pestañas Coreano",
  flag: "🇰🇷",
  precio: "150.000",
  desc: "Realza la curvatura natural de las pestañas mientras las cuida desde el interior. Productos coreanos con cisteamina, un activo más suave y respetuoso con la fibra capilar. Incluye fases de hidratación y finaliza con tinte para una mirada definida sin necesidad de maquillaje.",
  img: "assets/lifting-pestanas.jpeg"
},
{
  nombre: "Limpieza Hydrafacial Coreana — Básica",
  flag: "🇰🇷",
  precio: "180.000",
  desc: "Tratamiento de 12 pasos que combina técnicas profesionales con activos coreanos para una limpieza profunda y segura. Elimina células muertas, desobstruye poros y retira impurezas acumuladas.",
  pasos: ["Aromaterapia", "Jabón enzimático Esthemax", "Desincrutante", "Papel osmótico (Osmoextracción coreana)", "Vapor ozono", "Máquina Hydrafacial (succión suave)", "Extracción manual (si es necesario)", "Alta frecuencia", "Cabina fotodinámica", "Mascarilla Aloe Vera", "Serum ADN/PDRN de salmón", "Bloqueador solar"],
  img: "assets/hydrafacial-basica.jpeg"
},
{
  nombre: "Limpieza Hydrafacial Coreana — Pro",
  flag: "🇰🇷",
  precio: "280.000",
  desc: "Protocolo de 15 pasos con mascarilla Hydrojelly personalizada, ampolleta con ultrasonido y presoterapia ocular. Resultados visibles desde la primera sesión.",
  pasos: ["Aromaterapia", "Jabón enzimático Esthemax", "Desincrutante", "Papel osmótico", "Vapor ozono", "Máquina Hydrafacial", "Extracción manual (si es necesario)", "Alta frecuencia", "Tónico", "Mascarilla Hydrojelly según necesidades (PDRN, acné, hidratación o retinol)", "Cabina fotodinámica", "Ampolleta con ultrasonido (hidratación, vitamina C o colágeno)", "Serum ADN de salmón", "Presoterapia ocular", "Bloqueador solar"],
  img: "assets/hydrafacial-pro.jpeg"
},
{
  nombre: "Limpieza Hydrafacial Coreana — Gold",
  flag: "✦",
  precio: "380.000",
  desc: "Nuestro protocolo más completo: 17 pasos que inician con un análisis facial por escáner con IA y guía de skincare personalizada. La experiencia más avanzada del consultorio.",
  pasos: ["Análisis completo con escáner facial IA", "Guía de skincare personalizada", "Aromaterapia", "Jabón enzimático Esthemax", "Desincrutante", "Papel osmótico", "Vapor ozono", "Máquina Hydrafacial", "Extracción manual (si es necesario)", "Alta frecuencia", "Tónico", "Mascarilla Hydrojelly según necesidades", "Cabina fotodinámica", "Ampolleta con ultrasonido", "Serum ADN de salmón", "Presoterapia ocular", "Bloqueador solar"],
  img: "assets/hydrafacial-gold.jpeg"
}];


const Servicios = () => {
  const [active, setActive] = React.useState(0);
  return (
    <section id="servicios" className="ay-section ay-tratamientos">
      <div className="ay-container">
        <div className="ay-tratamientos__head">
          <span className="ay-section__eyebrow">— Tratamientos destacados</span>
          <h2 className="ay-h2">Seis protocolos, <em>una sola filosofía.</em></h2>
          <p className="ay-section__lede">
            Cosmética coreana profesional, importada directamente desde Seúl. Precios en pesos colombianos.
          </p>
        </div>
        <div className="ay-tratamientos__grid">
          <div className="ay-tratamientos__hero">
            <img src={SERVICIOS[active].img} alt={SERVICIOS[active].nombre} />
            <div className="ay-tratamientos__hero-tag">
              <span className="ay-tratamientos__hero-flag">{SERVICIOS[active].flag}</span>
              <div>
                <span className="ay-tratamientos__hero-name">{SERVICIOS[active].nombre}</span>
                <span className="ay-tratamientos__hero-precio">COP {SERVICIOS[active].precio}</span>
              </div>
            </div>
          </div>
          <ol className="ay-tratamientos__list">
            {SERVICIOS.map((s, i) =>
              <li key={s.nombre} className={`ay-trat ${active === i ? "is-active" : ""}`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                <span className="ay-trat__num">0{i + 1}</span>
                <div className="ay-trat__body">
                  <h3 className="ay-trat__name">{s.nombre}</h3>
                  <p className="ay-trat__desc">{s.desc}</p>
                  {s.pasos &&
                    <details className="ay-trat__pasos" onClick={(e) => e.stopPropagation()}>
                      <summary>Ver los {s.pasos.length} pasos del protocolo</summary>
                      <ol>{s.pasos.map((p, j) => <li key={j}>{p}</li>)}</ol>
                    </details>
                  }
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener" className="ay-trat__arrow" onClick={(e) => e.stopPropagation()} aria-label="Agendar">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </li>
            )}
          </ol>
        </div>
      </div>
    </section>);

};

// ---------------------------------------------------------------------------
// APARATOLOGÍA
// ---------------------------------------------------------------------------
const APARATOS = [
{
  nombre: "Aparatología Hydrafacial",
  desc: "Tecnología avanzada para limpiezas faciales profundas, efectivas, seguras y no invasivas. Mediante succión controlada y soluciones específicas, limpia poros en profundidad, elimina impurezas, extrae puntos negros y aporta hidratación simultáneamente. Más precisa y suave que las limpiezas tradicionales.",
  img: "assets/aparato-hydrafacial.jpeg"
},
{
  nombre: "Escáner Facial Coreano con IA",
  desc: "Tecnología avanzada que analiza la piel a profundidad más allá de lo visible al ojo humano. Evalúa poros, textura, manchas, hidratación, producción de grasa y sensibilidad, generando un diagnóstico preciso que permite crear protocolos y rutinas de skincare completamente personalizadas.",
  img: "assets/aparato-escaner.jpeg"
},
{
  nombre: "Dermapen",
  desc: "Tecnología de microestimulación que trabaja a través de microcanales controlados en la piel, permitiendo mayor absorción de activos y estimulando la regeneración natural. Mejora textura y potencia tratamientos de hidratación profunda con activos como ácido hialurónico, vitaminas y ampolletas.",
  img: "assets/aparato-dermapen.jpeg"
},
{
  nombre: "Insumos Coreanos · Esthemax",
  desc: "Trabajamos con insumos profesionales de Esthemax, marca reconocida internacionalmente por sus mascarillas Hydrojelly. Contienen ácido hialurónico, extractos botánicos (aloe vera, papaya, caléndula, centella asiática), antioxidantes y enzimas naturales que exfolian, calman, regeneran y aportan luminosidad.",
  img: "assets/aparato-esthemax.jpeg"
}];

const Aparatologia = () =>
<section id="aparatologia" className="ay-section ay-aparatos">
  <div className="ay-container">
    <div className="ay-section__head">
      <span className="ay-section__eyebrow">— Aparatología e insumos</span>
      <h2 className="ay-h2">
        Tecnología que respalda
        <em> cada protocolo.</em>
      </h2>
      <p className="ay-section__lede">
        Equipos importados y activos profesionales coreanos que hacen la diferencia
        entre un tratamiento estético común y uno realmente avanzado.
      </p>
    </div>
    <div className="ay-aparatos__grid">
      {APARATOS.map((a, i) =>
      <article key={a.nombre} className="ay-aparato">
          <div className="ay-aparato__media">
            <img src={a.img} alt={a.nombre} loading="lazy" />
          </div>
          <span className="ay-aparato__num">0{i + 1}</span>
          <h3 className="ay-aparato__name">{a.nombre}</h3>
          <p className="ay-aparato__desc">{a.desc}</p>
        </article>
      )}
    </div>
  </div>
</section>;

// ---------------------------------------------------------------------------
// EQUIPO
// ---------------------------------------------------------------------------
const EQUIPO = [
{
  nombre: "Alison Yara",
  rol: "Cosmiatra · Cosmetóloga · Fundadora",
  bio: "Fundadora del Consultorio Estético Coreano Alison Yara. Especialista en tratamientos estéticos con certificaciones en Colombia y España, formada en técnicas innovadoras inspiradas en la cosmetología coreana. Su enfoque se centra en tratamientos faciales personalizados que trabajan la salud real de la piel con tecnología avanzada.",
  img: "assets/equipo-alison.jpeg"
},
{
  nombre: "Sofía",
  rol: "Cosmetóloga · Lashista · Asistente Médico Estético",
  bio: "Dos años de experiencia en cuidado de la piel y tratamientos de pestañas. Apasionada por ayudar a cada persona a sentirse más segura y hermosa, con un servicio dedicado y personalizado.",
  img: "assets/equipo-sofia.jpeg"
},
{
  nombre: "Tatiana Uvillus",
  rol: "Cosmetóloga · Especialista en Piel",
  bio: "Esteticista especializada en el cuidado de la piel. Realiza tratamientos faciales como limpiezas profundas y manejo de piel sensible, acné y rosácea. Brinda un servicio profesional, seguro y adaptado a cada paciente.",
  img: "assets/equipo-tatiana.jpeg"
},
{
  nombre: "Nicolás Montoya",
  rol: "Gerente General · Cofundador",
  bio: "Ingeniero Industrial de la Universidad Javeriana. Responsable de la visión estratégica del negocio, el crecimiento en ventas y la verificación de que todos los procesos se cumplan a cabalidad.",
  img: "assets/equipo-nicolas.jpeg"
},
{
  nombre: "Daniel Vaca",
  rol: "Socio",
  bio: "Ingeniero industrial apasionado por las ventas y el mercadeo. Entusiasta de la estética y la innovación en dermocosmética, aporta visión comercial y estratégica al crecimiento del consultorio.",
  img: "assets/equipo-daniel.jpeg"
},
{
  nombre: "Juan Camilo Forero",
  rol: "Asesor Financiero · Estructuración",
  bio: "Ingeniero Industrial de la Universidad de los Andes especializado en estructuración financiera. Aporta análisis cuantitativo y visión de capital al consultorio, soportando decisiones de inversión, crecimiento y rentabilidad.",
  img: "assets/equipo-juancamilo.jpeg"
}];

const Equipo = () =>
<section id="equipo" className="ay-section ay-equipo">
  <div className="ay-container">
    <div className="ay-section__head">
      <span className="ay-section__eyebrow">— Equipo</span>
      <h2 className="ay-h2">
        Las manos detrás de
        <em> cada protocolo.</em>
      </h2>
    </div>
    <div className="ay-equipo__grid">
      {EQUIPO.map((p) =>
      <article key={p.nombre} className="ay-equipo__card">
          <div className="ay-equipo__photo">
            <img src={p.img} alt={p.nombre} loading="lazy" />
          </div>
          <div className="ay-equipo__body">
            <h3 className="ay-equipo__name">{p.nombre}</h3>
            <span className="ay-equipo__rol">{p.rol}</span>
            <p className="ay-equipo__bio">{p.bio}</p>
          </div>
        </article>
      )}
    </div>
  </div>
</section>;

// ---------------------------------------------------------------------------
// GALERÍA
// ---------------------------------------------------------------------------
const GALERIA = [
{ src: "assets/galeria-tratamiento.jpeg", alt: "Tratamiento facial Hydrafacial", span: "tall" },
{ src: "assets/galeria-pestanas.jpeg", alt: "Lifting de pestañas antes y después" },
{ src: "assets/galeria-spot-blue.jpeg", alt: "Mascarilla Spot Diminishing Esthemax" },
{ src: "assets/galeria-ceja.jpeg", alt: "Laminado de cejas", span: "wide" },
{ src: "assets/galeria-labios.jpeg", alt: "Hydralips antes y después" },
{ src: "assets/galeria-retinol.jpeg", alt: "Mascarilla Retinol Alternative Esthemax" },
{ src: "assets/galeria-egyptian.jpeg", alt: "Mascarilla Egyptian Rose Esthemax" },
{ src: "assets/alison-hero.png", alt: "Alison Yara — Fundadora", span: "tall" }];


const Galeria = () =>
<section id="galeria" className="ay-section ay-galeria">
    <div className="ay-container">
      <div className="ay-section__head ay-section__head--center">
        <span className="ay-section__eyebrow">— El consultorio</span>
        <h2 className="ay-h2">
          Un espacio diseñado para
          <em> sentirse</em> tan bien
          como se ve.
        </h2>
        <p className="ay-section__lede">
          Calle 99 #7A-51, Edificio So100. Chicó Norte, Bogotá.
        </p>
      </div>
      <div className="ay-gallery-grid">
        {GALERIA.map((g, i) =>
      <figure key={i} className={`ay-gallery__item ${g.span ? `ay-gallery__item--${g.span}` : ""}`}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </figure>
      )}
      </div>
    </div>
  </section>;


// ---------------------------------------------------------------------------
// TESTIMONIOS
// ---------------------------------------------------------------------------
const TESTIMONIOS = [
{
  nombre: "Ximena Montaña",
  handle: "Facebook · Hydrafacial + Lifting de pestañas",
  text: "Excelente lugar, me hice una limpieza hidrafacial y el lifting de pestañas coreano. Ambos servicios me encantaron, la atención, la ubicación y los cuidados pos-servicio."
},
{
  nombre: "@kropinzonr",
  handle: "Instagram · Limpieza facial con Sofía",
  text: "Ayer Sofía me realizó la limpieza. Mi piel es muy delicada, pero ella tiene la mano muy suave, no me quedaron marcas ni rojeces ni nada. 10/10 todo el servicio!!"
},
{
  nombre: "Carolina",
  handle: "WhatsApp · Cliente",
  text: "Holaaaa. Mil gracias por los procedimientos ayer! Me enredé con el trabajo y se me pasó escribirte. Mi piel quedó divina!"
},
{
  nombre: "Viviana",
  handle: "AgendaPro · Limpieza Hydrafacial Básica",
  text: "El servicio espectacular me gusto mucho, son muy amables cumplio con mis expectativas, seria muy bueno como sugerencia muy respetuosa que vendan los productos de Skincare coreano, muchas gracias quede feliz"
},
{
  nombre: "Adriana",
  handle: "AgendaPro · Limpieza Hydrafacial Básica",
  text: "Excelente servicio, atención y calidad. Instalaciones limpias, modernas y muy bonitas. El tratamiento realizado de la mejor calidad y hermoso resultado. Recomendado al 100 👌"
},
{
  nombre: "Martha",
  handle: "AgendaPro · Limpieza Hydrafacial Básica",
  text: "Excelente servicio, quien me atendió escuchó mis recomendaciones con respecto a mi piel, así que respeto mucho lo que necesitaba! Gracias"
},
{
  nombre: "Paola",
  handle: "AgendaPro · Limpieza Hydrafacial Básica",
  text: "Me hice una limpieza hydrafacial me pareció espectacular el resultado en mi piel, hidratada, luminosa la recomiendo."
}];


const Testimonios = () => {
  const trackRef = React.useRef(null);
  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector('.ay-testi');
    const step = card ? card.offsetWidth + 24 : 360;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  return (
    <section id="testimonios" className="ay-section ay-testimonios">
      <div className="ay-container">
        <div className="ay-section__head ay-testi-head">
          <div>
            <span className="ay-section__eyebrow">— Testimonios</span>
            <h2 className="ay-h2">
              Lo que dicen
              <em> nuestras clientas.</em>
            </h2>
          </div>
          <div className="ay-testi-controls">
            <button type="button" className="ay-testi-btn" onClick={() => scroll(-1)} aria-label="Reseña anterior">‹</button>
            <button type="button" className="ay-testi-btn" onClick={() => scroll(1)} aria-label="Reseña siguiente">›</button>
          </div>
        </div>
        <div className="ay-testi-track" ref={trackRef}>
          {TESTIMONIOS.map((t, i) =>
            <figure key={i} className="ay-testi">
              <div className="ay-testi__stars">
                {Array.from({ length: 5 }).map((_, j) =>
                  <svg key={j} viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" /></svg>
                )}
              </div>
              <blockquote className="ay-testi__quote">"{t.text}"</blockquote>
              <figcaption className="ay-testi__author">
                <span className="ay-testi__nombre">{t.nombre}</span>
                <span className="ay-testi__handle">{t.handle}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};


// ---------------------------------------------------------------------------
// UBICACIÓN
// ---------------------------------------------------------------------------
const Ubicacion = () =>
<section id="ubicacion" className="ay-section ay-ubicacion">
    <div className="ay-container">
      <div className="ay-ubicacion__grid">
        <div className="ay-ubicacion__copy">
          <span className="ay-section__eyebrow">— Ubicación</span>
          <h2 className="ay-h2">
            Te esperamos en
            <em> Chicó Norte.</em>
          </h2>
          <div className="ay-address">
            <div className="ay-address__row">
              <span className="ay-address__label">Dirección</span>
              <span className="ay-address__value">
                Calle 99 # 7A-51<br />
                Edificio So100, Consultorio 402<br />
                Chicó Norte, Bogotá — Colombia
              </span>
            </div>
            <div className="ay-address__row">
              <span className="ay-address__label">Horario</span>
              <span className="ay-address__value">
                Lunes a Viernes · 10:00 a 18:30<br />
                Sábados y Domingos · 8:30 a 18:30
              </span>
            </div>
            <div className="ay-address__row">
              <span className="ay-address__label">Contacto</span>
              <span className="ay-address__value">
                WhatsApp · {WHATSAPP}<br />
                Instagram · @alisonyara.co
              </span>
            </div>
          </div>
          <div className="ay-ubicacion__cta">
            <a href={MAPS_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--primary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s-7-7.5-7-12a7 7 0 1114 0c0 4.5-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
              Abrir en Google Maps
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--ghost">
              Agendar cita
            </a>
          </div>
        </div>
        <div className="ay-ubicacion__map">
          <iframe
          src={MAPS_EMBED}
          title="Ubicación Alison Yara"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen />
        
          <a href={MAPS_LINK} target="_blank" rel="noopener" className="ay-ubicacion__map-overlay">
            <span>Ver en Google Maps</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>;


// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
const FAQS = [
{
  q: "¿Qué hace diferente a la cosmética coreana?",
  a: "Los productos coreanos que usamos están formulados con ingredientes más suaves y bioactivos —como ADN de salmón, cisteamina y extractos botánicos— que respetan la barrera natural de la piel y producen resultados visibles desde la primera sesión."
},
{
  q: "¿Necesito un diagnóstico antes del primer tratamiento?",
  a: "Sí. Toda primera cita incluye una valoración personalizada para entender tu tipo de piel, antecedentes y objetivos. A partir de ahí diseñamos el protocolo más adecuado para ti."
},
{
  q: "¿Cuánto duran los resultados?",
  a: "Depende del tratamiento. El laminado de cejas y lifting de pestañas duran entre 4 y 6 semanas. Los tratamientos faciales como Hydrafacial muestran efectos inmediatos y se potencian con sesiones mensuales."
},
{
  q: "¿Cómo agendo una cita?",
  a: "Por WhatsApp al +57 322 914 0715 o por DM en Instagram @alisonyara.co. Recomendamos agendar con al menos una semana de anticipación."
},
{
  q: "¿Tienen estacionamiento?",
  a: "Sí. El Edificio So100 cuenta con parqueadero para visitantes. Estamos ubicados en el consultorio 402."
},
{
  q: "¿Aplican promociones por paquete?",
  a: "Sí, ofrecemos paquetes de 3 y 6 sesiones con descuento. Pregunta por las promociones vigentes al momento de agendar."
}];


const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="ay-section ay-faq">
      <div className="ay-container">
        <div className="ay-faq__grid">
          <div className="ay-faq__head">
            <span className="ay-section__eyebrow">— Dudas frecuentes</span>
            <h2 className="ay-h2">
              Antes de
              <em> agendar.</em>
            </h2>
            <p className="ay-section__lede">
              ¿Tienes una pregunta que no está aquí? Escríbenos por WhatsApp,
              te responde directamente Alison.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--ghost">
              Hacer una pregunta
            </a>
          </div>
          <div className="ay-faq__list">
            {FAQS.map((f, i) =>
            <details key={i} open={open === i} onClick={(e) => {e.preventDefault();setOpen(open === i ? -1 : i);}} className="ay-faq__item">
                <summary>
                  <span>{f.q}</span>
                  <span className="ay-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
                  </span>
                </summary>
                <div className="ay-faq__answer">{f.a}</div>
              </details>
            )}
          </div>
        </div>
      </div>
    </section>);

};

// ---------------------------------------------------------------------------
// CTA FINAL
// ---------------------------------------------------------------------------
const CTAFinal = () =>
<section className="ay-cta-final">
    <div className="ay-container">
      <div className="ay-cta-final__inner">
        <span className="ay-section__eyebrow ay-section__eyebrow--light">— Reserva tu cita</span>
        <h2 className="ay-h1">
          Empieza el ritual
          <em> coreano</em> de tu piel.
        </h2>
        <p>
          Reserva tu cita en línea, eligiendo tratamiento y horario que se
          ajuste a tu agenda. ¿Dudas? Escríbenos por WhatsApp.
        </p>
        <div className="ay-cta-final__buttons">
          <a href={AGENDA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--light">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Agendar cita en línea
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener" className="ay-btn ay-btn--outline-light">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.5.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3C4.4 14.7 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" /></svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>;


// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------
const Footer = () =>
<footer className="ay-footer">
    <div className="ay-container">
      <div className="ay-footer__grid">
        <div className="ay-footer__brand">
          <span className="ay-logo ay-logo--light">
            <img src="assets/alison-yara-logo.png" alt="Alison Yara — Consultorio Estético Coreano" className="ay-logo__img ay-logo__img--light" style={{ width: "200px", height: "200px" }} />
          </span>
          <p>
            Pioneros en cosmiatría coreana en Bogotá. Founders Alison V. & JM —
            @alisonyara.co
          </p>
        </div>
        <div className="ay-footer__col">
          <h4>Tratamientos</h4>
          <ul>
            <li><a href="#servicios">Hydrafacial Coreana</a></li>
            <li><a href="#servicios">Lifting de Pestañas</a></li>
            <li><a href="#servicios">Laminado de Cejas</a></li>
            <li><a href="#servicios">Hydralips</a></li>
            <li><a href="#servicios">Limpieza en Espalda</a></li>
          </ul>
        </div>
        <div className="ay-footer__col">
          <h4>Visítanos</h4>
          <ul>
            <li>Calle 99 # 7A-51</li>
            <li>Edificio So100, Cons. 402</li>
            <li>Chicó Norte, Bogotá</li>
            <li><a href={MAPS_LINK} target="_blank" rel="noopener">Ver en Google Maps ↗</a></li>
          </ul>
        </div>
        <div className="ay-footer__col">
          <h4>Contacto</h4>
          <ul>
            <li><a href={WA_LINK} target="_blank" rel="noopener">WhatsApp · {WHATSAPP}</a></li>
            <li><a href={IG_LINK} target="_blank" rel="noopener">Instagram · @alisonyara.co</a></li>
            <li>Lun–Vie · 10:00 – 18:30</li>
            <li>Sáb y Dom · 8:30 – 18:30</li>
          </ul>
        </div>
      </div>
      <div className="ay-footer__bottom">
        <span>© 2026 Alison Yara — Consultorio Estético Coreano</span>
        <span></span>
      </div>
    </div>
  </footer>;


// ---------------------------------------------------------------------------
// FLOATING WHATSAPP
// ---------------------------------------------------------------------------
const FloatingWA = () =>
<a href={WA_LINK} target="_blank" rel="noopener" className="ay-fab" aria-label="Chatear por WhatsApp">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.5.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3C4.4 14.7 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" /></svg>
  </a>;

// ---------------------------------------------------------------------------
// FLOATING AGENDA (AgendaPro)
// ---------------------------------------------------------------------------
const FloatingAgenda = () =>
<a href={AGENDA_LINK} target="_blank" rel="noopener" className="ay-fab ay-fab--agenda" aria-label="Agendar cita en línea">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  </a>;


Object.assign(window, {
  Nav, Hero, Categorias, Sobre, Servicios, Aparatologia, Equipo, Galeria, Testimonios, Ubicacion, FAQ, CTAFinal, Footer, FloatingWA, FloatingAgenda
});