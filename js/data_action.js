data_action = [
    {
        title: "Attacco",
        icon: "crossed-swords",
        subtitle: "Esegui un attacco in mischia o a distanza.",
        description: "Esegui un attacco in mischia o a distanza.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certe caratteristiche, come <i>Attacco Extra</i> del guerriero, permettono di eseguire più di un singolo attacco con questa azione. Ognuno di questi attacchi ha tiri separati e può colpire creature diverse. Puoi muoverti tra i vari attacchi.",
            "Quando l'attacco viene eseguito con una arma ravvicinita leggera, un azione bonus puà essere usata per attaccare con l'arma nell'altra mano (vedi l'azione bonus <i>Attacco Secondario</i>).",
            "Puoi sostituire uno dei tuoi attacchi melee con una <i>Presa</i> o una <i>Spinta</i>.",
            "Alcune condizioni danno vantaggio all'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, immobilizzati, storditi o incoscienti; attacchi in mischia contro bersagli proni; attacchi da parte di attaccanti invisibili o nascosti.",
            "Alcune condizioni danno svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da parte di attaccanti accecati, spaventati, avvelenati o immobilizzati."
        ]
    },
    {
        title: "Presa",
        icon: "grab",
        subtitle: "Attacco speciale in mischia",
        description: "Tentativo di afferrare una creatura o portarla a terra",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puoi usare un'azione di <i>Attacco</i> per eseguire un'azione speciale in mischia, la <i>Presa</i>. Se sei in grado di eseguire attacchi molteplici utilizzando l'azione di Attacco, la Presa ne rimpiazza uno di essi.",
            "L'obiettivo di una Presa può essere al massimo più grande di una taglia rispetto a colui che la tenta, e deve essere a portata.",
            "Usando almeno una mano libera, cerchi di prendere l'obiettivo facendo un check su Forza (Atletica) contestato da un check di Forza (Atletica) o uno su Destrezza (Acrobazia) (il bersaglio sceglie quello da utilizzare).",
            "Se hai successo, poni il bersaglio nella condizione di preso e la sua velocità diventa 0."
        ]
    },
    {
        title: "Spinta",
        icon: "hand",
        subtitle: "Attacco speciale in mischia",
        description: "Spingi una creature, facendolo cadere a terra o allontanandolo da te.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando l'azione di <i>Attacco</i>, puoi fare un attacco speciale in mischia per spingere una creature. Se sei in grado di fare più attacchi usando una singola azione d'<i>Attacco</i>, questo attacco ne rimpiazza uno di essi.",
            "L'obiettivo della <i>Spinta</i> può essere al massimo più grande di una taglia rispetto a colui che la tenta, e deve essere a portata.",
            "Fai un check su Forza (Atletica) contestato da un check avversario su Forza(Atletica) o uno su Destrezza (Acrobazia) (il bersaglio sceglie quello da utilizzare).",
            "Se il tuo check è superiore, o lo butti a terra o lo spingi di 5 ft."
        ]
    },
    {
        title: "Lancia un Incantesimo",
        icon: "magic-swirl",
        subtitle: "Tempo di lancio di 1 un'azione",
        description: "Lancia un incantesimo il cui tempo di lancio è di 1 azione",
        reference: "PHB, pg. 192.",
        bullets: [
            "Non puoi lanciare un incantesimo con l'<i>Azione</i> e uno diverso con l'<i>Azione Bonus</i>, eccetto se l'<i>Azione</i> è usata per lanciare un Trucchetto.",
            "L'obiettivo dell'incantesimo deve essere entro il raggio dello stesso. Per prendere di mira qualcosa non devi avere nessun ostacolo tra te e quel qualcosa, per questo non può essere dietro <i>Copertura Totale</i>.",
            "Gli incantesimi con componenti materiali non consumano il materiale a meno che non sia esplicitamente detto e, se non detto, puoi assumere che il costo è così basso che non va ad intaccare le scorte nella tua borsa dei componenti.",
            "Alcuni incantesimi ti richiedono di mantenere la <i>Concentrazione</i> per poter mantenere la magia attiva. Se perdi la <i>Concentrazione</i> l'incantesimo finisce. Puoi perdere la <i>Concentrazione</i> per un incantesimo quando ne lanci un altro che richiede anch'esso <i>Concentrazione</i> o quando sei incapacitato. Ogni volta che ricevi del danno devi fare un tiro salvezza su Costituzione per mantenere la <i>Concentrazione</i>. La <i>Classe Difficoltà</i> del tiro è uguale al valore maggiore tra 10 e la metà del danno."
        ]
    },
    {
        title: "Scatto",
        icon: "sprint",
        subtitle: "Raddoppia la tua velocità di movimento.",
        description: "Ottieni del movimento extra per il turno corrente.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Raddoppia la tua velocità, dopo aver applicato i modificatori."
        ]
    },
    {
        title: "Disingaggio",
        icon: "journey",
        subtitle: "Previeni gli attacchi di opportunità.",
        description: "Il tuo movimento non provoca attacchi d'opportunità per il resto del turno.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Schivata",
        icon: "aura",
        subtitle: "Aumenta la difesa",
        description: "Ti concentri completamente per schivare gli attacchi.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Fino all'inizio del prossimo turno, ogni tiro per colpire fatto contro di te è fatto con <i>Svantaggio</i>, se puoi vedere l'attaccante. Inoltre, ogni tiro salvezza fatto con Destrezza viene effettuato con <i>Vantaggio</i>",
            "Perdi i benefici di questa azione se sei <i>incapacitato</i> o i la tua velocità scende a 0."
        ]
    },
    {
        title: "Liberati",
        icon: "manacles",
        subtitle: "Liberati da una presa",
        description: "Cerca di liberarti da una presa.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Per liberarti da una presa devi fare un check su Forza (Atletica) o Destrezza (Acrobazia) contestato da un check su Forza (Atletica) di chi effettua la presa.",
            "Liberarti da altre condizioni che contengono il tuo movimento (come ad esempio delle catene) può richiedere un check su Destrezza o Forza."
        ]
    },
    {
        title: "Aiuta",
        icon: "telepathy",
        subtitle: "Garantisce vantaggio limitato ad un alleato.",
        description: "Garantisce vantaggio limitato ad un alleato.",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'obiettivo ottiene <i>vantaggio</i> sul prossimo check che fa per eseguire un'azione con il tuo aiuto.",
            "Alternativamente, l'obiettivo ottiene vantaggio nel prossimo tiro per colpire fatto contro una creature a 5 ft da te.",
            "Il <i> vantaggio </i> garantito in questo modo permane fino all'inizio del prossimo turno."
        ]
    },
    {
        title: "Usa Oggetto",
        icon: "snatch",
        subtitle: "Interagisci, usa abilità speciali.",
        description: "Interagisci con un secondo oggetto o usa l'abilità speciale di un secondo oggetto.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Puoi interagire con un oggetto utilizzando un'<i>Azione Libera</i> durante il tuo turno (come sfoderare un'arma o aprire una porta). Se vuoi interagire con un secondo oggetto usa questa <i>azione</i>.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
