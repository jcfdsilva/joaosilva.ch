export const pt =  {
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
                        background: "pinch.png",
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
                        background: "citiwatts.png",
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
                hobbies_title: "Hobbies",
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