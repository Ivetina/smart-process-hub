
// n8n i Supabase integracijska konfiguracija

// n8n konfiguracija
export const n8nConfig = {
  env: {
    N8N_BASIC_AUTH_ACTIVE: true,
    N8N_BASIC_AUTH_USER: "admin",
    N8N_BASIC_AUTH_PASSWORD: "1mojalozinka",
    N8N_HOST: "0.0.0.0",
    N8N_PORT: 5678,
    WEBHOOK_URL: "http://162.55.36.239:5678",
    N8N_SECURE_COOKIE: false,
    GENERIC_TIMEZONE: "Europe/Zagreb"
  },
  webhooks: {
    UNESI_KLIJENTA: "http://162.55.36.239:5678/webhook/unesi-klijenta"
  }
};

// Supabase konfiguracija
export const supabaseConfig = {
  url: "https://dctgepudfdzmnayazrqm.supabase.co/rest/v1/mybraindev",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json",
    Prefer: "return=representation"
  }
};

// Post template za API zahtjeve
export const postTemplate = {
  naziv: "TvrtkaX",
  kontakt_osoba: "Marko Markić",
  email: "marko@tvrtkax.hr",
  telefon: "+385951234567",
  web: "https://tvrtkax.hr",
  poruka: "Zanima nas ponuda za AI sustav.",
  Status: "novi",
  Status_2: "kupac",
  prioritet: "srednji",
  source: "web_forma",
  datum_kreiranja: "2025-03-26T14:45:00Z",
  napomena: "",
  ai_rezime: null,
  ai_odgovor: null,
  je_ai_odgovorio: false
};

// Upute za postavljanje n8n
export const n8nInstructions = [
  "1. Otvori n8n sučelje u browseru na http://162.55.36.239:5678",
  "2. Klikni na '+' > Import > Paste Workflow JSON",
  "3. Zalijepi sadržaj iz exportanog JSON-a",
  "4. Spremi workflow i klikni 'Activate'",
  "5. Testiraj POST request npr. s Postmanom ili web-formom na: http://162.55.36.239:5678/webhook/unesi-klijenta",
  "6. Provjeri u Supabase tablici `mybraindev` je li podatak uspješno upisan."
];

export default {
  n8nConfig,
  supabaseConfig,
  postTemplate,
  n8nInstructions
};
