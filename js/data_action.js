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
            "Quando un oggetto richiede un'<i>Azione</i> per essere utilizzato, usa questa azione."
        ]
    },
    // {
    //     title: "Use shield",
    //     icon: "round-shield",
    //     subtitle: "Equip or unequip a shield",
    //     description: "Equip or unequip a shield",
    //     reference: "PHB, pgs. 144-146.",
    //     bullets: [
    //         "A shield always takes an action to equip or unequip.",
    //         "Armor takes several minutes to equip or unequip."
    //     ]
    // },
    {
        title: "Nasconditi",
        icon: "hood",
        subtitle: "",
        description: "Tenta di nasconderti",
        reference: "PHB, pg. 192.",
        bullets: [
            "Non puoi nasconderti da una creatura che può vederti.",
            "Per fare questa azione devi avere una delle seguenti condizioni: una copertura totale, un'area completamente oscurata, essere invisibile o comunque non essere visibile al nemico.",
            "Se fai del rumore (come avvisare qualcuno gridando o facendo cadere un vaso), ti farai scoprire.",
            "Quando cerchi di nasconderti, fai un check su Destrezza (Furtività) a annotati il risultato. Fino a quando sei scoperto o smetti di nasconderti, il totale di quel check è contestato da Saggezza (Percezione) di qualunque creatore che cerca attivamente la tua presenza.",
            "Una creatura ti nota anche se non ti sta cercando a meno che il tuo check di Furtività non supera la sua Percezione Passiva.",
            "Fuori dal combattimento, puoi anche usare un check su Destrezza (Furtività) per azioni come nasconderti da dei nemici, superare delle guardie senza farti notare, andare via senza farti notare o avvicinarti furtivamente a qualcuno senza essere visto o sentito."
        ]
    },
    {
        title: "Cercare",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedica la tua attenzione a cercare qualcosa.",
        reference: "PHB, pg. 193.",
        bullets: [
            "In base a quello che stai cercando, il DM potrebbe chiederti di fare un check su Saggezza (Percezione) o Intelligenza (Indagare)."
        ]
    },
    {
        title: "Prepararsi",
        icon: "stopwatch",
        subtitle: "Scegli di scatenare un'azione",
        description: "Scegli una causa scatenante e un'azione di risposta",
        reference: "PHB, pg. 193.",
        bullets: [
            "Prima devi decidere che circostanza percepibile scatenerà la tua reazione.",
            "Poi devi scegliere l'azione che eseguirai in risposta alla causa scatenante o, in alternativa, di muoverti di un valore uguale alla tua velocità.",
            "Quando l'evento scatenante si verifica puoi decidere di eseguire la tua reazione subito o ignorarlo.",
            "Quando prepari un incantesimo, lo puoi lanciare normalmente ma conservare la tua energia, che verrà rilasciata nel momento in cui accade l'evento. Un incantesimo, per essere preparato, deve avere un tempo di lancio di 1 <i>Azione</i> e mantenere la magia in attesa dell'evento richiede concentrazione."
        ]
    },
    {
        title: "Usa una caratteristica della classe o della razza",
        icon: "embrassed-energy",
        subtitle: "Alcune caratteristiche usano un'<i>azione</i>",
        description: "Usa una caratteristiche della classe o della razza che usa un'<i>azione</i> per essere eseguita.",
        reference: "Vedi le pagine relative alla classe/razza per più informazioni.",
        bullets: [

        ]
    },
    {
        title: "Stabilizza una creatura.",
        icon: "first-aid",
        subtitle: "Amministra il primo soccorso ad una creatura morente.",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Fai un check su Saggezza (Medicina) con CD 10",
            "Se hai successo, la creatura è stabile e non ha più bisogno di fare dei tiri salvezza per evitare la morte.",
            "Una creatura stabilizzata rigenera 1 punto salute dopo 1d4 ore."
        ]
    },
    {
        title: "Improvvisazione",
        icon: "juggler",
        subtitle: "Una qualunque azione non presente in lista.",
        description: "Fai una qualunque azione che puoi immaginare.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quando descrivi un'<i>azione</i> non descritta da nessun'altra parte nelle regole, il DM ti dirà se è essa è possibile o meno e che tipo di tiro dovrai fare, se devi farlo, per determinarne il successo o fallimento."
        ]
    }
]
