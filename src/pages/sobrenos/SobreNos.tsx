import { useState } from "react"

function About() {
  const desenvolvedoras = [
    {
      id: 1,
      nome: "Ana Lemos",
      foto: "https://i.imgur.com/pSbJzUC.jpeg",
      descricao: "Dev",
      linkedin: "https://www.linkedin.com/in/analemos-3nj0y/",
      github: "https://github.com/carol1692"
    },
    {
      id: 2,
      nome: "Jéssica Tinguely",
      foto: "https://i.imgur.com/89PgWiM.jpeg",
      descricao: "Dev",
      linkedin: "https://www.linkedin.com/in/jessicatinguely/",
      github: "https://github.com/jessicatinguely"
    },
    {
      id: 3,
      nome: "Letícia Campos",
      foto: "https://i.imgur.com/qAHNKrs.jpeg",
      descricao: "QA | Documentação",
      linkedin: "https://www.linkedin.com/in/leticiafccampos/?locale=pt",
      github: "https://github.com/lefcc"
    },
     {
     id: 4,
      nome: "Nádia Caricatto",
      foto: "https://i.imgur.com/PBPngga.jpeg",
      descricao: "Dev",
      linkedin: "https://www.linkedin.com/in/nadiacaricatto/",
      github: "https://github.com/nadiacaricatto"
    },
    {
     id: 5,
      nome: "Thalita Lima",
      foto: "https://i.imgur.com/ONYV61m.jpeg",
      descricao: "Tech Lead",
      linkedin: "https://www.linkedin.com/in/thalita-lima-/",
      github: "https://github.com/Thalima23"
    }
    // Adicione quantas devs forem necessárias
  ]

  return (
    <>
      <div className="bg-violet-700 flex justify-center min-h-screen py-8">
        <div className='container text-white'>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className='text-5xl font-bold mb-4'>
              Sobre Nós
            </h2>
            <p className='text-xl'>
              Conheça as Devas que idealizaram o ShapeFit!
            </p>
          </div>

          {/* Grid de Devasssssssssss */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {desenvolvedoras.map((dev) => (
              <div 
                key={dev.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center gap-4 hover:bg-white/20 transition"
              >
                <img 
                  src={dev.foto}
                  alt={`Foto de ${dev.nome}`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
                <h3 className="text-2xl font-bold">{dev.nome}</h3>
                <p className="text-center text-sm">{dev.descricao}</p>
                
                {/* Links das Gatas */}
                <div className="flex gap-4 mt-2">
                  <a 
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-violet-700 px-4 py-2 rounded-lg font-semibold hover:bg-violet-100 transition"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-violet-700 px-4 py-2 rounded-lg font-semibold hover:bg-violet-100 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About