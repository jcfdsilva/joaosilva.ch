export const translations = {
    en: {
        nav: {
            home: 'Home',
            research: 'Research',
            contact: 'Contact'
        },
        home: {
            title: 'Hello!',
            description: 'My name is João',
            resume: {
                experience: 'Portfolio',
                portfolio:[
                    {
                        id: "pinchbot",
                        title: "PinchBot",
                        background: "pinch4.png",
                        href: "/pinchbot"
                    },
                    {
                        id: "research_blog",
                        title: "Research blog",
                        background: "research_blog.png",
                        href: "/research_blog"
                    },
                    {
                        id: "opengis4et",
                        title: "Citiwatts",
                        background: "citiwatts.png",
                        href: "/citiwatts"
                    },
                    {
                        id: "it_manager",
                        title: "IT Management",
                        background: "itmanager.png",
                        href: "/it_management"
                    },
                    {
                        id: "prettynicky",
                        title: "Prettynicky",
                        background: "pretty.png",
                        href: "/prettynicky"
                    },
                    {
                        id: "pinchsmall",
                        title: "Pinchsmall",
                        background: "pinchsmall.png",
                        href: "/pinchsmall"
                    },
                ],
                info: 'About Me',
                diplomas_subtitle: 'Diplomas',
                diplomas: [
                    {
                        area: "Business IT",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"HES-SO"
                    },
                    {
                        area: "Business administration",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"Haaga Helia"
                    },
                    {
                        area: "Business employee",
                        certificate: "Federal Vocational Baccalaureate",
                        year: "2017",
                        school:"ECCG Monthey"
                    },
                ],
                work_subtitle:'Work Experience',
                work:[
                    {
                        company:"EPFL",
                        start:"Jul 2023",
                        end:"",
                        job:"IT Manager & Developer",
                        descripton:"Managed IT systems and software development for a team focused on Industrial Processes and Energy Systems. Oversaw servers, virtual machines, applications, and created innovative software solutions, including AI tools using open-source LLMs."
                    },{
                        company:"HES-SO",
                        start:"Feb 2021",
                        end:"Jul 2023",
                        job:"Research Assistant",
                        descripton:"Contributed to projects like DomOS, GOFLEX, and MAPEC, handling geodata, databases, and mobile app deployment. Led SCRUM practices and frontend development for citiwatts.eu"
                    },{
                        company:"Signant Health",
                        start:"Aug 2019",
                        end:"Dec 2019",
                        job:"Mobile Developer",
                        descripton:"Collaborated with Haaga-Helia and Signant Health on an eHealth app, focusing on UX/UI research, unit testing, and Flutter development for Android and iOS. Managed agile workflows using Trello, Scrum, Slack, and GitHub."
                    },{
                        company:"Linda Photography Sàrl",
                        start:"Aug 2016",
                        end:"Aug 2017",
                        job:"Student Intern",
                        descripton:"Managed daily accounting, client communications, and WordPress/Squarespace websites. Supervised the development of a photographers' calendar management platform by creating user stories and participating in review meetings with an external team."
                    },
                ],
                hobbies: 'Hobbies'
            },
        },
        pinchbot:{
            title: "Pinchbot",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"A RAG-based multi-agent chatbot designed to assist with class-related questions and seamlessly integrate into the research software developed by the group"',
            description: "PinchBot is a software system built on a RAG-based infrastructure and served through a Python API. It was originally developed to be integrated into software for pinch analysis, providing intelligent assistance within that domain. With the addition of a multi-agent architecture, PinchBot has become a flexible and extensible platform that can be integrated into a wider range of projects and use cases.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Designed the system infrastructure from scratch using a multi-container architecture.",
                "Integrated and orchestrated the API, NoSQL database, vector database, content management system (CMS), and frontend into a scalable and modular deployment.",
                "Studied the fundamentals of artificial intelligence, including machine learning concepts, neural networks, search algorithms, and ethical considerations.",
                "Evaluated and documented the performance of various large language models (LLMs) and embedding models through systematic testing and comparison.",
                "Developed a frontend featuring conversation history, user management, and a server-side code runner capable of executing Python scripts and rendering Markdown content.",
                "Developed a frontend CMS that enabled administrators to manage a hierarchical multi-agent structure and upload PDF documents to enrich the vector database used for RAG.",
                "Transitioned from leading development of PinchBot to the group’s main software project, taking over as technical lead and reprioritizing responsibilities."
            ],
            images: [
                "pinchbot1.png",
                "pinchbot2.png",
                "pinchbot3.png",
            ],
        },
        research_blog:{
            title: "Research Blog",
            slice:9,
            eyebrow: "Project showcase",
            subtitle: '"A Quarto-based research blog accessible via the “Research” tab in the website navigation bar."',
            description: "A Quarto-based research blog serving as a digital notebook for a range of interests, including AI development, Kubernetes infrastructure, cybersecurity (with password-protected sections due to ISC2-related content), JavaScript experiments, and cooking recipes.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Wrote the AI chapter, building on the Elements of AI certification and additional research conducted during the development of PinchBot",
                "Created a password-protected Cybersecurity chapter to organize notes from my ISC2 certification studies.",
                "Implemented JavaScript algorithms and interactive 3D visualizations as personal coding challenges.",
                "Currently developing the Kubernetes chapter while applying its concepts in real-world deployments",
                "Collected and documented some of my favorite recipes for easy access and future reference.",
            ],
            images: [
                "research1.png",
                "research2.png",
                "research3.png",
            ],
        },
        citiwatts: {
            title: "Citiwatts",
            slice:4,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        it_management:{
            title: "IT management",
            slice:3,
            eyebrow: "Project showcase",
            subtitle: '"Oversaw the IT administration and infrastructure for an EPFL research group."',
            description: "Managed the research group's IT infrastructure, including workstation deployment and maintenance, Active Directory administration, virtual machine hosting, CI pipelines, and server management supporting multiple online research publications.",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Managed virtualized infrastructure using VMware and Proxmox, including Active Directory integration on physical servers.",
                "Administered multiple GitLab projects and CI/CD pipelines for Quarto-based static websites and Streamlit applications.",
                "Developed a variety of internal tools to support teaching and classroom activities.",
                "Deployed and maintained multiple types of web services, including public-facing, DMZ, intranet, and OAuth-protected applications.",
                "Provided technical support to researchers for the development, deployment, and maintenance of software tools and computing environments",
                "Gained extensive experience with Bash scripting and Linux system administration across Linux, macOS, and Windows environments."
            ],
            images: [
                "admin1.png",
                "admin2.png",
                "admin3.png",
            ],
        },
        prettynicky:{
            title: "Pretty Nicky",
            slice:6,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        pinchsmall:{
            title: "Pinchsmall",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        contact: {
            title: 'Get in touch',
            description: "Have a question or want to work together? Send me a message.",
            fields: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                captcha: (a, b) => `Quick check: what is ${a} + ${b}?`,
                captchaLoading: 'Loading security question…',
            },
            send: 'Send message',
            sending: 'Sending…',
            success: "Thanks! Your message has been sent — I'll get back to you soon.",
            errors: {
                generic: 'Something went wrong. Please try again.',
                network: 'Could not reach the server. Check your connection and try again.',
                captchaLoad: 'Could not load the security question. Please refresh the page.',
            },
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            research: 'Recherche',
            contact: 'Contact'
        },
        home: {
            title: 'Salut!',
            description: 'Je m\'appele João',
            resume: {
                experience: 'Portfolio',
                portfolio:[
                    {
                        id: "pinchbot",
                        title: "PinchBot",
                        background: "pinch4.png",
                        href: "/pinchbot"
                    },
                    {
                        id: "research_blog",
                        title: "Blog de recherche",
                        background: "research_blog.png",
                        href: "/research_blog"
                    },
                    {
                        id: "opengis4et",
                        title: "Citiwatts",
                        background: "citiwatts2.png",
                        href: "/citiwatts"
                    },
                    {
                        id: "it_manager",
                        title: "Gestion informatique",
                        background: "itmanager.png",
                        href: "/it_management"
                    },
                    {
                        id: "prettynicky",
                        title: "Prettynicky",
                        background: "pretty.png",
                        href: "/prettynicky"
                    },
                    {
                        id: "pinchsmall",
                        title: "Pinchsmall",
                        background: "pinchsmall.png",
                        href: "/pinchsmall"
                    },
                ],
                info: 'À Propos',
                diplomas_subtitle: 'Diplomas',
                diplomas: [
                    {
                        area: "Informatique de gestion",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"HES-SO"
                    },
                    {
                        area: "Gestion d'entreprise",
                        certificate: "Bachelor of science",
                        year: "2021",
                        school:"Haaga Helia"
                    },
                    {
                        area: "Employé de commerce",
                        certificate: "Maturité proffessionelle",
                        year: "2017",
                        school:"ECCG Monthey"
                    },
                ],
                work_subtitle:'Work Experience',
                work:[
                    {
                        company: "EPFL",
                        start: "Juil 2023",
                        end: "",
                        job: "Responsable IT & Développeur",
                        descripton: "Supervision de la gestion informatique et du développement logiciel pour une équipe d'ingénieurs spécialisés dans les procédés industriels et les systèmes énergétiques. Les responsabilités incluent la gestion des serveurs et des machines virtuelles, la supervision des applications et la création de solutions logicielles pour les parties prenantes internes et externes. En outre, impulsion de l'innovation via le développement d'outils d'IA exploitant des modèles de langage de grande taille (LLMs) open-source."
                    }, {
                        company: "HES-SO",
                        start: "Fév 2021",
                        end: "Juil 2023",
                        job: "Assistant de Recherche",
                        descripton: "Assistant de recherche à la HES-SO, contribuant à des projets nationaux et européens tels que DomOS, GOFLEX et MAPEC. Les responsabilités incluent la gestion des géodonnées, l'administration des bases de données et le déploiement d'applications mobiles. Rôle clé dans le développement web full-stack et SCRUM master pour la phase initiale du projet citiwatts.eu, dirigeant le développement frontend et favorisant les méthodologies agiles."
                    }, {
                        company: "Signant Health",
                        start: "Août 2019",
                        end: "Déc 2019",
                        job: "Développeur Mobile",
                        descripton: "Participation à un projet multidisciplinaire avec Haaga-Helia et Signant Health pour le développement d'une application e-santé. Les responsabilités incluent la recherche UX/UI, les tests unitaires et le développement Flutter pour les plateformes Android et iOS. Participation active à une équipe agile, gestion des tableaux Trello, réunions Scrum, discussions Slack et dépôts GitHub pour garantir l'exécution et la collaboration fluide du projet."
                    }, {
                        company: "Linda Photography Sàrl",
                        start: "Août 2016",
                        end: "Août 2017",
                        job: "Stagiaire Étudiant",
                        descripton: "Stage administratif, gestion de la comptabilité quotidienne, gestion des clients par e-mail, téléphone et en personne, et gestion des sites WordPress et Squarespace. Supervision d'un projet sur la gestion des rendez-vous pour les calendriers des photographes, travaillant avec une équipe de développement externe pour créer des user stories et participer aux réunions de revue."
                    }                    
                ],
                hobbies: 'Loisirs'
            },
        },
        pinchbot:{
            title: "Pinchbot",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        research_blog:{
            title: "Research Blog",
            slice:9,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        citiwatts: {
            title: "Citiwatts",
            slice:4,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        it_management:{
            title: "IT management",
            slice:3,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        prettynicky:{
            title: "Pretty Nicky",
            slice:6,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        pinchsmall:{
            title: "Pinchsmall",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        contact: {
            title: 'Get in touch',
            description: "Have a question or want to work together? Send me a message.",
            fields: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                captcha: (a, b) => `Quick check: what is ${a} + ${b}?`,
                captchaLoading: 'Loading security question…',
            },
            send: 'Send message',
            sending: 'Sending…',
            success: "Thanks! Your message has been sent — I'll get back to you soon.",
            errors: {
                generic: 'Something went wrong. Please try again.',
                network: 'Could not reach the server. Check your connection and try again.',
                captchaLoad: 'Could not load the security question. Please refresh the page.',
            },
        }
    },
    pt: {
        nav: {
            home: 'Início',
            research: 'Pesquisa',
            contact: 'Contato'
        },
        home: {
            title: 'Olá!',
            description: 'O meu nome é João',
            resume: {
                experience: 'Portefólio',
                portfolio:[
                    {
                        id: "pinchbot",
                        title: "PinchBot",
                        background: "pinch4.png",
                        href: "/pinchbot"
                    },
                    {
                        id: "research_blog",
                        title: "Blog de pesquisa",
                        background: "research_blog.png",
                        href: "/research_blog"
                    },
                    {
                        id: "opengis4et",
                        title: "Citiwatts",
                        background: "citiwatts2.png",
                        href: "/citiwatts"
                    },
                    {
                        id: "it_manager",
                        title: "Gestão informática",
                        background: "itmanager.png",
                        href: "/it_management"
                    },
                    {
                        id: "prettynicky",
                        title: "Prettynicky",
                        background: "pretty.png",
                        href: "/prettynicky"
                    },
                    {
                        id: "pinchsmall",
                        title: "Pinchsmall",
                        background: "pinchsmall.png",
                        href: "/pinchsmall"
                    },
                ],
                info: 'Sobre Mim',
                diplomas_subtitle: 'Diplomas',
                diplomas: [
                    {
                        area: "Gestão informatica",
                        certificate: "Licenciatura em ciências",
                        year: "2021",
                        school:"HES-SO"
                    },
                    {
                        area: "Administração de Empresas",
                        certificate: "Licenciatura em ciências",
                        year: "2021",
                        school:"Haaga Helia"
                    },
                    {
                        area: "Comercial",
                        certificate: "Certificado Federal de Maturidade Profissional",
                        year: "2017",
                        school:"ECCG Monthey"
                    },
                ],
                work_subtitle:'Work Experience',
                work:[
                    {
                        company: "EPFL",
                        start: "Jul 2023",
                        end: "",
                        job: "Gerente de TI & Desenvolvedor",
                        descripton: "Supervisão da gestão de TI e desenvolvimento de software para uma equipe de engenheiros especializados em Processos Industriais e Sistemas de Energia. Responsabilidades incluem gestão de servidores e máquinas virtuais, supervisão de aplicações e criação de soluções de software para partes interessadas internas e externas. Além disso, impulsionar a inovação através do desenvolvimento de ferramentas de IA utilizando Modelos de Linguagem de Grande Escala (LLMs) open-source."
                    }, {
                        company: "HES-SO",
                        start: "Fev 2021",
                        end: "Jul 2023",
                        job: "Assistente de Pesquisa",
                        descripton: "Assistente de pesquisa na HES-SO, contribuindo para projetos nacionais e europeus como DomOS, GOFLEX e MAPEC. Responsabilidades incluíram gestão de geodados, administração de bancos de dados e implementação de aplicativos móveis. Atuou como desenvolvedor full-stack e SCRUM master na fase inicial do projeto citiwatts.eu, liderando o desenvolvimento frontend e promovendo metodologias ágeis."
                    }, {
                        company: "Signant Health",
                        start: "Ago 2019",
                        end: "Dez 2019",
                        job: "Desenvolvedor Mobile",
                        descripton: "Contribuiu para um projeto multidisciplinar com Haaga-Helia e Signant Health no desenvolvimento de uma aplicação de e-saúde. Responsabilidades incluíram pesquisa de UX/UI, testes unitários e desenvolvimento Flutter para as plataformas Android e iOS. Participação ativa em uma equipe ágil, gerenciando quadros Trello, reuniões Scrum, discussões no Slack e repositórios GitHub para garantir a execução e colaboração perfeita do projeto."
                    }, {
                        company: "Linda Photography Sàrl",
                        start: "Ago 2016",
                        end: "Ago 2017",
                        job: "Estagiário Estudante",
                        descripton: "Estágio administrativo, gerenciando contabilidade diária, atendimento a clientes por e-mail, telefone e presencialmente, e gestão de sites WordPress e Squarespace. Supervisionou um projeto de gerenciamento de compromissos para os calendários dos fotógrafos, trabalhando com uma equipe de desenvolvimento externa para criar user stories e participar de reuniões de revisão."
                    },
                ],
                hobbies: 'Hobbies'
            },
        },
        pinchbot:{
            title: "Pinchbot",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        research_blog:{
            title: "Research Blog",
            slice:9,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        citiwatts: {
            title: "Citiwatts",
            slice:4,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        it_management:{
            title: "IT management",
            slice:3,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        prettynicky:{
            title: "Pretty Nicky",
            slice:6,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        pinchsmall:{
            title: "Pinchsmall",
            slice:5,
            eyebrow: "Project showcase",
            subtitle: '"Open-source tool for efficient energy planning - With citiwatts, users receive a quick first overview of a selected area of study and various aspects relevant to heat and energy planning as well as electric mobility"',
            description: "Citiwatts is a platform that provides initial and quick estimates of heating and cooling demand and assesses local renewable energy potential for any European region. With more detailed data and the use of advanced calculation modules (CMs), users can develop comprehensive energy strategies at village, town, city, regional or national levels",
            sections: {
                description: "Project description",
                responsibilities: "My responsibilities",
                gallery: "Image gallery",
            },
            responsibilities: [
                "Led frontend development in AngularJS for citiwatts.eu",
                "Managed geospatial data processing and database administration",
                "Extended and adapted the Python backend to support new features and requirements",
                "Orchestrated Docker container deployment, including automatic service registration within the network when new calculation containers were launched",
                "Served as Scrum Master and supported the Product Owner in preparing progress reports for the funding agency",
                "Coordination of online and in-person meetings as well as distribution of tasks for a 7 teams consortium"
            ],
            images: [
                "citiwatts1.png",
                "citiwatts2.png",
                "citiwatts3.png",
            ],
        },
        contact: {
            title: 'Get in touch',
            description: "Have a question or want to work together? Send me a message.",
            fields: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                captcha: (a, b) => `Quick check: what is ${a} + ${b}?`,
                captchaLoading: 'Loading security question…',
            },
            send: 'Send message',
            sending: 'Sending…',
            success: "Thanks! Your message has been sent — I'll get back to you soon.",
            errors: {
                generic: 'Something went wrong. Please try again.',
                network: 'Could not reach the server. Check your connection and try again.',
                captchaLoad: 'Could not load the security question. Please refresh the page.',
            },
        }
    }
  };