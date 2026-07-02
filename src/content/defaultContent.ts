import type { SiteContent } from "./types";

export const defaultContent: SiteContent = {
  profile: {
    displayName: "Harshika Jain",
    credentials: "M.Sc Psychology (University of Dundee) · PhD Researcher, NMIMS · Founder, RedefineMindHealth",
    tagline:
      "Counselling is not about fixing what is 'wrong'. It is about understanding what is happening within you and around you.",
    bio: "I see counselling as a collaborative and supportive process. My approach is grounded in empathy, respect, and psychological understanding, with the aim of creating a safe and non-judgmental space where individuals feel comfortable sharing their thoughts and concerns.\n\nInstead of offering quick fixes, I work with clients to explore their emotions, patterns, and life experiences at a pace that feels right for them. Each counselling process is shaped around the person's unique situation, needs, and goals, helping them develop greater awareness, clarity, and emotional well-being.\n\nI work primarily with adults and young adults navigating emotional distress, relationship difficulties, anxiety, self-esteem concerns, career stress, and the ways digital life can affect how we feel. My practice brings together research, teaching, and applied work to offer evidence-informed, personalised support.\n\nMy work is guided by a strong commitment to ethical and responsible practice. I value each individual's autonomy and unique perspective, and approach every session with care, humility, and a continuous commitment to growth, both personally and professionally.",
    quote:
      "I have always been drawn to psychology not just as a field of study, but as a way of understanding emotions, relationships, and the different situations in which people experience stress, change, growth, and resilience.",
    currentlyExploring:
      "Currently pursuing doctoral research at NMIMS on relationships, emotional experiences, and the psychological impact of digital environments, including how social media, online behaviour, and technology-mediated connection shape the way we feel, relate, and understand ourselves.",
  },

  affiliations: [
    "Faculty, NMIMS University (Social and Educational Psychology)",
    "Doctoral Researcher, NMIMS (Deemed-to-be University)",
    "B.Sc Psychology, D.G. Ruparel College, Mumbai",
    "M.Sc Psychology, University of Dundee, Scotland",
  ],

  experience: [
    {
      id: "exp-founder",
      role: "Founder & Psychologist",
      org: "RedefineMindHealth · Mumbai",
      period: "Present",
      description:
        "Individual, couples, and career counselling for adults and young adults. Mental fitness assessments for legal, performance, and institutional requirements. Psychology-informed corporate workshops on workplace mental health and emotional well-being.",
    },
    {
      id: "exp-faculty",
      role: "Faculty",
      org: "NMIMS University · Mumbai",
      period: "Present",
      description:
        "Teaching Social Psychology, School and Educational Psychology, Industrial & Organisational Psychology, Entrepreneurship, and Communication Skills. Teaching allows me to stay closely connected with psychological theory while helping students apply their learning to real-world contexts.",
    },
    {
      id: "exp-penumbra",
      role: "Mental Health & Wellbeing Worker",
      org: "Penumbra · Scotland",
      period: "Prior",
      description:
        "Community mental health support during my Master's at Dundee, supporting individuals experiencing emotional distress while also assisting with practical challenges such as housing, financial support, and daily functioning. This strengthened my understanding of person-centred, recovery-focused care.",
    },
    {
      id: "exp-apm",
      role: "Occupational Rehabilitation & Psychological Assessment",
      org: "APM · Australia",
      period: "Prior",
      description:
        "Functional capacity evaluations, ergonomic assessments, and psychosocial risk screenings, grounding my understanding of how psychological principles apply across occupational and rehabilitation settings.",
    },
    {
      id: "exp-psychoshiksha",
      role: "Assessment Training",
      org: "PsychoShiksha · India",
      period: "Prior",
      description:
        "Psychological assessment training in India, alongside earlier experiences in forensic psychology, career counselling, and inclusive education, each expanding my understanding of how psychology applies across different contexts and populations.",
    },
  ],

  services: [
    {
      id: "svc-individual",
      icon: "person",
      title: "Individual Counselling",
      blurb:
        "A one-to-one, confidential space to talk openly about your thoughts, emotions, and personal experiences.",
      details:
        "Individual counselling offers a one-to-one, confidential space where you can talk openly about your thoughts, emotions, and personal experiences. It provides support for concerns that may feel difficult to understand or manage on your own.\n\nPeople often come for individual counselling when they are experiencing:\n• Ongoing stress, emotional distress, or feeling overwhelmed\n• Anxiety, overthinking, or constant worry\n• Low self-esteem, self-doubt, or concerns about identity and self-worth\n• A sense of feeling stuck, confused, or emotionally disconnected\n• Social media or digital interactions affecting their emotional well-being\n• Difficulty with relationships, life transitions, or career-related stress\n\nSessions focus on helping you understand your emotional patterns, gain clarity and insight, and develop healthier ways of coping. The process supports emotional regulation, self-awareness, and gradual personal growth, at a pace that feels right for you.\n\nCounselling is best suited for adults who are open to a collaborative, reflective process and are seeking thoughtful psychological support rather than immediate advice or solutions.\n\nAvailable in person (Mumbai) and online. Format, frequency, and suitability are discussed before we begin.",
    },
    {
      id: "svc-couples",
      icon: "favorite",
      title: "Couples Counselling",
      blurb:
        "A safe, structured space for partners to explore their relationship, improve communication, and understand each other.",
      details:
        "Couples counselling provides a safe and structured space for partners to explore their relationship, improve communication, and better understand each other's emotional experiences. The process helps both partners reflect on patterns, concerns, and challenges in a supportive and neutral environment.\n\nCouples often seek counselling when they are experiencing:\n• Frequent conflicts or communication difficulties\n• Emotional distance, misunderstandings, or feeling disconnected\n• Challenges around trust, boundaries, or unmet expectations\n• Stress related to major life changes affecting the relationship\n\nThe focus is not on finding fault or placing blame. Sessions aim to help partners understand relational patterns, recognise each other's emotional needs, and develop healthier and more conscious ways of communicating and relating.\n\nAvailable in person (Mumbai) and online.",
    },
    {
      id: "svc-career",
      icon: "work",
      title: "Career Counselling",
      blurb:
        "A supportive space to reflect on your relationship with work, career direction, and professional identity.",
      details:
        "Career counselling offers a supportive space to reflect on your relationship with work, career direction, and professional identity. It focuses not only on decisions and goals, but also on the emotional and personal aspects of your work life.\n\nCareer counselling may be helpful if you are experiencing:\n• Uncertainty about career choices, direction, or transitions\n• Work-related stress, dissatisfaction, or burnout\n• Difficulty balancing personal values with professional expectations\n• Questions about purpose, long-term goals, or career growth\n\nThe process looks at the emotional, psychological, and identity-related aspects of work, helping you gain clarity, make informed decisions, and move toward a career path that feels more aligned and meaningful.\n\nAvailable in person (Mumbai) and online.",
    },
    {
      id: "svc-fitness",
      icon: "verified",
      title: "Mental Fitness Assessments",
      blurb:
        "Purpose-specific psychological evaluations for legal, institutional, or performance requirements.",
      details:
        "I provide psychological assessments for individuals who require mental fitness certification for specific legal, professional, or performance-related purposes. Evaluations are conducted through structured clinical interaction and psychological screening, in line with professional and ethical guidelines.\n\nAssessments may be required for:\n• Legal purposes: evaluation of decision-making capacity for documentation such as wills or declarations\n• Child artist or performer fitness: required for participation in film, television, advertising, or other performance work\n• Institutional or industry requirements: where basic psychological fitness or emotional readiness needs to be documented\n\nThe assessment focuses on emotional functioning, psychological stability, and the individual's capacity relevant to the specific requirement. Certifications are issued only when appropriate and within professional and ethical limits.\n\nImportant clarifications:\n• Certificates are purpose-specific and valid only for the context for which they are issued\n• These assessments do not constitute therapy, diagnosis, or long-term psychological evaluation\n• For child artist assessments, the process includes consideration of the child's emotional well-being, readiness, and parental involvement\n• This service does not include medical or psychiatric diagnosis, medication evaluation, or forensic psychiatric opinion\n• All evaluations are conducted with strict attention to confidentiality, informed consent, and ethical standards",
    },
    {
      id: "svc-corporate",
      icon: "groups",
      title: "Corporate Workshops",
      blurb:
        "Psychology-informed workshops on workplace mental health, emotional well-being, and team dynamics.",
      details:
        "I design and facilitate psychology-informed workshops for organisations and institutions, focusing on workplace mental health, emotional well-being, and healthy interpersonal dynamics. Sessions are based on psychological research and practical experience, created to encourage reflection, build awareness, and support meaningful conversations around mental health at work.\n\nWorkshop themes include:\n• Workplace stress, burnout, and emotional fatigue\n• Mental well-being and resilience at work\n• Emotional awareness and regulation\n• Communication and interpersonal effectiveness\n• Boundaries, digital behaviour, and work–life balance\n• Team dynamics and relational patterns\n• Navigating change, transitions, and uncertainty\n\nWorkshops are interactive and reflective, encouraging participation and shared learning while maintaining psychological safety. Participants are never expected to share personal experiences, and clear boundaries are maintained throughout.\n\nAvailable as one-time sessions or multi-session engagements, in-person or online. Structure, duration, and group size are discussed in advance to ensure suitability. Content is adapted based on organisational context and needs.",
    },
  ],

  faqs: [
    {
      id: "faq-first",
      question: "What happens in the first session?",
      answer:
        "The first session is a relaxed conversation. We talk about what brings you in, what you're hoping for, and how we might work together. There is no pressure. It is a chance to see if it feels right for you.",
    },
    {
      id: "faq-format",
      question: "Are sessions in-person or online?",
      answer:
        "Both options are available. Sessions are held in person in Mumbai (Kandivali East) or via a secure online platform. Format, frequency, and suitability are discussed before we begin.",
    },
    {
      id: "faq-process",
      question: "How does the counselling process work?",
      answer:
        "Counselling is a collaborative process that develops over time. Sessions are guided by your comfort and emotional readiness, creating space for reflection and deeper understanding. The work often involves recognising patterns, understanding emotional responses, and gradually building greater self-awareness. Progress is not always linear. The process respects the natural ups and downs that come with meaningful change.",
    },
    {
      id: "faq-suited",
      question: "Who is counselling suited for?",
      answer:
        "Counselling here is suited for adults and couples seeking psychological support for non-crisis concerns who are open to a reflective, exploratory process. It may be particularly helpful for individuals who want to better understand themselves, their relationships, and their emotional experiences, rather than seeking immediate advice or solutions.",
    },
    {
      id: "faq-confidential",
      question: "Is everything I share confidential?",
      answer:
        "Yes. What you share stays between us, within the standard ethical and legal limits of psychological practice. Your privacy and emotional safety come first.",
    },
    {
      id: "faq-length",
      question: "How long does counselling take?",
      answer:
        "It depends on you and what you're working through. Some people come for a few focused sessions; others prefer longer-term support. We revisit what is useful as we go. There is no fixed timeline.",
    },
    {
      id: "faq-fixing",
      question: "Is counselling about being 'fixed'?",
      answer:
        "Not at all. The goal is not to eliminate all discomfort, but to help you develop a more compassionate, balanced relationship with your thoughts, emotions, and experiences. Counselling is about understanding, not correction.",
    },
    {
      id: "faq-research",
      question: "Can I participate in your research?",
      answer:
        "Yes. I occasionally invite participants for studies on relationships, emotions, and digital well-being. Participation is always voluntary, anonymous or confidential as applicable, and ethically approved. Reach out if you're interested.",
    },
  ],

  testimonials: [
    {
      id: "t-01",
      quote: "I started counselling when I was struggling with constant anxiety and overthinking. Every session gave me the space to slow down, understand what I was experiencing, and develop healthier ways of coping. I always felt heard, respected, and never judged.",
      attribution: "Young Professional",
      category: "Individual Counselling",
    },
    {
      id: "t-02",
      quote: "After going through a difficult phase in my personal life, I felt emotionally exhausted and unsure of myself. Counselling helped me regain confidence, understand my emotional patterns, and approach life with greater clarity. The sessions felt safe, thoughtful, and genuinely supportive.",
      attribution: "Working Professional",
      category: "Individual Counselling",
    },
    {
      id: "t-03",
      quote: "I appreciated that the sessions weren't about giving advice or telling me what to do. Instead, I was encouraged to reflect, understand myself better, and make decisions that felt right for me. It has been an incredibly valuable experience.",
      attribution: "Student",
      category: "Individual Counselling",
    },
    {
      id: "t-04",
      quote: "My partner and I were finding it difficult to communicate without arguments. Counselling helped us slow down, listen to each other differently, and better understand what was happening beneath the conflict. We left each session with practical insights we could apply in our relationship.",
      attribution: "Married Couple",
      category: "Couples Counselling",
    },
    {
      id: "t-05",
      quote: "We came to counselling feeling emotionally distant and unsure how to reconnect. The sessions created a neutral space where both of us felt equally heard. It helped us rebuild trust and communicate with much more empathy.",
      attribution: "Couple Together for 4 Years",
      category: "Couples Counselling",
    },
    {
      id: "t-06",
      quote: "What stood out most was the calm, thoughtful approach and the way she created an environment where both of us felt equally heard. We left every session with greater clarity, practical insights, and a stronger understanding of ourselves as individuals and as partners.",
      attribution: "Couple Together for 6 Years",
      category: "Couples Counselling",
    },
    {
      id: "t-07",
      quote: "I was completely confused about my career path after graduation. Through counselling, I gained clarity about my strengths, interests, and long-term goals. I now feel much more confident in the direction I've chosen.",
      attribution: "University Student",
      category: "Career Counselling",
    },
    {
      id: "t-08",
      quote: "Career counselling gave me much-needed clarity during a time when I felt overwhelmed by career choices. Harshika helped me understand my strengths, interests, and values, making the decision-making process much more meaningful. I now feel more confident about the direction I've chosen.",
      attribution: "Recent Graduate",
      category: "Career Counselling",
    },
    {
      id: "t-09",
      quote: "The mental fitness assessment process was explained clearly from the beginning. Everything was conducted professionally, respectfully, and without making the experience feel intimidating. I appreciated the transparency and attention to detail throughout.",
      attribution: "Legal Assessment Client",
      category: "Mental Fitness Assessment",
    },
    {
      id: "t-10",
      quote: "She made the child feel comfortable throughout the interaction and explained each step with patience and professionalism. The process was smooth and reassuring.",
      attribution: "Production Head",
      category: "Mental Fitness Assessment",
    },
    {
      id: "t-11",
      quote: "The process has always been prompt, organised, and professional. Reports are delivered within the agreed timeline, making it easy for production schedules to stay on track while ensuring the child's well-being remains the priority.",
      attribution: "Production Coordinator",
      category: "Mental Fitness Assessment",
    },
    {
      id: "t-12",
      quote: "Our team attended a workplace mental health workshop that was engaging, practical, and relevant. The session encouraged open conversations while maintaining a professional and respectful environment. We received excellent feedback from our employees afterward.",
      attribution: "HR Business Partner, CA Firm",
      category: "Corporate Workshop",
    },
    {
      id: "t-13",
      quote: "The session exceeded our expectations. The content was practical, engaging, and relevant to the challenges employees face today. The interactive activities encouraged meaningful discussions, and our team left with strategies they could apply both professionally and personally.",
      attribution: "HR Manager, MNC",
      category: "Corporate Workshop",
    },
  ],

  research: {
    about:
      "I approach research as a way of thinking, one that values complexity, nuance, and the emotional realities of human experience. My doctoral work at NMIMS explores relationships, emotional experiences, and the psychological processes that shape how individuals navigate connection and meaning in contemporary life. I integrate this academic work with my counselling practice, using research to maintain conceptual clarity, ethical sensitivity, and responsiveness to individual experience.",
    interests: [
      "Romantic and interpersonal relationships",
      "Attachment, emotional dependency, and relational insecurity",
      "Jealousy, surveillance, and control in digital environments",
      "Emotional processes and regulation within relationships",
      "Mental health in young adults",
      "Social media, online boundaries, and technology-mediated connection",
    ],
    studyTitle: "Current Research Study",
    studyDescription:
      "This study explores relationships, emotional experiences, and psychological well-being in the context of digital life. Participation involves completing a short questionnaire. It is entirely voluntary, anonymous, and ethically approved through NMIMS University. The survey takes approximately 10 minutes.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdeLKuhXgS1uLsJeJRlifwmCbiSpAJCPeXUfyaEtUP3GpYrew/viewform?embedded=true",
  },

  contact: {
    email: "harshika.therapy@gmail.com",
    phone: "+91 98339 31470",
    address:
      "Row House No 4, 90ft Road, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101",
    instagram: "https://instagram.com/redefinemindhealth",
    linkedin: "https://linkedin.com/in/harshika-n-jain",
    bookingUrl: "https://calendar.app.google/r89v41Dvwv9hzM5y7",
  },
};
