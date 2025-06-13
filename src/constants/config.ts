type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    
  };
};

export const config: TConfig = {
  html: {
    title: "Abhishek Shah — Portfolio",
    fullName: "Abhishek Shah",
    email: "abhi.shah6336@gmail.com",
  },
  hero: {
    name: "Abhi",
    p: ["Building AI-powered full-stack systems, cloud automation, and intelligent e-commerce platforms that scale to millions."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m Abhishek Shah — a Software Engineer and Full-Stack Developer specializing in building AI-powered products, scalable cloud systems, and intelligent e-commerce platforms. At Trumbull Industries, I lead engineering initiatives across web, API, and cloud stacks, driving measurable business impact. My work spans end-to-end architecture, ML-driven features, and automation at scale — always with a focus on clean code, performance, and user experience. I’m passionate about solving complex problems with elegant engineering and continuously learning to push technology forward.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `I love building intelligent, scalable, and user-focused systems that deliver real-world impact. My projects span full-stack development, AI/ML applications, cloud automation, and e-commerce architecture — combining clean engineering with a strong product mindset. Below is a selection of projects that showcase my ability to design and deploy solutions at scale.`,
    },
  },
};
