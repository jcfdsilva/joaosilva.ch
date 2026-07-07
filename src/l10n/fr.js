export const fr =  {
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
                        background: "pinch.png",
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
                        background: "citiwatts.png",
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
                hobbies_title: "Loisirs",
                hobbies_subtitle: "What I do when I'm not coding",
                hobbies_passion: "passions",
                hobbies_drag: "Drag to explore",
                hobbies: [
                    {
                        id: "climbing",
                        title: "Climbing",
                        subtitle: "Via ferrata · indoor climbing",
                        index: "01",
                        color: "#0077FF",
                        img: "climbing.jpeg",
                        tag: "ADRENALINE",
                    },
                    {
                        id: "running",
                        title: "Running",
                        subtitle: "1x Marathon finnisher and smaller distances for fun",
                        index: "02",
                        color: "#FF4D00",
                        img: "run.jpeg",
                        tag: "DISCIPLINE",
                    },
                    {
                        id: "travel",
                        title: "Travel",
                        subtitle: "Solo · Friends · Family · Meeting new people",
                        index: "03",
                        color: "#00C896",
                        img: "travel.jpeg",
                        tag: "FREEDOM",
                    },
                    {
                        id: "snowboard",
                        title: "Snowboard",
                        subtitle: "Snowboard always gets me in a good mood",
                        index: "04",
                        color: "#0077FF",
                        img: "snow.jpeg",
                        tag: "EVASION",
                    },
                    {
                        id: "wakeboard",
                        title: "Wakeboard",
                        subtitle: "Wakeboard and other watersports for fun",
                        index: "05",
                        color: "#FF4D00",
                        img: "wake.jpeg",
                        tag: "FUN",
                    },
                    {
                        id: "roadtrips",
                        title: "Road Trips",
                        subtitle: "Riding a motorcycle around",
                        index: "06",
                        color: "#FFB800",
                        img: "moto.jpeg",
                        tag: "WANDERLUST",
                    },
                    {
                        id: "motorsports",
                        title: "Motorsports",
                        subtitle: "Trying snowmobiles, rally cars, etc.",
                        index: "07",
                        color: "#0077FF",
                        img: "motorsports.jpeg",
                        tag: "FUN",
                    }
                ]
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