// ─────────────────────────────────────────────────────────────────────────────
//  TALK SCHEDULE
//  This is the only file you need to edit to add or update talks.
//
//  • Order doesn't matter. Talks are sorted by date automatically and split
//    into "Upcoming" and "Past" based on today's date.
//  • Copy an existing entry, paste it, and change the details.
//  • Leave out any optional field you don't need.
//  • Two or more speakers on one day: add one entry per speaker with the same
//    date. They appear together under that date, ordered by time.
//
//  Fields:
//    date         required   "YYYY-MM-DD"
//    speaker      required
//    title        required   use "TBA" if not known yet
//    time         optional   e.g. "14:00–15:00"
//    affiliation  optional
//    location     optional   e.g. "Hicks Building, LT9" or "Online"
//    abstract     optional   plain text; a blank line starts a new paragraph
//    link         optional   URL to join the talk (Zoom/Teams) or an event page
//    slides       optional   e.g. "speaker_prezzies/2026-11-04-doe.pdf"
//    recording    optional   URL to a recording
//
//  The entries below are examples. Replace them with real talks.
// ─────────────────────────────────────────────────────────────────────────────

const TALKS = [
  {
    date: "2026-11-13",
    time: "13:30-14:00",
    speaker: "Rebecca Chang",
    affiliation: "University of Warwick",
    title: "TBA",
    location: "Online",
    link: "https://universityofexeter.zoom.us/j/93484713848?pwd=YUxWeDE4UysxQVBmNEkzK1J6WGlRdz09",
    abstract: "TBA",
  },
  {
    date: "2026-11-13",
    time: "14:00-14:30",
    speaker: "Tariq Mahassen",
    affiliation: "University of Sheffield",
    title: "Quantum Fokker-Planck solvers as trainable generative models",
    location: "Online",
    link: "https://universityofexeter.zoom.us/j/93484713848?pwd=YUxWeDE4UysxQVBmNEkzK1J6WGlRdz09",
    abstract: "We develop and analyze generative models based on quantum solvers of stochastic differential equations. Unlike the common approach based on layered variational quantum circuits with parameterized rotations, we parameterize the potential of a Langevin process. The associated Fokker-Planck (FP) equations are Hermitianized and solved using a linear combination of cosine operators implemented through quantum singular value transformation. By encoding the square root of the stationary density, the model enables sampling through computational-basis measurements and is efficiently controlled by coefficients of the block-encoded diagonal potential. We train the proposed model to match empirical distributions within the family described by FP equations, demonstrating parameter recovery for multivariate probability distributions. Crucially, the model remains trainable at scale. Sample-efficient and convex optimization for in-distribution targets arises from a physics-informed inductive bias and holds regardless of the dimensionality of the problem. We provide circuit constructions and efficient block encodings of the main components of the algorithm and analyze resource requirements. Our approach frames quantum generative learning as quantum model discovery and provides a foundation for extending this framework to high-dimensional, strongly correlated scientific data.",
  },
];
